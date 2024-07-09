'use client';
import React, { useState } from "react";
import { useRouter } from 'next/navigation'; 

interface MyComponentProps {}

const MyComponent: React.FC<MyComponentProps> = () => {
  const [agentName, setAgentName] = useState<string>("");
  const [keyHandoverTime, setKeyHandoverTime] = useState<string>("");
  const [keyHandoverPrice, setKeyHandoverPrice] = useState<string>("20");
  const [keyCollectionTime, setKeyCollectionTime] = useState<string>("");
  const [keyCollectionPrice, setKeyCollectionPrice] = useState<string>("20");
  const [isAutomatedMission, setIsAutomatedMission] = useState<boolean>(true);
  const [shouldCollectKeys, setShouldCollectKeys] = useState<boolean>(true);
  const [additionalCheckInTasks, setAdditionalCheckInTasks] = useState<boolean>(true);
  const [additionalCheckOutTasks, setAdditionalCheckOutTasks] = useState<boolean>(true);
  const [newTask, setNewTask] = useState<string>("");
  const [checkInTasks, setCheckInTasks] = useState<string[]>([]);
  const [checkOutTasks, setCheckOutTasks] = useState<string[]>([]);

  
  const router = useRouter();  // Initialize the useRouter hook

  const navigateToCheckinAutomation = () => {
    router.push('/house_manual/checkin_automation/handover_keys');  // Programmatically navigate to /my_team
  };

  const handleAddTask = (taskType: "checkIn" | "checkOut") => {
    if (newTask.trim()) {
      if (taskType === "checkIn") {
        setCheckInTasks([...checkInTasks, newTask]);
      } else {
        setCheckOutTasks([...checkOutTasks, newTask]);
      }
      setNewTask("");
    }
  };

  return (
    <div className="flex flex-col pb-8 mx-auto w-full bg-gray-100 max-w-[480px]">
      <div className="flex flex-col pb-5 w-full bg-sky-600 rounded-none">
        <div className="flex gap-5 justify-between w-full">
          <div className="flex gap-1 justify-center px-6 py-3 text-lg tracking-tight leading-3 text-center text-white whitespace-nowrap font-[590]">
            <div className="justify-center p-px">9:41</div>
            <img loading="lazy" src="http://b.io/ext_10-" className="shrink-0 w-3.5 aspect-square" />
          </div>
          <div className="flex gap-2.5 justify-center px-6 py-3">
            <img loading="lazy" src="http://b.io/ext_11-" className="shrink-0 aspect-[1.28] w-[18px]" />
            <img loading="lazy" src="http://b.io/ext_12-" className="shrink-0 aspect-[1.28] w-[18px]" />
            <img loading="lazy" src="http://b.io/ext_13-" className="shrink-0 aspect-[1.92] w-[27px]" />
          </div>
        </div>
        <div className="flex flex-col px-5 mt-4 w-full">
          <div className="text-xl font-bold text-white capitalize">Checkin-Checkout Automation</div>
          <div className="self-start mt-6 text-sm text-gray-100">
            Step <span className="text-xl">2</span>/4
          </div>
          <div className="self-start mt-1.5 text-base font-bold text-white">General Information</div>
          <div className="flex gap-2 mt-2.5">
            <div className="flex-1 shrink-0 h-1 bg-gray-100 rounded-md" />
            <div className="flex-1 shrink-0 h-1 bg-white rounded-md" />
            <div className="flex-1 shrink-0 h-1 rounded-md bg-white bg-opacity-40" />
            <div className="flex-1 shrink-0 h-1 rounded-md bg-white bg-opacity-40" />
          </div>
        </div>
      </div>
      <div className="flex flex-col px-5 mt-6 w-full text-base">
        <div className="text-lg font-bold leading-6 text-sky-600">
          Are you keeping some of your reception agents for this rental?
        </div>
        <div className="mt-6 text-sm text-slate-800">Agent name</div>
        <input
          type="text"
          value={agentName}
          onChange={(e) => setAgentName(e.target.value)}
          className="justify-center items-start px-5 py-5 mt-2.5 text-gray-400 bg-white rounded-xl border border-solid border-slate-300"
          placeholder="Enter agent name"
        />
        <div className="mt-6 text-lg font-bold leading-6 text-sky-600">Information about handing over keys</div>
        <div className="mt-5 text-sm text-slate-800">How long should we allow for handing over the keys in your rental?</div>
        <div className="flex gap-5 justify-between px-5 py-4 mt-2.5 text-gray-400 whitespace-nowrap bg-white rounded-xl border border-solid border-slate-300">
          <input
            type="text"
            value={keyHandoverTime}
            onChange={(e) => setKeyHandoverTime(e.target.value)}
            className="my-auto bg-transparent"
            placeholder="HH:MM"
          />
          <img loading="lazy" src="http://b.io/ext_14-" className="shrink-0 w-4 aspect-square" />
        </div>
        <div className="mt-2 text-xs italic leading-4 text-gray-400">
          Travel + waiting on site + departure for new handover of keys
        </div>
        <div className="mt-6 text-sm text-slate-800">
          How much do you pay your service provider for handing over the keys to your home (including tax)?
        </div>
        <div className="flex gap-5 justify-between px-5 py-4 mt-2.5 text-gray-400 whitespace-nowrap bg-white rounded-xl border border-solid border-slate-300">
          <input
            type="text"
            value={keyHandoverPrice}
            onChange={(e) => setKeyHandoverPrice(e.target.value)}
            className="my-auto bg-transparent"
            placeholder="20$"
          />
          <img loading="lazy" src="http://b.io/ext_15-" className="shrink-0 w-4 aspect-square" />
        </div>
        <div className="mt-2 text-xs italic leading-4 text-gray-400">
          We do not yet take care of the payment of services, the price is just an indication
        </div>
        <div className="mt-7 text-slate-800">How do you want us to manage key handover mission?</div>
        <button
          onClick={() => setIsAutomatedMission(true)}
          className={`flex gap-2 self-start mt-4 ${isAutomatedMission ? "text-sky-600" : "text-zinc-500"}`}
        >
          <img
            loading="lazy"
            src={isAutomatedMission ? "http://b.io/ext_16-" : "http://b.io/ext_19-"}
            className="shrink-0 aspect-square w-[26px]"
          />
          <div className="my-auto">Sending automated mission offer</div>
        </button>
        <button
          onClick={() => setIsAutomatedMission(false)}
          className={`flex gap-2 self-start mt-2.5 ${!isAutomatedMission ? "text-sky-600" : "text-zinc-500"}`}
        >
          <div
            className={`shrink-0 ${
              !isAutomatedMission ? "bg-sky-600" : "bg-gray-100"
            } rounded-full border border-solid border-zinc-500 h-[26px] stroke-[1px] w-[26px]`}
          />
          <div className="my-auto">Manual assigned of missions</div>
        </button>
        <div className="mt-8 text-lg font-bold leading-6 text-sky-600">Key Management</div>
        <div className="mt-5 text-slate-800">Should a reception agent come and collect keys at end of the stay?</div>
        <div className="flex gap-4 self-start mt-3 whitespace-nowrap">
          <button onClick={() => setShouldCollectKeys(true)} className={`flex gap-2 ${shouldCollectKeys ? "text-sky-600" : "text-zinc-500"}`}>
            <img
              loading="lazy"
              src={shouldCollectKeys ? "http://b.io/ext_16-" : "http://b.io/ext_19-"}
              className="shrink-0 aspect-square w-[26px]"
            />
            <div className="my-auto">Yes</div>
          </button>
          <button onClick={() => setShouldCollectKeys(false)} className={`flex gap-2 ${!shouldCollectKeys ? "text-sky-600" : "text-zinc-500"}`}>
            <div
              className={`shrink-0 ${
                !shouldCollectKeys ? "bg-sky-600" : "bg-gray-100"
              } rounded-full border border-solid border-zinc-500 h-[26px] stroke-[1px] w-[26px]`}
            />
            <div className="my-auto">No</div>
          </button>
        </div>
        <div className="mt-5 text-sm text-slate-800">How long should we allow to collect keys from your rental?</div>
        <div className="flex gap-5 justify-between px-5 py-4 mt-2.5 text-gray-400 whitespace-nowrap bg-white rounded-xl border border-solid border-slate-300">
          <input
            type="text"
            value={keyCollectionTime}
            onChange={(e) => setKeyCollectionTime(e.target.value)}
            className="my-auto bg-transparent"
            placeholder="HH:MM"
          />
          <img loading="lazy" src="http://b.io/ext_14-" className="shrink-0 w-4 aspect-square" />
        </div>
        <div className="mt-2 text-xs italic leading-4 text-gray-400">
          Travel + waiting on site + departure for new handover of keys
        </div>
        <div className="mt-6 text-sm text-slate-800">
          How much do you pay your service provider to collect keys to your home (including tax)?
        </div>
        <div className="flex gap-5 justify-between px-5 py-4 mt-2.5 text-gray-400 whitespace-nowrap bg-white rounded-xl border border-solid border-slate-300">
          <input
            type="text"
            value={keyCollectionPrice}
            onChange={(e) => setKeyCollectionPrice(e.target.value)}
            className="my-auto bg-transparent"
            placeholder="20"
          />
          <img loading="lazy" src="http://b.io/ext_17-" className="shrink-0 w-4 aspect-square" />
        </div>
        <div className="mt-2 text-xs italic leading-4 text-gray-400">
          We do not yet take care of payment of service, the price is just an indication.
        </div>
        <div className="mt-9 text-lg font-bold leading-6 text-sky-600">Arrival of your tenants</div>
        <div className="mt-4 text-slate-800">Would you like to add additional tasks during check-in?</div>
        <div className="flex gap-4 self-start mt-3 whitespace-nowrap">
          <button
            onClick={() => setAdditionalCheckInTasks(true)}
            className={`flex gap-2 ${additionalCheckInTasks ? "text-sky-600" : "text-zinc-500"}`}
          >
            <img
              loading="lazy"
              src={additionalCheckInTasks ? "http://b.io/ext_16-" : "http://b.io/ext_19-"}
              className="shrink-0 aspect-square w-[26px]"
            />
            <div className="my-auto">Yes</div>
          </button>
          <button
            onClick={() => setAdditionalCheckInTasks(false)}
            className={`flex gap-2 ${!additionalCheckInTasks ? "text-sky-600" : "text-zinc-500"}`}
          >
            <div
              className={`shrink-0 ${
                !additionalCheckInTasks ? "bg-sky-600" : "bg-gray-100"
              } rounded-full border border-solid border-zinc-500 h-[26px] stroke-[1px] w-[26px]`}
            />
            <div className="my-auto">No</div>
          </button>
        </div>
        {additionalCheckInTasks && (
          <div className="flex z-10 flex-col py-5 mt-5 text-sm bg-white rounded-2xl shadow-sm">
            <div className="flex flex-col px-4 font-bold text-sky-600">
              <div className="text-lg leading-6">Tasks to do upon check-in</div>
              <div className="mt-6 text-slate-800">
                Write here what you want your service providers to do during their mission and validate
              </div>
              <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                className="justify-center items-start p-5 mt-2.5 text-base text-gray-400 bg-white rounded-xl border border-solid border-slate-300"
                placeholder="Write the new task here"
              />
              <button
                onClick={() => handleAddTask("checkIn")}
                className="flex gap-3 self-center px-6 py-3 mt-4 text-center whitespace-nowrap bg-white border border-sky-600 border-solid rounded-[50px]"
              >
                <img loading="lazy" src="http://b.io/ext_18-" className="shrink-0 w-3.5 aspect-square" />
                <div>Add</div>
              </button>
            </div>
            <div className="mx-4 mt-5 text-slate-800">You can add a description to the reception agent during his mission</div>
            <textarea className="shrink-0 mx-4 mt-2.5 max-w-full bg-white rounded-xl border border-solid border-slate-300 h-[100px] w-[360px]" />
          </div>
        )}
        <div className="flex flex-col px-4 pt-9 pb-4 text-white bg-sky-600 rounded-none">
          <div className="text-sm text-gray-100">Here are the tasks to do during check-in</div>
          {checkInTasks.map((task, index) => (
            <div key={index} className="justify-center px-4 py-5 mt-2.5 bg-sky-600 rounded-xl border border-white border-solid">
              {task}
            </div>
          ))}
          <button
            className="justify-center self-start px-10 py-4 mt-4 text-center whitespace-nowrap bg-teal-500 rounded-[30px]"
            onClick={() => {
              // Handle save logic here
            }}
          >
            Save
          </button>
        </div>
        <div className="mt-8 text-lg font-bold leading-6 text-sky-600">Departure of your tenants</div>
        <div className="mt-4 text-slate-800">Would you like to add additional tasks during check-out?</div>
        <div className="flex gap-4 self-start mt-3 whitespace-nowrap">
          <button
            onClick={() => setAdditionalCheckOutTasks(true)}
            className={`flex gap-2 ${additionalCheckOutTasks ? "text-sky-600" : "text-zinc-500"}`}
          >
            <img
              loading="lazy"
              src={additionalCheckOutTasks ? "http://b.io/ext_16-" : "http://b.io/ext_19-"}
              className="shrink-0 aspect-square w-[26px]"
            />
            <div className="my-auto">Yes</div>
          </button>
          <button
            onClick={() => setAdditionalCheckOutTasks(false)}
            className={`flex gap-2 ${!additionalCheckOutTasks ? "text-sky-600" : "text-zinc-500"}`}
          >
            <div
              className={`shrink-0 ${
                !additionalCheckOutTasks ? "bg-sky-600" : "bg-gray-100"
              } rounded-full border border-solid border-zinc-500 h-[26px] stroke-[1px] w-[26px]`}
            />
            <div className="my-auto">No</div>
          </button>
        </div>
        {additionalCheckOutTasks && (
          <div className="flex z-10 flex-col py-5 mt-5 text-sm bg-white rounded-2xl shadow-sm">
            <div className="flex flex-col px-4 font-bold text-sky-600">
              <div className="text-lg leading-6">Tasks to do upon check-out</div>
              <div className="mt-6 text-slate-800">
                Write here what you want your service providers to do during their mission and validate
              </div>
              <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                className="justify-center items-start p-5 mt-2.5 text-base text-gray-400 bg-white rounded-xl border border-solid border-slate-300"
                placeholder="Write the new task here"
              />
              <button
                onClick={() => handleAddTask("checkOut")}
                className="flex gap-3 self-center px-6 py-3 mt-4 text-center whitespace-nowrap bg-white border border-sky-600 border-solid rounded-[50px]"
              >
                <img loading="lazy" src="http://b.io/ext_18-" className="shrink-0 w-3.5 aspect-square" />
                <div>Add</div>
              </button>
            </div>
            <div className="mx-4 mt-5 text-slate-800">You can add a description to the reception agent during his mission</div>
            <textarea className="shrink-0 mx-4 mt-2.5 max-w-full bg-white rounded-xl border border-solid border-slate-300 h-[100px] w-[360px]" />
          </div>
        )}
        <div className="flex flex-col px-4 pt-9 pb-4 text-white bg-sky-600 rounded-none">
          <div className="text-sm text-gray-100">Here are the tasks to do during check-out</div>
          {checkOutTasks.map((task, index) => (
            <div key={index} className="justify-center px-4 py-5 mt-2.5 bg-sky-600 rounded-xl border border-white border-solid">
              {task}
            </div>
          ))}
          <button
            className="justify-center self-start px-10 py-4 mt-4 text-center whitespace-nowrap bg-teal-500 rounded-[30px]"
            onClick={() => {
              // Handle save logic here
            }}
          >
            Save
          </button>
        </div>
        <div className="flex gap-4 self-center mt-8 text-center text-white whitespace-nowrap">
          <button className="justify-center px-8 py-4 bg-slate-800 rounded-[30px]" onClick={() => {
            // Handle back logic here
          }}>
            Back
          </button>
          <button className="justify-center px-8 py-4 bg-sky-600 rounded-[30px]" onClick={() => {
            // Handle continue logic here
            navigateToCheckinAutomation()
          }}>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyComponent;