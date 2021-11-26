import Web3 from "web3/dist/web3.min.js";
import abi from "./ABI.json";

const BOB_HORSEMAN = "0xdF7F9c7913cdC6253b3138f2c289014169E314dF";
const ADDRESS = "0x06872971938462D0b206D01fe98eCc3E73798b89";

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
export async function getWeb3() {
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

export async function balance() {
  const web3 = await getWeb3();

  if (!web3) {
    return 0;
  }

  const accounts = await web3.eth.getAccounts();
  const account = accounts[0];
  const contract = new web3.eth.Contract(abi as any, ADDRESS);

  return contract.methods.balanceOf(account).call();
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

  const amount = await contract.methods.getStakedAmount(account).call();
  console.log({ amount });
  return Number(amount);
}

export type Option = {
  title: string;
  percent: string;
  voteIndex: number;
  type: "decrease" | "maintain" | "increase";
  votedPercentage?: number;
};

interface VoteOptions {
  amount: number;
  options: Votes;
}

export type Votes = {
  increaseTax: number | string;
  maintainTax: number | string;
  decreaseTax: number | string;
  increaseBurn: number | string;
  maintainBurn: number | string;
  decreaseBurn: number | string;
  increaseInterest: number | string;
  maintainInterest: number | string;
  decreaseInterest: number | string;
};

export async function vote({ amount, options }: VoteOptions) {
  const web3 = await getWeb3();
  if (!web3) {
    return false;
  }

  const accounts = await web3.eth.getAccounts();
  const account = accounts[0];
  const contract = new web3.eth.Contract(abi as any, ADDRESS);

  console.log({ options });
  return new Promise((resolve, reject) => {
    contract.methods
      .castVote(options)
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
