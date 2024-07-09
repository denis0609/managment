'use client';
import * as React from "react";
import { useRouter } from 'next/navigation';

interface RoomProps {
  name: string;
  image: string;
  isSelected: boolean;
  onSelect: () => void;
  count?: number;
}

const Room: React.FC<RoomProps> = ({ name, image, isSelected, onSelect, count }) => (
  <button
    className="flex overflow-hidden relative flex-col pt-4 aspect-[1.09] w-[191px]"
    onClick={onSelect}
  >
    <img loading="lazy" src={image} className="object-cover absolute inset-0 size-full" />
    {isSelected ? (
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8a26eb21ce4a7957ea92fa3d8482bc055834c12ac92839f00b9579a372737368?apiKey=d756b2110af54b2291a49c0e6a10f702&" className="self-end w-6 aspect-square" />
    ) : (
      <div className="relative shrink-0 self-end w-6 h-6 rounded-md border border-white border-solid bg-white bg-opacity-20" />
    )}
    {count !== undefined ? (
      <div className="relative justify-center items-center self-end w-6 h-6 bg-sky-600 rounded-md border border-sky-600 border-solid">
        {count}
      </div>
    ) : null}
    <div className="relative justify-center items-start px-4 py-5 mt-24 rounded-none">
      {name}
    </div>
  </button>
);

function MyComponent() {
  const [selectedRooms, setSelectedRooms] = React.useState<Set<string>>(new Set(["Entrance", "Kitchen"]));
  const [bedroomCount, setBedroomCount] = React.useState(2);

  const router = useRouter();

  const navigateToDefineOrderCleaning = () => {
    router.push('/house_manual/housekeeping_automation/order');
  };

  const navigateBack = () => {
    router.back();
  };

  const toggleRoom = (roomName: string) => {
    setSelectedRooms((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(roomName)) {
        newSet.delete(roomName);
      } else {
        newSet.add(roomName);
      }
      return newSet;
    });
  };

  const incrementBedroomCount = () => {
    setBedroomCount((prev) => prev + 1);
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
          <div className="text-xl font-bold text-white capitalize">
            Presentation Automation
          </div>
          <div className="self-start mt-6 text-sm text-gray-100">
            Step <span className="text-xl">3</span>/4
          </div>
          <div className="self-start mt-1.5 text-base font-bold text-white">
            Cleaning room by room
          </div>
          <div className="flex gap-2 mt-2.5">
            <div className="flex-1 shrink-0 h-1 bg-gray-100 rounded-md" />
            <div className="flex-1 shrink-0 h-1 bg-white rounded-md" />
            <div className="flex-1 shrink-0 h-1 bg-white rounded-md" />
            <div className="flex-1 shrink-0 h-1 rounded-md bg-white bg-opacity-40" />
          </div>
        </div>
      </div>
      <div className="flex flex-col px-5 mt-6 w-full text-sm text-white">
        <div className="text-lg font-bold text-sky-600">
          Select the parts that need to be cleaned?
        </div>
        <div className="flex gap-2.5 mt-4">
          <Room
            name="Entrance"
            image="https://cdn.builder.io/api/v1/image/assets/TEMP/a30b32c71773772993f2a29ba8f7c7b9a42e360a62219641fcfc51da9ef212af?apiKey=d756b2110af54b2291a49c0e6a10f702&"
            isSelected={selectedRooms.has("Entrance")}
            onSelect={() => toggleRoom("Entrance")}
          />
          <Room
            name="Living room"
            image="https://cdn.builder.io/api/v1/image/assets/TEMP/a5513480ade0ce50d2ef2b8fd7bc5831e1e428d6b3083b115938c02ee3585f28?apiKey=d756b2110af54b2291a49c0e6a10f702&"
            isSelected={selectedRooms.has("Living room")}
            onSelect={() => toggleRoom("Living room")}
          />
        </div>
        <div className="flex gap-2.5 mt-3">
          <Room
            name="Dining room"
            image="https://cdn.builder.io/api/v1/image/assets/TEMP/72b7213413ad3f1fd9b8ddef6d7cf45ecd2f3c1032d1dc2ee6104355a668d725?apiKey=d756b2110af54b2291a49c0e6a10f702&"
            isSelected={selectedRooms.has("Dining room")}
            onSelect={() => toggleRoom("Dining room")}
          />
          <Room
            name="Kitchen"
            image="https://cdn.builder.io/api/v1/image/assets/TEMP/ce694a711ef6534240ce089b88205e4e5c927ffc5ec7952fc8926369b12860ed?apiKey=d756b2110af54b2291a49c0e6a10f702&"
            isSelected={selectedRooms.has("Kitchen")}
            onSelect={() => toggleRoom("Kitchen")}
          />
        </div>
        <div className="flex gap-2.5 mt-3 whitespace-nowrap">
          <button
            className="flex overflow-hidden relative flex-col pt-4 aspect-[1.09] w-[191px]"
            onClick={incrementBedroomCount}
          >
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/36017f00a000e3c1705f78cce91313224b41f7ba077b9b83bc4d497bea36e761?apiKey=d756b2110af54b2291a49c0e6a10f702&" className="object-cover absolute inset-0 size-full" />
            <div className="relative justify-center items-center self-end w-6 h-6 bg-sky-600 rounded-md border border-sky-600 border-solid">
              {bedroomCount}
            </div>
            <div className="flex relative gap-5 justify-between items-start px-4 pt-2 pb-4 mt-24 rounded-none">
              <div className="mt-3">Bedroom</div>
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8e8a8d7cb8d13212b8e6a337ff87b87faa500fcbf7e818bf8ed5a59091d3e581?apiKey=d756b2110af54b2291a49c0e6a10f702&" className="shrink-0 aspect-[2.5] w-[60px]" />
            </div>
          </button>
          <Room
            name="Bathroom"
            image="https://cdn.builder.io/api/v1/image/assets/TEMP/a30b32c71773772993f2a29ba8f7c7b9a42e360a62219641fcfc51da9ef212af?apiKey=d756b2110af54b2291a49c0e6a10f702&"
            isSelected={selectedRooms.has("Bathroom")}
            onSelect={() => toggleRoom("Bathroom")}
          />
        </div>
        <div className="flex gap-2.5 mt-3">
          <Room
            name="Toilet"
            image="https://cdn.builder.io/api/v1/image/assets/TEMP/cc241620471ccade06b8016d4a88149945ced3196ec5e431aa250831fa953e3f?apiKey=d756b2110af54b2291a49c0e6a10f702&"
            isSelected={selectedRooms.has("Toilet")}
            onSelect={() => toggleRoom("Toilet")}
          />
          <Room
            name="Dressing room"
            image="https://cdn.builder.io/api/v1/image/assets/TEMP/34c82d59f9feef10fda7edaafe89b5f7801238b5d2073dca8e32c7593a1faa34?apiKey=d756b2110af54b2291a49c0e6a10f702&"
            isSelected={selectedRooms.has("Dressing room")}
            onSelect={() => toggleRoom("Dressing room")}
          />
        </div>
        <div className="flex gap-4 self-center mt-8 text-base text-center whitespace-nowrap">
          <button 
            onClick={navigateBack} 
            className="justify-center px-8 py-4 bg-slate-800 rounded-[30px]"
          >
            Back
          </button>
          <button 
            onClick={navigateToDefineOrderCleaning} 
            className="justify-center px-8 py-4 bg-sky-600 rounded-[30px]"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default MyComponent;
