'use client';
import { InvoiceCardProps } from "@/lib/types";
import * as React from "react";

const InvoiceCard: React.FC<InvoiceCardProps> = ({ image, propertyId, propertyName, noOfNights, totalIncome, expenseType, amount, selectedTab }) => (
  <div className="flex gap-4 self-center py-2.5 pr-8 pl-2.5 mt-4 max-w-full text-base bg-white rounded-2xl shadow-sm text-slate-800 w-[392px]">
    <img loading="lazy" src={image} className="shrink-0 aspect-square w-[92px]" alt="Property" />
    <div className="flex flex-col my-auto">
      <div className="font-bold">{propertyName}</div>
      <div className="mt-4">
      {selectedTab==="entry"? "No. of nights: ":"ExpenseType: "}<span className="text-slate-800">{selectedTab==="entry"? `${noOfNights} Nights`:expenseType}</span>
      </div>
      <div className="mt-2.5">
        {selectedTab==="entry"? "Total income":"Amount"}: <span className="text-slate-800">{selectedTab==="entry"? totalIncome: amount}</span>
      </div>
    </div>
  </div>
);

export default InvoiceCard;
