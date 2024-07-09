import React from 'react';

type TaskCardProps = {
  imageUrl: string;
  taskType: string;
  location: string;
  time: string;
  price: string;
  isAssigned: boolean;
};

const TaskCard: React.FC<TaskCardProps> = ({ imageUrl, taskType, location, time, price, isAssigned }) => (
  <article className="flex gap-4 px-3.5 py-2.5 w-full bg-white rounded-2xl shadow-sm max-w-[392px]">
    <img loading="lazy" src={imageUrl} alt={`${taskType} task`} className="shrink-0 max-w-full aspect-square w-[107px]" />
    <div className="flex flex-col my-auto">
      <p className="text-sm text-gray-400">{taskType}</p>
      <h3 className="mt-1.5 text-sm font-bold text-slate-800">{location}</h3>
      <div className="flex gap-1.5 mt-2.5 whitespace-nowrap">
        <div className="flex flex-1 gap-2.5 self-start text-sm text-slate-800">
          <div className="flex gap-1.5">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/516d91af474c003bc89d2f61f467df5561f91d1f05f8a40fdcc71eb39294f388?apiKey=e6ca5815e046456fa7dc3340ed86c31e&" alt="" className="shrink-0 w-4 aspect-square" />
            <span className="my-auto">{time}</span>
          </div>
          <div className="flex gap-1.5">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8bb2759aa64fa2840bd299c84419980388e17f2415d86ab0242288045a8288f6?apiKey=e6ca5815e046456fa7dc3340ed86c31e&" alt="" className="shrink-0 w-4 aspect-square" />
            <span className="my-auto">{price}</span>
          </div>
        </div>
        <span className={`justify-center items-start px-1.5 py-1 text-xs leading-3 text-white ${isAssigned ? 'bg-green-500' : 'bg-gray-400'} rounded`}>
          {isAssigned ? 'Assigned' : 'Not assigned'}
        </span>
      </div>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0feb849626cb40025fd1a7547618038a67662f95f0527efa03c60abfcd81b783?apiKey=e6ca5815e046456fa7dc3340ed86c31e&" alt="" className="mt-3 aspect-[1.67] w-[30px]" />
    </div>
  </article>
);

type TaskAssignmentProps = {
  tasks: TaskCardProps[];
};

