/**
 * Represents a hero section component displaying a message and an image.
 * @component
 * @returns {JSX.Element} - A React JSX element representing the HeroSection component.
 */

import { MoveRight } from "lucide-react";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <div className=" my-6 box-border h-[514px] ">
      <div className="container flex h-full justify-between rounded-xl bg-primary">
        <div className="box-border flex  w-1/2 flex-col justify-center">
          <div className=" z-[1] flex max-w-full flex-col items-start justify-start gap-[40px] self-stretch">
            <div className="flex max-w-full flex-col items-start justify-start gap-[16px] self-stretch">
              <b className=" relative inline-block w-[553px] max-w-full text-[48px] font-bold uppercase leading-[125%] text-white">
                Get affordable, same-day coverage in no time.
              </b>
              <div className="relative self-stretch text-base font-medium leading-[150%] text-white">
                With roots over a century deep in the birthplace of the automobile industry, USA
                Underwriters has the knowledge and expertise to help tailor a policy to suit your
                lifestyle, your budget, and your priorities.
              </div>
            </div>
            <div className="mq450:flex-wrap flex max-w-full flex-row items-center justify-start gap-[30px] text-base text-gray-800">
              <div className="rounded-37xl flex flex-row items-center justify-center whitespace-nowrap bg-white px-8 py-4">
                <div className="relative inline-block min-w-[113px] font-medium leading-[150%]">
                  Report a Claim
                </div>
              </div>
              <div className="flex h-6 flex-row items-center justify-center gap-[8px] text-white">
                <div className="relative inline-block min-w-[87px] whitespace-nowrap font-medium leading-[150%]">
                  Learn More
                </div>
                <MoveRight />
              </div>
            </div>
          </div>
        </div>
        <div>
          <Image
            width={330}
            height={530}
            className=" h-full object-cover"
            alt="person"
            src="/person.svg"
          />
        </div>
      </div>
    </div>
  );
};
