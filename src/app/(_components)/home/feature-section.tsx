/**
 * Represents a feature section component displaying information about MCCA refund and additional features.
 * @component
 * @returns {JSX.Element} - A React JSX element representing the FeatureSection component.
 */

import { CardView } from "./card-view";

export const FeatureSection = () => {
  return (
    <div className=" my-[90px]">
      <div className="container">
        <div>
          <div className="flex max-w-full flex-row items-start justify-between gap-[20px] self-stretch lg:flex-wrap lg:justify-center">
            <div className=" flex w-[440px] min-w-[440px] max-w-full flex-col items-start justify-start gap-[23px] lg:flex-1">
              <div className="flex flex-col items-start justify-center self-stretch">
                <div className="relative inline-block text-[16px] font-medium ">Our Features</div>
                <div className="relative self-stretch  text-[30px] font-semibold  text-gray-900">
                  MCCA REFUND INFORMATION
                </div>
              </div>
              <button className=" hover:bg-crimson flex cursor-pointer flex-row items-center justify-center whitespace-nowrap rounded-full bg-primary px-8 py-4 [border:none]">
                <div className="font-caption relative text-left text-base font-medium  text-white">
                  MCCA Refund FAQ
                </div>
              </button>
            </div>
            <div className="relative inline-block w-[654px] max-w-full shrink-0 text-justify font-medium leading-8  text-gray-500">
              The Michigan Catastrophic Claims Association approved refunds for certain Michigan
              Policyholders due a surplus of funds being held by the MCCA. The approved refund will
              be $400 per eligible vehicle insured with USA Underwriters on October 31st, 2021 at
              11:59 PM, or $80 if the vehicle is an insured historical vehicle.
            </div>
          </div>

          <div className="mt-12 flex w-full max-w-full flex-1 flex-row flex-wrap items-start justify-start gap-[31px]">
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
    </div>
  );
};
