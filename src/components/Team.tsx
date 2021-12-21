import React from "react";
import adam from "../assets/profile.png";

export const Team: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
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
          <div className="lg:col-span-2">
            <ul
              role="list"
              className="space-y-12 sm:divide-y sm:divide-gray-200 sm:space-y-0 sm:-mt-8 lg:gap-x-8 lg:space-y-0"
            >
              <li className="sm:py-8">
                <div className="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
                  <div className="aspect-w-1 aspect-h-1 sm:aspect-w-2 sm:aspect-h-2">
                    <img
                      className="object-cover shadow-lg rounded-full"
                      src={adam}
                      alt=""
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <div className="space-y-4">
                      <div className="text-lg leading-6 font-medium space-y-1">
                        <h3>Adam Hannigan</h3>
                        <p className="text-cyan-600">
                          Creator of Pegasus Republic
                        </p>
                      </div>
                      <div className="text-lg">
                        <p className="text-gray-500">
                          Hi, I'm Adam and I am the creator of Pegasus Republic.
                          I believe communities should control tokens,{" "}
                          <b>not greedy developers. </b>
                        </p>
                        <p className="text-gray-500 mt-4">
                          You can find me working on a wide range of community
                          and charity focussed projects.{" "}
                        </p>
                        <p className="text-gray-500 mt-4">
                          One of these is{" "}
                          <a
                            className="text-cyan-500 underline"
                            href="https://sunflower-farmers.com/"
                            target="_blank"
                          >
                            {" "}
                            sunflower-farmers.com,
                          </a>{" "}
                          the only blockchain game that is open-source, no
                          premine and no pre-sale.
                        </p>
                      </div>
                      {/* <ul role="list" className="flex space-x-5">
                        <li>
                          <a
                            href={person.twitterUrl}
                            className="text-gray-400 hover:text-gray-500"
                          >
                            <span className="sr-only">Twitter</span>
                            <svg
                              className="w-5 h-5"
                              aria-hidden="true"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a
                            href={person.linkedinUrl}
                            className="text-gray-400 hover:text-gray-500"
                          >
                            <span className="sr-only">LinkedIn</span>
                            <svg
                              className="w-5 h-5"
                              aria-hidden="true"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </a>
                        </li>
                      </ul> */}
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
