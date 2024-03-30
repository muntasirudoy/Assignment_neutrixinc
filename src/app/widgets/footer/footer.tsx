import CustomerServiceSupport from "./customer-service-support";

function Footer() {
  return (
    <>
      <footer className="font-caption  relative z-[1] box-border flex max-w-full flex-col items-center justify-start gap-[90px] self-stretch overflow-hidden bg-gray-800 px-5 pb-[15px] pt-[74px] text-center text-sm text-gray-900">
        <div className="container">
          <div className="box-border flex w-full flex-row items-start justify-start py-0 pl-5 pr-[21px]">
            <div className="mq1050:flex-wrap flex max-w-full flex-1 flex-row items-start justify-between gap-[20px]">
              <CustomerServiceSupport />
              <CustomerServiceSupport />
              <CustomerServiceSupport />
            </div>
          </div>
          <div className="z-[3] hidden h-[21px] w-0" />
        </div>
      </footer>
      <footer className="flex w-full flex-row flex-wrap items-start justify-between gap-[20px] bg-white py-4">
        <div className="container flex justify-between">
          <div className="relative z-[1] inline-block max-w-full ">
            <span>{`Copyright 2022 USA Underwriters `}</span>
            <span className="font-medium">|</span>
            <span>{` `}</span>
            <span className="font-semibold">Privacy Policy | Terms of Use</span>
          </div>
          <div className="relative z-[1] inline-block  whitespace-nowrap">
            <a className="text-[inherit]" href="https://www.neutrix.co/" target="_blank">
              Neutrix
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
