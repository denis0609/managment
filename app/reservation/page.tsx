'use client';
import React, { useState } from 'react';

type ReservationCardProps = {
  imageSrc: string;
  address: string;
  name: string;
  guests: number;
  startDate: string;
  endDate: string;
  rating: number;
  status: 'Registered' | 'Waiting';
  onStatusChange: (newStatus: 'Registered' | 'Waiting') => void;
};

const ReservationCard: React.FC<ReservationCardProps> = ({
  imageSrc,
  address,
  name,
  guests,
  startDate,
  endDate,
  rating,
  status,
  onStatusChange,
}) => {
  const handleStatusChange = () => {
    onStatusChange(status === 'Registered' ? 'Waiting' : 'Registered');
  };

  return (
    <article className="flex gap-4 px-3.5 py-2.5 w-full bg-white rounded-2xl shadow-sm max-w-[392px]">
      <img loading="lazy" src={imageSrc} alt={`Property at ${address}`} className="shrink-0 max-w-full aspect-[0.95] w-[107px]" />
      <div className="flex flex-col my-auto">
        <h3 className="text-sm font-bold text-slate-800">{address}</h3>
        <div className="flex gap-4 mt-3 text-sm text-slate-800">
          <div className="flex gap-1.5">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/be716718a8580b7b4f49353f06f5c3e6f35c6cb6f8f67109bcc06ae16f5d3e44?apiKey=e6ca5815e046456fa7dc3340ed86c31e&" alt="" className="shrink-0 w-4 aspect-square" />
            <span className="flex-auto my-auto">{name}</span>
          </div>
          <div className="flex gap-1.5">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2ef17b6aada2c0eecf803365b3fc025d4ebb6ca9901c32e95521cbbe8ad211d5?apiKey=e6ca5815e046456fa7dc3340ed86c31e&" alt="" className="shrink-0 w-4 aspect-square" />
            <span className="my-auto">{guests} Guests</span>
          </div>
        </div>
        <div className="flex gap-1.5 mt-2 text-sm text-slate-800">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e8d20502dc5e49125e54890f269e935076e47c1e26c5ea68aee7cade10785c0d?apiKey=e6ca5815e046456fa7dc3340ed86c31e&" alt="" className="shrink-0 w-4 aspect-square" />
          <span className="flex-auto">{startDate} - {endDate}</span>
        </div>
        <div className="flex gap-5 justify-between mt-3.5 w-full">
          <div className="flex gap-4 self-start px-px">
            {[...Array(rating)].map((_, index) => (
              <img key={index} loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/af0039707a37542b38b05438a211e6dd2a3796a0567ebd7a8916405812e55b2e?apiKey=e6ca5815e046456fa7dc3340ed86c31e&" alt="" className="shrink-0 aspect-square w-[18px]" />
            ))}
          </div>
          <button
            onClick={handleStatusChange}
            className={`justify-center items-start px-1.5 py-1 text-xs text-white whitespace-nowrap ${
              status === 'Registered' ? 'bg-green-500' : 'bg-gray-400'
            } rounded`}
          >
            {status}
          </button>
        </div>
      </div>
    </article>
  );
};

