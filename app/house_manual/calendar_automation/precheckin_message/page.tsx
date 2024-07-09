'use client';
import * as React from "react";
import { useRouter } from 'next/navigation';

function MyComponent() {
  const router = useRouter();

  const handleBack = () => {
    router.back(); // Navigate back to the previous page
  };

  const handleContinue = () => {
    router.push('/house_manual/calendar_automation/precheckin_3days_before'); // Replace with the actual path to the next step
  };

  return (
    <div className="flex flex-col items-center pb-8 mx-auto w-full bg-gray-100 max-w-[480px]">
      <div className="flex flex-col self-stretch pb-5 w-full bg-sky-600 rounded-none">
        <div className="flex gap-5 justify-between w-full">
          <div className="flex gap-1 justify-center px-6 py-3 text-lg tracking-tight leading-3 text-center text-white whitespace-nowrap font-[590]">
            <div className="justify-center p-px">9:41</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3375cb7701cbff4aae1c67c7792c97eea6dc4587079c42fd5602cfbc1a5de409?apiKey=d756b2110af54b2291a49c0e6a10f702&"
              className="shrink-0 w-3.5 aspect-square"
            />
          </div>
          <div className="flex gap-2.5 justify-center px-6 py-3">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/235ae4871351838a2a9976141ec0941f9f9dc650bde6ba06a757682f4bcf8ba9?apiKey=d756b2110af54b2291a49c0e6a10f702&"
              className="shrink-0 aspect-[1.28] w-[18px]"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b2d261ae0fb8ff0406c4db2dc5a27d0f3761d0e20851c0880724e3ca469ed523?apiKey=d756b2110af54b2291a49c0e6a10f702&"
              className="shrink-0 aspect-[1.28] w-[18px]"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/873c4ed8b2a7837acf6866b091a6ded9e9175ab4c358bf1195c383e7cb647fbd?apiKey=d756b2110af54b2291a49c0e6a10f702&"
              className="shrink-0 aspect-[1.92] w-[27px]"
            />
          </div>
        </div>
        <div className="flex flex-col px-5 mt-4 w-full">
          <div className="text-xl font-bold text-white capitalize">
            Sync Calendar
          </div>
          <div className="self-start mt-5 text-sm text-gray-100">
            Step <span className="text-xl">3</span>/3
          </div>
          <div className="self-start mt-1.5 text-base font-bold text-white">
            Automate the pre-check-in link
          </div>
          <div className="flex gap-2 mt-2.5">
            <div className="flex-1 shrink-0 h-1 bg-gray-100 rounded-md" />
            <div className="flex-1 shrink-0 h-1 bg-white rounded-md" />
            <div className="flex-1 shrink-0 h-1 bg-white rounded-md" />
          </div>
        </div>
      </div>
      <div className="mt-6 text-2xl font-bold text-sky-600">
        Automate pre-check-in links - Airbnb
      </div>
      <div className="mt-6 text-base leading-6 text-slate-800">
        Configure your scheduled messages to send a pre-check-in link your
        guest. <span className="font-bold">Each link is unique property.</span>
        <br />
        So you need to create a scheduled message for each property. We advise
        you to record the following 3 messages to ensure that your travelers
        register independently
      </div>
      <div className="flex flex-col p-4 mt-5 w-full text-base bg-white rounded-2xl shadow-sm max-w-[392px] text-slate-800">
        <div className="text-gray-400">Title for scheduled message:</div>
        <div className="mt-1.5 leading-6">
          Loremipsumdolor - Pre check-in link - Reservation
        </div>
        <div className="mt-4 text-gray-400">Scheduling the sending:</div>
        <div className="mt-1.5 leading-[137.5%]">
          5 minute after confirmed reservation
        </div>
        <div className="mt-4 font-bold leading-6">
          Automatic message after booking - thanks, explain what theapp is and
          encourage them to check-in
        </div>
        <div className="justify-center px-4 py-6 mt-4 leading-6 text-sky-600 rounded-xl bg-zinc-100">
          <span className="text-slate-800">Bonjour </span>
          <span className="text-sky-600">Prénom du voyageur</span>
          <span className="text-slate-800">,</span>
          <br />
          <span className="text-slate-800">
            Merci d'avoir réservé notre logement{" "}
          </span>
          <span className="text-sky-600">Nom du logement</span>
          <span className="text-slate-800"> pour votre séjour sur </span>
          <span className="text-sky-600">Vile</span>
          <span className="text-slate-800">
            , j'espère que vous y passerez un bon moment :-).
          </span>
          <br />
          <span className="text-slate-800">
            L'arrivée dans le logement est autonome et vous serez informé par
            sms dès qu'il sera disponible, au plus tard à{" "}
          </span>
          <span className="text-sky-600">Heure du check-in.</span>
          <br />
          <span className="text-slate-800">
            Je ne serais pas sur place, mais je vous partagerai toutes les
            instructions d'arrivée, de départ et mes recommandations via un
            logiciel appelé TheApp. Je vous invite donc à vous enregistrer, le
            plus tôt possible, sur le lles ci-dessous afin d'y accéder:
          </span>
          <br />
          <span className="text-sky-600">Lien de pré check-in</span>
        </div>
        <div className="flex gap-5 justify-between px-0.5 mt-4 w-full text-center text-sky-600">
          <div className="flex gap-2.5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/69803ddd6b47e7aa749e46447dc9103b072be46bee897e62f889c608022fe5d9?apiKey=d756b2110af54b2291a49c0e6a10f702&"
              className="shrink-0 self-start w-4 aspect-square"
            />
            <div>Copy message</div>
          </div>
          <div className="flex gap-2.5 whitespace-nowrap">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c3e1b49a32ffb2063ffa16619269a7786da8166c98dd3ddf442b2de928a25a35?apiKey=d756b2110af54b2291a49c0e6a10f702&"
              className="shrink-0 self-start w-4 aspect-square"
            />
            <div>Refresh</div>
          </div>
        </div>
        <div className="flex gap-2 mt-4 text-zinc-500">
          <div className="shrink-0 bg-white rounded-md border border-solid border-zinc-500 h-[22px] w-[22px]" />
          <div className="my-auto">
            Define as standard model for all housing
          </div>
        </div>
      </div>
      <div className="flex gap-4 mt-8 text-base text-center text-white whitespace-nowrap">
        <button onClick={handleBack} className="justify-center px-8 py-4 bg-slate-800 rounded-[30px]">
          Back
        </button>
        <button onClick={handleContinue} className="justify-center px-8 py-4 bg-sky-600 rounded-[30px]">
          Continue
        </button>
      </div>
    </div>
  );
}

export default MyComponent;
