import Web3 from "web3/dist/web3.min.js";
import abi from "./ABI.json";

const initialiseWeb3 = async () => {
  if ((window as any).ethereum) {
    try {
      // Request account access if needed
      await (window as any).ethereum.enable();
      return new Web3((window as any).ethereum);
    } catch (error) {
      // User denied account access...
      console.error(error);
    }
  } else if ((window as any).web3) {
    return new Web3((window as any).web3.currentProvider);
  }

  return null;
};

let web3: Web3 | null;
async function getWeb3() {
  if (!web3) {
    web3 = await initialiseWeb3();
  }

  return web3;
}

export async function connectWeb3() {
  const web3 = await getWeb3();

  if (!web3) {
    return false;
  }

  try {
    new web3.eth.Contract(
      abi as any,
      "0xeAbE4cCdACe04B14D9DaBD46c079aDecD5562950"
    );
    return true;
  } catch (e) {
    console.log({ e });
    return false;
  }
}

export async function getTLV() {
  const web3 = await getWeb3();

  if (!web3) {
    return 0;
  }

  const accounts = await web3.eth.getAccounts();
  const account = accounts[0];
  const contract = new web3.eth.Contract(
    abi as any,
    "0xeAbE4cCdACe04B14D9DaBD46c079aDecD5562950"
  );

  return contract.methods.getTotalLockedValue().call();
}

export async function getCurrentProposal() {
  const web3 = await getWeb3();
  if (!web3) {
    return null;
  }

  const accounts = await web3.eth.getAccounts();
  const account = accounts[0];
  const contract = new web3.eth.Contract(
    abi as any,
    "0xeAbE4cCdACe04B14D9DaBD46c079aDecD5562950"
  );

  return contract.methods.getCurrentProposal().call();
}

export async function getProposalTime() {
  const web3 = await getWeb3();
  if (!web3) {
    return 0;
  }
  const accounts = await web3.eth.getAccounts();
  const account = accounts[0];
  const contract = new web3.eth.Contract(
    abi as any,
    "0xeAbE4cCdACe04B14D9DaBD46c079aDecD5562950"
  );

  return contract.methods.getTotalLockedValue().call();
}

export type Option = {
  title: string;
  percent: string;
  voteIndex: number;
};

interface VoteOptions {
  amount: number;
  options: Option[];
}
export async function vote({ amount, options }: VoteOptions) {
  const web3 = await getWeb3();
  if (!web3) {
    return false;
  }

  const accounts = await web3.eth.getAccounts();
  const account = accounts[0];
  const contract = new web3.eth.Contract(
    abi as any,
    "0xeAbE4cCdACe04B14D9DaBD46c079aDecD5562950"
  );

  let votes = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  //const wei = Number(web3.utils.toWei(String(amount), "ether"));
  const amountForEachOption = amount / options.length;

  options.forEach((option) => {
    votes[option.voteIndex] = amountForEachOption;
  });
  console.log({ votes });
  console.log({ amountForEachOption });

  return new Promise((resolve, reject) => {
    contract.methods
      .castVote(votes)
      .send({ from: account })
      .on("error", function (error: Error) {
        console.log({ error });

        reject(error);
      })
      .on("transactionHash", function (transactionHash: any) {
        console.log({ transactionHash });
      })
      .on("receipt", function (receipt: any) {
        console.log({ receipt });
        resolve(receipt);
      });
  });
}
