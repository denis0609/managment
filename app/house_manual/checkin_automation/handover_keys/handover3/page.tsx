'use client';
import * as React from "react";
import { useRouter } from 'next/navigation'; 

interface MyComponentProps {}

const MyComponent: React.FC<MyComponentProps> = () => {
  const [imageUrl, setImageUrl] = React.useState<string | null>(null);
  const [description, setDescription] = React.useState<string>("");

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value);
  };

  const handleBack = () => {
    console.log("Back button clicked");
  };

  const router = useRouter();  // Initialize the useRouter hook

  const navigateToNextPage= () => {
    router.push('/house_manual/checkin_automation/handover_keys/handover4');  // Programmatically navigate to /my_team
  };

  const handleContinue = () => {
    navigateToNextPage()
  };

  return (
    <div className="flex flex-col pb-8 mx-auto w-full bg-gray-100 max-w-[480px]">
      <div className="flex flex-col pb-5 w-full bg-sky-600 rounded-none">
        <div className="flex gap-5 justify-between w-full">
          <div className="flex gap-1 justify-center px-6 py-3 text-lg tracking-tight leading-3 text-center text-white whitespace-nowrap font-[590]">
            <div className="justify-center p-px">9:41</div>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3375cb7701cbff4aae1c67c7792c97eea6dc4587079c42fd5602cfbc1a5de409?apiKey=d756b2110af54b2291a49c0e6a10f702&" className="shrink-0 w-3.5 aspect-square" />
          </div>
          <div className="flex gap-2.5 justify-center px-6 py-3">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/235ae4871351838a2a9976141ec0941f9f9dc650bde6ba06a757682f4bcf8ba9?apiKey=d756b2110af54b2291a49c0e6a10f702&" className="shrink-0 aspect-[1.28] w-[18px]" />
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/60a35504b43724f14b33ca34538fd8d6d75c97a1b914d7a7f4c79e9fe196d5be?apiKey=d756b2110af54b2291a49c0e6a10f702&" className="shrink-0 aspect-[1.28] w-[18px]" />
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/873c4ed8b2a7837acf6866b091a6ded9e9175ab4c358bf1195c383e7cb647fbd?apiKey=d756b2110af54b2291a49c0e6a10f702&" className="shrink-0 aspect-[1.92] w-[27px]" />
          </div>
        </div>
        <div className="flex flex-col px-5 mt-4 w-full">
          <div className="text-xl font-bold text-white capitalize">
            Checkin-Checkout Automation
          </div>
          <div className="self-start mt-6 text-sm text-gray-100">
            Step <span className="text-xl">3</span>/4
          </div>
          <div className="self-start mt-1.5 text-base font-bold text-white">
            Handing over the keys
          </div>
          <div className="flex gap-2 mt-2.5">
            <div className="flex-1 shrink-0 h-1 bg-gray-100 rounded-md" />
            <div className="flex-1 shrink-0 h-1 bg-white rounded-md" />
            <div className="flex-1 shrink-0 h-1 bg-white rounded-md" />
            <div className="flex-1 shrink-0 h-1 rounded-md bg-white bg-opacity-40" />
          </div>
        </div>
      </div>
      <div className="flex flex-col px-5 mt-6 w-full text-base text-slate-800">
        <div className="font-bold">
          Let's organize the delivery of keys via your key box
        </div>
        <div className="mt-6 text-2xl font-bold text-sky-600">Find the rental</div>
        <div className="mt-5 text-sm">
          Post a photo of your entrance (gate) or the door of your building here to assure your travelers that they have arrived safely!
        </div>
        <label className="flex flex-col justify-center px-6 py-11 mt-2.5 text-sm font-semibold rounded-xl border border-dashed border-slate-400 text-stone-950 cursor-pointer">
          <input type="file" className="hidden" onChange={handleImageUpload} accept="image/*" />
          <div className="flex flex-col px-20">
            {imageUrl ? (
              <img src={imageUrl} alt="Uploaded" className="self-center w-32 h-32 object-cover" />
            ) : (
              <>
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/45abe0e98b7cc9be403601a420c73e94080bea74bcb254996bac5bb879215c94?apiKey=d756b2110af54b2291a49c0e6a10f702&" className="self-center w-8 aspect-square" />
                <div className="mt-4">
                  <span className="text-sky-600">Choose </span>
                  <span className="">image to upload...</span>
                </div>
              </>
            )}
          </div>
        </label>
        <div className="mt-5 text-sm">
          Write a few words here to help your tenants find your accommodation
        </div>
        <textarea
          className="items-start px-5 pt-5 pb-24 mt-2.5 text-gray-400 bg-white rounded-xl border border-solid border-slate-300 w-full resize-none"
          value={description}
          onChange={handleDescriptionChange}
          placeholder="Lorem ipsum dolor sit amet"
        />
        <div className="flex gap-4 self-center mt-36 text-center text-white whitespace-nowrap">
          <button
            className="justify-center px-8 py-4 bg-slate-800 rounded-[30px]"
            onClick={handleBack}
          >
            Back
          </button>
          <button
            className="justify-center px-8 py-4 bg-sky-600 rounded-[30px]"
            onClick={handleContinue}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyComponent;