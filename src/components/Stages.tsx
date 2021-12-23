import { CalendarIcon } from "@heroicons/react/outline";
import React from "react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <div className="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
        <div>
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
            Take part in the voting process
          </h2>
          <p className="mt-3 text-xl text-gray-500 sm:mt-4">
            You can decide the future of the tokenomics and{" "}
            <span className="underline">earn free $PEG.</span>
          </p>
          <a
            href="#guide"
            className="max-w-prose mx-auto text-base text-cyan-500 mb-8 underline"
          >
            How do I participate?
          </a>
        </div>
        <div className="mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
          <div>
            <div className="flex items-center">
              <a className="inline-block ">
                <span
                  className={classNames(
                    "bg-green-100 text-green-800",
                    "inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium"
                  )}
                >
                  Stage 1
                </span>
              </a>
              <p className="text-sm itatlic text-gray-500 flex ml-2">
                24th Dec - 1st Jan
              </p>
            </div>
            <a className="block mt-4">
              <p className="text-xl font-semibold text-gray-900">
                Voting opens
              </p>
              <p className="mt-3 text-base text-gray-500">
                Each hodler can cast their vote below and receive a{" "}
                <span className="text-cyan-600 font-bold underline">0.5%</span>{" "}
                bonus on top of their current holdings. The bonus is locked
                until the end of the voting period. The voting period lasts for
                one week and you can only vote once per account.
              </p>
            </a>
          </div>
          <div>
            <div className="flex items-center">
              <a className="inline-block ">
                <span
                  className={classNames(
                    "bg-indigo-100 text-indigo-800",
                    "inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium"
                  )}
                >
                  Stage 2
                </span>
              </a>
              <p className="text-sm itatlic text-gray-500 flex ml-2">
                1st Jan - 24th Jan
              </p>
            </div>
            <a className="block mt-4">
              <p className="text-xl font-semibold text-gray-900">
                Settlement Period
              </p>
              <p className="mt-3 text-base text-gray-500">
                During the settlement period no more votes can be cast. This
                gives the community time to adjust and prepare for the upcoming
                change in tokenomics.
              </p>
            </a>
          </div>
          <div>
            <div className="flex items-center">
              <a className="inline-block ">
                <span
                  className={classNames(
                    "bg-green-100 text-green-800",
                    "inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium"
                  )}
                >
                  Stage 3
                </span>
              </a>
              <p className="text-sm itatlic text-gray-500 flex ml-2">
                24th Jan
              </p>
            </div>
            <a className="block mt-4">
              <p className="text-xl font-semibold text-gray-900">
                Tokenomics updated
              </p>
              <p className="mt-3 text-base text-gray-500">
                Votes are calculated and the burn, tax and interest rates are{" "}
                <b>automatically</b> updated. A new voting period begins on the
                same day that the previous period ends.
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
