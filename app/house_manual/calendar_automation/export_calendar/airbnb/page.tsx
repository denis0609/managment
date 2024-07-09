'use client';
import * as React from "react";
import { useRouter } from 'next/navigation';

interface MyComponentProps {}

const MyComponent: React.FC<MyComponentProps> = () => {
  const [icalLink, setIcalLink] = React.useState<string>("");

  const router = useRouter();

  const handleIcalLinkChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIcalLink(event.target.value);
  };

  const handleCheck = () => {
    console.log("Checking iCal link:", icalLink);
    // Add logic to validate and process the iCal link
  };

  const handleBack = () => {
    router.back();
  };

  const handleContinue = () => {
    router.push(`/house_manual/calendar_automation/import_calendar`);  // Update the path to the next step
  };

  return (
    <div className="flex flex-col pb-8 mx-auto w-full bg-gray-100 max-w-[480px]">
      <div className="flex flex-col pb-5 w-full bg-sky-600 rounded-none">
        <div className="flex gap-5 justify-between w-full">
          <div className="flex gap-1 justify-center px-6 py-3 text-lg tracking-tight leading-3 text-center text-white whitespace-nowrap font-[590]">
            <div className="justify-center p-px">9:41</div>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3375cb7701cbff4aae1c67c7792c97eea6dc4587079c42fd5602cfbc1a5de409?apiKey=d756b2110af54b2291a49c0e6a10f702&" className="shrink-0 w-3.5 aspect-square" />
          </div>
          <div className="flex gap-2.5 justify-center px-6 py-3">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/235ae4871351838a2a9976141ec0941f9f9dc650bde6ba06a757682f4bcf8ba9?apiKey=d756b2110af54b2291a49c0e6a10f702&" className="shrink-0 aspect-[1.28] w-[18px]" />
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b2d261ae0fb8ff0406c4db2dc5a27d0f3761d0e20851c0880724e3ca469ed523?apiKey=d756b2110af54b2291a49c0e6a10f702&" className="shrink-0 aspect-[1.28] w-[18px]" />
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/873c4ed8b2a7837acf6866b091a6ded9e9175ab4c358bf1195c383e7cb647fbd?apiKey=d756b2110af54b2291a49c0e6a10f702&" className="shrink-0 aspect-[1.92] w-[27px]" />
          </div>
        </div>
        <div className="flex flex-col px-5 mt-4 w-full">
          <div className="text-xl font-bold text-white capitalize">Sync Calendar</div>
          <div className="self-start mt-5 text-sm text-gray-100">
            Step <span className="text-xl">1</span>/3
          </div>
          <div className="self-start mt-1.5 text-base font-bold text-white">Export my calendar</div>
          <div className="flex gap-2 mt-2.5">
            <div className="flex-1 shrink-0 h-1 bg-gray-100 rounded-md" />
            <div className="flex-1 shrink-0 h-1 rounded-md bg-white bg-opacity-40" />
            <div className="flex-1 shrink-0 h-1 rounded-md bg-white bg-opacity-40" />
          </div>
        </div>
      </div>
      <div className="flex flex-col px-5 mt-6 w-full">
        <div className="text-lg font-bold text-sky-600">Export your Ical Airbnb link</div>
        <div className="flex overflow-hidden relative flex-col pb-4 mt-4 w-full text-base aspect-[3.84] fill-white">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/706d9e09626d3c641d4bf925f91e0ad73d4ea188f8caf56e09ad6d45f74802f5?apiKey=d756b2110af54b2291a49c0e6a10f702&" className="object-cover absolute inset-0 size-full" />
          <div className="flex relative gap-5 items-start">
            <div className="justify-center items-center px-6 font-bold text-center text-white whitespace-nowrap bg-sky-600 rounded-full border-gray-100 border-solid border-[3px] h-[50px] stroke-[3px] w-[50px]">
              1
            </div>
            <div className="flex-auto mt-5 text-slate-800">Click on the link to go to your Airbnb management page</div>
          </div>
          <a
            href="https://www.airbnb.fr/hostings/listings"
            target="_blank"
            rel="noopener noreferrer"
            className="relative mx-7 mt-5 text-sky-600"
          >
            https://www.airbnb.fr/hostings/listings
          </a>
        </div>
        <div className="flex overflow-hidden relative flex-col pr-4 pb-1.5 mt-5 w-full text-base aspect-[2.47] fill-white">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/1cea0b2bce6244930ea09f35a55b45faebc2bf8ca8739a2fd9970d98f52e168d?apiKey=d756b2110af54b2291a49c0e6a10f702&" className="object-cover absolute inset-0 size-full" />
          <div className="flex relative gap-5 items-start">
            <div className="justify-center items-center px-5 font-bold text-center text-white whitespace-nowrap bg-sky-600 rounded-full border-gray-100 border-solid border-[3px] h-[50px] stroke-[3px] w-[50px]">
              2
            </div>
            <div className="flex-auto mt-5 text-slate-800">Choose the property you want to associate with the app</div>
          </div>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/40c3828ae0813c1e0bcde24e01adc2c724945ba5ddecd6a2c431bc1a115d6777?apiKey=d756b2110af54b2291a49c0e6a10f702&" className="mt-3 ml-4 aspect-[4] w-[360px]" />
        </div>
        <div className="flex overflow-hidden relative flex-col pr-4 pb-2.5 mt-5 w-full text-base aspect-[2.65] fill-white">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8be38665accf74503d548d13d85954e2a81092bf9a8a274ea476752dae00089a?apiKey=d756b2110af54b2291a49c0e6a10f702&" className="object-cover absolute inset-0 size-full" />
          <div className="flex relative gap-5">
            <div className="justify-center items-center px-6 font-bold text-center text-white whitespace-nowrap bg-sky-600 rounded-full border-gray-100 border-solid border-[3px] h-[50px] stroke-[3px] w-[50px]">
              3
            </div>
            <div className="flex-auto my-auto text-slate-800">Click on the tab: "Availability"</div>
          </div>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c924ff0f2b77a53489a4a3bfcb55afc60e4f7acd65fc6e341681b63fe8b38822?apiKey=d756b2110af54b2291a49c0e6a10f702&" className="mt-3.5 ml-4 aspect-[4.76] w-[360px]" />
        </div>
        <div className="flex overflow-hidden relative flex-col pr-4 pb-1.5 mt-5 w-full text-base aspect-[2.33] fill-white">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/1581ddac809302999ed390d6a3890fa834224085aed9c3a3d410fbf75488647d?apiKey=d756b2110af54b2291a49c0e6a10f702&" className="object-cover absolute inset-0 size-full" />
          <div className="flex relative gap-5 items-start">
            <div className="justify-center items-center px-5 font-bold text-center text-white whitespace-nowrap bg-sky-600 rounded-full border-gray-100 border-solid border-[3px] h-[50px] stroke-[3px] w-[50px]">
              4
            </div>
            <div className="flex-auto mt-5 text-slate-800">Scroll down to the bottom of the page and click "Export Calendar"</div>
          </div>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/50bbe4cd3b3a50fd0c6b8b3641b355a35e6598aad29385932a3eb64b3d517abc?apiKey=d756b2110af54b2291a49c0e6a10f702&" className="mt-3 ml-4 aspect-[3.57] w-[360px]" />
        </div>
        <div className="flex overflow-hidden relative flex-col pb-4 mt-5 w-full aspect-[1.76] fill-white">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/52c9c799a469d53841a6d1701397dac891a935973d3364b32e3356bf9674da40?apiKey=d756b2110af54b2291a49c0e6a10f702&" className="object-cover absolute inset-0 size-full" />
          <div className="flex relative gap-5 self-start text-base">
            <div className="justify-center items-center px-5 font-bold text-center text-white whitespace-nowrap bg-sky-600 rounded-full border-gray-100 border-solid border-[3px] h-[50px] stroke-[3px] w-[50px]">
              5
            </div>
            <div className="flex-auto self-start mt-5 text-slate-800">Copy the Ical link which is located inside the frame</div>
          </div>
          <div className="flex relative flex-col px-4 mt-5 text-xs text-slate-800">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f8490b3f946b107729c8b403ccced0ac9db50280e5303f71644c6aa75f4d1a7d?apiKey=d756b2110af54b2291a49c0e6a10f702&" className="w-full border-2 border-solid aspect-[3.13] border-neutral-700" />
            <div className="mt-3.5 italic">
              Warning: <span className="text-slate-800">Keep your Airbnb window open, it will be useful later</span>
            </div>
          </div>
        </div>
        <div className="flex overflow-hidden relative flex-col pb-4 mt-5 w-full text-base aspect-[1.53] fill-white">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a5385596e72bd32a184993ab13646eb828234b6a4dff8e2f84264bcd999520ce?apiKey=d756b2110af54b2291a49c0e6a10f702&" className="object-cover absolute inset-0 size-full" />
          <div className="flex relative gap-5 items-start self-start">
            <div className="justify-center items-center px-5 font-bold text-center text-white whitespace-nowrap bg-sky-600 rounded-full border-gray-100 border-solid border-[3px] h-[50px] stroke-[3px] w-[50px]">
              6
            </div>
            <div className="flex-auto mt-5 text-slate-800">Paste this link below to export your Airbnb calendar to the app</div>
          </div>
          <div className="flex relative flex-col px-4 mt-5">
            <label htmlFor="icalLink" className="text-sm text-slate-800">
              Ical link
            </label>
            <input
              id="icalLink"
              type="text"
              value={icalLink}
              onChange={handleIcalLinkChange}
              placeholder="Ex: https://www.airbnb.fr/calendar/ical/XXXXXXXX.ics?s=XXXXXXXXXXXXXXXX"
              className="px-4 pt-5 pb-8 mt-3.5 text-gray-400 bg-white rounded-xl border border-solid border-slate-300"
            />
            <button
              onClick={handleCheck}
              className="justify-center self-start px-8 py-4 mt-4 text-center text-white whitespace-nowrap bg-sky-600 bg-opacity-50 rounded-[30px]"
            >
              Check
            </button>
          </div>
        </div>
        <div className="flex gap-4 self-center mt-8 text-base text-center text-white whitespace-nowrap">
          <button onClick={handleBack} className="justify-center px-8 py-4 bg-slate-800 rounded-[30px]">
            Back
          </button>
          <button onClick={handleContinue} className="justify-center px-8 py-4 bg-sky-600 rounded-[30px]">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
