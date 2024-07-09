'use client';
import React, { useState } from "react";
import { useRouter } from 'next/navigation';

interface RoomProps {
  name: string;
  order: number;
  onRename: (newName: string) => void;
  onReorder: (newOrder: number) => void;
}

const Room: React.FC<RoomProps> = ({ name, order, onRename, onReorder }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(name);

  const handleRename = () => {
    if (isEditing) {
      onRename(newName);
      setIsEditing(false);
    } else {
      setIsEditing(true);
    }
  };

  const handleReorder = () => {
    const newOrder = prompt("Enter new order:", order.toString());
    if (newOrder !== null) {
      onReorder(parseInt(newOrder, 10));
    }
  };

  return (
    <div className="flex flex-col p-4 mt-4 w-full bg-white rounded-2xl shadow-sm">
      {isEditing ? (
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          className="text-sm font-bold text-slate-800"
        />
      ) : (
        <div className="text-sm font-bold text-slate-800">{name}</div>
      )}
      <div className="flex gap-4 justify-between mt-3 w-full text-base">
        <div className="text-slate-800">
          Order of appearance: <span className="text-slate-800">{order}</span>
        </div>
        <div className="flex gap-4 text-sky-600 whitespace-nowrap">
          <button className="flex gap-1.5" onClick={handleRename}>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/edfb1def1034d72c47fed17be336fa0ea32c6616726cb73fc2c5d021dce0a5c8?apiKey=d756b2110af54b2291a49c0e6a10f702&"
              className="shrink-0 aspect-square w-[18px]"
              alt="Rename"
            />
            <div className="my-auto">{isEditing ? "Save" : "Rename"}</div>
          </button>
          <button onClick={handleReorder}>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b3a453f28264d49b648b909f8d8db49289ce773c3229e8a438f8b318cea72409?apiKey=d756b2110af54b2291a49c0e6a10f702&"
              className="shrink-0 aspect-square w-[18px]"
              alt="Reorder"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

interface MyComponentProps {}

const MyComponent: React.FC<MyComponentProps> = () => {
  const [rooms, setRooms] = useState([
    { name: "Entrance", order: 1 },
    { name: "Living room", order: 2 },
    { name: "Kitchen", order: 3 },
    { name: "Bedroom", order: 4 },
  ]);

  const handleRename = (index: number, newName: string) => {
    const newRooms = [...rooms];
    newRooms[index].name = newName;
    setRooms(newRooms);
  };

  const handleReorder = (index: number, newOrder: number) => {
    const newRooms = [...rooms];
    newRooms[index].order = newOrder;
    setRooms(newRooms.sort((a, b) => a.order - b.order));
  };
  const router = useRouter();

  const navigateToPreview = () => {
    router.push('/house_manual/presentation_automation/preview');
  };

  const handleContinue = () => {
    navigateToPreview()
  };


  const handleBack = () => {
    console.log("Back button clicked");
  };


  return (
    <div className="flex flex-col pb-8 mx-auto w-full bg-gray-100 max-w-[480px]">
      <div className="flex flex-col pb-5 w-full bg-sky-600 rounded-none">
        <div className="flex gap-5 justify-between w-full">
          <div className="flex gap-1 justify-center px-6 py-3 text-lg tracking-tight leading-3 text-center text-white whitespace-nowrap font-[590]">
            <div className="justify-center p-px">9:41</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3375cb7701cbff4aae1c67c7792c97eea6dc4587079c42fd5602cfbc1a5de409?apiKey=d756b2110af54b2291a49c0e6a10f702&"
              className="shrink-0 w-3.5 aspect-square"
              alt="Signal"
            />
          </div>
          <div className="flex gap-2.5 justify-center px-6 py-3">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/235ae4871351838a2a9976141ec0941f9f9dc650bde6ba06a757682f4bcf8ba9?apiKey=d756b2110af54b2291a49c0e6a10f702&"
              className="shrink-0 aspect-[1.28] w-[18px]"
              alt="Wifi"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b2d261ae0fb8ff0406c4db2dc5a27d0f3761d0e20851c0880724e3ca469ed523?apiKey=d756b2110af54b2291a49c0e6a10f702&"
              className="shrink-0 aspect-[1.28] w-[18px]"
              alt="Bluetooth"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/873c4ed8b2a7837acf6866b091a6ded9e9175ab4c358bf1195c383e7cb647fbd?apiKey=d756b2110af54b2291a49c0e6a10f702&"
              className="shrink-0 aspect-[1.92] w-[27px]"
              alt="Battery"
            />
          </div>
        </div>
        <div className="flex flex-col px-5 mt-4 w-full">
          <div className="text-xl font-bold text-white capitalize">
            Presentation Automation
          </div>
          <div className="self-start mt-6 text-sm text-right text-gray-100">
            Step <span className="text-xl">2</span>/4
          </div>
          <div className="self-start mt-1.5 text-base font-bold text-white">
            Order of appearance
          </div>
          <div className="flex gap-2 mt-2.5">
            <div className="flex-1 shrink-0 h-1 bg-gray-100 rounded-md" />
            <div className="flex-1 shrink-0 h-1 bg-white rounded-md" />
            <div className="flex-1 shrink-0 h-1 rounded-md bg-white bg-opacity-40" />
            <div className="flex-1 shrink-0 h-1 rounded-md bg-white bg-opacity-40" />
          </div>
        </div>
      </div>
      <div className="flex flex-col px-5 mt-6 w-full">
        <div className="text-base font-bold text-sky-600">
          Arrange the rooms in order for logical digital visit
        </div>
        {rooms.map((room, index) => (
          <Room
            key={index}
            name={room.name}
            order={room.order}
            onRename={(newName) => handleRename(index, newName)}
            onReorder={(newOrder) => handleReorder(index, newOrder)}
          />
        ))}
        <div className="flex gap-4 self-center mt-64 text-base text-center text-white whitespace-nowrap">
          <button
            className="justify-center px-8 py-4 bg-slate-800 rounded-[30px]"
            onClick={handleBack}
          >
            Back
          </button>
          <button
            className="justify-center px-8 py-4 bg-sky-600 rounded-[30px]"
            onClick={handleContinue}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyComponent;