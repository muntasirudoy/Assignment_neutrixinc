import { ChevronRight, HomeIcon } from "lucide-react";
import { CardView } from "../(_components)/home/card-view";
import InlineText from "./inline-text";

const Page = () => {
  return (
    <div className=" container">
      <div className="mx-auto my-10 flex w-fit flex-col items-start justify-start gap-[18px]">
        <div className="flex flex-row items-start justify-start py-0 pl-[17px] pr-4">
          <h1 className="font-inherit relative m-0 text-[36px] font-medium leading-[150%] ">
            About us
          </h1>
        </div>
        <div className="flex h-[21px] flex-row items-start justify-start gap-[16px] rounded-md text-sm text-gray-700">
          <HomeIcon size={16} />
          <a className="relative inline-block text-[14px] leading-[150%]">Home</a>
          <ChevronRight size={16} strokeWidth={1.25} />
          <a className="relative inline-block min-w-[60px] leading-[150%]">About us</a>
        </div>
      </div>

      <div className="font-caption mq750:gap-[25px_50px] flex  max-w-full flex-col items-start justify-start gap-[50px] text-left text-base text-gray-700">
        <InlineText
          title="About us"
          subtitle="History"
          para="In 1962, the Southern Michigan Mutual Insurance Company celebrated it’s 100th year in continuous operation and was presented with a plaque by the State of Michigan as a Centenary Business."
        />
        <img
          className="relative max-h-full w-full self-stretch overflow-hidden rounded-xl object-cover"
          loading="lazy"
          alt=""
          src="/bg-about.jpg"
        />
        <div className="relative inline-block h-[258px] shrink-0 self-stretch font-medium leading-[150%] text-gray-500">
          <p className="m-0">
            In 2013, Southern Michigan Mutual Insurance Company became USA Underwriters. The name
            may have changed, but the dedication to our customers, our drive to serve them and their
            communities hasn’t. USA Underwriters’ mission as a leading Property and Casualty
            Insurance company in Michigan, remains largely unchanged from the mission of it’s
            progenitor: to provide affordable, quality insurance solutions to families and
            individuals.
          </p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">
            Insurance has changed a lot in the last century and a half. When Southern Michigan
            Mutual Insurance Company was founded, automobiles simply didn’t exist.
          </p>
          <p className="m-0">
            That all changed — right in the company’s back yard — at the turn of the 20th century
            when Henry Ford’s Model T began rolling off the assembly line.
          </p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">
            In an instant of history, the car supplanted the horse and buggy as American’s primary
            mode of transportation. The era of the Automobile had begun, and the Southern Michigan
            Mutual Insurance Company was front and center for one of the most dramatic shifts in
            American history. The car accelerated economic growth, and offered a freedom of travel
            that had been nigh-unimaginable for the vast majority of people through the whole of
            human history.
          </p>
        </div>
        <InlineText
          title="Believe"
          subtitle="OUR MISSION"
          from="foot"
          para="Our mission has remained largely unchanged over the century and a half the company has operated: to quickly provide affordable insurance solutions for our customers that support the communities and families they represent."
        />
        <div className="my-6 flex w-full max-w-full flex-1 flex-row flex-wrap items-start justify-start gap-[31px]">
          <CardView
            title="Affordable Auto Insurance "
            subtitle="USA Underwriters offers affordable rates on quality coverage."
          />
          <CardView
            title="Accidents Can Add Up"
            subtitle="Accidents and infractions can linger long after the fines are paid and the car is repaired."
          />
          <CardView
            title="Price Conscious"
            subtitle="Price conscious consumers choose USA Underwriters for affordable auto insurance solutions."
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
