'use client'

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Guest } from "../../components/guest"; // Ensure the path is correct



export default function CheckInCheckOut(): JSX.Element {

  // const [checkIns, setCheckIns] = useState<CheckInProps[]>([]);

  // useEffect(() => {
  //   putCheckIns()
  // }, [])

  // const putCheckIns = async () => {
  //   const allCheckIns = await 
  // }


  return (
    <div className="flex flex-col items-center mx-auto w-full bg-gray-100 max-w-[480px] min-h-screen">
      <div className="flex flex-col pb-5 w-full bg-white shadow-md">
        <div className="flex justify-between items-center py-3 px-4 bg-white">
          <div className="flex items-center gap-2 text-lg font-semibold text-black">
            <div>9:41</div>
            <Image
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f55aabedc79f92832a5796449ca566cf839ba6ab5a3100cd47a574c1880b9c45?apiKey=e6ca5815e046456fa7dc3340ed86c31e&"
              width={14}
              height={14}
              className="shrink-0 w-3.5 aspect-square"
              alt="icon"
            />
          </div>
          <div className="flex items-center gap-2">
            <Image
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/500485c499f88d9550ceb0265829ada7437bccb7476ad6ee6e5c1ab067bb0930?apiKey=e6ca5815e046456fa7dc3340ed86c31e&"
              width={18}
              height={18}
              className="shrink-0 w-[18px] aspect-square"
              alt="icon"
            />
            <Image
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6224278a3f68c03a5c3e0be03694a56ab078add0750dd5a35667a57c030ea853?apiKey=e6ca5815e046456fa7dc3340ed86c31e&"
              width={18}
              height={18}
              className="shrink-0 w-[18px] aspect-square"
              alt="icon"
            />
            <Image
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4140e1c4b23f3b68ea3a9b49bc6a97459bd23e83ee64bb84f8e4430ee8cc8953?apiKey=e6ca5815e046456fa7dc3340ed86c31e&"
              width={27}
              height={14}
              className="shrink-0 w-[27px] aspect-[1.92]"
              alt="icon"
            />
          </div>
        </div>
        <div className="ml-5 mt-4 text-xl font-bold text-slate-800">
          Check In/Check Out
        </div>
      </div>
      <div className="flex flex-col px-4 mt-5">
        <div className="flex justify-between items-center text-sm text-sky-600 capitalize">
          <div className="flex items-center gap-1.5">
            <Image
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1126d46981f1be2359cb3ed0d05adac5ff0cb83ab2074780f1f52001f0cb867f?apiKey=e6ca5815e046456fa7dc3340ed86c31e&"
              width={13}
              height={13}
              className="shrink-0 w-[13px] aspect-square"
              alt="icon"
            />
            <div>Previous Week</div>
          </div>
          <div className="flex items-center gap-5 text-base text-gray-400">
            <Image
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/136e45f698e324c0d927fd85271db04c4a88fe79f3c7f9285ae25ced9f15f5bb?apiKey=e6ca5815e046456fa7dc3340ed86c31e&"
              width={20}
              height={20}
              className="shrink-0 w-5 aspect-square"
              alt="icon"
            />
            <div>May 23</div>
            <Image
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ffb729130103fae3e1dfd0fcb546c85254d394984dfac6de7fe577565de81438?apiKey=e6ca5815e046456fa7dc3340ed86c31e&"
              width={20}
              height={20}
              className="shrink-0 w-5 aspect-square"
              alt="icon"
            />
          </div>
          <div className="flex items-center gap-1.5 text-right">
            <div>Next Week</div>
            <Image
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1fa053c227a103818fbbed73aa0a4ad4178f28aaed48a92289731a2a2d03ffe1?apiKey=e6ca5815e046456fa7dc3340ed86c31e&"
              width={13}
              height={13}
              className="shrink-0 w-[13px] aspect-square"
              alt="icon"
            />
          </div>
        </div>
        <div className="flex justify-center p-1.5 mt-5 w-full text-base bg-white rounded-xl text-slate-800">
          <div className="flex gap-5 w-full">
            <button className="flex-1 px-3 py-2 text-white bg-sky-600 rounded-md">
              All
            </button>
            <button className="flex-1 px-3 py-2 bg-white rounded-md border border-gray-300">
              Check in (5)
            </button>
            <button className="flex-1 px-3 py-2 bg-white rounded-md border border-gray-300">
              Check out (2)
            </button>
          </div>
        </div>
        <div className="mt-5 text-lg text-slate-800">14 Guests</div>
        <div className="divide-y divide-gray-200">
          <Guest
            address="96091 Gretchen Canyon"
            name="Johnthan Doe"
            duration="16H"
            status="checked-in"
            imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/fb79971a9bd0f199fd45e26acd332020c7ef3bcfc6b65707bde630f4af9d9c38?apiKey=e6ca5815e046456fa7dc3340ed86c31e&"
          />
          <Guest
            address="96091 Gretchen Canyon"
            name="Johnthan Doe"
            duration="16H"
            status="checked-out"
            imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/767b618ef209f997cfb1af7c16b60ea51657a4fe2201fcdf7e74b95698a7c156?apiKey=e6ca5815e046456fa7dc3340ed86c31e&"
          />
          <Guest
            address="96091 Gretchen Canyon"
            name="Johnthan Doe"
            duration="16H"
            status="checked-in"
            imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/fb79971a9bd0f199fd45e26acd332020c7ef3bcfc6b65707bde630f4af9d9c38?apiKey=e6ca5815e046456fa7dc3340ed86c31e&"
          />
          <Guest
            address="96091 Gretchen Canyon"
            name="Johnthan Doe"
            duration="16H"
            status="checked-out"
            imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/767b618ef209f997cfb1af7c16b60ea51657a4fe2201fcdf7e74b95698a7c156?apiKey=e6ca5815e046456fa7dc3340ed86c31e&"
          />
          <Guest
            address="96091 Gretchen Canyon"
            name="Johnthan Doe"
            duration="16H"
            status="checked-in"
            imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/3719e8914675ccb41c95d75f1991a49d13946fede83e16562bcd2de9090f3240?apiKey=e6ca5815e046456fa7dc3340ed86c31e&"
          />
        </div>
      </div>
    </div>
  );
}
