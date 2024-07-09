'use client';
import React, { useState } from "react";

interface MyComponentProps {}

const MyComponent: React.FC<MyComponentProps> = () => {
  const [signOnArrival, setSignOnArrival] = useState<boolean>(true);
  const [signOnDeparture, setSignOnDeparture] = useState<boolean>(true);
  const [entryDescription, setEntryDescription] = useState<string>("Lorem ipsum dolor sit amet");

  const handleImageUpload = () => {
    // Image upload logic here
  };

  const handleBack = () => {
    // Back button logic here
  };

  const handleContinue = () => {
    // Continue button logic here
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
          <div className="text-xl font-bold text-white capitalize">Presentation Automation</div>
          <div className="self-start mt-6 text-sm text-right text-gray-100">
            Step <span className="text-xl">3</span>/4
          </div>
          <div className="self-start mt-1.5 text-base font-bold text-white">Digital Presentation</div>
          <div className="flex gap-2 mt-2.5">
            <div className="flex-1 shrink-0 h-1 bg-gray-100 rounded-md" />
            <div className="flex-1 shrink-0 h-1 bg-white rounded-md" />
            <div className="flex-1 shrink-0 h-1 bg-white rounded-md" />
            <div className="flex-1 shrink-0 h-1 rounded-md bg-white bg-opacity-40" />
          </div>
        </div>
      </div>
      <div className="flex flex-col px-5 mt-6 w-full text-base">
        <div className="font-bold text-slate-800">Let's organize the digital presentation of your accommodation</div>
        <div className="mt-6 text-slate-800">When the tenants arrive, does the service provider have to have anything signed?</div>
        <div className="flex gap-4 self-start mt-3 whitespace-nowrap">
          <button className={`flex gap-2 ${signOnArrival ? 'text-sky-600' : 'text-zinc-500'}`} onClick={() => setSignOnArrival(true)}>
            {signOnArrival ? (
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7ec7b9466ef1a366f32a741d7b0c39262b99366c8ba1f55466162415b6b79032?apiKey=d756b2110af54b2291a49c0e6a10f702&" className="shrink-0 aspect-square w-[26px]" />
            ) : (
              <div className="shrink-0 bg-gray-100 rounded-full border border-solid border-zinc-500 h-[26px] stroke-[1px] w-[26px]" />
            )}
            <div className="my-auto">Yes</div>
          </button>
          <button className={`flex gap-2 ${!signOnArrival ? 'text-sky-600' : 'text-zinc-500'}`} onClick={() => setSignOnArrival(false)}>
            {!signOnArrival ? (
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7ec7b9466ef1a366f32a741d7b0c39262b99366c8ba1f55466162415b6b79032?apiKey=d756b2110af54b2291a49c0e6a10f702&" className="shrink-0 aspect-square w-[26px]" />
            ) : (
              <div className="shrink-0 bg-gray-100 rounded-full border border-solid border-zinc-500 h-[26px] stroke-[1px] w-[26px]" />
            )}
            <div className="my-auto">No</div>
          </button>
        </div>
        <div className="mt-6 text-slate-800">When the tenants leave, does the service provider have to make them sign anything?</div>
        <div className="flex gap-4 self-start mt-3 whitespace-nowrap">
          <button className={`flex gap-2 ${signOnDeparture ? 'text-sky-600' : 'text-zinc-500'}`} onClick={() => setSignOnDeparture(true)}>
            {signOnDeparture ? (
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7ec7b9466ef1a366f32a741d7b0c39262b99366c8ba1f55466162415b6b79032?apiKey=d756b2110af54b2291a49c0e6a10f702&" className="shrink-0 aspect-square w-[26px]" />
            ) : (
              <div className="shrink-0 bg-gray-100 rounded-full border border-solid border-zinc-500 h-[26px] stroke-[1px] w-[26px]" />
            )}
            <div className="my-auto">Yes</div>
          </button>
          <button className={`flex gap-2 ${!signOnDeparture ? 'text-sky-600' : 'text-zinc-500'}`} onClick={() => setSignOnDeparture(false)}>
            {!signOnDeparture ? (
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7ec7b9466ef1a366f32a741d7b0c39262b99366c8ba1f55466162415b6b79032?apiKey=d756b2110af54b2291a49c0e6a10f702&" className="shrink-0 aspect-square w-[26px]" />
            ) : (
              <div className="shrink-0 bg-gray-100 rounded-full border border-solid border-zinc-500 h-[26px] stroke-[1px] w-[26px]" />
            )}
            <div className="my-auto">No</div>
          </button>
        </div>
        <div className="mt-6 text-2xl font-bold text-sky-600">Entrance</div>
        <div className="mt-5 text-sm text-slate-800">Post one or more photos of your Entry here</div>
        <button
          className="flex flex-col justify-center px-6 py-11 mt-2.5 text-sm font-semibold rounded-xl border border-dashed border-slate-400 text-stone-950"
          onClick={handleImageUpload}
        >
          <div className="flex flex-col px-20">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3a4821e154145b4a2075548c540be266be124290c89bfe6e0de295b116e48dbc?apiKey=d756b2110af54b2291a49c0e6a10f702&" className="self-center w-8 aspect-square" />
            <div className="mt-4">
              <span className="text-teal-700">Choose </span>
              <span className="">image to upload...</span>
            </div>
          </div>
        </button>
        <div className="mt-5 text-sm text-slate-800">Write a few words here to introduce the space</div>
        <textarea
          className="items-start px-5 pt-5 pb-24 mt-2.5 text-gray-400 bg-white rounded-xl border border-solid border-slate-300 w-full"
          value={entryDescription}
          onChange={(e) => setEntryDescription(e.target.value)}
        />
        <div className="flex gap-4 self-center mt-8 text-center text-white whitespace-nowrap">
          <button className="justify-center px-8 py-4 bg-slate-800 rounded-[30px]" onClick={handleBack}>
            Back
          </button>
          <button className="justify-center px-8 py-4 bg-sky-600 rounded-[30px]" onClick={handleContinue}>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyComponent;