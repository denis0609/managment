'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

type TaskProps = {
  icon: string;
  text: string;
  onDelete: () => void;
};

const Task: React.FC<TaskProps> = ({ icon, text, onDelete }) => (
  <div className="flex gap-2.5 justify-between self-start px-5 py-2.5 mt-2.5 text-center text-white bg-sky-600 rounded-[30px]">
    <div className="flex gap-2.5 items-center">
      <img loading="lazy" src={icon} alt="" className="shrink-0 aspect-square w-[18px]" />
      <div>{text}</div>
    </div>
    <button onClick={onDelete} className="ml-2 text-white hover:text-red-300">
      ×
    </button>
  </div>
);

type ButtonProps = {
  children: React.ReactNode;
  variant: 'primary' | 'secondary';
  onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({ children, variant, onClick }) => (
  <button
    onClick={onClick}
    className={`justify-center px-8 py-4 text-base text-center text-white whitespace-nowrap rounded-[30px] ${
      variant === 'primary' ? 'bg-sky-600' : 'bg-slate-800'
    }`}
  >
    {children}
  </button>
);

const MyComponent: React.FC = () => {
  const [tasks, setTasks] = useState<string[]>(['Dust the doormat']);
  const [newTask, setNewTask] = useState('');
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const router = useRouter();

  const navigateToPreview = () => {
    router.push('/house_manual/housekeeping_automation/preview');
  };

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTask.trim()) {
      setTasks([...tasks, newTask.trim()]);
      setNewTask('');
    }
  };

  const handleDeleteTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(e.target.files[0]);
    }
  };

  return (
    <div className="flex flex-col pb-8 mx-auto w-full bg-gray-100 max-w-[480px]">
      <header className="flex flex-col pb-5 w-full bg-sky-600 rounded-none">
        <div className="flex gap-5 justify-between w-full">
          <div className="flex gap-1 justify-center px-6 py-3 text-lg tracking-tight leading-3 text-center text-white whitespace-nowrap font-[590]">
            <div className="justify-center p-px">9:41</div>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3375cb7701cbff4aae1c67c7792c97eea6dc4587079c42fd5602cfbc1a5de409?apiKey=d756b2110af54b2291a49c0e6a10f702&" alt="" className="shrink-0 w-3.5 aspect-square" />
          </div>
          <div className="flex gap-2.5 justify-center px-6 py-3">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/235ae4871351838a2a9976141ec0941f9f9dc650bde6ba06a757682f4bcf8ba9?apiKey=d756b2110af54b2291a49c0e6a10f702&" alt="" className="shrink-0 aspect-[1.28] w-[18px]" />
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b2d261ae0fb8ff0406c4db2dc5a27d0f3761d0e20851c0880724e3ca469ed523?apiKey=d756b2110af54b2291a49c0e6a10f702&" alt="" className="shrink-0 aspect-[1.28] w-[18px]" />
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/873c4ed8b2a7837acf6866b091a6ded9e9175ab4c358bf1195c383e7cb647fbd?apiKey=d756b2110af54b2291a49c0e6a10f702&" alt="" className="shrink-0 aspect-[1.92] w-[27px]" />
          </div>
        </div>
        <div className="flex flex-col px-5 mt-4 w-full">
          <h1 className="text-xl font-bold text-white capitalize">Presentation Automation</h1>
          <div className="self-start mt-6 text-sm text-gray-100">
            Step <span className="text-xl">4</span>/4
          </div>
          <h2 className="self-start mt-1.5 text-base font-bold text-white">Maintenance products and tools</h2>
          <div className="flex gap-2 mt-2.5">
            <div className="flex-1 shrink-0 h-1 bg-gray-100 rounded-md" />
            <div className="flex-1 shrink-0 h-1 bg-white rounded-md" />
            <div className="flex-1 shrink-0 h-1 bg-white rounded-md" />
            <div className="flex-1 shrink-0 h-1 bg-white rounded-md" />
          </div>
        </div>
      </header>
      <main className="flex flex-col px-5 mt-6 w-full text-sm text-slate-800">
        <h2 className="text-2xl font-bold text-sky-600">Entrance</h2>
        <p className="mt-5">Here are the photos that your housekeeper will see to help them their household</p>
        <label className="flex flex-col justify-center px-6 py-11 mt-2.5 font-semibold rounded-xl border border-dashed border-slate-400 cursor-pointer">
          <input type="file" className="hidden" onChange={handleImageUpload} accept="image/*" />
          <div className="flex flex-col px-20">
            {selectedImage ? (
              <img
                src={URL.createObjectURL(selectedImage)}
                alt="Uploaded"
                className="self-center w-32 h-32 object-cover"
              />
            ) : (
              <>
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/837a81e7523cba4dede5f34e8d5cc2362246e57d5e8f017e7d545492bc0a2a72?apiKey=d756b2110af54b2291a49c0e6a10f702&" alt="" className="self-center w-8 aspect-square" />
                <div className="mx-2.5 mt-4">
                  <span className="text-sky-600">Choose </span>
                  <span className="">image to upload...</span>
                </div>
              </>
            )}
          </div>
        </label>
        <h3 className="mt-7 text-lg font-bold text-sky-600">Here are the most important tasks to complete in this room</h3>
        <p className="mt-5">Other cleaning tasks associated with this room</p>
        {tasks.map((task, index) => (
          <Task key={index} icon="https://cdn.builder.io/api/v1/image/assets/TEMP/7fdb040e7786b85164f2dce18aabde5f651ee309063dbba19ac1ff628d159ee7?apiKey=d756b2110af54b2291a49c0e6a10f702&" text={task} onDelete={() => handleDeleteTask(index)} />
        ))}
        <p className="mt-6">Other tasks common to all rooms in your opinion?</p>
        <form onSubmit={handleAddTask}>
          <label htmlFor="newTask" className="sr-only">
            Write the new task here
          </label>
          <input
            id="newTask"
            className="justify-center items-start p-5 mt-2.5 text-base text-gray-400 bg-white rounded-xl border border-solid border-slate-300 w-full"
            placeholder="Write the new task here"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button
            type="submit"
            className="flex gap-2.5 justify-center self-center px-5 py-2.5 mt-4 text-base text-center text-white whitespace-nowrap bg-sky-600 rounded-[30px]"
          >
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/82e1bfe2f961f99f1c0920ce7bf15a2fa7acabca46d3adf9dc6239745bbb5df9?apiKey=d756b2110af54b2291a49c0e6a10f702&" alt="" className="shrink-0 my-auto w-3.5 aspect-square" />
            <span>Add</span>
          </button>
        </form>
        <div className="flex gap-4 self-center mt-32 text-base text-center text-white whitespace-nowrap">
          <Button variant="secondary" onClick={() => console.log('Back clicked')}>
            Back
          </Button>
          <Button variant="primary" onClick={navigateToPreview}>
            Continue
          </Button>
        </div>
      </main>
    </div>
  );
};

export default MyComponent;