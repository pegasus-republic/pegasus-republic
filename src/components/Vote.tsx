/* This example requires Tailwind CSS v2.0+ */
import React, { useEffect, useState } from "react";
import { RadioGroup } from "@headlessui/react";
import BigNumber from "bignumber.js";
import { CheckCircleIcon } from "@heroicons/react/solid";
import {
  ExclamationCircleIcon,
  LockClosedIcon,
  XCircleIcon,
} from "@heroicons/react/outline";
import {
  getTLV,
  connectWeb3,
  vote,
  Option,
  getCurrentProposal,
  getStakedAmount,
  balance,
  Votes,
  getWeb3,
} from "../api/Polygon";

const reflectionOptions: Option[] = [
  {
    title: "Decrease reflection",
    percent: "2%",
    voteIndex: 2,
    type: "decrease",
  },
  {
    title: "Maintain reflection",
    percent: "3%",
    voteIndex: 1,
    type: "maintain",
  },
  {
    title: "Increase reflection",
    percent: "4%",
    voteIndex: 0,
    type: "increase",
  },
];

const burnOptions: Option[] = [
  {
    title: "Decrease Burn",
    percent: "2%",
    voteIndex: 5,
    type: "decrease",
  },
  {
    title: "Maintain Burn",
    percent: "3%",
    voteIndex: 4,
    type: "maintain",
  },
  {
    title: "Increase Burn",
    percent: "4%",
    voteIndex: 3,
    type: "increase",
  },
];

const interestOptions: Option[] = [
  {
    title: "Decrease Interest",
    percent: "0.4%",
    voteIndex: 8,
    type: "decrease",
  },
  {
    title: "Maintain Interest",
    percent: "0.5%",
    voteIndex: 7,
    type: "maintain",
  },
  {
    title: "Increase Interest",
    percent: "0.6%",
    voteIndex: 6,
    type: "increase",
  },
];

const date = new Date();

// TODO automate in future
const isOpen = date > new Date("2021-12-23") && date < new Date("2022-01-01");

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

// Results from November election
const NOVEMBER_RESULTS: Votes = {
  decreaseBurn: "100",
  decreaseInterest: "6669459330460903950100",
  decreaseTax: "22153436151140097550100",
  increaseBurn: "71523181634717292077459",
  increaseInterest: "36479063547493377027459",
  increaseTax: "13209835624646886427459",
  maintainBurn: "15777119693971423551529",
  maintainInterest: "44151778468734434651529",
  maintainTax: "51937029552901731651529",
};

