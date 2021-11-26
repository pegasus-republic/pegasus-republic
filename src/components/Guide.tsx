import React from "react";
import {
  AnnotationIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  MailIcon,
  ScaleIcon,
} from "@heroicons/react/outline";

import tokenImport from "../assets/token_import.png";

export const Guide: React.FC = () => {
  return (
    <div className="py-16 bg-gray-50 overflow-hidden lg:py-24" id="guide">
      <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
        <svg
          className="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width={404}
            height={784}
            fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)"
          />
        </svg>

        <div className="relative">
          <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            How to get started?
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">
            In order to join the community and become involved in the voting
            process you must have the $PEG token and also are web wallet
            connected to the Binance Smart chain.
          </p>
        </div>

        <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="relative">
            <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
              Where to find $PEG?
            </h3>
            <p className="mt-3 text-lg text-gray-500">
              The Pegasus Republic token $PEG can be found on a range of
              Decentralised exchanges. The easiest way to find $PEG is via
              Pancake swap.
            </p>

            <p className="mt-3 text-lg text-gray-500">
              On pancake swap use the following address to swap $PEG:
              0x06872971938462D0b206D01fe98eCc3E73798b89
            </p>
          </div>

          <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
            <svg
              className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
              width={784}
              height={404}
              fill="none"
              viewBox="0 0 784 404"
            >
              <defs>
                <pattern
                  id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={784}
                height={404}
                fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)"
              />
            </svg>

            <iframe
              className="relative mx-auto"
              width={490}
              height={300}
              src="https://www.youtube.com/embed/KpF41eS3YZQ"
            ></iframe>
          </div>
        </div>

        <svg
          className="hidden lg:block absolute right-full transform translate-x-1/2 translate-y-12"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width={404}
            height={784}
            fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
          />
        </svg>

        <div className="relative mt-12 sm:mt-16 lg:mt-24">
          <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="lg:col-start-2">
              <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                How to view the $PEG token in my wallet?
              </h3>
              <p className="mt-3 text-lg text-gray-500">
                Once you have swapped some $PEG to your wallet you can view your
                balance by updating your wallet settings. For this example we
                use Metamask but you can follow similar steps for TrustWallet as
                well
              </p>

              <dl className="mt-10 space-y-10">
                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-cyan-500 text-white">
                      1.
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                      Add Binance Smart Chain network to your wallet.
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    <a
                      href="https://academy.binance.com/en/articles/connecting-metamask-to-binance-smart-chain"
                      className="underline text-cyan-500"
                    >
                      View the guide
                    </a>
                  </dd>
                </div>
              </dl>

              <dl className="mt-10 space-y-10">
                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-cyan-500 text-white">
                      2.
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                      Import the token
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    Open Metamask and under your Assets click 'Import token'.
                    Copy and paste the $PEG address:
                    0x06872971938462D0b206D01fe98eCc3E73798b89
                  </dd>
                </div>
              </dl>
            </div>

            <div className="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
              <svg
                className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
                width={784}
                height={404}
                fill="none"
                viewBox="0 0 784 404"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="e80155a9-dfde-425a-b5ea-1f6fadd20131"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={784}
                  height={404}
                  fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)"
                />
              </svg>
              <img
                className="relative mx-auto rounded-lg shadow-sm"
                width={300}
                src={tokenImport}
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="relative mt-16">
          <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            How to vote?
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">
            Once you have $PEG and are connected to the Binance Smart Chain you
            can take part in the voting process{" "}
            <a href="#vote" className="underline">
              here.
            </a>
            When you vote your tokens are staked until the end of the voting
            period. You will recieve 0.5% in interest but will be unable to
            withdraw until the end of the voting period. At the end of the 4
            week period the votes are automatically calculated and the
            tokenomics in the contract are updated.
          </p>
        </div>
      </div>
    </div>
  );
};
