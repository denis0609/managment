// page.tsx
'use client';
import * as React from "react";
import Link from 'next/link';
import Task from "./task"; // Adjust the path as necessary

const tasks: Array<{ taskStatus: "Done" | "Waiting"; address: string; time: string; cost: string; images: string[] }> = [
    {
        taskStatus: "Done",
        address: "96091 Gretchen Canyon",
        time: "14H-16H",
        cost: "40$",
        images: [
            "https://cdn.builder.io/api/v1/image/assets/TEMP/203ed59022a9a2ea0b165b2913a42ea946d6ebdc35bb2989d4b86fd4be4a3427?apiKey=e6ca5815e046456fa7dc3340ed86c31e&",
            "https://cdn.builder.io/api/v1/image/assets/TEMP/af0039707a37542b38b05438a211e6dd2a3796a0567ebd7a8916405812e55b2e?apiKey=e6ca5815e046456fa7dc3340ed86c31e&",
            "https://cdn.builder.io/api/v1/image/assets/TEMP/18ba718ed40abd284b749932f11b8c3243c8a7a50075da558a1f62d78bd02da5?apiKey=e6ca5815e046456fa7dc3340ed86c31e&",
            "https://cdn.builder.io/api/v1/image/assets/TEMP/5535975f9154b1dd8b66b6a476d8e5f4e457e13533f2a8c7c9f6ac5bca1db482?apiKey=e6ca5815e046456fa7dc3340ed86c31e&",
            "https://cdn.builder.io/api/v1/image/assets/TEMP/367ca4a6275a567c4411a6568b4eaec4175e2808dbccef169a4cfc8225938a81?apiKey=e6ca5815e046456fa7dc3340ed86c31e&"
        ]
    },
    {
        taskStatus: "Done",
        address: "96091 Gretchen Canyon",
        time: "14H-16H",
        cost: "40$",
        images: [
            "https://cdn.builder.io/api/v1/image/assets/TEMP/15adfb90b469b3d0729749483ef317c6fcdf1603994841a437532cfa7ff8e0a4?apiKey=e6ca5815e046456fa7dc3340ed86c31e&",
            "https://cdn.builder.io/api/v1/image/assets/TEMP/af0039707a37542b38b05438a211e6dd2a3796a0567ebd7a8916405812e55b2e?apiKey=e6ca5815e046456fa7dc3340ed86c31e&",
            "https://cdn.builder.io/api/v1/image/assets/TEMP/18ba718ed40abd284b749932f11b8c3243c8a7a50075da558a1f62d78bd02da5?apiKey=e6ca5815e046456fa7dc3340ed86c31e&",
            "https://cdn.builder.io/api/v1/image/assets/TEMP/5535975f9154b1dd8b66b6a476d8e5f4e457e13533f2a8c7c9f6ac5bca1db482?apiKey=e6ca5815e046456fa7dc3340ed86c31e&",
            "https://cdn.builder.io/api/v1/image/assets/TEMP/367ca4a6275a567c4411a6568b4eaec4175e2808dbccef169a4cfc8225938a81?apiKey=e6ca5815e046456fa7dc3340ed86c31e&"
        ]
    },
    {
        taskStatus: "Waiting",
        address: "96091 Gretchen Canyon",
        time: "14H-16H",
        cost: "40$",
        images: [
            "https://cdn.builder.io/api/v1/image/assets/TEMP/203ed59022a9a2ea0b165b2913a42ea946d6ebdc35bb2989d4b86fd4be4a3427?apiKey=e6ca5815e046456fa7dc3340ed86c31e&",
            "https://cdn.builder.io/api/v1/image/assets/TEMP/af0039707a37542b38b05438a211e6dd2a3796a0567ebd7a8916405812e55b2e?apiKey=e6ca5815e046456fa7dc3340ed86c31e&",
            "https://cdn.builder.io/api/v1/image/assets/TEMP/18ba718ed40abd284b749932f11b8c3243c8a7a50075da558a1f62d78bd02da5?apiKey=e6ca5815e046456fa7dc3340ed86c31e&",
            "https://cdn.builder.io/api/v1/image/assets/TEMP/5535975f9154b1dd8b66b6a476d8e5f4e457e13533f2a8c7c9f6ac5bca1db482?apiKey=e6ca5815e046456fa7dc3340ed86c31e&",
            "https://cdn.builder.io/api/v1/image/assets/TEMP/367ca4a6275a567c4411a6568b4eaec4175e2808dbccef169a4cfc8225938a81?apiKey=e6ca5815e046456fa7dc3340ed86c31e&"
        ]
    }
];

