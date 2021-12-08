import React, { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  CalendarIcon,
  CheckIcon,
  CloudUploadIcon,
  CogIcon,
  LockClosedIcon,
  MenuIcon,
  RefreshIcon,
  ServerIcon,
  ShieldCheckIcon,
  XIcon,
} from "@heroicons/react/outline";

const features = [
  {
    name: "Reflection",
    description:
      "3% is reflected to holders automatically for a passive income.",
    icon: CloudUploadIcon,
  },

  {
    name: "Burn",
    description:
      "Automatic burns on transactions. A deflationary token in the making.",
    icon: RefreshIcon,
  },
  {
    name: "Voting",
    description:
      "Each month have a chance to decide the inflation, interest, tax and burn rates.",
    icon: ShieldCheckIcon,
  },
  {
    name: "Tax",
    description: "Sale tax which is distributed amongst all hodlers.",
    icon: CogIcon,
  },
  {
    name: "Bonuses",
    description:
      "Earn bonuses for taking part in the democratic voting process.",
    icon: ServerIcon,
  },
  {
    name: "Meme Central",
    description:
      "Relish in the world of meme culture and the benevolent Bob Horseman.",
    icon: ServerIcon,
  },
];

export default function Features() {
  return (
    <>
      {/* Feature section with grid */}
      <div className="relative bg-white pb-16 sm:pb-24 lg:pb-32" id="features">
        <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
          <h2 className="text-base font-semibold tracking-wider text-cyan-600 uppercase">
            Features
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            Cutting edge Token mechanics
          </p>
          <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
            Pegasus Republic has brought the best tokenomics from a range of the
            most popular and egalitarian contracts.
          </p>
          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="pt-6">
                  <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-md shadow-lg">
                          <feature.icon
                            className="h-6 w-6 text-white"
                            aria-hidden="true"
                          />
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                        {feature.name}
                      </h3>
                      <p className="mt-5 text-base text-gray-500">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial section */}
      <div className="pb-16 bg-gradient-to-r from-teal-500 to-cyan-600 lg:pb-0 lg:z-10 lg:relative">
        <div className="bg-white">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:py-6 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8">
              <h2 className="max-w-md mx-auto text-3xl font-extrabold text-cyan-600 text-center lg:max-w-xl lg:text-left">
                Find us on the following platforms
              </h2>
              <div className="flow-root self-center mt-8 lg:mt-0">
                <div className="-mt-4 -ml-8 flex flex-wrap justify-between lg:-ml-4 grid-cols-2">
                  <div className="mt-4 ml-8 col-span-1 flex flex-grow flex-shrink-0 justify-center lg:flex-grow-0 lg:ml-4">
                    <a
                      href="https://bscscan.com/token/0x06872971938462d0b206d01fe98ecc3e73798b89"
                      target="_blank"
                    >
                      <img
                        className="h-12"
                        src="https://camo.githubusercontent.com/6214be9321b2b4a1ad8483414fdbe193f2fe4aa4d41de52efc023eb5ef0206cd/68747470733a2f2f6273637363616e2e636f6d2f696d616765732f6c6f676f2d6273637363616e2e7376673f763d302e302e32"
                        alt="Workcation"
                      />
                      <div className="flex items-center">
                        <CheckIcon className="h-6 w-6 text-green-500" />
                        <span className="text-gray-500 text-sm">
                          Contract Verified
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="mt-4 ml-8 col-span-1 flex items-center flex-col flex-grow flex-shrink-0 justify-center lg:flex-grow-0 lg:ml-4">
                    <img
                      className="h-12 opacity-50"
                      src="https://static.coingecko.com/s/coingecko-branding-guide-4f5245361f7a47478fa54c2c57808a9e05d31ac7ca498ab189a3827d6000e22b.png"
                      alt="Tuple"
                    />
                  </div>

                  <div className="mt-8 ml-8 col-span-1 flex flex-grow flex-shrink-0 justify-center lg:flex-grow-0 lg:ml-4">
                    <a
                      href="https://pancakeswap.finance/swap?outputCurrency=0x06872971938462D0b206D01fe98eCc3E73798b89"
                      target="_blank"
                    >
                      <img
                        className="h-12"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAjwAAABYCAMAAADGK93NAAABEVBMVEX///8ZEybRiE8AAABjMAD+3JD8/P0AABcAAA4AABEAABMAAAsAABUSCiHVi1EMAB3DwsXX1tisqrARCCBbIACgn6Q+OkdJRlGIhoxhX2hdKgAGABpqZ3CPjZNPTFeamZ/Gf0eDSyHw8PFeJwB4Ujy3o5X/45UdFivMys5dJAC4qKFYGQDd3N/19Pbm5eeysLV3dX32zoa0cj+7ur7t6OMqJTUvKjq7d0HYllrtvnnNwbdYGgCtmImVWiynaDVTCQBtOQyOb1mKUSJtPhrk3NZ+fIPmsW8rJzXatXJ1SiuxjFacgW+GY0nUycCVdl9/WDmljHudZzine0jgo2SBUyLCml82Mz9rOxSXbTrUrmxqLQCc+gzUAAAWB0lEQVR4nO1deXvSytuGJiwhpAECtCEsFo4sspQeSq3W2lqLtVaP5+eCnvf7f5A3k22eZzIJ0MIl1dx/eF2SyWRmcs+zZxqLcTF8eXcrij/ePD3mX48lrQZv3zwLahDhD0XyVe+sJZqoFPtvuOwADe4i+kSguL49s4hRqZj/9nrP/A0+Ow3EgAYR/lRciy1CjIPz8yuR0KP/dNUGEf5UNC1CvN618PzS/M/FS9TguLigQYQ/Fh9bYuXyye6Ohd3dc5McRWTWfDYbHOAGveavGm2EbcKnvihe7lAQcvTuYIMLToN/f9l4I2wRiOB5vgvJcYlFD7dBP/nrRhxhW3DcE8UrSI2d3b8r4hk1ao4rCxpE+GPx6Uys/I24sbMjii2qt0y1xmmAFFuEPxTPimLlCabG7oFY+QgbiEyDHbPB51845ghbgqd+bhDy/LWowe0vHHOELQFHsCxFnkjyRLBsnue7q5Fn51Js/fMLxxxhS3DdEyuvVyTPk4pYjDIUEWIxUaxcrUYe4qr3P/3CIUfYFnyuoPjxMuQ5r4gXUV1GhFjs354orkieA1Hs/cIRR9gavCQW82rkMe3ljyE9RvhjcN1nLeaFBrNpL7/6hSOOsD24ECvnq5Bn93mU2toAks3uYanUaJRKhUl++FjyzremxbwSeV4vbS/nSzUW5uocdkePtByo23Bn0V3v221OxieCkJakTEaS0rIgTKuN/HCtj9gM7lpiZSXyXFVEcam1awhSloW5OrIgT/VGfmMT2hiq3nwkobrGfkf7HcFQ4hCKKgnz2miND9kMnrKp0UXkuYR50xCMNLwgeG2y5dzGprQZ5AUwA2F95G9oGe5CKVJqvO3qy1dzschgNh31pexltNh+aEJ5+3cWRCENRp8uranX5J4cuMfiKXnLd9iwyFjMFnmGxw5e9RjymPZycamPbxaQJx5Xt31pMBB5pDWRZ1hOhS2RInTX85wNIfm2Ih4w5DFRPOubKFqf+kHyEHu5f71MxwvJYwr/x8SejZBHzy5YocP1PGdTMC3mSz95IBB5yNcTSzlbS5BHUR+R5toEeQ4XrJFW3nKr5xVj1eweVDCYq9AiCsMS5Ikb9Q1Pbo3YAHmGnWB7x0J6251S1mLePT+4On/9+m+C16/Pz68OkM1zCSucw7AMeR6T4toAeSbMEqkZ2YSU0tynzNbxlE3iU9GXoGAArz0R70ceLU0gZZmtZqwzYLJZbIA8YwOuhSLrjUkuNynt14U0WSels+VK6/pNy1/SEwxSzCO23i5TC4bIo+mHBROl2omA6SM9hkCqhQ2QZwrXQjsZeBeaBbJOWy6Wj99cEH+qcrmYNq5Os87KOBMXZ7cQeVL77s85rOe3fIEANkAeJJuNAbo2ia81jL1+vCra1HnNVimH4LlzVMbnRcWEAeSJDVS4ZJnGZqe4PqyfPEMkm/fYq7ltVlr2uTyVg793l1VatvB58prQp3L2b/jkgsgTq8HYht/oGXUbY71uQtfHjdyAvexrnqtVSXN9lgvMt3pd1vVxLaTLQa7mPLo6K3WZMMJ9yEPnUp0d5tn1asIVUvWlerwv0Kp2A5cgmZ/U6FJNfEN28ZQcnVK5fL4adSz67FjKq3gbGu8JJE9ehhuujOdY2lNkyVA1E6pqZGRjWp3AGdTKLgrkvzldkzNWczUlK2MefZqNska6VN0uUzczngc8mM1TTl9mu5Qkq/MZjO8GkCc5LlPMIaeajT2VdGg/OCVL0yrW0UjyKMEhnVG9jGfNxWCPtmJsgVFjDkZiZAT1ZDzhrNShPs3KWbD6mal+yBlW8mPfpA45dmdV6tj0Ibn1VmhdTyB5Rh24Zidw/lVB0uIYiioLVe9ljwRNsaHJzVhuKkAdqKQE39oOdCHj6zIllNmwf25PSLFBF7OdtO/JnwDy6LJCocY9+785881FMYQpei7sMS5xXqe7kpr3ACVQvNYz3jAEZAvk64Iv9aoYsjBG8ic52RPSqq+dufr77COPb3vEyXpyL+pY9LF010VIliuEPGCIgDzNsWDEuTCEetfXqZAfC74Ym1BDY0juB3SpCWPo5g3qAsswB1l57NCHT54GFKNxaez2eKhyEw8Kem4dPlRRgnyH4Q2dJ0jnDwk8udAErlsa0GKkow0GYAi619mwMA1agXhGw1vy+C1x0F/fmzqEPU8OTPb0gxPsweRBq+mRJ9cJyfOowszX6ZSXU0TsGc3TnCY2ZGBjlFIBrLWGnrbzS1zy5BB3DE8H7/t57d5Zphu5hIanZPcDsjUgHuSxdlSfE3giFKwM1ICHasjUDNlZrclJSG7fZHwV6K7hLfGynj+EOztOWVjwAYWB5BlwbZ5C2PCJM5L0dcqFQHfdqBOw5+wO6buRg5uZyO4HkqcZR5GaqStVZiHDNE6otGAenFWr3Cz6hLbzHIyZrS5TboKnJHltUjQw3Qgksd2bvYNy4a3M6QJXkHDn8v4qy2PP67ADClfztkqLUoTLkod6LaN4kCAmoMUO1XDuuGPnkaeMTK6Oy9tG6ChTNKFXYyWjIWglv/gZZmgLJ+o8dLWUq8eqdCiyN7XaguVyFiu3YAXM+XpO8T/FtXDHYU9QgUZgnEeBNHfiPAuHvzR54pq7+HshAhuECGqLHh1Mnhn8SZE8DYL0r5EWBNMUBb/Ing0xLPtkoyIJui/CA4wjR7J6aTFHLiapIako7u2FhSVVy5LHqw15eUHKLNbAHbtAI+i4lQDydKdIHsiWjzFUGLmpZiQJeT9B5NEyGYYjsjPNBrsihpSWsu7LyrhSIufb/GYz1GUgeQ7REwTPW9LB7YpcPcyP8oc6GLjS8YzmUYfDcFUoF3DWBjw7bTOPChrV+v+A9u/tixG7WGRqyFDkk0fNShnW9VQ6lqk2vBT9h33dmz0HgV9x5XEILDchaNQZr1GwxlTFtm9W0BuF0j6kGZ88mlBvlMbYWnI0fpJZuXR6XCoUanraap127erkHOs22TCblcZQIASRZ4AcW+oe5xFPXIcmB8SRTMNBozJv12vpOIpCAhoYlkMH4ot2gqdATR5398T2sFiThKo5tX04ai555Hqt1JiVGT/VLry9Y+tOPSKExnzY9LqDJ6YUa3GDhfg9q7IFNuZij56hhLRvy10givnk0ewy6CRKMKr2xqtlUEvVexmTeVpRPNO2hNZNMZyFzwOmBJAneQLnIlO9PAM7IUUNmAl9vajGaz/DM+sVuQNt5zmdYcoaNu3MXkKddiI4neOCD8VwViAJ5sEjj+txNKvYFySezXFLZI82sMnx/PwqRB7tPr8657lnxOzhn6y7Qj1PFZHci5Y1F5FHdbb1IZymZtujKP+qTGFAbDKlKgbxjpq8S5CnCtmZAVkWeCssyAEEEKBRnK9znR1FAB9PgK1g3QuHLZONQAmrufZ4HZFScbkIXTwuebzgDzbnyXNf+cp3XBKY4Eok6/I5ucwNDBEtyAt7LkMe1ZoodnipTF9EHs/bRspdqyeZt2/2yeQFPCp1uWRcgjwFVEFq1Ol7hl2i5+7TF5zGYbfJnBuhS+95vYJ5EytxAB9OOgM/uJGgATLbafXC8uSJleGoSLjrLfuFqKN+7L9qExA3tMp4RPZIBE/0nPECzcvUMMvWDpzAscOQ8wLyqO52x+lpi5ANCTYMTDruQ2Mr5cWHF5JH0+E8tCnYPVAMSoUuxYzK1+w+HkYyx5oYdjPPqR+eeEtBjB6oGa0Jg4e6Uq2EVoCGB1YgD5qyMYtd+75NtylwZbGDq9Ac8UJwwOOWyD81Y5mvJ2ztgZZCpt8LPIQ8VeQbBxYNIa2VobptEXlQCEmRoORFs5EECsAODpvz447sEz/UkqJBZmXOGHlk3HS6miuudLgC4BOeFcgzgJpZqfPOznUYIAbJlh3rJDn7MufW3StRPLsPeTQn7o+Vs0BfxEPIg9JGQlDCegh3p/lWlicPvE9FSXo9JKztjRHXEjjTPdzziZ+sF1Gg71cdMa51pgY2QdbxI4dzZM3RFViBPE1E0hPyoY3IER/PXXZw9ZYVDLQuc0zqoC+5FpBHEcrOKIFIxln2B5AnWYbTNgK4gy0jWFq0CnlUnA7fC4trc2aJxlNlsphZ1+IeUbtQ7uLa57iyl6c/uOHlJhSAUNKtQJ4kImAndsvVPY5NIwY58edh3Ao4cyWEPIqWERRvyZtwvdA010UeJYA7sS5cNVjUuAJ5lBMc0JvzXCffPUEjGtRx7GDqigwqnjV9ynRnAKXmjgY5EQbw+lYgTwytYjx2ya12fxB5dvgfIDMhmYwDSZaN6V4NjHAE9xHc/msjjxr0qtCqwerAlSQPLuNahjzZcSwQfgeZfbxftNHtZ7g9I4cMphbvLXnisQB+PEBt7ey0FpNHq5caNgqT7gBv1REcugGW9SE2D1IeQtCLWgt5QNbQ92Qjw4Oshn3Mh8w12RXQowz7WB6LqG+wDvJgm2caRJ4HGMw7u0tIntS+v4ELJHnWpLYYIzzoXeXurbZOUP+wiAgazMaswUMh9Ctr5GPTiNCJT6Kl9v1CTnX9jUGg2loUYQbeFgwVKWVCnv/xAsUH93fVd5eQPGHkaaLKwim4AH5flTzIpmTDKh66kBCQt9AY4pEnW4LZT3QeAaw4kRcdctHl0LoAyUPFYY2tlVM6Q59xTuM5Tf+a+C8sIA/K/JqrLYqtL9wcVWWJIGGLK5e+Fh9GHuxUgmIu2MOq5MEZ7wwTAnf15gC56lNqu8Ddz09PJNHHr4AlOTCYLK6K9aErCFXflwwocEnJ43NAUmMspAiooGoiqQQCIJMFakumziNSoJkSIc+HALOGpCcCBE9YemLn3QPJgyMjwGKG0mNV8qD4lrkhoZk1rAnuTkS7WaJ1NlBHBOS20IrTrBgajKKGfhCbLGukkniCqD3AyRr6Ktnq9HQXqSALNGmGXQYge6G04pGHCmCcWRW6Jnl6H75y6UESo0HcIbLn6opft/rk6OyB5NlHr1B2TY99VK66InkYpye1Rz/AKJ1I3jtB2RsvYjNEOimoJAO5RSp12OFewKwlL0QHZrldcqQK02oh7xCoWcD1TkAQz5joDlHwOPmJQgA4GOQq1mSVk7fBQceMs4fyOLesJS3yHAXwY1FJBv/Cabv/QPJ0ccBU2it087nGCa6pWJU8DbwptUy9lMt3cyVdI4cIKDf2S21gHyajT7rdXG26VDFYEtXL0OJSlGw1TkAOdHhYlg1KB8/NVNS01Jnv6Xp9HpcQ6aEqZc7UyBCVOMFLB9UkVtzxdP3QXNXadIliMEmfDAbdGa4HIwUChDzt0xCSrIwXDyZP8gYLZI0UbjJFYyuTJ8YeyKFJsiDIkvPCJXtAA8aQUEkb5s7ASkJ8ZGfaCzIguaWkhb1aiRzyMCsLac0rOo+xFdCKpqq+M0CzwE0aYsljayhs9EC3ssl0pab9UwsoQyWrIDDfphDO/zAN5vaLNXLnNPFgtcUUbnGxOnkWnLqVta2DJTJRwTXMjFHg6tsBczCulpXI8TLuTnbfMCMauJCgOY3G6tSjoDQslFOm3go97tDC8jXMVljzc6XyrZ1Yo+h50X5fXJyeCCfPcBPkiVVZVwTBEQDdcIqBsfO+nhijR3jGbThvHXeaLYDlQULLhj7zcvwqvMroMKhR8Edr3lCWJY9ixY/uWmKxnQiweu6Br+329554sSgxGk6ehR/e3Is8yXooJ50qhXEoxcDYeeRJzpHgklytEf7tjVOYVV/4cg2Q548xMTunDCQJ/UIBp2j3l/1OaTF57CG/NMXE+0RiXYrrNJFof6uIIocQq5CH/92dot4vwuzJ7nrIoijOK0yWeV/oqIAUIeRhiuAVw3W6S/7aHArB+VpmHPiFr43MCVNKArxsL6IBqt6cLxwodN7G0KAzuBx5FMGe7nGfGD2J9rv1kCeRSBy1+AfN5YNC/8uyJ3UzoUciOORBuWKv8g+RBwaKG0HfEStSx/WCmmX/Est1YM445EEmileyhg0X1SsczQd+wKsJuvuOc/4CHjBEocoGiUBMwxMyIKDlKzFL6v5VzZQnKnvHAvKohrtWf5lywnzliXWwZ/fIFDym1urzvhpNAodXWXzcfolZR3ONR7Gxt1qqU698kgKdegWCOpAK6IiIvM56DVbfsgKOfvBJAEOYJUF5lWT7vyPQSpO9YNwYJ8G9SHOy1OGdMGAIZahbumNJ5vJHEzr+UzOogUY//wChHv8ZIckaMwaNMLLuPdHgkSfLvggaI3t2Jva+t9fCHsKdROKHKL7lVurly14FZmeJs6hHVXLEB4nBKIrpVlpr3DS8LpyFGdRpWSdlyUj3fpUZBTnYzwppg5xREre7zgjCXgEPuLsnSJp9XTNk+/CInNdjxiFEbur9NAd1rXRAJlSgOJKH5qWMaj+ZdJ0yneUxm+0aTsaqIEgp6xQVZ4hZWSjzzsWJVb0H0QXNe7+xAUnral2QVKdfI22fNkLvcEx8nB8ugBdh3gIP+yEnvovkrT/YYT8l1Gl/KIb87bakjaDLDJoFfU4U1XSu07yzvwt+pyGPGhyO9+ZTq+ebst7gHdc2aNRvzAadm/J44r4CTo+hj+ZcGeYauv3kzs28PjsMkL/NXGFWL9+4DfVaLjCrwXtO+CqPSvqJNfdy9XDEvwMnRrvWiyAFZzdzeosNU/S0fhLRkzh6kMf+zuLO+54o/ljj388aNpvNjZzFlzQ7HoVmmoaj5kb+EBh5cnOZQ1/J3DczhOYodFVZ8riD4TS9rYhFS3E9RHWdWirLVFoVvsUT4RGBR54AXF+Iprtus+fo6woHobJih7jpLbEX/bXax44VyBN72hfFosOe9n10l0OdROJnUayIj+YY7ggBWIU85KwDseKwh0iflZhz+i7RptwRW0v9/aQI24yVyBN7Q976d5cDiaN3S4ufry/cm9pH30xjub/oLO8I24/VyJP8bLKn+NMTIYQ/u4utn1OPOcTPElshh8pFeERYjTym5jLtnt7l+zZgQ+LF1xABdPruCHCtnfhwZgqvYqSzfgesSp7Yq35FrBS/HAH6JNrtxNGLd19PT2nR4O7u6enXdy8gcUjD/w6I6LqNuPNbYGXyxD6JpsnSE79jWlhSxdRiLmxKMQ3e/zwjJ1neRX7W74HVyRNrvrkgf0Hi8oOPPmFot99/65n39aLY4G8DVES+7J+M/3RrKh+TBl/eL8mfdvvo+yWROq3e3Tb/QZ8Iq6GT0VxIgWcw+PDsh0WFs0vCnwUEMpnz388WoVur/yaydn4njMb18p6F+myF5Nrw6W2ffA3aKn77+d9Ru81nkPnz0fsP30TyV5ZMSRVR5/fDagUQ3l0vP18Ubf60fvz88N8LQhWEo/ffv5jE6VmN+v1/l/qz6hH+EBy/ui0W7RMte8WzfvHy288vXz6Y+PLz27f/65+ZFwlxKq0z8U1kJkdgcf30o9i3OUJoUmm1eiZalYr7S++s+Nfdy41Um0R4/GheP717WzTlTM/lkE2jYrF/IX7892WkrSKEI3n98tmrfz7evv1BqPPj9vObu2cvPx1HfnmE2P8DHZSPbBuxtVwAAAAASUVORK5CYII="
                        alt="Tuple"
                      />
                    </a>
                  </div>
                  <div className="mt-8 -ml-8 col-span-1 flex flex-grow flex-shrink-0 justify-center lg:flex-grow-0 lg:ml-4">
                    <a
                      href="https://github.com/pegasus-republic/pegasus-republic"
                      target="_blank"
                    >
                      <img
                        width="190"
                        src="https://clipart.info/images/ccovers/1499794873github-logo-png.png"
                        alt="Tuple"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative py-16 bg-white overflow-hidden">
          <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
            <div
              className="relative h-full text-lg max-w-prose mx-auto"
              aria-hidden="true"
            >
              <svg
                className="absolute top-12 left-full transform translate-x-32"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
              >
                <defs>
                  <pattern
                    id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
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
                  fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
                />
              </svg>
              <svg
                className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
              >
                <defs>
                  <pattern
                    id="f210dbf6-a58d-4871-961e-36d5016a0f49"
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
                  fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
                />
              </svg>
              <svg
                className="absolute bottom-12 left-full transform translate-x-32"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
              >
                <defs>
                  <pattern
                    id="d3eb07ae-5182-43e6-857d-35c643af9034"
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
                  fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
                />
              </svg>
            </div>
          </div>
          <div className="relative px-4 sm:px-6 lg:px-8">
            <div className="text-lg max-w-prose mx-auto">
              <h1>
                <span className="block text-base text-center text-cyan-600 font-semibold tracking-wide uppercase">
                  No greedy developers and manipulation
                </span>
                <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  Free fair launch
                </span>
              </h1>
              <p className="mt-8 text-xl text-gray-500 leading-8 text-center">
                In the spirit of community and equality, Pegasus Republic had no
                pre-sale or ICO. Instead tokens were distributed for free. 80%
                to addresses from a range of telegram chats and 20% to the burn
                address of Bob Horseman. Amongst the active addresses, holdings
                were only allocated in the range of 1-5% of the total supply to
                prevent a single individual having too much influence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
