/**
 * Represents a report section component for reporting claims.
 * @component
 * @returns {JSX.Element} - A React JSX element representing the ReportSection component.
 */
export const ReportSection = () => {
  return (
    <div className="font-caption container box-border flex flex-row items-start justify-center self-stretch pb-[39px] pl-5 pr-[27px] pt-0 text-left text-lg text-white">
      <div
        className="box-border  flex min-h-[514px]  w-full flex-row items-end justify-start rounded-lg
      bg-[url('/bg-report.jpg')] bg-cover bg-[top] bg-no-repeat px-[114.8px] py-[51px]"
      >
        <img
          className="rounded-3xs relative hidden h-[514px] w-full object-cover"
          alt=""
          src="/rectangle-11@2x.png"
        />
        <div className="rounded-3xs z-[1] box-border flex w-[460.3px] max-w-full flex-col items-start justify-start gap-[18px] bg-primary pb-[23px] pl-[34px] pr-[26.3px] pt-7">
          <div className="rounded-3xs relative hidden h-[223px] w-[461px] max-w-full bg-primary" />
          <b className="relative z-[1] inline-block w-[378px] max-w-full leading-[125%]">
            Obtain cost-effective same-day insurance coverage quickly.
          </b>
          <div className="relative z-[1] self-stretch text-xs font-medium leading-[150%]">
            Lorem ipsum dolor sit amet consectetur. Ut nisi risus ipsum urna leo. Etiam enim varius
            dictum amet hac imperdiet facilisis malesuada.
          </div>
          <button className=" z-[1] flex cursor-pointer flex-row items-start justify-start whitespace-nowrap rounded-full bg-gray-900 px-8 py-[15px] ">
            <div className="font-caption relative inline-block min-w-[113px] text-left text-base font-medium leading-[150%] text-gray-200">
              Report a Claim
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
