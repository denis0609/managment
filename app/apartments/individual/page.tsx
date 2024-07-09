'use client';
import React, { useState } from 'react';

type TaskProps = {
  title: string;
  assignee: string;
  status: 'assigned' | 'not assigned';
  onStatusChange: () => void;
};

type IconProps = {
  src: string;
  alt: string;
};

const Icon: React.FC<IconProps> = ({ src, alt }) => (
  <img loading="lazy" src={src} alt={alt} className="shrink-0 aspect-square w-[18px]" />
);

const Task: React.FC<TaskProps> = ({ title, assignee, status, onStatusChange }) => (
  <section className="flex flex-col p-4 mt-3 w-full bg-white rounded-2xl shadow-sm">
    <h3 className="text-base font-bold text-slate-800">{title}</h3>
    <div className="flex gap-1.5 mt-2.5">
      <div className="flex-1 text-sm text-slate-800">{assignee}</div>
      <button
        onClick={onStatusChange}
        className={`justify-center items-start px-1.5 py-1 text-xs leading-3 text-white rounded ${
          status === 'assigned' ? 'bg-green-500' : 'bg-gray-400'
        }`}
      >
        {status === 'assigned' ? 'Assigned' : 'Not assigned'}
      </button>
    </div>
  </section>
);

const MyComponent: React.FC = () => {
  const [tasks, setTasks] = useState<TaskProps[]>([
    { title: 'Cleaning', assignee: 'Johnthan Doe', status: 'not assigned', onStatusChange: () => {} },
    { title: 'Key Drop', assignee: 'Johnthan Doe', status: 'not assigned', onStatusChange: () => {} },
    { title: 'Key Drop', assignee: 'Kelly Carelyn', status: 'assigned', onStatusChange: () => {} },
    { title: 'Key Drop', assignee: 'Johnthan Doe', status: 'not assigned', onStatusChange: () => {} },
    { title: 'Key Drop', assignee: 'Kelly Carelyn', status: 'assigned', onStatusChange: () => {} },
  ]);

  const handleStatusChange = (index: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, i) =>
        i === index
          ? { ...task, status: task.status === 'assigned' ? 'not assigned' : 'assigned' }
          : task
      )
    );
  };

  const handleAddTask = () => {
    setTasks((prevTasks) => [
      ...prevTasks,
      { title: 'New Task', assignee: 'Unassigned', status: 'not assigned', onStatusChange: () => {} },
    ]);
  };

  return (
    <main className="flex flex-col pb-12 mx-auto w-full bg-gray-100 max-w-[480px]">
      <header className="flex flex-col pb-4 w-full bg-white">
        <div className="flex gap-5 justify-between w-full">
          <div className="flex gap-1 justify-center px-6 py-3 text-lg tracking-tight leading-3 text-center text-black whitespace-nowrap font-[590]">
            <time className="justify-center p-px">9:41</time>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f55aabedc79f92832a5796449ca566cf839ba6ab5a3100cd47a574c1880b9c45?apiKey=e6ca5815e046456fa7dc3340ed86c31e&" alt="" className="shrink-0 w-3.5 aspect-square" />
          </div>
          <div className="flex gap-2.5 justify-center px-6 py-3">
            <Icon src="https://cdn.builder.io/api/v1/image/assets/TEMP/500485c499f88d9550ceb0265829ada7437bccb7476ad6ee6e5c1ab067bb0930?apiKey=e6ca5815e046456fa7dc3340ed86c31e&" alt="Signal strength" />
            <Icon src="https://cdn.builder.io/api/v1/image/assets/TEMP/6224278a3f68c03a5c3e0be03694a56ab078add0750dd5a35667a57c030ea853?apiKey=e6ca5815e046456fa7dc3340ed86c31e&" alt="Wi-Fi" />
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4140e1c4b23f3b68ea3a9b49bc6a97459bd23e83ee64bb84f8e4430ee8cc8953?apiKey=e6ca5815e046456fa7dc3340ed86c31e&" alt="Battery status" className="shrink-0 aspect-[1.92] w-[27px]" />
          </div>
        </div>
        <nav className="flex gap-5 justify-between self-center mt-4 w-full capitalize max-w-[392px]">
          <h1 className="text-xl font-bold text-slate-800">All Listings</h1>
          <button className="text-sm text-right text-sky-600">House Manual</button>
        </nav>
      </header>
      <section className="flex flex-col px-5 mt-5 w-full">
        <h2 className="text-2xl font-bold text-sky-600">Property name</h2>
        <address className="mt-2.5 text-base text-slate-800 not-italic">
          4898 Kale Stravenue
        </address>
        <article className="flex flex-col px-4 py-5 mt-5 w-full bg-white rounded-2xl shadow-sm">
          <h3 className="text-sm text-gray-400">Current Reservation</h3>
          <p className="mt-4 text-base font-bold text-slate-800">
            16 May - 23 May
          </p>
          <hr className="shrink-0 mt-3.5 h-px border border-dashed bg-zinc-300 border-zinc-300" />
          <div className="flex gap-5 items-start mt-5 w-full">
            <div className="flex flex-col flex-1 self-start">
              <h4 className="text-sm text-gray-400">Current Guest</h4>
              <p className="mt-4 text-base font-bold text-slate-800">
                Johnthan Doe
              </p>
            </div>
            <div className="flex flex-1 gap-4 self-end mt-6">
              <button><Icon src="https://cdn.builder.io/api/v1/image/assets/TEMP/af0039707a37542b38b05438a211e6dd2a3796a0567ebd7a8916405812e55b2e?apiKey=e6ca5815e046456fa7dc3340ed86c31e&" alt="Communication icon" /></button>
              <button><Icon src="https://cdn.builder.io/api/v1/image/assets/TEMP/18ba718ed40abd284b749932f11b8c3243c8a7a50075da558a1f62d78bd02da5?apiKey=e6ca5815e046456fa7dc3340ed86c31e&" alt="Message icon" /></button>
              <button><Icon src="https://cdn.builder.io/api/v1/image/assets/TEMP/5535975f9154b1dd8b66b6a476d8e5f4e457e13533f2a8c7c9f6ac5bca1db482?apiKey=e6ca5815e046456fa7dc3340ed86c31e&" alt="Phone icon" /></button>
              <button><Icon src="https://cdn.builder.io/api/v1/image/assets/TEMP/367ca4a6275a567c4411a6568b4eaec4175e2808dbccef169a4cfc8225938a81?apiKey=e6ca5815e046456fa7dc3340ed86c31e&" alt="Email icon" /></button>
            </div>
          </div>
        </article>
        <h3 className="mt-7 text-base text-slate-800">Cleaning tasks</h3>
        {tasks.map((task, index) => (
          <Task key={index} {...task} onStatusChange={() => handleStatusChange(index)} />
        ))}
        <div className="flex gap-5 mt-7 w-full">
          <h3 className="flex-auto my-auto text-base text-slate-800">
            Additional tasks
          </h3>
          <button
            onClick={handleAddTask}
            className="flex gap-1.5 text-sm text-right text-sky-600 capitalize"
          >
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6cdee7912fc348936a8ebba50abfd082e4a966aa127fb67f0350fbd0167fc762?apiKey=e6ca5815e046456fa7dc3340ed86c31e&" alt="" className="shrink-0 w-4 aspect-square" />
            <span className="my-auto">Add Task</span>
          </button>
        </div>
      </section>
    </main>
  );
};

export default MyComponent;