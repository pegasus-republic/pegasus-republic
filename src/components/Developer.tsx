import React from "react";
import { CameraIcon } from "@heroicons/react/solid";
import adam from "../assets/profile.png";

export const Developer: React.FC = () => {
  return (
    <div className="bg-white overflow-hidden" id="team">
      <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen" />
        <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
          <div>
            <h2 className="text-base text-cyan-600 font-semibold tracking-wide uppercase">
              About the developer
            </h2>
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Who created this?
            </h3>
          </div>
        </div>
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative lg:row-start-1 lg:col-start-2">
            <svg
              className="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="de316486-4a29-4312-bdfc-fbce2132a2c1"
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
                height={384}
                fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
              />
            </svg>
            <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
              <figure>
                <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                  <img
                    className="rounded-lg shadow-lg object-cover object-center"
                    src={adam}
                    alt="Whitney leaning against a railing on a downtown street"
                    width={1184}
                    height={1376}
                  />
                </div>
                <figcaption className="mt-3 flex text-sm text-gray-500">
                  <CameraIcon
                    className="flex-none w-5 h-5 text-gray-400"
                    aria-hidden="true"
                  />
                  <span className="ml-2">
                    Adam Hannigan - Creator of Pegasus Republic
                  </span>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="text-base max-w-prose mx-auto lg:max-w-none">
              <p className="text-lg text-gray-500">
                Hi, I'm Adam and I am the creator of Pegasus Republic. I believe
                communities should control tokens,{" "}
                <b>not greedy developers. </b>
                At launch I distributed all tokens for <b>free</b>.
              </p>
            </div>
            <div className="text-base max-w-prose mx-auto lg:max-w-none">
              <p className="text-lg text-gray-500 mt-4">
                The aim of Pegasus Republic was to create a groundbreaking token
                economy that <b>governs itself</b> and cannot be influenced by
                institutions or greedy developers.
              </p>
            </div>
            <div className="text-base max-w-prose mx-auto lg:max-w-none">
              <p className="text-lg text-gray-500 mt-4">
                I am also the founder of{" "}
                <a
                  className="text-cyan-500 underline"
                  href="https://sunflower-farmers.com/"
                  target="_blank"
                >
                  {" "}
                  sunflower-farmers.com,
                </a>{" "}
                the only blockchain game that is open-source, no premine and no
                pre-sale. This is where I found my passion for community and
                charity focussed projects.
              </p>
            </div>
            <div className="text-base max-w-prose mx-auto lg:max-w-none">
              <p className="text-lg text-gray-500 mt-4">
                Since launch of Pegasus Republic the community has responded
                amazingly and have contributed with marketing, liquidity,
                support and guidance. As creator of the project I do not
                associate with any marketing material as it is not wise for one
                person to control and influence the project so heavily. My key
                role is to provide the infrastructure for voting and community
                engagemnet.
              </p>
            </div>
            <div className="text-base max-w-prose mx-auto lg:max-w-none">
              <p className="text-lg text-gray-500 mt-4">
                The project is open source and we are always looking for people
                to join the community and help take Pegasus Republic to the
                world!
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                console.log("Move");
                window
                  .open("https://t.me/+L2bZSku7KAs4NTQ1", "_blank")
                  ?.focus();
              }}
              className="block mt-4 flex items-center justify-center mt-2 w-full py-3 px-4 rounded-md shadow bg-gradient-to-r disabled:opacity-50 from-teal-500 to-cyan-600 text-white font-medium hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900"
            >
              Join us on Telegram
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
