import React from "react";

export const Roadmap: React.FC = () => {
  return (
    <div
      className="bg-white relative h-full text-lg max-w-5xl mx-auto"
      id="roadmap"
    >
      <div
        className="
              max-w-7xl
              mx-auto
              py-16
              px-4
              sm:px-6
              lg:py-24 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8
            "
      >
        <div>
          <h2
            className="
                  text-base
                  font-semibold
                  text-cyan-600
                  uppercase
                  tracking-wide
                "
          >
            Vision of Pegasus Republic
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900">Roadmap</p>
          <p className="mt-4 text-lg text-gray-500">
            Our goal is to become a token where the community has the power to
            decide a future of their own. No more shady developers or
            governments deciding the inflation rate.
          </p>
        </div>
        <div className="mt-12 lg:mt-0 lg:col-span-2">
          <dl
            className="
                  space-y-10
                  sm:space-y-0
                  sm:grid
                  sm:grid-rows-4
                  sm:grid-flow-col
                  sm:gap-x-6
                  sm:gap-y-10
                  lg:gap-x-8
                "
          >
            <div className="relative">
              <dt>
                <svg
                  className="absolute h-6 w-6 text-cyan-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <p className="ml-9 text-lg leading-6 font-medium text-gray-900">
                  Launch - Nov 2021
                </p>
              </dt>
              <dd className="mt-2 ml-9 text-base text-gray-500">
                Smart contract deployed and initial token distribution.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <svg
                  className="absolute h-6 w-6 text-cyan-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <p className="ml-9 text-lg leading-6 font-medium text-gray-900">
                  Voting - Nov 2021
                </p>
              </dt>
              <dd className="mt-2 ml-9 text-base text-gray-500">
                Voting mechanism released. Holders now earn interest by taking
                part in the voting process.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute h-6 w-6 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
                <p className="ml-9 text-lg leading-6 font-medium text-gray-900">
                  NFTs and Memes - 2022
                </p>
              </dt>
              <dd className="mt-2 ml-9 text-base text-gray-500">
                Collect horse memes and NFTs using the PEG token.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute h-6 w-6 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
                <p className="ml-9 text-lg leading-6 font-medium text-gray-900">
                  Bob Horseman for President - 2030
                </p>
              </dt>
              <dd className="mt-2 ml-9 text-base text-gray-500">
                Bob Horseman runs for president and governs the world.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};