const DailyTask: React.FC = () => {
    return (
        <div className="flex flex-col items-center pb-20 mx-auto w-full bg-gray-100 max-w-[480px]">
            <header className="flex flex-col self-stretch pb-4 w-full bg-white">
                <div className="flex gap-5 justify-between w-full">
                    <div className="flex gap-1 justify-center px-6 py-3 text-lg tracking-tight leading-3 text-center text-black whitespace-nowrap font-[590]">
                        <span className="justify-center p-px">9:41</span>
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f55aabedc79f92832a5796449ca566cf839ba6ab5a3100cd47a574c1880b9c45?apiKey=e6ca5815e046456fa7dc3340ed86c31e&" alt="Network signal icon" className="shrink-0 w-3.5 aspect-square" />
                    </div>
                    <div className="flex gap-2.5 justify-center px-6 py-3">
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/500485c499f88d9550ceb0265829ada7437bccb7476ad6ee6e5c1ab067bb0930?apiKey=e6ca5815e046456fa7dc3340ed86c31e&" alt="WiFi signal icon" className="shrink-0 aspect-[1.28] w-[18px]" />
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6224278a3f68c03a5c3e0be03694a56ab078add0750dd5a35667a57c030ea853?apiKey=e6ca5815e046456fa7dc3340ed86c31e&" alt="Battery icon" className="shrink-0 aspect-[1.28] w-[18px]" />
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4140e1c4b23f3b68ea3a9b49bc6a97459bd23e83ee64bb84f8e4430ee8cc8953?apiKey=e6ca5815e046456fa7dc3340ed86c31e&" alt="Bluetooth icon" className="shrink-0 aspect-[1.92] w-[27px]" />
                    </div>
                </div>
                <div className="flex gap-5 self-center px-5 mt-4 w-full capitalize max-w-[432px]">
                    <h1 className="flex-auto text-xl font-bold text-slate-800">Daily Tasks</h1>
                    <Link href="/daily_task/add_task" passHref>
                        <div className="flex flex-1 gap-1.5 self-start text-sm text-right text-sky-600">
                            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/036daa71097cc3811a42c49d3d78da7e3fbe9732f4322517ba5e26109105cf03?apiKey=e6ca5815e046456fa7dc3340ed86c31e&" alt="Plus icon" className="shrink-0 w-4 aspect-square" />
                            <span className="my-auto">Add Task</span>
                        </div>
                    </Link>
                </div>
            </header>
            <nav className="flex gap-5 justify-between items-center px-5 mt-5 text-sm text-sky-600 capitalize">
                <a href="#" className="flex gap-1.5 my-auto" tabIndex={0}>
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d5993255c959716a9258c591803f3c9c10178e3038a99068c14c19cd81112277?apiKey=e6ca5815e046456fa7dc3340ed86c31e&" alt="Left arrow icon" className="shrink-0 aspect-square w-[13px]" />
                    <span>Previous Week</span>
                </a>
                <div className="flex gap-5 text-base text-center text-gray-400">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9dcf79b6f9d0142b6be707d9862c49c70722a4ddf6b8ac58cd70f2108198b293?apiKey=e6ca5815e046456fa7dc3340ed86c31e&" alt="Calendar icon" className="shrink-0 w-5 aspect-square" />
                    <span>May 23</span>
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7e5deb5bce45876c5084efcfa759330c9936e3eaa2ff864413d5a3d9b90a1f7a?apiKey=e6ca5815e046456fa7dc3340ed86c31e&" alt="Calendar icon" className="shrink-0 w-5 aspect-square" />
                </div>
                <a href="#" className="flex gap-1.5 my-auto text-right" tabIndex={0}>
                    <span>Next Week</span>
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/bcf00e3b27cfaf80d68f1d1c6b39f7a42ba6246fc2faf8f0496e7ad17d312a23?apiKey=e6ca5815e046456fa7dc3340ed86c31e&" alt="Right arrow icon" className="shrink-0 aspect-square w-[13px]" />
                </a>
            </nav>
            <section className="flex justify-center items-center self-stretch px-16 py-2 mt-4 w-full text-base bg-white">
                <div className="flex gap-3 justify-between">
                    <span className="text-green-500">2 Done</span>
                    <span className="text-gray-400">1 Waiting</span>
                </div>
            </section>
            {tasks.map((task, index) => (
                <Task key={index} taskStatus={task.taskStatus} address={task.address} time={task.time} cost={task.cost} images={task.images} />
            ))}
        </div>
    );
};

export default DailyTask;
