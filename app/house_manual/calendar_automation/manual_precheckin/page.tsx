'use client';
import * as React from "react";
import { useRouter } from 'next/navigation';

function MyComponent() {
  const router = useRouter();

  const handleBack = () => {
    router.back(); // Navigate back to the previous page
  };

  const handleContinue = () => {
    router.push('/house_manual?step=5'); // Replace with the actual path to the next step
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
        Configure the manual pre-check-in link
      </div>
      <div className="mt-6 text-base leading-6 text-slate-800">
        Configure the message for manual pre-check-in. This will be used to take
        direct reservations or reservations on other platforms.
      </div>
      <div className="flex flex-col p-4 mt-14 w-full text-base text-sky-600 bg-white rounded-2xl shadow-sm max-w-[392px]">
        <div className="font-bold leading-[137.5%] text-slate-800">
          Manual pre-check-in message
        </div>
        <div className="justify-center px-4 py-6 mt-4 leading-6 rounded-xl bg-zinc-100">
          Bonjour,
          <br />
          <br />
          Voici un lien de pré check-in sur lequel vous devez vous inscrire pour
          pouvoir accéder au logement:
          <br />
          <span className="text-sky-600">Lien de pré check-in</span>
          <br />
          <br />
          Vous recevrez un sms de &lt;&lt; PassPass», contenant un accès vers le
          guide du voyageur vous partageant mes recommandations et une
          présentation du logement.
          <br />
          Vous aurez également accès à la section «arrivée autonome» qui sera
          active une fois votre logement nettoyé et prêt à vous accueillir.
          <br />
          Vous y trouverez les codes d'accès de l'immeuble et du logement. Vous
          aurez uniquement besoin d'une connexion internet active sur votre
          téléphone pour valider votre arrivée.
          <br />
          <br />
          Au plus tard, les codes d'accès seront accessibles à{" "}
          <span className="text-sky-600">Heure du check-in</span>.
        </div>
        <div className="flex gap-2.5 self-start mt-4 text-center whitespace-nowrap">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/22b0651a842120442ad79a7af4e5ae1b9eb0a586504152aa39497f8824f307c0?apiKey=d756b2110af54b2291a49c0e6a10f702&"
            className="shrink-0 self-start w-4 aspect-square"
          />
          <div>Refresh</div>
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
