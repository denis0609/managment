import * as React from "react";
import Image from "next/image";

type GuestProps = {
  address: string;
  name: string;
  duration: string;
  status: "checked-in" | "checked-out";
  imageSrc: string;
};

export const Guest: React.FC<GuestProps> = ({ address, name, duration, status, imageSrc }) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 px-3.5 py-2.5 mt-4 bg-white rounded-2xl shadow-sm border border-gray-200">
      <Image loading="lazy" src={imageSrc} width={107} height={107} className="shrink-0 w-full md:w-[107px]" alt="guest" />
      <div className="flex flex-col justify-between">
        <div className="text-sm text-slate-800">
          <div className="font-bold">{address}</div>
          <div className="flex gap-4 mt-2 text-gray-500">
            <div className="flex gap-1.5">
              <Image loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9f05d880946f460f32b4a9940c9dae0a418c9a5115ae20fe6e7451cfc9a35b00?apiKey=e6ca5815e046456fa7dc3340ed86c31e&" width={16} height={16} className="shrink-0 w-4 aspect-square" alt="icon" />
              <div>{name}</div>
            </div>
            <div className="flex gap-1.5">
              <Image loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6c8f02db1dbe11dd8aceb2f85c07bde397cfaa52a93e6318496ae6e61f740eb1?apiKey=e6ca5815e046456fa7dc3340ed86c31e&" width={16} height={16} className="shrink-0 w-4 aspect-square" alt="icon" />
              <div>{duration}</div>
            </div>
          </div>
        </div>
        <div className="flex gap-4 mt-4">
          <Image loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/af0039707a37542b38b05438a211e6dd2a3796a0567ebd7a8916405812e55b2e?apiKey=e6ca5815e046456fa7dc3340ed86c31e&" width={18} height={18} className="shrink-0 w-[18px] aspect-square" alt="icon" />
          <Image loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/367ca4a6275a567c4411a6568b4eaec4175e2808dbccef169a4cfc8225938a81?apiKey=e6ca5815e046456fa7dc3340ed86c31e&" width={18} height={18} className="shrink-0 w-[18px] aspect-square" alt="icon" />
          <Image loading="lazy" src={status === "checked-in" ? "https://cdn.builder.io/api/v1/image/assets/TEMP/729569554e1d1af944dff16955b56e78519144365d5450751c254216449fbeea?apiKey=e6ca5815e046456fa7dc3340ed86c31e&" : "https://cdn.builder.io/api/v1/image/assets/TEMP/e6bf5702d923ff61b7720c8e750377dd5025c46d63d545ece0eb88870243bf78?apiKey=e6ca5815e046456fa7dc3340ed86c31e&"} width={18} height={18} className="shrink-0 w-[18px] aspect-square" alt="icon" />
        </div>
        <div className={`text-right ${status === "checked-in" ? "text-green-500" : "text-red-500"}`}>
          {status === "checked-in" ? "Checked-in" : "Checked-Out"}
        </div>
      </div>
    </div>
  );
};
