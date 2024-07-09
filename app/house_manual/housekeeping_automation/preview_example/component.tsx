import * as React from 'react';

const MyComponent: React.FC = () => {
  return (
    <div className="flex flex-col items-center pb-8 mx-auto w-full bg-gray-100 max-w-[480px]">
      <div className="flex gap-5 justify-between self-stretch w-full">
        <div className="flex gap-1 justify-center px-6 py-3 text-lg tracking-tight leading-3 text-center text-black whitespace-nowrap font-[590]">
          <div className="justify-center p-px">9:41</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f55aabedc79f92832a5796449ca566cf839ba6ab5a3100cd47a574c1880b9c45?apiKey=d756b2110af54b2291a49c0e6a10f702&"
            className="shrink-0 w-3.5 aspect-square"
          />
        </div>
        <div className="flex gap-2.5 justify-center px-6 py-3">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/500485c499f88d9550ceb0265829ada7437bccb7476ad6ee6e5c1ab067bb0930?apiKey=d756b2110af54b2291a49c0e6a10f702&"
            className="shrink-0 aspect-[1.28] w-[18px]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b758dec230011747af2734df3d80950a15f75c839697b9a1c7f0353df7454040?apiKey=d756b2110af54b2291a49c0e6a10f702&"
            className="shrink-0 aspect-[1.28] w-[18px]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4140e1c4b23f3b68ea3a9b49bc6a97459bd23e83ee64bb84f8e4430ee8cc8953?apiKey=d756b2110af54b2291a49c0e6a10f702&"
            className="shrink-0 aspect-[1.92] w-[27px]"
          />
        </div>
      </div>
      <div className="mt-4 text-2xl font-bold text-center text-sky-600">
        Your housekeeping tasks
      </div>
      <div className="flex gap-2.5 mt-5 w-full text-center max-w-[392px]">
        <div className="flex flex-col flex-1 px-6 py-4 bg-white rounded-2xl shadow-sm">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5d5b8e710ef1c0a74dc8ab975c10c7f2469320bec86058dc01203b70746dfb77?apiKey=d756b2110af54b2291a49c0e6a10f702&"
            className="self-center aspect-square w-[45px]"
          />
          <div className="mt-5 text-base text-slate-800">How to get there</div>
          <div className="justify-center px-6 py-2.5 mt-4 text-sm text-white whitespace-nowrap bg-sky-600 rounded-[30px]">
            See
          </div>
        </div>
        <div className="flex flex-col flex-1 items-center px-6 py-4 bg-white rounded-2xl shadow-sm">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/23aeb7f0dfe9009f1c69096b7a3074b0201e9b39351783fe1feef205284eb76c?apiKey=d756b2110af54b2291a49c0e6a10f702&"
            className="aspect-square w-[45px]"
          />
          <div className="mt-5 text-base text-slate-800">Before cleaning</div>
          <div className="justify-center self-stretch px-6 py-2.5 mt-4 text-sm text-white whitespace-nowrap bg-sky-600 rounded-[30px]">
            See
          </div>
        </div>
      </div>
      <div className="flex gap-2.5 mt-5 w-full text-center max-w-[392px]">
        <div className="flex flex-col flex-1 items-center px-6 py-4 bg-white rounded-2xl shadow-sm">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/eff7d4f78a90f853353d91736d37a9125479fcca88346ec6f12f15126b1a7c3f?apiKey=d756b2110af54b2291a49c0e6a10f702&"
            className="aspect-square w-[45px]"
          />
          <div className="mt-5 text-base text-slate-800">Pieces to clean</div>
          <div className="justify-center self-stretch px-6 py-2.5 mt-5 text-sm text-white whitespace-nowrap bg-sky-600 rounded-[30px]">
            See
          </div>
        </div>
        <div className="flex flex-col flex-1 items-center px-6 py-4 bg-white rounded-2xl shadow-sm">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/67f0c840491ddd65bdfe6256adea5da98b89ed2b5144a029ff6fb853bb91cc8a?apiKey=d756b2110af54b2291a49c0e6a10f702&"
            className="aspect-square w-[45px]"
          />
          <div className="mt-5 text-base text-slate-800">After cleaning</div>
          <div className="justify-center self-stretch px-6 py-2.5 mt-4 text-sm text-white whitespace-nowrap bg-sky-600 rounded-[30px]">
            See
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center px-16 py-4 mt-5 w-full text-center bg-white rounded-2xl shadow-sm max-w-[392px]">
        <div className="flex flex-col items-center max-w-full w-[185px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/736d214d4d4f29efbbe8751967504c19e232d867199c5bdcab75190dfc4e6f64?apiKey=d756b2110af54b2291a49c0e6a10f702&"
            className="aspect-square w-[45px]"
          />
          <div className="self-stretch mt-5 text-base text-slate-800">
            keylock change (optional)
          </div>
          <div className="justify-center px-6 py-2.5 mt-4 text-sm text-white whitespace-nowrap bg-sky-600 rounded-[30px]">
            See
          </div>
        </div>
      </div>
      <div className="flex gap-4 mt-56 text-base text-center text-white whitespace-nowrap">
        <div className="justify-center px-8 py-4 bg-slate-800 rounded-[30px]">
          Back
        </div>
        <div className="justify-center px-8 py-4 bg-sky-600 rounded-[30px]">
          Continue
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
