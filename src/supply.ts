import Web3 from "web3/dist/web3.min.js";
import abi from "../public/ABI.json";

// https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
function numberWithCommas(x: number) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export async function loadSupply() {
  console.log("Load it");
  const alchemy = new Web3(
    "https://polygon-mainnet.g.alchemy.com/v2/XuJyQ4q2Ay1Ju1I7fl4e_2xi_G2CmX-L"
  );

  const alchemyToken = new alchemy.eth.Contract(
    abi as any,
    "0xdf9B4b57865B403e08c85568442f95c26b7896b0"
  );

  const totalSupply = await alchemyToken.methods.totalSupply().call();
  const amount = numberWithCommas(
    Math.floor(alchemy.utils.fromWei(totalSupply))
  );
  console.log({ amount });

  const element = document.getElementById("total-supply");
  if (element) {
    element.innerHTML = amount.toString();
  }
}

loadSupply();