const NOVEMBER_VOTED_AMOUNT = 261900904004066146887264;
interface VoteProps {
  options: Option[];
  selected: Option;
  select: (option: Option) => void;
  isDisabled: boolean;
  votePercentage?: number;
}
export const Vote: React.FC<VoteProps> = ({
  options,
  selected,
  select,
  isDisabled,
}) => {
  const value = options.find((option) => option.type === selected.type);
  return (
    <>
      <RadioGroup value={value} onChange={isDisabled ? () => {} : select}>
        <div
          className={classNames(
            "mt-4 grid grid-cols-3 gap-y-6 sm:grid-cols-3 gap-x-4",
            isDisabled ? "cursor-not-allowed" : "cursor-pointer"
          )}
        >
          {options.map((option) => (
            <RadioGroup.Option
              key={option.title}
              value={option}
              className={({ checked, active }) =>
                classNames(
                  checked ? "border-transparent" : "border-gray-300",
                  active ? "ring-2 ring-cyan-500" : "",
                  "relative bg-white border rounded-lg shadow-sm p-4 flex  focus:outline-none"
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
                      "h-5 w-5 text-cyan-600"
                    )}
                    aria-hidden="true"
                  />
                  <div
                    className={classNames(
                      active ? "border" : "border-2",
                      checked ? "border-cyan-500" : "border-transparent",
                      "absolute -inset-px rounded-lg pointer-events-none"
                    )}
                    aria-hidden="true"
                  />
                  <span className="text-cyan-700 text-xs font-bold overflow-visible absolute bottom-0">
                    {option.votedPercentage
                      ? `${option.votedPercentage.toFixed(2)}%`
                      : "33%"}
                  </span>
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
  const [burnVote, setBurnVote] = useState(burnOptions[2]);
  const [interestVote, setInterestVote] = useState(interestOptions[1]);
  const [isVoting, setIsVoting] = useState(false);
  const [amount, setAmount] = useState<number | null>(null);
  const [myBalance, setBalance] = useState(0);

  const [hasWeb3, setHasWeb3] = useState(false);
  const [hasVoted, setHasVoted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Array of 9 votes
  const [currentProposal, setCurrentProposal] = useState<Votes | null>(
    NOVEMBER_RESULTS
  );
  const [totalValueLocked, setTotalValueLocked] = useState(
    NOVEMBER_VOTED_AMOUNT
  );

  const interest = 0.05;

  const connect = async () => {
    const web3 = await connectWeb3();
    console.log({ web3 });
    setHasWeb3(!!web3);

    const tlv = await getTLV();
    const currentProposal = await getCurrentProposal();
    console.log({ currentProposal });
    setCurrentProposal(currentProposal);
    console.log({ tlv });
    setTotalValueLocked(tlv);

    const myBalance = await balance();
    setAmount(myBalance);
    console.log({ myBalance });
    setBalance(myBalance);
    const stakedAmount = await getStakedAmount();
    if (stakedAmount) {
      setHasVoted(!!stakedAmount);
      setAmount(stakedAmount);
    }
  };

  const submit = async () => {
    setIsVoting(true);

    // Can't submit full amount or contract complains
    const validAmount = amount as number;

    // Don't send 100% since JS precision might go off and go over a users balance
    const amountForEachOption = Math.floor(
      (validAmount / 3) * 0.99
    ).toLocaleString("fullwide", {
      useGrouping: false,
    });

    try {
      await vote({
        amount: amount as number,
        options: {
          increaseTax:
            reflectionVote.type === "increase" ? amountForEachOption : 0,
          maintainTax:
            reflectionVote.type === "maintain" ? amountForEachOption : 0,
          decreaseTax:
            reflectionVote.type === "decrease" ? amountForEachOption : 0,
          increaseBurn: burnVote.type === "increase" ? amountForEachOption : 0,
          maintainBurn: burnVote.type === "maintain" ? amountForEachOption : 0,
          decreaseBurn: burnVote.type === "decrease" ? amountForEachOption : 0,
          increaseInterest:
            interestVote.type === "increase" ? amountForEachOption : 0,
          maintainInterest:
            interestVote.type === "maintain" ? amountForEachOption : 0,
          decreaseInterest:
            interestVote.type === "decrease" ? amountForEachOption : 0,
        },
      });
      setHasVoted(true);
    } catch (e: any) {
      if (e.message.includes("User denied transaction signature")) {
        return;
      }
      setError("Something went wrong");
    } finally {
      setIsVoting(false);
    }
  };

  const totalPerCategory = totalValueLocked / 3;

  console.log({ currentProposal });
  const updatedReflectionOptions: Option[] = !currentProposal
    ? reflectionOptions
    : [
        {
          ...reflectionOptions[0],
          votedPercentage:
            (Number(currentProposal.decreaseTax) / totalPerCategory) * 100,
        },
        {
          ...reflectionOptions[1],
          votedPercentage:
            (Number(currentProposal.maintainTax) / totalPerCategory) * 100,
        },
        {
          ...reflectionOptions[2],
          votedPercentage:
            (Number(currentProposal.increaseTax) / totalPerCategory) * 100,
        },
      ];

  const updatedBurnOptions: Option[] = !currentProposal
    ? burnOptions
    : [
        {
          ...burnOptions[0],
          votedPercentage:
            (Number(currentProposal.decreaseBurn) / totalPerCategory) * 100,
        },
        {
          ...burnOptions[1],
          votedPercentage:
            (Number(currentProposal.maintainBurn) / totalPerCategory) * 100,
        },
        {
          ...burnOptions[2],
          votedPercentage:
            (Number(currentProposal.increaseBurn) / totalPerCategory) * 100,
        },
      ];

  const updatedInterestOptions: Option[] = !currentProposal
    ? interestOptions
    : [
        {
          ...interestOptions[0],
          votedPercentage:
            (Number(currentProposal.decreaseInterest) / totalPerCategory) * 100,
        },
        {
          ...interestOptions[1],
          votedPercentage:
            (Number(currentProposal.maintainInterest) / totalPerCategory) * 100,
        },
        {
          ...interestOptions[2],
          votedPercentage:
            (Number(currentProposal.increaseInterest) / totalPerCategory) * 100,
        },
      ];

  console.log({ reflectionVote });

  return (
    <>
      {/* Feature section with grid */}
      <div className="relative bg-white pb-16 sm:pb-24" id="vote">
        <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-3xl">
          {isOpen ? (
            <>
              <p className="mt-2 text-2xl font-extrabold text-gray-900 leading-10  tracking-tight sm:text-2xl">
                Voting is currently{" "}
                <span className="bg-green-100 text-green-800 p-2 rounded-md">
                  open
                </span>
              </p>
              <p className="text-lg  text-gray-500">
                Cast your vote below by selecting{" "}
                <span className="underline">3 options</span> below
              </p>
              {!hasWeb3 && (
                <>
                  <button
                    type="button"
                    onClick={connect}
                    className="block flex items-center justify-center mt-4 w-full py-3 px-4 rounded-md shadow bg-gradient-to-r disabled:opacity-50 from-teal-500 to-cyan-600 text-white font-medium hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900"
                  >
                    Connect to BSC to Vote
                  </button>
                </>
              )}
            </>
          ) : (
            <>
              <p className="mt-2 text-2xl font-extrabold text-gray-900 tracking-tight sm:text-2xl">
                Voting is closed while in the{" "}
                <span className="bg-indigo-100 text-indigo-800 p-2 rounded-md leading-10 ">
                  settlement period
                </span>
                <LockClosedIcon className="inline-block w-6 h-6 mx-2 text-gray-700" />
              </p>
              <p className="text-lg  text-gray-500">
                Next voting period begins on the 24th of January
              </p>
            </>
          )}

          <Vote
            options={updatedReflectionOptions}
            selected={reflectionVote}
            select={setReflectionVote}
            isDisabled={!hasWeb3}
          />
          <Vote
            options={updatedBurnOptions}
            selected={burnVote}
            select={setBurnVote}
            isDisabled={!hasWeb3}
          />
          <Vote
            options={updatedInterestOptions}
            selected={interestVote}
            select={setInterestVote}
            isDisabled={!hasWeb3}
          />

          <div className="mt-4">
            {!hasVoted && (
              <>
                {hasWeb3 && myBalance === 0 && (
                  <span className="text-red-500 text-sm">
                    You don't have any $PEG
                  </span>
                )}
                <span></span>

                <div className="rounded-md bg-green-50 p-4  mt-2 overflow-y-hidden">
                  <div className="flex">
                    <div className="flex-shrink-0 flex">
                      <CheckCircleIcon
                        className="h-5 w-5 text-green-400"
                        aria-hidden="true"
                      />

                      <div className="text-sm text-green-700 ml-4">
                        <p>
                          You will earn a bonus{" "}
                          <b className="underline">
                            {amount
                              ? (amount * interest).toLocaleString("fullwide", {
                                  useGrouping: false,
                                })
                              : "?"}
                            {} $PEG
                          </b>{" "}
                          for taking part in the voting process
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
            {hasVoted ? (
              <div className="rounded-md bg-green-50 p-4  mt-4">
                <div className="flex">
                  <div className="flex-shrink-0 flex">
                    <CheckCircleIcon
                      className="h-5 w-5 text-green-400"
                      aria-hidden="true"
                    />

                    <div className="text-sm text-green-700 ml-4">
                      <p>
                        Vote successfully submitted. Your bonus will appear in
                        your wallet
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <button
                  type="button"
                  disabled={!hasWeb3 || isVoting}
                  onClick={submit}
                  className="block flex items-center justify-center mt-2 w-full py-3 px-4 rounded-md shadow bg-gradient-to-r disabled:opacity-50 from-teal-500 to-cyan-600 text-white font-medium hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900"
                >
                  Vote & Claim 0.5% bonus
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
            {!hasWeb3 && (
              <div className="flex mt-1">
                <LockClosedIcon
                  className="h-5 w-5 text-gray-400 mr-2"
                  aria-hidden="true"
                />
                <span className="text-sm text-gray-500">
                  Not connected to Binance Smart Chain Network
                </span>
              </div>
            )}
            {error && (
              <div className="rounded-md bg-red-50 p-4 mt-2">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <XCircleIcon
                      className="h-5 w-5 text-red-400"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-red-800">
                      {error}
                    </h3>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
