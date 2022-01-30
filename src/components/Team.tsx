import React from "react";

export const Team: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12 lg:grid ">
          <div className="space-y-5 sm:space-y-4">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              About Us
            </h2>
            <p className="text-xl text-gray-500">
              The aim of Pegasus Republic was to create a groundbreaking token
              economy that <b>governs itself</b> and cannot be influenced by
              institutions or greedy developers.
            </p>
            <p className="text-xl text-gray-500">
              All tokens were distributed for free and the community has
              responded outstandingly with liquidity, marketing, support and
              guidance.
            </p>
            <p className="text-xl text-gray-500">
              To ensure minimal influence from developers, all marketing
              materials and resourcs are created entirely by the Pegasus
              Republic community.
            </p>
            <p className="text-xl text-gray-500">
              The project is{" "}
              <a
                href="https://github.com/pegasus-republic/pegasus-republic"
                className="text-cyan-500 underline"
              >
                open source
              </a>{" "}
              and we are always looking for people to join the community and
              help take Pegasus Republic to the world!
            </p>
            <a
              onClick={() => {
                console.log("Move");
                window
                  .open("https://t.me/+L2bZSku7KAs4NTQ1", "_blank")
                  ?.focus();
              }}
              className="block cursor-pointer mt-4 flex items-center justify-center mt-2 w-full py-3 px-4 rounded-md shadow bg-gradient-to-r disabled:opacity-50 from-teal-500 to-cyan-600 text-white font-medium hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900"
            >
              Join us on Telegram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
