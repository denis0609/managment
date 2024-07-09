'use client';
import * as React from "react";
import { useRouter } from 'next/navigation';

type ProgressBarProps = {
  completed: number;
  total: number;
};

type TaskButtonProps = {
  text: string;
  isActive: boolean;
  onClick: () => void;
};

const ProgressBar: React.FC<ProgressBarProps> = ({ completed, total }) => {
  const segments = Array.from({ length: total }, (_, index) => (
    <div
      key={index}
      className={`flex-1 shrink-0 h-1 rounded-md ${
        index < completed
          ? "bg-white"
          : index === completed
          ? "bg-gray-100"
          : "bg-white bg-opacity-40"
      }`}
    />
  ));

  return <div className="flex gap-2 mt-2.5">{segments}</div>;
};

const TaskButton: React.FC<TaskButtonProps> = ({ text, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`px-5 py-2.5 rounded-[30px] ${
      isActive
        ? "text-white bg-sky-600"
        : "text-sky-600 border border-sky-600 border-solid"
    }`}
  >
    {text}
  </button>
);

const MyComponent: React.FC = () => {
  const [tasks, setTasks] = React.useState([
    { text: "Vacuum all rooms", isActive: true },
    { text: "Mop the floor", isActive: false },
    { text: "Clean all dirty windows", isActive: false },
    { text: "Clean door handles and switches", isActive: true },
  ]);

  const router = useRouter();

  const toggleTask = (index: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, i) =>
        i === index ? { ...task, isActive: !task.isActive } : task
      )
    );
  };

  const handleBack = () => {
    router.back();
  };

  const handleContinue = () => {
    router.push('/house_manual/housekeeping_automation/define_clean_in_rooms');
  };

  return (
    <main className="flex flex-col pb-20 mx-auto w-full bg-gray-100 max-w-[480px]">
      <header className="flex flex-col pb-5 w-full bg-sky-600 rounded-none">
        <div className="flex gap-5 justify-between w-full">
          <div className="flex gap-1 justify-center px-6 py-3 text-lg tracking-tight leading-3 text-center text-white whitespace-nowrap font-[590]">
            <time className="justify-center p-px">9:41</time>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3375cb7701cbff4aae1c67c7792c97eea6dc4587079c42fd5602cfbc1a5de409?apiKey=d756b2110af54b2291a49c0e6a10f702&"
              className="shrink-0 w-3.5 aspect-square"
              alt=""
            />
          </div>
          <div className="flex gap-2.5 justify-center px-6 py-3">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/235ae4871351838a2a9976141ec0941f9f9dc650bde6ba06a757682f4bcf8ba9?apiKey=d756b2110af54b2291a49c0e6a10f702&"
              className="shrink-0 aspect-[1.28] w-[18px]"
              alt=""
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b2d261ae0fb8ff0406c4db2dc5a27d0f3761d0e20851c0880724e3ca469ed523?apiKey=d756b2110af54b2291a49c0e6a10f702&"
              className="shrink-0 aspect-[1.28] w-[18px]"
              alt=""
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/873c4ed8b2a7837acf6866b091a6ded9e9175ab4c358bf1195c383e7cb647fbd?apiKey=d756b2110af54b2291a49c0e6a10f702&"
              className="shrink-0 aspect-[1.92] w-[27px]"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col px-5 mt-4 w-full">
          <h1 className="text-xl font-bold text-white capitalize">
            Presentation Automation
          </h1>
          <p className="self-start mt-6 text-sm text-gray-100">
            Step <span className="text-xl">3</span>/4
          </p>
          <h2 className="self-start mt-1.5 text-base font-bold text-white">
            Cleaning room by room
          </h2>
          <ProgressBar completed={2} total={4} />
        </div>
      </header>
      <section className="flex flex-col px-5 mt-6 w-full text-sm">
        <h3 className="text-base font-bold text-sky-600">
          Cleaning tasks to do in all rooms
        </h3>
        <p className="mt-5 text-slate-800">
          Select tasks to do all rooms in the house
        </p>
        <div className="flex flex-wrap gap-2.5 mt-3.5">
          {tasks.map((task, index) => (
            <TaskButton
              key={index}
              text={task.text}
              isActive={task.isActive}
              onClick={() => toggleTask(index)}
            />
          ))}
        </div>
      </section>
      <div className="flex gap-4 self-center mt-8 text-base text-center whitespace-nowrap">
        <button 
          onClick={handleBack} 
          className="justify-center px-8 py-4 bg-slate-800 rounded-[30px] text-white"
        >
          Back
        </button>
        <button 
          onClick={handleContinue} 
          className="justify-center px-8 py-4 bg-sky-600 rounded-[30px] text-white"
        >
          Continue
        </button>
      </div>
    </main>
  );
};

export default MyComponent;
