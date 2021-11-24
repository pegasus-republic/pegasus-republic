import Web3 from "web3/dist/web3.min.js";
import abi from "./ABI.json";

const BOB_HORSEMAN = "0xdF7F9c7913cdC6253b3138f2c289014169E314dF";
const ADDRESS = "0x4E07b77Dc6935C32fE9bc5B0A378b747D586E0cE";

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
    new web3.eth.Contract(abi as any, ADDRESS);
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
  const contract = new web3.eth.Contract(abi as any, ADDRESS);

  return contract.methods.getTotalLockedValue().call();
}

export async function getCurrentProposal() {
  const web3 = await getWeb3();
  if (!web3) {
    return null;
  }

  const accounts = await web3.eth.getAccounts();
  const account = accounts[0];
  const contract = new web3.eth.Contract(abi as any, ADDRESS);

  return contract.methods.getCurrentProposal().call();
}

export async function getProposalTime() {
  const web3 = await getWeb3();
  if (!web3) {
    return 0;
  }
  const accounts = await web3.eth.getAccounts();
  const account = accounts[0];
  const contract = new web3.eth.Contract(abi as any, ADDRESS);

  return contract.methods.getTotalLockedValue().call();
}

export async function getStakedAmount() {
  const web3 = await getWeb3();
  if (!web3) {
    return 0;
  }
  const accounts = await web3.eth.getAccounts();
  const account = accounts[0];
  const contract = new web3.eth.Contract(abi as any, ADDRESS);

  return contract.methods.stakedAmount().call();
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
  const contract = new web3.eth.Contract(abi as any, ADDRESS);

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
