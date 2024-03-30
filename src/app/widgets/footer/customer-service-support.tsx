/**
 * Represents a customer service support component displaying contact information.
 * @component
 * @returns {JSX.Element} - A React JSX element representing the customerServiceSupport component.
 */

export default function customerServiceSupport() {
  return (
    <div className="font-caption mq450:gap-[36px_72px] flex h-[293px] flex-col items-start justify-start gap-[72px] text-left text-xl text-white">
      <div className="flex flex-col items-start justify-start gap-[12px]">
        <h3 className="font-inherit mq450:text-base mq450:leading-[24px] relative m-0 font-semibold leading-[150%] text-inherit">
          USA Underwriter
        </h3>
        <div className="flex flex-row items-start justify-start text-sm">
          <div className="relative leading-[150%]">
            <p className="m-0">NAIC #: 30457</p>
            <p className="m-0">P.O. Box 2426</p>
            <p className="m-0">{`Rancho Cucamonga, CA, 91729 `}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col items-start justify-start gap-[9px]">
        <h3 className="font-inherit mq450:text-base mq450:leading-[24px] relative m-0 font-semibold leading-[150%] text-inherit">{`Customer Service & Support`}</h3>
        <div className="flex flex-1 flex-col items-start justify-start gap-[7px] text-sm">
          <div className="flex flex-1 flex-row items-center justify-start gap-[4px]">
            <img
              className="relative h-[15px] w-[15px] shrink-0 overflow-hidden object-cover"
              loading="lazy"
              alt=""
              src="/heroiconsminiclock@2x.png"
            />
            <div className="relative whitespace-nowrap leading-[150%]">
              Monday - Friday, 9:00 am - 6:00 pm ET
            </div>
          </div>
          <div className="flex flex-1 flex-row items-center justify-start gap-[5px]">
            <img
              className="relative h-[15px] w-[15px] shrink-0 overflow-hidden"
              alt=""
              src="/heroiconssolidphone.svg"
            />
            <div className="relative inline-block min-w-[125px] leading-[150%]">
              +1 (248) 541-2800
            </div>
          </div>
          <div className="flex flex-1 flex-row items-center justify-center gap-[9px]">
            <img
              className="relative h-[15px] w-[15px] shrink-0 overflow-hidden"
              alt=""
              src="/heroiconsminienvelope.svg"
            />
            <div className="relative whitespace-nowrap leading-[150%]">
              customerservice@usaunderwriters.com
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