const TaskAssignment: React.FC<TaskAssignmentProps> = ({ tasks }) => {
  const assignedTasks = tasks.filter(task => task.isAssigned);
  const unassignedTasks = tasks.filter(task => !task.isAssigned);

  return (
    <main className="flex flex-col items-center pb-8 mx-auto w-full bg-gray-100 max-w-[480px]">
      <header className="flex flex-col self-stretch pb-4 w-full bg-white">
        <div className="flex gap-5 justify-between w-full">
          <div className="flex gap-1 justify-center px-6 py-3 text-lg tracking-tight leading-3 text-center text-black whitespace-nowrap font-[590]">
            <time className="justify-center p-px">9:41</time>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f55aabedc79f92832a5796449ca566cf839ba6ab5a3100cd47a574c1880b9c45?apiKey=e6ca5815e046456fa7dc3340ed86c31e&" alt="" className="shrink-0 w-3.5 aspect-square" />
          </div>
          <div className="flex gap-2.5 justify-center px-6 py-3">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/500485c499f88d9550ceb0265829ada7437bccb7476ad6ee6e5c1ab067bb0930?apiKey=e6ca5815e046456fa7dc3340ed86c31e&" alt="" className="shrink-0 aspect-[1.28] w-[18px]" />
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6224278a3f68c03a5c3e0be03694a56ab078add0750dd5a35667a57c030ea853?apiKey=e6ca5815e046456fa7dc3340ed86c31e&" alt="" className="shrink-0 aspect-[1.28] w-[18px]" />
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4140e1c4b23f3b68ea3a9b49bc6a97459bd23e83ee64bb84f8e4430ee8cc8953?apiKey=e6ca5815e046456fa7dc3340ed86c31e&" alt="" className="shrink-0 aspect-[1.92] w-[27px]" />
          </div>
        </div>
        <h1 className="self-start mt-4 ml-5 text-xl font-bold capitalize text-slate-800">Assign Tasks</h1>
      </header>
      <nav className="flex gap-5 justify-between items-center px-5 mt-5 text-sm text-sky-600 capitalize">
        <button className="flex gap-1.5 self-stretch my-auto">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e98ee537f83103c23e05c4ce3209f7670a300f66b86c6a1498ed93f1039a3502?apiKey=e6ca5815e046456fa7dc3340ed86c31e&" alt="" className="shrink-0 aspect-square w-[13px]" />
          <span>Previous Week</span>
        </button>
        <div className="flex gap-5 self-stretch text-base text-center text-gray-400">
          <button aria-label="Previous day">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c6f725b75b8ed2467d4a7b15b19cd7cbe1e0cde5611f9881eb1d657db1c42cd5?apiKey=e6ca5815e046456fa7dc3340ed86c31e&" alt="" className="shrink-0 w-5 aspect-square" />
          </button>
          <time>May 23</time>
          <button aria-label="Next day">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7e5deb5bce45876c5084efcfa759330c9936e3eaa2ff864413d5a3d9b90a1f7a?apiKey=e6ca5815e046456fa7dc3340ed86c31e&" alt="" className="shrink-0 w-5 aspect-square" />
          </button>
        </div>
        <button className="flex gap-1.5 self-stretch my-auto text-right">
          <span>Next Week</span>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/421c9ccaafc8efb4b3b4f830c43f4e99154be59ed621d824d3ad2395cf6cdfff?apiKey=e6ca5815e046456fa7dc3340ed86c31e&" alt="" className="shrink-0 aspect-square w-[13px]" />
        </button>
      </nav>
      <section className="flex justify-center items-center self-stretch px-16 py-2 mt-4 w-full text-base bg-white">
        <div className="flex gap-3 justify-between">
          <p className="text-green-500">{assignedTasks.length} Assigned</p>
          <p className="text-gray-400">{unassignedTasks.length} Not assigned</p>
        </div>
      </section>
      <section className="mt-5 w-full">
        {tasks.map((task, index) => (
          <TaskCard key={index} {...task} />
        ))}
      </section>
    </main>
  );
};

const App: React.FC = () => {
  const tasks: TaskCardProps[] = [
    {
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/767b618ef209f997cfb1af7c16b60ea51657a4fe2201fcdf7e74b95698a7c156?apiKey=e6ca5815e046456fa7dc3340ed86c31e&",
      taskType: "Cleaning",
      location: "96091 Gretchen Canyon",
      time: "16H-19H",
      price: "40$",
      isAssigned: true
    },
    {
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/fb79971a9bd0f199fd45e26acd332020c7ef3bcfc6b65707bde630f4af9d9c38?apiKey=e6ca5815e046456fa7dc3340ed86c31e&",
      taskType: "Cleaning",
      location: "96091 Gretchen Canyon",
      time: "16H-19H",
      price: "40$",
      isAssigned: true
    },
    {
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/767b618ef209f997cfb1af7c16b60ea51657a4fe2201fcdf7e74b95698a7c156?apiKey=e6ca5815e046456fa7dc3340ed86c31e&",
      taskType: "Cleaning",
      location: "96091 Gretchen Canyon",
      time: "16H-19H",
      price: "40$",
      isAssigned: true
    },
    {
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/fb79971a9bd0f199fd45e26acd332020c7ef3bcfc6b65707bde630f4af9d9c38?apiKey=e6ca5815e046456fa7dc3340ed86c31e&",
      taskType: "Cleaning",
      location: "96091 Gretchen Canyon",
      time: "16H-19H",
      price: "40$",
      isAssigned: false
    },
    {
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/767b618ef209f997cfb1af7c16b60ea51657a4fe2201fcdf7e74b95698a7c156?apiKey=e6ca5815e046456fa7dc3340ed86c31e&",
      taskType: "Cleaning",
      location: "96091 Gretchen Canyon",
      time: "16H-19H",
      price: "40$",
      isAssigned: false
    }
  ];

  return <TaskAssignment tasks={tasks} />;
};

export default App;