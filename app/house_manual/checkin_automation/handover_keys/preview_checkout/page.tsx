'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; 

type TaskItemProps = {
  icon: string;
  text: string;
  isCompleted: boolean;
  onToggle: () => void;
};

const TaskItem: React.FC<TaskItemProps> = ({ icon, text, isCompleted, onToggle }) => (
  <button
    className={`flex gap-4 px-4 py-4 mt-4 bg-white rounded-2xl shadow-sm w-full text-left ${
      isCompleted ? 'opacity-50' : ''
    }`}
    onClick={onToggle}
  >
    <img loading="lazy" src={icon} alt="" className="shrink-0 aspect-square w-[45px]" />
    <div className="flex-auto my-auto">{text}</div>
    {isCompleted && (
      <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    )}
  </button>
);

type ButtonProps = {
  text: string;
  color: string;
  onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({ text, color, onClick }) => (
  <button className={`justify-center px-8 py-4 ${color} rounded-[30px] text-white`} onClick={onClick}>
    {text}
  </button>
);

const MyComponent: React.FC = () => {
  const [tasks, setTasks] = useState([
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/abaf2db76186c8b9360b48a5e0b15c3acf99ab625effb5a519329c757b55bab1?apiKey=d756b2110af54b2291a49c0e6a10f702&", text: "Put the furniture and accessories back where you found them", isCompleted: false },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9371e353cc57810bf454fdbb1dbc841e894d9e62a87a81a64234ea131ffc0481?apiKey=d756b2110af54b2291a49c0e6a10f702&", text: "Throw out all opened foods from the refrigerator, take back those you can keep", isCompleted: false },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5f1a34a75cf55a092f75228eac5eb5413570df6b5f4fc2587acbb4a7d0986bc7?apiKey=d756b2110af54b2291a49c0e6a10f702&", text: "Put your used towels in the bathroom", isCompleted: false },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9adf6345ecf75559646b324a5fa8f6686903bdfddd2ebdc522170e661c5c6ad4?apiKey=d756b2110af54b2291a49c0e6a10f702&", text: "Check that all windows are properly closed", isCompleted: false }
  ]);

  const toggleTask = (index: number) => {
    const newTasks = [...tasks];
    newTasks[index].isCompleted = !newTasks[index].isCompleted;
    setTasks(newTasks);
  };

  const handleBack = () => {
    console.log("Back button clicked");
  };

  const router = useRouter();  // Initialize the useRouter hook

  const navigateToNextPage= () => {
    router.push('/house_manual?step=3');  // Programmatically navigate to /my_team
  };

  const handleContinue = () => {
    navigateToNextPage()
  };

  return (
    <main className="flex flex-col pb-20 mx-auto w-full bg-gray-100 max-w-[480px]">
      <header className="flex gap-5 justify-between w-full">
        <div className="flex gap-1 justify-center px-6 py-3 text-lg tracking-tight leading-3 text-center text-black whitespace-nowrap font-[590]">
          <div className="justify-center p-px">9:41</div>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f55aabedc79f92832a5796449ca566cf839ba6ab5a3100cd47a574c1880b9c45?apiKey=d756b2110af54b2291a49c0e6a10f702&" alt="" className="shrink-0 w-3.5 aspect-square" />
        </div>
        <div className="flex gap-2.5 justify-center px-6 py-3">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/500485c499f88d9550ceb0265829ada7437bccb7476ad6ee6e5c1ab067bb0930?apiKey=d756b2110af54b2291a49c0e6a10f702&" alt="" className="shrink-0 aspect-[1.28] w-[18px]" />
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b758dec230011747af2734df3d80950a15f75c839697b9a1c7f0353df7454040?apiKey=d756b2110af54b2291a49c0e6a10f702&" alt="" className="shrink-0 aspect-[1.28] w-[18px]" />
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4140e1c4b23f3b68ea3a9b49bc6a97459bd23e83ee64bb84f8e4430ee8cc8953?apiKey=d756b2110af54b2291a49c0e6a10f702&" alt="" className="shrink-0 aspect-[1.92] w-[27px]" />
        </div>
      </header>
      <section className="flex flex-col px-5 mt-3 w-full text-base leading-6 text-slate-800">
        <article className="flex flex-col p-4 w-full text-gray-400 bg-white rounded-2xl shadow-sm">
          <div className="flex gap-2.5 text-lg font-bold text-slate-800">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a0ba7cbcec74221450ad143b5c98bb4137d901f265e116cf6e31309291fbabd0?apiKey=d756b2110af54b2291a49c0e6a10f702&" alt="" className="shrink-0 aspect-square w-[35px]" />
            <h2 className="my-auto">Prepare your departure</h2>
          </div>
          <p className="mt-4">
            Although you paid for cleaning services when you booked, the amount requested does not allow you to leave the accommodation in poor condition.
          </p>
          <p className="mt-2.5">
            We remind you that you are evaluated and recommended to other hosts on the platform based on the cleanliness of the accommodation when you leave.
          </p>
        </article>
        <h3 className="mt-6 text-lg font-bold leading-5 text-sky-600">
          Task to do before leaving
        </h3>
        {tasks.map((task, index) => (
          <TaskItem
            key={index}
            icon={task.icon}
            text={task.text}
            isCompleted={task.isCompleted}
            onToggle={() => toggleTask(index)}
          />
        ))}
        <div className="flex gap-4 self-center mt-8 text-center text-white whitespace-nowrap">
          <Button text="Back" color="bg-slate-800" onClick={handleBack} />
          <Button text="Continue" color="bg-sky-600" onClick={handleContinue} />
        </div>
      </section>
    </main>
  );
};

export default MyComponent;