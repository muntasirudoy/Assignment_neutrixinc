import { CSSProperties, FC } from "react";

export type CardViewType = {
  title?: string;
  subtitle?: string;
  propPadding?: CSSProperties["padding"];
};

export const CardView: FC<CardViewType> = ({ title, subtitle }) => {
  return (
    <div className="rounded-mid font-caption  relative box-border flex  h-[280px] min-w-[293px] max-w-full flex-1 flex-col items-start justify-center gap-[18px] border-[1px] border-solid border-gray-100 bg-white px-[46px] text-left text-xl text-gray-900 shadow-[0px_1px_2px_rgba(0,_0,_0,_0.08)]">
      <div className=" relative h-[70px] w-[70px] rounded-full bg-gray-200">
        <img
          className="absolute left-1/2 top-1/2 z-[1] h-8 w-8  shrink-0 -translate-x-1/2 -translate-y-1/2  overflow-hidden"
          loading="lazy"
          alt=""
          src="/f-icon.svg"
        />
      </div>
      <div className="flex flex-col items-start justify-start gap-[10px] self-stretch">
        <h3 className="font-inherit relative m-0 font-semibold leading-[150%] text-inherit">
          {title}
        </h3>
        <div className="relative self-stretch text-justify text-base font-medium leading-[150%] text-gray-500">
          {subtitle}
        </div>
      </div>
    </div>
  );
};
