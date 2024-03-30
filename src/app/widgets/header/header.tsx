import Link from "next/link";

function Header() {
  return (
    <header className="font-caption  sticky top-[0] z-[99] box-border overflow-hidden bg-white py-4  text-left text-base text-gray-900 shadow-[0px_1px_2px_rgba(0,_0,_0,_0.08)] lg:box-border ">
      <div className="container flex justify-between">
        <div className="box-border flex h-12 w-[91.5px] flex-col items-start justify-end px-0 pb-[1.9px] pt-0">
          <img
            className="relative h-[46.1px] max-w-full shrink-0 self-stretch overflow-hidden"
            loading="lazy"
            alt=""
            src="/logo.svg"
          />
        </div>
        <div className="hidden max-w-full flex-row items-start justify-start gap-[24px] lg:flex">
          <Link href={"/"} className="flex flex-row items-start justify-start px-5 py-2.5">
            <div className="relative inline-block min-w-[46px] font-medium leading-[150%]">
              Home
            </div>
          </Link>
          <div className="flex flex-row items-start justify-start px-5 py-2.5">
            <Link
              href={"/about"}
              className="relative inline-block min-w-[69px] whitespace-nowrap font-medium leading-[150%]"
            >
              About us
            </Link>
          </div>
          <div className="flex flex-row items-start justify-start px-5 py-2.5">
            <div className="relative inline-block min-w-[62px] whitespace-nowrap font-medium leading-[150%]">{`Contact `}</div>
          </div>
          <div className="flex flex-row items-start justify-start px-5 py-2.5">
            <div className="relative whitespace-nowrap font-medium leading-[150%]">
              Policyholder Portal
            </div>
          </div>
          <button className="rounded-34xl hover:bg-crimson flex cursor-pointer flex-row items-start justify-start whitespace-nowrap bg-red-700 px-5 py-2.5 [border:none]">
            <div className="font-caption relative inline-block min-w-[113px] text-left text-base font-medium leading-[150%] text-gray-200">
              Report a Claim
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