const MyComponent: React.FC = () => {
  const [reservations, setReservations] = useState<ReservationCardProps[]>([
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/15adfb90b469b3d0729749483ef317c6fcdf1603994841a437532cfa7ff8e0a4?apiKey=e6ca5815e046456fa7dc3340ed86c31e&",
      address: "96091 Gretchen Canyon",
      name: "Johnthan Doe",
      guests: 3,
      startDate: "May 24",
      endDate: "May 25",
      rating: 4,
      status: "Registered",
      onStatusChange: () => {},
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/203ed59022a9a2ea0b165b2913a42ea946d6ebdc35bb2989d4b86fd4be4a3427?apiKey=e6ca5815e046456fa7dc3340ed86c31e&",
      address: "96091 Gretchen Canyon",
      name: "Johnthan Doe",
      guests: 3,
      startDate: "May 24",
      endDate: "May 25",
      rating: 4,
      status: "Registered",
      onStatusChange: () => {},
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/15adfb90b469b3d0729749483ef317c6fcdf1603994841a437532cfa7ff8e0a4?apiKey=e6ca5815e046456fa7dc3340ed86c31e&",
      address: "96091 Gretchen Canyon",
      name: "Johnthan Doe",
      guests: 3,
      startDate: "May 24",
      endDate: "May 25",
      rating: 4,
      status: "Registered",
      onStatusChange: () => {},
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/203ed59022a9a2ea0b165b2913a42ea946d6ebdc35bb2989d4b86fd4be4a3427?apiKey=e6ca5815e046456fa7dc3340ed86c31e&",
      address: "96091 Gretchen Canyon",
      name: "Johnthan Doe",
      guests: 3,
      startDate: "May 24",
      endDate: "May 25",
      rating: 4,
      status: "Waiting",
      onStatusChange: () => {},
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/15adfb90b469b3d0729749483ef317c6fcdf1603994841a437532cfa7ff8e0a4?apiKey=e6ca5815e046456fa7dc3340ed86c31e&",
      address: "96091 Gretchen Canyon",
      name: "Johnthan Doe",
      guests: 3,
      startDate: "May 24",
      endDate: "May 25",
      rating: 4,
      status: "Waiting",
      onStatusChange: () => {},
    },
  ]);

  const [currentDate, setCurrentDate] = useState(new Date("2023-05-23"));

  const handleStatusChange = (index: number, newStatus: 'Registered' | 'Waiting') => {
    const updatedReservations = [...reservations];
    updatedReservations[index].status = newStatus;
    setReservations(updatedReservations);
  };

  const handlePreviousDay = () => {
    setCurrentDate(prevDate => {
      const newDate = new Date(prevDate);
      newDate.setDate(newDate.getDate() - 1);
      return newDate;
    });
  };

  const handleNextDay = () => {
    setCurrentDate(prevDate => {
      const newDate = new Date(prevDate);
      newDate.setDate(newDate.getDate() + 1);
      return newDate;
    });
  };

  const handlePreviousWeek = () => {
    setCurrentDate(prevDate => {
      const newDate = new Date(prevDate);
      newDate.setDate(newDate.getDate() - 7);
      return newDate;
    });
  };

  const handleNextWeek = () => {
    setCurrentDate(prevDate => {
      const newDate = new Date(prevDate);
      newDate.setDate(newDate.getDate() + 7);
      return newDate;
    });
  };

  const registeredCount = reservations.filter(r => r.status === 'Registered').length;
  const waitingCount = reservations.filter(r => r.status === 'Waiting').length;

  return (
    <main className="flex flex-col items-center pb-1.5 mx-auto w-full bg-gray-100 max-w-[480px]">
      <header className="flex flex-col self-stretch pb-5 w-full bg-white">
        <div className="flex gap-5 justify-between w-full">
          <div className="flex gap-1 justify-center px-6 py-3 text-lg tracking-tight leading-3 text-center text-black whitespace-nowrap font-[590]">
            <time className="justify-center p-px">9:41</time>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f55aabedc79f92832a5796449ca566cf839ba6ab5a3100cd47a574c1880b9c45?apiKey=e6ca5815e046456fa7dc3340ed86c31e&" alt="" className="shrink-0 w-3.5 aspect-square" />
          </div>
          <div className="flex gap-2.5 justify-center px-6 py-3">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/500485c499f88d9550ceb0265829ada7437bccb7476ad6ee6e5c1ab067bb0930?apiKey=e6ca5815e046456fa7dc3340ed86c31e&" alt="" className="shrink-0 aspect-[1.28] w-[18px]" />
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6224278a3f68c03a5c3e0be03694a56ab078add0750dd5a35667a57c030ea853?apiKey=e6ca5815e046456fa7dc3340ed86c31e&" alt="" className="shrink-0 aspect-[1.28] w-[18px]" />
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4140e1c4b23f3b68ea3a9b49bc6a97459bd23e83ee64bb84f8e4430ee8cc8953?apiKey=e6ca5815e046456fa7dc3340ed86c31e&" alt="" className="shrink-0 aspect-[1.92] w-[27px]" />
          </div>
        </div>
        <h1 className="self-start mt-4 ml-5 text-xl font-bold capitalize text-slate-800">
          Reservations
        </h1>
      </header>
      <nav className="flex gap-5 justify-between items-center px-5 mt-5 text-sm text-sky-600 capitalize">
        <button onClick={handlePreviousWeek} className="flex gap-1.5 self-stretch my-auto">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e98ee537f83103c23e05c4ce3209f7670a300f66b86c6a1498ed93f1039a3502?apiKey=e6ca5815e046456fa7dc3340ed86c31e&" alt="" className="shrink-0 aspect-square w-[13px]" />
          <span>Previous Week</span>
        </button>
        <div className="flex gap-5 self-stretch text-base text-center text-gray-400">
          <button onClick={handlePreviousDay} aria-label="Previous day">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c6f725b75b8ed2467d4a7b15b19cd7cbe1e0cde5611f9881eb1d657db1c42cd5?apiKey=e6ca5815e046456fa7dc3340ed86c31e&" alt="" className="shrink-0 w-5 aspect-square" />
          </button>
          <time>{currentDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</time>
          <button onClick={handleNextDay} aria-label="Next day">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7e5deb5bce45876c5084efcfa759330c9936e3eaa2ff864413d5a3d9b90a1f7a?apiKey=e6ca5815e046456fa7dc3340ed86c31e&" alt="" className="shrink-0 w-5 aspect-square" />
          </button>
        </div>
        <button onClick={handleNextWeek} className="flex gap-1.5 self-stretch my-auto text-right">
          <span>Next Week</span>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/421c9ccaafc8efb4b3b4f830c43f4e99154be59ed621d824d3ad2395cf6cdfff?apiKey=e6ca5815e046456fa7dc3340ed86c31e&" alt="" className="shrink-0 aspect-square w-[13px]" />
        </button>
      </nav>
      <section className="flex justify-center items-center self-stretch px-16 py-2 mt-4 w-full text-base bg-white">
        <div className="flex gap-3 justify-between">
          <span className="text-green-500">{registeredCount} Registered</span>
          <span className="text-gray-400">{waitingCount} waiting</span>
        </div>
      </section>
      <section className="flex flex-col gap-4 mt-5 w-full">
        {reservations.map((reservation, index) => (
          <ReservationCard
            key={index}
            {...reservation}
            onStatusChange={(newStatus) => handleStatusChange(index, newStatus)}
          />
        ))}
      </section>
    </main>
  );
};

export default MyComponent;