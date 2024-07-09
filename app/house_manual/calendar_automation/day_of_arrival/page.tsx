'use client';
import * as React from "react";

const MyComponent: React.FC = () => {
  return (
    <div className="flex flex-col pb-8 mx-auto w-full bg-gray-100 max-w-[480px]">
      <div className="flex flex-col pb-5 w-full bg-sky-600 rounded-none">
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
      <div className="flex flex-col px-5 mt-6 w-full text-base text-sky-600">
        <div className="text-2xl font-bold">
          Automate pre-check-in links - Airbnb
        </div>
        <div className="mt-6 leading-6 text-slate-800">
          Configure your scheduled messages to send a pre-check-in link your
          guest.{" "}
          <span className="font-bold">Each link is unique property.</span>
          <br />
          So you need to create a scheduled message for each property. We advise
          you to record the following 3 messages to ensure that your travelers
          register independently
        </div>
        <div className="mt-5 text-lg font-bold">Day of arrival</div>
        <div className="flex flex-col p-4 mt-4 w-full bg-white rounded-2xl shadow-sm text-slate-800">
          <div className="text-gray-400">Title for scheduled message:</div>
          <div className="mt-1.5 leading-[137.5%]">
            Loremipsumdolor - Pre check-in link - D-0
          </div>
          <div className="mt-4 text-gray-400">Scheduling the sending:</div>
          <div className="mt-1.5 leading-[137.5%]">
            On the day of arrival at 9:00 am
          </div>
          <div className="mt-4 font-bold leading-6">
            Reminder on arrival day at 9am - last reminder + force to check in
          </div>
          <div className="justify-center px-4 py-6 mt-4 leading-6 text-sky-600 rounded-xl bg-zinc-100">
            Bonjour
            <span className="text-sky-600">Prénom du voyageur,</span>
            <br />
            <br />
            Votre séjour débute aujourd'hui à partir de{" "}
            <span className="text-sky-600">Heure du check-in,</span> vous
            recevrez un SMS de TheApp dès que vous pourrez accéder au logement.{" "}
            <br />
            Si ce n'est pas déjà fait, nous vous invitons à vous enregistrer sur
            ce lien pour accéder aux instructions d'arrivée:
            <br />
            <span className="text-sky-600">Lien de pré check-in</span>
            <br />
            <br />
            Le guide du voyageur sera actif durant toute la durée de votre
            séjour. Vous aurez uniquement besoin d'une connexion internet active
            sur votre téléphone pour l'utiliser. Je vous souhaite un très bon
            séjour dans mon logement.
            <br />
            <br />
            Bien cordialement,
            <br />
            <span className="text-sky-600">Prénom de l'hôte Nom de l'hôte</span>
          </div>
          <div className="flex gap-5 justify-between px-0.5 mt-4 w-full text-center text-sky-600">
            <div className="flex gap-2.5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4dc19dc8dec89802ac3cb3eb9d6c5540da047b089d9035c30e33c1758484f2cf?apiKey=d756b2110af54b2291a49c0e6a10f702&"
                className="shrink-0 self-start w-4 aspect-square"
              />
              <div>Copy message</div>
            </div>
            <div className="flex gap-2.5 whitespace-nowrap">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/22b0651a842120442ad79a7af4e5ae1b9eb0a586504152aa39497f8824f307c0?apiKey=d756b2110af54b2291a49c0e6a10f702&"
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
        <div className="flex gap-4 self-center mt-8 text-center text-white whitespace-nowrap">
          <div className="justify-center px-8 py-4 bg-slate-800 rounded-[30px]">
            Back
          </div>
          <div className="justify-center px-8 py-4 bg-sky-600 rounded-[30px]">
            Continue
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyComponent;
