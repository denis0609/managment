// task.tsx
'use client';
import * as React from "react";

interface TaskProps {
    taskStatus: "Done" | "Waiting";
    address: string;
    time: string;
    cost: string;
    images: string[];
}

const Task: React.FC<TaskProps> = ({ taskStatus, address, time, cost, images }) => (
    <article className="flex gap-4 px-3.5 py-2.5 w-full bg-white rounded-2xl shadow-sm max-w-[392px]">
        <img loading="lazy" src={images[0]} alt="" className="shrink-0 max-w-full aspect-[0.95] w-[107px]" />
        <div className="flex flex-col my-auto">
            <div className="text-sm text-gray-400">Cleaning</div>
            <div className="mt-1.5 text-sm font-bold text-slate-800">{address}</div>
            <div className="flex gap-1.5 mt-1.5 whitespace-nowrap">
                <div className="flex flex-1 gap-4 text-sm text-slate-800">
                    <div className="flex gap-1.5">
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7f2d5aee6b5d5c652eac50f592b9f37b05cd55eab9cb62ed715993b6a44eeab8?apiKey=e6ca5815e046456fa7dc3340ed86c31e&" alt="Clock icon" className="shrink-0 w-4 aspect-square" />
                        <div className="my-auto">{time}</div>
                    </div>
                    <div className="flex gap-1.5">
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/62adacbd0b39280b88f3ca9ff9a3122ecbcd0043db577e169b6fb7ad30f936a2?apiKey=e6ca5815e046456fa7dc3340ed86c31e&" alt="Dollar icon" className="shrink-0 w-4 aspect-square" />
                        <div className="my-auto">{cost}</div>
                    </div>
                </div>
                <div className={`justify-center items-start px-1.5 py-1 text-xs leading-3 text-white rounded ${taskStatus === "Done" ? "bg-green-500" : "bg-gray-400"}`}>
                    {taskStatus}
                </div>
            </div>
            <div className="flex gap-5 justify-between px-px mt-4 w-full">
                <div className="flex gap-4">
                    {images.slice(1, 5).map((image, index) => (
                        <img key={index} loading="lazy" src={image} alt="" className="shrink-0 aspect-square w-[18px]" />
                    ))}
                </div>
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0feb849626cb40025fd1a7547618038a67662f95f0527efa03c60abfcd81b783?apiKey=e6ca5815e046456fa7dc3340ed86c31e&" alt="More options" className="shrink-0 aspect-[1.67] w-[30px]" />
            </div>
        </div>
    </article>
);

export default Task;
