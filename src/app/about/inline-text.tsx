import { FC } from "react";

export type InlineTextTypes = {
  title?: string;
  subtitle?: string;
  para?: string;
  from?: string;
};

const InlineText: FC<InlineTextTypes> = ({ title, subtitle, para, from }) => {
  return (
    <div
      className={
        from
          ? "flex  w-full flex-wrap items-center justify-between gap-[78px]"
          : "flex  w-full flex-wrap items-center justify-start gap-[78px]"
      }
    >
      <div className="flex flex-col items-start justify-start gap-[1px]">
        <div className="relative inline-block text-[16px] font-medium leading-[150%]">
          {subtitle}
        </div>
        <h1
          className={
            from
              ? "font-inherit  relative m-0 inline-block  text-[30px] font-semibold leading-[150%] text-primary"
              : "font-inherit  relative m-0 inline-block  text-[30px] font-semibold leading-[150%] text-gray-900 "
          }
        >
          {title}
        </h1>
      </div>
      <div
        className={
          from
            ? "relative inline-block max-w-[669px]  flex-1 font-medium leading-[150%] text-gray-500"
            : "relative inline-block w-[669px]  flex-1 font-medium leading-[150%] text-gray-500"
        }
      >
        {para}
      </div>
    </div>
  );
};

export default InlineText;
