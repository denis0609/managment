'use client';
import React, { useState } from 'react';

type CheckboxProps = {
  label: string;
  checked: boolean;
  onChange: () => void;
};

const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onChange }) => (
  <button
    className="flex gap-3 self-start mt-3 items-center"
    onClick={onChange}
    aria-checked={checked}
    role="checkbox"
  >
    <div
      className={`shrink-0 w-5 h-5 rounded border border-solid ${
        checked ? 'bg-sky-600 border-sky-600' : 'bg-white border-neutral-400'
      }`}
    />
    <div>{label}</div>
  </button>
);

type InputFieldProps = {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
};

const InputField: React.FC<InputFieldProps> = ({
  label,
  placeholder,
  value,
  onChange,
}) => (
  <>
    <label className="mt-6 text-sm text-slate-800">{label}</label>
    <input
      className="justify-center items-start p-5 mt-3.5 w-full bg-white rounded-xl border border-solid border-slate-300"
      placeholder={placeholder}
      aria-label={label}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </>
);

const AddTeamMember: React.FC = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [tasks, setTasks] = useState([
    { label: 'Cleaning', checked: false },
    { label: 'Key drop', checked: true },
    { label: 'Option 3', checked: false },
    { label: 'Option 4', checked: false },
    { label: 'Option 5', checked: false },
  ]);

  const handleTaskToggle = (index: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, i) =>
        i === index ? { ...task, checked: !task.checked } : task
      )
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted', { name, phoneNumber, email, tasks });
  };

  const handleCancel = () => {
    console.log('Form cancelled');
  };

  return (
    <main className="flex flex-col pb-8 mx-auto w-full bg-gray-100 max-w-[480px]">
      <header className="flex flex-col pb-5 w-full bg-white">
        <div className="flex gap-5 justify-between w-full">
          <div className="flex gap-1 justify-center px-6 py-3 text-lg tracking-tight leading-3 text-center text-black whitespace-nowrap font-[590]">
            <time className="justify-center p-px">9:41</time>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f55aabedc79f92832a5796449ca566cf839ba6ab5a3100cd47a574c1880b9c45?apiKey=e6ca5815e046456fa7dc3340ed86c31e&"
              className="shrink-0 w-3.5 aspect-square"
              alt=""
            />
          </div>
          <div className="flex gap-2.5 justify-center px-6 py-3">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/500485c499f88d9550ceb0265829ada7437bccb7476ad6ee6e5c1ab067bb0930?apiKey=e6ca5815e046456fa7dc3340ed86c31e&"
              className="shrink-0 aspect-[1.28] w-[18px]"
              alt=""
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b758dec230011747af2734df3d80950a15f75c839697b9a1c7f0353df7454040?apiKey=e6ca5815e046456fa7dc3340ed86c31e&"
              className="shrink-0 aspect-[1.28] w-[18px]"
              alt=""
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4140e1c4b23f3b68ea3a9b49bc6a97459bd23e83ee64bb84f8e4430ee8cc8953?apiKey=e6ca5815e046456fa7dc3340ed86c31e&"
              className="shrink-0 aspect-[1.92] w-[27px]"
              alt=""
            />
          </div>
        </div>
        <h1 className="self-start mt-4 ml-5 text-xl font-bold capitalize text-slate-800">
          Add Stock
        </h1>
      </header>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col px-5 mt-6 w-full text-base text-gray-400"
      >
        <InputField
          label="Name"
          placeholder="Enter name"
          value={name}
          onChange={setName}
        />
        <InputField
          label="Phone Number"
          placeholder="Enter Phone Number"
          value={phoneNumber}
          onChange={setPhoneNumber}
        />
        <InputField
          label="Email"
          placeholder="Enter Email"
          value={email}
          onChange={setEmail}
        />
        <label className="mt-6 text-slate-800">Tasks</label>
        {tasks.map((task, index) => (
          <Checkbox
            key={index}
            label={task.label}
            checked={task.checked}
            onChange={() => handleTaskToggle(index)}
          />
        ))}
        <div className="flex gap-4 self-center mt-72 text-center text-white whitespace-nowrap">
          <button
            type="button"
            onClick={handleCancel}
            className="justify-center px-8 py-4 bg-slate-800 rounded-[30px]"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="justify-center px-8 py-4 bg-sky-600 rounded-[30px]"
          >
            Save
          </button>
        </div>
      </form>
    </main>
  );
};

export default AddTeamMember;