'use client';
import BottomNavigation from "@/components/BoottomNavigation";
import InvoiceCard from "@/components/InvoiceCard";
import { getAllInvoiceEntry, getAllInvoiceOutput } from "@/lib/service";
import { InvoiceCardProps } from "@/lib/types";
import * as React from "react";

const MyComponent: React.FC = () => {
  const [invoiceEntries, setinvoiceEntries] = React.useState<InvoiceCardProps[]>([]);
  const [invoiceOutputs, setinvoiceOutputs] = React.useState<InvoiceCardProps[]>([]);
  const [selectedTab, setSelectedTab] = React.useState<'entry' | 'output'>('entry');
  const [currentMonth, setCurrentMonth] = React.useState<string>('May 2024');

  React.useEffect(() => {
    putInvoiceEntries();
    putInvoiceOutputs();
  }, [])

  const putInvoiceEntries = async () => {
    const allEntries = await getAllInvoiceEntry();
    setinvoiceEntries(allEntries.entries);

  }

  const putInvoiceOutputs = async () => {
    const allOutputs = await getAllInvoiceOutput();
    setinvoiceOutputs(allOutputs.outputs);
  }

  const handlePreviousWeek = () => {
    console.log('Navigate to previous week');
  };

  const handleNextWeek = () => {
    console.log('Navigate to next week');
  };

  const handlePreviousMonth = () => {
    console.log('Navigate to previous month');
  };

  const handleNextMonth = () => {
    console.log('Navigate to next month');
  };

  const handleCategoryClick = () => {
    console.log('Open category selection');
  };

  return (
    <div className="flex flex-col mx-auto w-full bg-gray-100 max-w-[480px]">
      <div className="flex flex-col pb-5 w-full bg-white">
        <div className="flex gap-5 justify-between w-full">
          <div className="flex gap-1 justify-center px-6 py-3 text-lg tracking-tight leading-3 text-center text-black whitespace-nowrap font-[590]">
            <div className="justify-center p-px">9:41</div>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f55aabedc79f92832a5796449ca566cf839ba6ab5a3100cd47a574c1880b9c45?apiKey=e6ca5815e046456fa7dc3340ed86c31e&" className="shrink-0 w-3.5 aspect-square" alt="Signal" />
          </div>
          <div className="flex gap-2.5 justify-center px-6 py-3">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/500485c499f88d9550ceb0265829ada7437bccb7476ad6ee6e5c1ab067bb0930?apiKey=e6ca5815e046456fa7dc3340ed86c31e&" className="shrink-0 aspect-[1.28] w-[18px]" alt="Wifi" />
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b758dec230011747af2734df3d80950a15f75c839697b9a1c7f0353df7454040?apiKey=e6ca5815e046456fa7dc3340ed86c31e&" className="shrink-0 aspect-[1.28] w-[18px]" alt="Bluetooth" />
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4140e1c4b23f3b68ea3a9b49bc6a97459bd23e83ee64bb84f8e4430ee8cc8953?apiKey=e6ca5815e046456fa7dc3340ed86c31e&" className="shrink-0 aspect-[1.92] w-[27px]" alt="Battery" />
          </div>
        </div>
        <div className="self-start mt-4 ml-5 text-xl font-bold capitalize text-slate-800">
          Invoices
        </div>
      </div>
      <div className="flex flex-col px-4 mt-5 w-full text-sm">
        <div className="flex gap-3.5 justify-between items-center text-sky-600 capitalize">
          <button onClick={handlePreviousWeek} className="flex gap-1.5 self-stretch my-auto">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/1068a128282ee9c32e5c08216bcb103737d58097c64145941bd9f7bd2e1106b4?apiKey=e6ca5815e046456fa7dc3340ed86c31e&" className="shrink-0 aspect-square w-[13px]" alt="Previous" />
            <div>Previous Week</div>
          </button>
          <div className="flex gap-4 self-stretch text-base text-center text-gray-400">
            <button onClick={handlePreviousMonth}>
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c6f725b75b8ed2467d4a7b15b19cd7cbe1e0cde5611f9881eb1d657db1c42cd5?apiKey=e6ca5815e046456fa7dc3340ed86c31e&" className="shrink-0 w-5 aspect-square" alt="Previous month" />
            </button>
            <div>{currentMonth}</div>
            <button onClick={handleNextMonth}>
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f4e5ab4138bc50bae0630b2b2f70b77fe83983de31920d294ebf4c3f72aefa15?apiKey=e6ca5815e046456fa7dc3340ed86c31e&" className="shrink-0 w-5 aspect-square" alt="Next month" />
            </button>
          </div>
          <button onClick={handleNextWeek} className="flex gap-1.5 self-stretch my-auto text-right">
            <div className="grow">Next Week</div>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9ee5406e8724c6b2f7a6be7f949b15722cecc4d141da7e442b0bc68082e690d1?apiKey=e6ca5815e046456fa7dc3340ed86c31e&" className="shrink-0 aspect-square w-[13px]" alt="Next" />
          </button>
        </div>
        <div className="flex flex-col justify-center p-1.5 mt-5 w-full text-base text-center bg-white rounded-xl">
          <div className="flex gap-5">
            <button
              onClick={() => setSelectedTab('entry')}
              className={`flex-1 justify-center px-1.5 py-3 rounded-md ${selectedTab === 'entry' ? 'text-white bg-sky-600' : 'bg-white text-slate-800'
                }`}
            >
              Entry List
            </button>
            <button
              onClick={() => setSelectedTab('output')}
              className={`flex-1 justify-center px-3 py-3 rounded-md ${selectedTab === 'output' ? 'text-white bg-sky-600' : 'bg-white text-slate-800'
                }`}
            >
              Output list
            </button>
          </div>
        </div>
        <button
          onClick={handleCategoryClick}
          className="flex gap-1.5 self-end mt-4 text-right text-sky-600 capitalize whitespace-nowrap"
        >
          <div>Category</div>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a1dc6640eb17f0fe5d073e60d2b80d111edaac7c801d601048f27d0fb6990b96?apiKey=e6ca5815e046456fa7dc3340ed86c31e&" className="shrink-0 w-4 aspect-square" alt="Category" />
        </button>
      </div>
      {selectedTab === "entry" ? (
        invoiceEntries.map((member, index) => (
          <InvoiceCard
            key={index}
            {...member}
            selectedTab={selectedTab}
          />
        ))
      ) : (
        invoiceOutputs.map((member, index) => (
          <InvoiceCard
            key={index}
            {...member}
            selectedTab={selectedTab}
          />
        ))
      )}
      <BottomNavigation activityState="Invoices" />
    </div>
  );
};

export default MyComponent;