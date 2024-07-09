'use client';
import React from 'react';

type ConfigurationItemProps = {
  step: number;
  title: string;
  status: string;
  iconSrc: string;
  onClick: () => void;
  isCompleted: boolean;
  isActive: boolean;
};

const ConfigurationItem: React.FC<ConfigurationItemProps> = ({
  title,
  status,
  iconSrc,
  onClick,
  isCompleted,
  isActive,
}) => (
  <div
    onClick={onClick}
    className={`flex gap-5 justify-between px-4 py-5 mt-5 w-full text-base rounded-2xl shadow-sm max-w-[392px] cursor-pointer ${
      isActive ? 'bg-white text-slate-800' : 'bg-gray-200 text-gray-400'
    }`}
  >
    <div className="flex flex-col items-start">
      <h3 className={`font-bold ${isActive ? 'text-slate-800' : 'text-gray-400'}`}>{title}</h3>
      <p className={`mt-4 ${isActive ? 'text-sky-600' : 'text-gray-600'}`}>{status}</p>
    </div>
    {isCompleted && !isActive && (
      <img
        loading="lazy"
        src={iconSrc}
        alt=""
        className="shrink-0 my-auto w-8 aspect-square"
      />
    )}
  </div>
);

export default ConfigurationItem;
