import React from "react";
import { InformationCircleIcon } from "@heroicons/react/outline";
const navigation = [
  {
    name: "Twitter",
    href: "https://twitter.com/RepublicPegasus",
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    ),
  },
  {
    name: "Telegram",
    href: "https://t.me/+L2bZSku7KAs4NTQ1",
    icon: (props: any) => (
      <img
        {...props}
        src="data:image/png;base64,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"
      />
    ),
  },
];

export default function Example() {
  return (
    <>
      <div className="mx-auto mt-8 max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <div className="rounded-md bg-cyan-50 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <InformationCircleIcon
                className="h-5 w-5 text-cyan-400"
                aria-hidden="true"
              />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-cyan-800">
                Legal Disclaimer
              </h3>
              <div className="mt-2 text-sm text-cyan-700">
                <p>
                  The information provided on this website does not constitute
                  investment advice, financial advice, trading advice, or any
                  other sort of advice and you should not treat any of the
                  website’s content as such. The Pegasus Republic team does not
                  recommend that any cryptocurrency should be bought, sold, or
                  held by you. Do conduct your own due diligence and consult
                  your financial advisor before making any investment decisions.
                  By purchasing Pegasus Republic ($PEG), you agree that you are
                  not purchasing a security or investment and you agree to hold
                  the team harmless and not liable for any losses or taxes you
                  may incur. You also agree that the team is presenting the
                  token “as is” and is not required to provide any support or
                  services. Always make sure that you are in compliance with
                  your local laws and regulations before you make any purchase.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-6 md:order-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-base text-gray-400">
              &copy; 2021 Pegasus Republic. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
