'use client';
import * as React from "react";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import BottomNavigation from '@/components/BoottomNavigation';
import { getFormattedDate } from "@/lib/utils";
import Types from "@/lib/types";
import { getAssignments, getCheckIO, getDailyTasks, getReservations } from "@/lib/service";


interface MyComponentProps { }

const MyComponent: React.FC<MyComponentProps> = () => {
  const router = useRouter();
  const [data, setData] = React.useState<Types['checkType']>()
  const [dailyTask, setDailyTask] = React.useState<Types['dailyTaskType']>()
  const [assignmentsCount, setAssignmentsCount] = React.useState<Types['assignmentsCount']>()
  const [reservationsCount, setreservationsCount] = React.useState<Types['reservationsCount']>()
  const getDate = getFormattedDate();
  React.useEffect(() => {
    getCheck()
  }, [])

  const getCheck = async () => {
    const response =  await getCheckIO();
    const response1 = await getDailyTasks();
    const response2 = await getAssignments()
    const response3 = await getReservations()

    setData(response);
    setDailyTask(response1);
    setAssignmentsCount(response2);
    setreservationsCount(response3)
  }

  const handleClick = (message: string) => {
    alert(message);
  };

  return (
    <div className="flex flex-col items-center mx-auto w-full bg-gray-100 max-w-[480px]">
      <div className="flex flex-col self-stretch pb-4 w-full bg-white">
        <div className="flex gap-5 justify-between w-full">
          <div className="flex gap-1 justify-center px-6 py-3 text-lg tracking-tight leading-3 text-center text-black whitespace-nowrap font-[590]">
            <div className="justify-center p-px">9:41</div>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f55aabedc79f92832a5796449ca566cf839ba6ab5a3100cd47a574c1880b9c45?apiKey=e6ca5815e046456fa7dc3340ed86c31e&" className="shrink-0 w-3.5 aspect-square" />
          </div>
          <div className="flex gap-2.5 justify-center px-6 py-3">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/500485c499f88d9550ceb0265829ada7437bccb7476ad6ee6e5c1ab067bb0930?apiKey=e6ca5815e046456fa7dc3340ed86c31e&" className="shrink-0 aspect-[1.28] w-[18px]" />
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6224278a3f68c03a5c3e0be03694a56ab078add0750dd5a35667a57c030ea853?apiKey=e6ca5815e046456fa7dc3340ed86c31e&" className="shrink-0 aspect-[1.28] w-[18px]" />
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4140e1c4b23f3b68ea3a9b49bc6a97459bd23e83ee64bb84f8e4430ee8cc8953?apiKey=e6ca5815e046456fa7dc3340ed86c31e&" className="shrink-0 aspect-[1.92] w-[27px]" />
          </div>
        </div>
        <div className="self-start mt-4 ml-5 text-xl font-bold capitalize text-slate-800">Activity</div>
      </div>
      <div className="flex gap-5 justify-between items-center px-5 mt-5 text-sm text-sky-600 capitalize">
        <button onClick={() => handleClick("Previous Week")} className="flex gap-1.5 self-stretch my-auto">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e6e249afb59d7793c682b4f11acc9b8e2a68174fc176dc21e270a485c2b88625?apiKey=e6ca5815e046456fa7dc3340ed86c31e&" className="shrink-0 aspect-square w-[13px]" />
          <div>Previous Week</div>
        </button>
        <div className="flex gap-5 self-stretch text-base text-center text-gray-400">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/136e45f698e324c0d927fd85271db04c4a88fe79f3c7f9285ae25ced9f15f5bb?apiKey=e6ca5815e046456fa7dc3340ed86c31e&" className="shrink-0 w-5 aspect-square" />
          <div>May 23</div>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/80aef5f0f3bfaf91683da8e448893f13130d8814f0cee8ccfc25c66c7a07ffd3?apiKey=e6ca5815e046456fa7dc3340ed86c31e&" className="shrink-0 w-5 aspect-square" />
        </div>
        <button onClick={() => handleClick("Next Week")} className="flex gap-1.5 self-stretch my-auto text-right">
          <div className="grow">Next Week</div>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/addbbbff60987e8ecafa30187144fcbe54c2e71e9bb3607b8ccc168d79487b2f?apiKey=e6ca5815e046456fa7dc3340ed86c31e&" className="shrink-0 aspect-square w-[13px]" />
        </button>
      </div>
      <div className="flex gap-5 mt-6 w-full text-base font-bold max-w-[392px] text-slate-800">
        <div className="flex flex-col flex-1 pt-6 bg-white rounded-2xl shadow-sm">
          <div className="flex flex-col px-5">
            <Link href="/checkin_checkout" passHref>
              <div className="text-sky-600 cursor-pointer">Check In/Check Out</div>
            </Link>
            <div className="shrink-0 mt-3 h-px border border-dashed bg-slate-600 border-slate-600 w-[147px]" />
            <div className="mt-4">Check in</div>
            <div className="mt-3 text-2xl">
              {data?.checkInCount} <span className="text-xs">in</span>
            </div>
            <div className="mt-7">Check out</div>
            <div className="mt-3 text-2xl">
              {data?.checkOutCount} <span className="text-xs">out</span>
            </div>
          </div>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d4078eed543d20dd0a411c598708c16a5392bb0d58df2fe08b6a5afa77399275?apiKey=e6ca5815e046456fa7dc3340ed86c31e&" className="self-center mt-4 aspect-[5.56] fill-sky-600 w-[186px]" />
        </div>
        <div className="flex flex-col flex-1 pt-6 bg-white rounded-2xl shadow-sm">
          <div className="flex flex-col items-start pr-11 pl-5">
            <Link href="/daily_task" passHref>
              <div className="text-sky-600 cursor-pointer">Daily Tasks</div>
            </Link>
            <div className="shrink-0 mt-2.5 h-px border border-dashed bg-slate-800 border-slate-800" />
            <div className="mt-4 text-2xl">
              {dailyTask?.confirmedTasksCount} <span className="text-xs">Confirmed</span>
            </div>
            <div className="mt-3">Tasks Confirmed</div>
            <div className="mt-7 text-2xl">
              {dailyTask?.waitingTasksCount} <span className="text-xs">Waiting</span>
            </div>
            <div className="mt-2.5">Tasks Waiting</div>
          </div>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d4078eed543d20dd0a411c598708c16a5392bb0d58df2fe08b6a5afa77399275?apiKey=e6ca5815e046456fa7dc3340ed86c31e&" className="self-center mt-2.5 aspect-[5.56] fill-sky-600 w-[186px]" />
        </div>
      </div>
      <div className="flex gap-5 mt-5 w-full text-base font-bold max-w-[392px] text-slate-800">
        <div className="flex flex-col flex-1 pt-6 bg-white rounded-2xl shadow-sm">
          <div className="flex flex-col items-start pr-16 pl-5">
            <Link href="/assign_task" passHref>
              <div className="text-sky-600 cursor-pointer">Assignments</div>
            </Link>
            <div className="shrink-0 mt-2.5 h-px border border-dashed bg-slate-800 border-slate-800" />
            <div className="mt-4 text-2xl">
              {assignmentsCount?.tasksAssignedCount} <span className="text-xs">Tasks</span>
            </div>
            <div className="mt-3">To Assign</div>
            <div className="mt-6 text-2xl">
              {assignmentsCount?.tasksToAssignCount} <span className="text-xs">Tasks</span>
            </div>
            <div className="mt-3">Assigned</div>
          </div>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d4078eed543d20dd0a411c598708c16a5392bb0d58df2fe08b6a5afa77399275?apiKey=e6ca5815e046456fa7dc3340ed86c31e&" className="self-center mt-2.5 aspect-[5.56] fill-sky-600 w-[186px]" />
        </div>
        <div className="flex flex-col flex-1 pt-6 bg-white rounded-2xl shadow-sm">
          <div className="flex flex-col items-start pr-20 pl-5">
            <Link href="/reservation" passHref>
              <div className="text-sky-600 cursor-pointer">Reservations</div>
            </Link>
            <div className="shrink-0 mt-3 h-px border border-dashed bg-zinc-600 border-zinc-600" />
            <div className="mt-4 text-2xl">
              {reservationsCount?.newReservationsCount} <span className="text-xs">new</span>
            </div>
            <div className="mt-3">Reservations</div>
          </div>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d4078eed543d20dd0a411c598708c16a5392bb0d58df2fe08b6a5afa77399275?apiKey=e6ca5815e046456fa7dc3340ed86c31e&" className="self-center mt-20 aspect-[5.56] fill-sky-600 w-[186px]" />
        </div>
      </div>
      <BottomNavigation activityState="Activity" />
    </div>
  );
};

export default MyComponent;
