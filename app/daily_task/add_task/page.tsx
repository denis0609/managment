import * as React from "react";

const AddTask: React.FC = () => {
  return (
    <div className="flex flex-col pb-8 mx-auto w-full bg-gray-100 max-w-[480px]">
      <div className="flex flex-col pb-5 w-full bg-white">
        <div className="flex gap-5 justify-between w-full">
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
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6224278a3f68c03a5c3e0be03694a56ab078add0750dd5a35667a57c030ea853?apiKey=d756b2110af54b2291a49c0e6a10f702&"
              className="shrink-0 aspect-[1.28] w-[18px]"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4140e1c4b23f3b68ea3a9b49bc6a97459bd23e83ee64bb84f8e4430ee8cc8953?apiKey=d756b2110af54b2291a49c0e6a10f702&"
              className="shrink-0 aspect-[1.92] w-[27px]"
            />
          </div>
        </div>
        <div className="self-start mt-4 ml-5 text-xl font-bold capitalize text-slate-800">
          Add Task
        </div>
      </div>
      <div className="flex flex-col px-5 mt-6 w-full">
        <div className="text-sm text-slate-800">Property</div>
        <div className="flex gap-5 px-5 py-4 mt-2.5 text-base bg-white rounded-xl border border-solid border-slate-300 text-slate-800">
          <div className="flex-auto">Select Property</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5c5b234e87789c2cf3be2dbfbb3f72c8e8750ffa91d9d3e606aa812f16d17355?apiKey=d756b2110af54b2291a49c0e6a10f702&"
            className="shrink-0 self-start w-4 aspect-square"
          />
        </div>
        <div className="mt-5 text-sm text-slate-800">Team Member</div>
        <div className="flex gap-4 self-start mt-3.5">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6df03ea7cf8facfa8c9f60099954e0a962fae4137c41b749d27862c50365fd4b?apiKey=d756b2110af54b2291a49c0e6a10f702&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6df03ea7cf8facfa8c9f60099954e0a962fae4137c41b749d27862c50365fd4b?apiKey=d756b2110af54b2291a49c0e6a10f702&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6df03ea7cf8facfa8c9f60099954e0a962fae4137c41b749d27862c50365fd4b?apiKey=d756b2110af54b2291a49c0e6a10f702&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6df03ea7cf8facfa8c9f60099954e0a962fae4137c41b749d27862c50365fd4b?apiKey=d756b2110af54b2291a49c0e6a10f702&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6df03ea7cf8facfa8c9f60099954e0a962fae4137c41b749d27862c50365fd4b?apiKey=d756b2110af54b2291a49c0e6a10f702&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6df03ea7cf8facfa8c9f60099954e0a962fae4137c41b749d27862c50365fd4b?apiKey=d756b2110af54b2291a49c0e6a10f702&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6df03ea7cf8facfa8c9f60099954e0a962fae4137c41b749d27862c50365fd4b?apiKey=d756b2110af54b2291a49c0e6a10f702&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6df03ea7cf8facfa8c9f60099954e0a962fae4137c41b749d27862c50365fd4b?apiKey=d756b2110af54b2291a49c0e6a10f702&"
            className="shrink-0 max-w-full aspect-[2.78] w-[100px]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0baee1a26b07bac3103e8ab864224e3ba9c6b260dc7014e0470f7b1839a7f722?apiKey=d756b2110af54b2291a49c0e6a10f702&"
            className="shrink-0 w-9 aspect-square"
          />
        </div>
        <div className="flex gap-5 mt-6 text-slate-800">
          <div className="flex flex-col flex-1">
            <div className="text-sm">Start Time</div>
            <div className="flex gap-5 justify-between px-5 py-4 mt-3.5 text-base bg-white rounded-xl border border-solid border-slate-300">
              <div className="my-auto">10:00 PM</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/71493fd3a9f78e7c251bd2903902a0c24bead58b662882cab95db519359ee22c?apiKey=d756b2110af54b2291a49c0e6a10f702&"
                className="shrink-0 w-4 aspect-square"
              />
            </div>
          </div>
          <div className="flex flex-col flex-1">
            <div className="text-sm">End Time</div>
            <div className="flex gap-5 justify-between px-5 py-4 mt-3.5 text-base bg-white rounded-xl border border-solid border-slate-300">
              <div className="my-auto">10:00 PM</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/71493fd3a9f78e7c251bd2903902a0c24bead58b662882cab95db519359ee22c?apiKey=d756b2110af54b2291a49c0e6a10f702&"
                className="shrink-0 w-4 aspect-square"
              />
            </div>
          </div>
        </div>
        <div className="mt-6 text-sm text-slate-800">Price</div>
        <div className="flex gap-5 justify-between px-5 py-4 mt-3.5 text-base whitespace-nowrap bg-white rounded-xl border border-solid border-slate-300 text-slate-800">
          <div className="my-auto">30$</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/64ad4458ed48882f3af0b464c0d375add4fa7d4ca0dab3aa7a8d1d633be73261?apiKey=d756b2110af54b2291a49c0e6a10f702&"
            className="shrink-0 w-4 aspect-square"
          />
        </div>
        <div className="flex gap-4 self-center mt-96 text-base text-center text-white whitespace-nowrap">
          <div className="justify-center px-8 py-4 bg-slate-800 rounded-[30px]">
            Cancel
          </div>
          <div className="justify-center px-8 py-4 bg-sky-600 rounded-[30px]">
            Save
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddTask;
