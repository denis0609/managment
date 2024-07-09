'use client';
import * as React from "react";
import { useRouter } from 'next/navigation';

interface RoomProps {
  name: string;
  order: number;
  isActive: boolean;
  onRename: () => void;
  onReorder: () => void;
}

const Room: React.FC<RoomProps> = ({ name, order, isActive, onRename, onReorder }) => (
  <div className={`flex flex-col p-4 mt-4 w-full bg-white rounded-2xl shadow-sm ${isActive ? 'border-2 border-sky-600' : ''}`}>
    <div className="text-sm font-bold text-slate-800">{name}</div>
    <div className="flex gap-4 justify-between mt-3 w-full text-base">
      <div className={isActive ? "text-slate-800" : "text-gray-400"}>
        Order of appearance: <span>{order}</span>
      </div>
      <div className="flex gap-4 text-sky-600 whitespace-nowrap">
        <button className="flex gap-1.5" onClick={onRename}>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/edfb1def1034d72c47fed17be336fa0ea32c6616726cb73fc2c5d021dce0a5c8?apiKey=d756b2110af54b2291a49c0e6a10f702&" className="shrink-0 aspect-square w-[18px]" />
          <div className="my-auto">Rename</div>
        </button>
        <button onClick={onReorder}>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b3a453f28264d49b648b909f8d8db49289ce773c3229e8a438f8b318cea72409?apiKey=d756b2110af54b2291a49c0e6a10f702&" className="shrink-0 aspect-square w-[18px]" />
        </button>
      </div>
    </div>
  </div>
);

interface MyComponentProps {}

const MyComponent: React.FC<MyComponentProps> = () => {
  const [rooms, setRooms] = React.useState([
    { id: 1, name: "Entrance", order: 1 },
    { id: 2, name: "Living room", order: 2 },
    { id: 3, name: "Kitchen", order: 3 },
    { id: 4, name: "Bedroom", order: 4 },
  ]);

  const router = useRouter();

  const navigateToDefineRoomsToClean = () => {
    router.push('/house_manual/housekeeping_automation/task_todo_in_all_rooms');
  };

  const [activeRoom, setActiveRoom] = React.useState<number | null>(null);

  const handleRename = (id: number) => {
    const newName = prompt("Enter new room name:");
    if (newName) {
      setRooms(rooms.map(room => room.id === id ? { ...room, name: newName } : room));
    }
  };

  const handleReorder = (id: number) => {
    const newOrder = prompt("Enter new order (1-4):");
    if (newOrder && !isNaN(Number(newOrder)) && Number(newOrder) >= 1 && Number(newOrder) <= 4) {
      setRooms(rooms.map(room => room.id === id ? { ...room, order: Number(newOrder) } : room));
    }
  };

  const handleContinue = () => {
    // Your continue logic here
    navigateToDefineRoomsToClean();
  };

  const handleBack = () => {
    // Your back logic here
    router.back();
  };

  return (
    <div className="flex flex-col pb-20 mx-auto w-full bg-gray-100 max-w-[480px]">
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
      <div className="flex flex-col px-5 mt-6 w-full">
        <div className="text-base font-bold text-sky-600">
          Arrange the rooms in order for logical digital visit
        </div>
        {rooms.sort((a, b) => a.order - b.order).map((room) => (
          <Room
            key={room.id}
            name={room.name}
            order={room.order}
            isActive={activeRoom === room.id}
            onRename={() => handleRename(room.id)}
            onReorder={() => handleReorder(room.id)}
          />
        ))}
      </div>
      <div className="flex gap-5 mt-6 justify-center">
        <button
          onClick={handleBack}
          className="justify-center px-8 py-4 mt-4 text-center text-white whitespace-nowrap bg-gray-600 rounded-[30px] hover:bg-gray-700 transition-colors"
        >
          Back
        </button>
        <button
          onClick={handleContinue}
          className="justify-center px-8 py-4 mt-4 text-center text-white whitespace-nowrap bg-sky-600 rounded-[30px] hover:bg-sky-700 transition-colors"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default MyComponent;
