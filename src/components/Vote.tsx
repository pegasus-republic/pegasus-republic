/* This example requires Tailwind CSS v2.0+ */
import React, { useEffect, useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/solid";
import {
  ExclamationCircleIcon,
  LockClosedIcon,
} from "@heroicons/react/outline";
import { getTLV, connectWeb3, vote } from "../api/Polygon";

const reflectionOptions: Option[] = [
  {
    title: "Decrease reflection",
    percent: "2%",
  },
  {
    title: "Maintain reflection",
    percent: "3%",
  },
  {
    title: "Increase reflection",
    percent: "4%",
  },
];

const liqudityOptions: Option[] = [
  {
    title: "Decrease LP",
    percent: "4%",
  },
  {
    title: "Maintain LP",
    percent: "5%",
  },
  {
    title: "Increase LP",
    percent: "6%",
  },
];

const burnOptions: Option[] = [
  {
    title: "Decrease Burn",
    percent: "1%",
  },
  {
    title: "Maintain Burn",
    percent: "3%",
  },
  {
    title: "Increase Burn",
    percent: "4%",
  },
];

const interestOptions: Option[] = [
  {
    title: "Decrease Interest",
    percent: "0.4%",
  },
  {
    title: "Maintain Interest",
    percent: "0.5%",
  },
  {
    title: "Increase Interest",
    percent: "0.6%",
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

type Option = {
  title: string;
  percent: string;
};

interface VoteProps {
  options: Option[];
  selected: Option;
  select: (option: Option) => void;
}
export const Vote: React.FC<VoteProps> = ({ options, selected, select }) => {
  return (
    <>
      <RadioGroup value={selected} onChange={select}>
        <div className="mt-4 grid grid-cols-3 gap-y-6 sm:grid-cols-3 gap-x-4">
          {options.map((option) => (
            <RadioGroup.Option
              key={option.title}
              value={option}
              className={({ checked, active }) =>
                classNames(
                  checked ? "border-transparent" : "border-gray-300",
                  active ? "ring-2 ring-indigo-500" : "",
                  "relative bg-white border rounded-lg shadow-sm p-4 flex cursor-pointer focus:outline-none"
                )
              }
            >
              {({ checked, active }) => (
                <>
                  <div className="flex-1 flex items-center flex-col sm:flex-row">
                    <RadioGroup.Label
                      as="span"
                      className="block text-sm font-medium text-gray-900 text-left"
                      style={{ wordSpacing: "40rem" }}
                    >
                      {option.title}
                    </RadioGroup.Label>

                    <RadioGroup.Description
                      as="span"
                      className="ml-2 text-2xl font-medium text-gray-900"
                    >
                      {option.percent}
                    </RadioGroup.Description>
                  </div>
                  <CheckCircleIcon
                    className={classNames(
                      !checked ? "invisible" : "",
                      "h-5 w-5 text-indigo-600"
                    )}
                    aria-hidden="true"
                  />
                  <div
                    className={classNames(
                      active ? "border" : "border-2",
                      checked ? "border-indigo-500" : "border-transparent",
                      "absolute -inset-px rounded-lg pointer-events-none"
                    )}
                    aria-hidden="true"
                  />
                </>
              )}
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
    </>
  );
};

export default function Proposal() {
  const [reflectionVote, setReflectionVote] = useState(reflectionOptions[1]);
  const [burnVote, setBurnVote] = useState(burnOptions[1]);
  const [interestVote, setInterestVote] = useState(interestOptions[1]);
  const [liqudityFeeVote, setLiqudityFeeVote] = useState(liqudityOptions[1]);
  const [isVoting, setIsVoting] = useState(false);
  const [amount, setAmount] = useState(100000000);

  const [hasWeb3, setHasWeb3] = useState(false);
  const [hasVoted, setHasVoted] = useState(false);

  const interest = 1.05;

  const connect = async () => {
    const web3 = await connectWeb3();
    console.log({ web3 });
    setHasWeb3(!!web3);

    const tlv = await getTLV();
    console.log({ tlv });
  };

  const submit = async () => {
    setIsVoting(true);
    await vote();
    setHasVoted(true);
    setIsVoting(false);
  };

  return (
    <>
      {/* Feature section with grid */}
      <div className="relative bg-white pb-16 sm:pb-24">
        <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-3xl">
          <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            Voting is Open
          </p>
          <p className="mt-2 text-xl font-medium text-gray-400 tracking-tight sm:text-2xl">
            23rd Nov - 30th Nov
          </p>
          <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
            Every 4 weeks holders have the chance to vote on a new proposal to
            change the functioning tokenomics. Earn{" "}
            <b className="text-gray-900 underline">0.6%</b> interest on your
            staked tokens by taking part in the governing process.
          </p>
          <Vote
            options={reflectionOptions}
            selected={reflectionVote}
            select={setReflectionVote}
          />
          <Vote
            options={burnOptions}
            selected={burnVote}
            select={setBurnVote}
          />
          <Vote
            options={interestOptions}
            selected={interestVote}
            select={setInterestVote}
          />
          <Vote
            options={liqudityOptions}
            selected={liqudityFeeVote}
            select={setLiqudityFeeVote}
          />

          <div className="mt-4">
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-500 sm:text-sm">$</span>
              </div>
              <input
                type="number"
                name="price"
                id="price"
                className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-2xl border-gray-300 rounded-md"
                placeholder="0.00"
                aria-describedby="price-currency"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <span className="text-gray-500 sm:text-sm" id="price-currency">
                  AP
                </span>
              </div>
            </div>

            <div className="rounded-md bg-yellow-50 p-4  mt-2">
              <div className="flex">
                <div className="flex-shrink-0">
                  <ExclamationCircleIcon
                    className="h-5 w-5 text-yellow-400"
                    aria-hidden="true"
                  />
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-yellow-800">
                    Funds will be locked until 23rd December.
                  </h3>
                  <div className="mt-2 text-sm text-yellow-700">
                    <p>
                      Your tokens will be staked until the end of the proposal
                      period and cannot be withdrawn until then. You will earn{" "}
                      <b className="underline">${amount * interest}</b> for your
                      staked amount. You can only vote once per proposal period.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {!hasWeb3 ? (
              <>
                <button
                  type="button"
                  onClick={connect}
                  className="block flex items-center justify-center mt-2 w-full py-3 px-4 rounded-md shadow bg-gradient-to-r disabled:opacity-50 from-teal-500 to-cyan-600 text-white font-medium hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900"
                >
                  Connect to Metamask and Vote
                </button>
                <div className="flex mt-1">
                  <LockClosedIcon
                    className="h-5 w-5 text-gray-400 mr-2"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-gray-500">
                    Not connected to Polygon Network
                  </span>
                </div>
              </>
            ) : hasVoted ? (
              <div className="block flex items-center justify-center mt-4">
                <CheckCircleIcon className="h-5 w-5 text-cyan-500" />
                <span className="text-xl text-cyan-500">
                  Vote successfully submitted
                </span>
              </div>
            ) : (
              <>
                <button
                  type="button"
                  disabled={!hasWeb3 || isVoting}
                  onClick={submit}
                  className="block flex items-center justify-center mt-2 w-full py-3 px-4 rounded-md shadow bg-gradient-to-r disabled:opacity-50 from-teal-500 to-cyan-600 text-white font-medium hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900"
                >
                  Stake and Vote
                  {isVoting && (
                    <svg
                      className="animate-spin mr-3 h-5 w-5 text-white ml-4"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        stroke-width="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  )}
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
