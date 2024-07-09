'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

type ImageProps = {
  src: string;
  alt: string;
  className: string;
};

const Image: React.FC<ImageProps> = ({ src, alt, className }) => (
  <img loading="lazy" src={src} alt={alt} className={className} />
);

type CardProps = {
  imageSrc: string;
  title: string;
  onClick: () => void;
  isSelected: boolean;
};

const Card: React.FC<CardProps> = ({ imageSrc, title, onClick, isSelected }) => (
  <button
    onClick={onClick}
    className={`flex overflow-hidden relative flex-col pt-20 whitespace-nowrap aspect-[1.09] w-[191px] ${
      isSelected ? 'ring-2 ring-sky-600' : ''
    }`}
  >
    <Image src={imageSrc} alt={title} className="object-cover absolute inset-0 size-full" />
    <div className="relative justify-center items-start px-4 py-5 mt-12 rounded-none text-white">
      {title}
    </div>
  </button>
);

type ButtonProps = {
  children: React.ReactNode;
  className: string;
  onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({ children, className, onClick }) => (
  <button onClick={onClick} className={`justify-center px-8 py-4 rounded-[30px] ${className}`}>
    {children}
  </button>
);

const MyComponent: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const cards = [
    { imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/a30b32c71773772993f2a29ba8f7c7b9a42e360a62219641fcfc51da9ef212af?apiKey=d756b2110af54b2291a49c0e6a10f702&", title: "Entrance" },
    { imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/a5513480ade0ce50d2ef2b8fd7bc5831e1e428d6b3083b115938c02ee3585f28?apiKey=d756b2110af54b2291a49c0e6a10f702&", title: "Living room" },
  ];

  const handleCardClick = (index: number) => {
    setSelectedCard(index);
  };

  const handleBackClick = () => {
    console.log("Back button clicked");
  };
  const router = useRouter();

  const navigateToPreview = () => {
    router.push('/house_manual/presentation_automation/preview');
  };

  const handleContinueClick = () => {
    if (selectedCard !== null) {
      console.log(`Continuing with selected card: ${cards[selectedCard].title}`);
    } else {
      console.log("Please select a card before continuing");
    }
  };

  return (
    <main className="flex flex-col items-center pb-8 mx-auto w-full bg-gray-100 max-w-[480px]">
      <header className="flex gap-5 justify-between self-stretch w-full">
        <div className="flex gap-1 justify-center px-6 py-3 text-lg tracking-tight leading-3 text-center text-black whitespace-nowrap font-[590]">
          <time className="justify-center p-px">9:41</time>
          <Image src="https://cdn.builder.io/api/v1/image/assets/TEMP/f55aabedc79f92832a5796449ca566cf839ba6ab5a3100cd47a574c1880b9c45?apiKey=d756b2110af54b2291a49c0e6a10f702&" alt="" className="shrink-0 w-3.5 aspect-square" />
        </div>
        <nav className="flex gap-2.5 justify-center px-6 py-3">
          <Image src="https://cdn.builder.io/api/v1/image/assets/TEMP/500485c499f88d9550ceb0265829ada7437bccb7476ad6ee6e5c1ab067bb0930?apiKey=d756b2110af54b2291a49c0e6a10f702&" alt="Signal strength" className="shrink-0 aspect-[1.28] w-[18px]" />
          <Image src="https://cdn.builder.io/api/v1/image/assets/TEMP/6224278a3f68c03a5c3e0be03694a56ab078add0750dd5a35667a57c030ea853?apiKey=d756b2110af54b2291a49c0e6a10f702&" alt="Wi-Fi" className="shrink-0 aspect-[1.28] w-[18px]" />
          <Image src="https://cdn.builder.io/api/v1/image/assets/TEMP/4140e1c4b23f3b68ea3a9b49bc6a97459bd23e83ee64bb84f8e4430ee8cc8953?apiKey=d756b2110af54b2291a49c0e6a10f702&" alt="Battery" className="shrink-0 aspect-[1.92] w-[27px]" />
        </nav>
      </header>
      <h1 className="mt-4 text-2xl font-bold text-center text-sky-600">
        Visit the rental
      </h1>
      <section className="flex gap-2.5 mt-4 text-sm">
        {cards.map((card, index) => (
          <Card
            key={index}
            imageSrc={card.imageSrc}
            title={card.title}
            onClick={() => handleCardClick(index)}
            isSelected={selectedCard === index}
          />
        ))}
      </section>
      <footer className="flex gap-4 text-base text-center text-white whitespace-nowrap mt-[584px]">
        <Button className="bg-slate-800" onClick={navigateToPreview}>Back</Button>
        <Button className="bg-sky-600" onClick={navigateToPreview}>Continue</Button>
      </footer>
    </main>
  );
};

export default MyComponent;