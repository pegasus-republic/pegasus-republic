import { ClipboardCheckIcon } from "@heroicons/react/outline";
import React from "react";
import horseman from "../assets/horseman.jpg";

export const BobHorseman: React.FC = () => {
  return (
    <div className="relative py-16 bg-white">
      <div
        className="hidden absolute top-0 inset-x-0 h-1/2 bg-gray-50 lg:block"
        aria-hidden="true"
      />
      <div className="max-w-7xl mx-auto bg-cyan-600 lg:bg-transparent lg:px-8">
        <div className="lg:grid lg:grid-cols-12">
          <div className="relative z-10 lg:col-start-1 lg:row-start-1 lg:col-span-4 lg:py-16 lg:bg-transparent">
            <div
              className="absolute inset-x-0 h-1/2 bg-gray-50 lg:hidden"
              aria-hidden="true"
            />
            <div className="max-w-md mx-auto px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:p-0">
              <div className="aspect-w-6 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1">
                <img
                  className="object-cover object-center rounded-3xl shadow-2xl"
                  src={horseman}
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="relative bg-cyan-600 lg:col-start-3 lg:row-start-1 lg:col-span-10 lg:rounded-3xl lg:grid lg:grid-cols-10 lg:items-center">
            <div
              className="hidden absolute inset-0 overflow-hidden rounded-3xl lg:block"
              aria-hidden="true"
            >
              <svg
                className="absolute bottom-full left-full transform translate-y-1/3 -translate-x-2/3 xl:bottom-auto xl:top-0 xl:translate-y-0"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
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
                      className="text-cyan-500"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={384}
                  fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
                />
              </svg>
              <svg
                className="absolute top-full transform -translate-y-1/3 -translate-x-1/3 xl:-translate-y-1/2"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
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
                      className="text-cyan-500"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={384}
                  fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
                />
              </svg>
            </div>
            <div className="relative max-w-md mx-auto py-12 px-4 space-y-6 sm:max-w-3xl sm:py-16 sm:px-6 lg:max-w-none lg:p-0 lg:col-start-4 lg:col-span-6">
              <h2
                className="text-3xl font-extrabold text-white"
                id="join-heading"
              >
                Who is Bob Horseman?
              </h2>
              <p className="text-lg text-white">
                Bob Horseman is the President of Pegasus Republic and the
                largest hodler of the token. He is unable to withdraw any funds
                from Pegasus Republic since he is what is known as a{" "}
                <a
                  href="https://www.fool.com/investing/stock-market/market-sectors/financials/cryptocurrency-stocks/coin-burn/#:~:text=Coin%20burning%20happens%20when%20a,burn%20address%2C%20it's%20gone%20forever."
                  className="underline"
                >
                  burn address
                </a>
                . This makes him the most trustworthy president in history!
              </p>

              <p className="text-sm font-bold text-white">
                <ClipboardCheckIcon className="w-6 h-6 inline mr-2" />
                0xdF7F9c7913cdC6253b3138f2c289014169E314dF
              </p>
              <a
                className="block w-full py-3 px-5 text-center bg-white border border-transparent rounded-md shadow-md text-base font-medium text-cyan-700 hover:bg-gray-50 sm:inline-block sm:w-auto"
                href="https://bscscan.com/address/0xdF7F9c7913cdC6253b3138f2c289014169E314dF#code"
                target="_blank"
              >
                View on BSCScan
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
