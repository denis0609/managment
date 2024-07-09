"use client";
import * as React from "react";
import { useRouter } from "next/navigation";

interface BottomNavigationProps {
    activityState:string
}

const BottomNavigation: React.FC<BottomNavigationProps> = ({activityState}) => {
    const [activeNavItem, setActiveNavItem] = React.useState<string>(activityState);
    const router = useRouter();

    const navigateTo = (path: string, item: string) => {
        setActiveNavItem(item);
        router.push(path);
    };

    return (
        <div className="flex justify-around items-start self-stretch px-9 pt-4 mt-60 bg-white rounded-3xl">
            <div className="flex flex-col self-stretch">
                <div className="flex gap-8 justify-around">
                    <button onClick={() => navigateTo("/", "Activity")}>
                        <img
                            loading="lazy"
                            src={activityState==="Activity"?"https://cdn.builder.io/api/v1/image/assets/TEMP/dd3854742ea9b91d28a15d63935645293b8e119193e43aac99f17d10078c6998?apiKey=e6ca5815e046456fa7dc3340ed86c31e&":"https://cdn.builder.io/api/v1/image/assets/TEMP/4ca63f4a738e445c419f86084697089cbbc4689c170a6de87a412769b60c30fe?apiKey=e6ca5815e046456fa7dc3340ed86c31e&"}
                            className="shrink-0 aspect-square w-[30px]"
                        />
                    </button>
                    <button onClick={() => navigateTo("/apartments", "Apartments")}>
                        <img
                            loading="lazy"
                            src={activityState === "Apartments" ?"https://cdn.builder.io/api/v1/image/assets/TEMP/72d5d4226c72581e0ccdeb3610047697c52571dd268a5bc88d5476838be5d9aa?apiKey=e6ca5815e046456fa7dc3340ed86c31e&":"https://cdn.builder.io/api/v1/image/assets/TEMP/dc5933edb8d839b9ae5f3627c09e48c2c191e169d4de930a7ebb214874df449f?apiKey=e6ca5815e046456fa7dc3340ed86c31e&"}
                            // src="https://cdn.builder.io/api/v1/image/assets/TEMP/dc5933edb8d839b9ae5f3627c09e48c2c191e169d4de930a7ebb214874df449f?apiKey=e6ca5815e046456fa7dc3340ed86c31e&"
                            className="shrink-0 aspect-square w-[30px]"
                            />
                    </button>
                    <button onClick={() => navigateTo("/my_team", "Team")}>
                        <img
                            loading="lazy"
                            src={activityState === "Team" ?"https://cdn.builder.io/api/v1/image/assets/TEMP/615255e53bcb15de34ca6a328557ee911b1b3d677efbc3a5f31b965790888612?apiKey=e6ca5815e046456fa7dc3340ed86c31e&":"https://cdn.builder.io/api/v1/image/assets/TEMP/2fde5d538f0674c3cd0d5eb96e987b2fa2e5e5c934f7f4109e9c1d28ad8c91b1?apiKey=e6ca5815e046456fa7dc3340ed86c31e&"}
                            className="shrink-0 aspect-square w-[30px]"
                            />
                    </button>
                    <button onClick={() => navigateTo("/stock", "StockMgmt")}>
                        <img
                            loading="lazy"
                            src={activityState === "StockMgmt" ?"https://cdn.builder.io/api/v1/image/assets/TEMP/e67264e61899e67e9d85f089ae4d98e114de5c8f22aa8380803ba292c99c2fd3?apiKey=e6ca5815e046456fa7dc3340ed86c31e&":"https://cdn.builder.io/api/v1/image/assets/TEMP/8fade3df7deb4d1f87c5e004ad8c27127546343167e1f5cc074e4f3d3dd00273?apiKey=e6ca5815e046456fa7dc3340ed86c31e&"}
                            className="self-center aspect-square w-[30px]"
                            />
                    </button>
                    <button onClick={() => navigateTo("/invoice", "Invoices")}>
                        <img
                            loading="lazy"
                            src={activityState === "Invoices" ?"https://cdn.builder.io/api/v1/image/assets/TEMP/07acf4f0111eb8ff35931a2f62b004afa532e36b17fac07569d75b54891bf045?apiKey=e6ca5815e046456fa7dc3340ed86c31e&":"https://cdn.builder.io/api/v1/image/assets/TEMP/68d70853b2aab83d9e338e243be918a0e5b05ea099b0f8918fb23dccb226148d?apiKey=e6ca5815e046456fa7dc3340ed86c31e&"}
                            className="self-center aspect-[1.43] w-[30px]"
                        />
                    </button>
                </div>
                <div className="flex gap-8 justify-between items-start mt-3.5 text-xs text-center whitespace-nowrap text-slate-800">
                    <div className={`flex flex-col flex-1 items-center ${activeNavItem === "Activity" ? "text-sky-600" : "text-slate-800"}`}>
                        <div>Activity</div>
                        {activeNavItem === "Activity" && (
                            <div className="shrink-0 self-center mt-2 w-4 h-2 bg-sky-600 rounded-full border-solid border-[3px] border-sky-600 border-opacity-20 stroke-[3px]" />
                        )}
                    </div>
                    <div className={`flex flex-col flex-1 items-center ${activeNavItem === "Apartments" ? "text-sky-600" : "text-slate-800"}`}>
                        <div>Apartments</div>
                        {activeNavItem === "Apartments" && (
                            <div className="shrink-0 self-center mt-2 w-4 h-2 bg-sky-600 rounded-full border-solid border-[3px] border-sky-600 border-opacity-20 stroke-[3px]" />
                        )}
                    </div>
                    <div className={`flex flex-col flex-1 items-center ${activeNavItem === "Team" ? "text-sky-600" : "text-slate-800"}`}>
                        <div>Team</div>
                        {activeNavItem === "Team" && (
                            <div className="shrink-0 self-center mt-2 w-4 h-2 bg-sky-600 rounded-full border-solid border-[3px] border-sky-600 border-opacity-20 stroke-[3px]" />
                        )}
                    </div>
                    <div className={`flex flex-col flex-1 items-center ${activeNavItem === "StockMgmt" ? "text-sky-600" : "text-slate-800"}`}>
                        <div>Stock mgmt.</div>
                        {activeNavItem === "StockMgmt" && (
                            <div className="shrink-0 self-center mt-2 w-4 h-2 bg-sky-600 rounded-full border-solid border-[3px] border-sky-600 border-opacity-20 stroke-[3px]" />
                        )}
                    </div>
                    <div className={`flex flex-col flex-1 items-center ${activeNavItem === "Invoices" ? "text-sky-600" : "text-slate-800"}`}>
                        <div>Invoices</div>
                        {activeNavItem === "Invoices" && (
                            <div className="shrink-0 self-center mt-2 w-4 h-2 bg-sky-600 rounded-full border-solid border-[3px] border-sky-600 border-opacity-20 stroke-[3px]" />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BottomNavigation;
