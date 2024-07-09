'use client';
import React, { useState } from "react";

interface FeedbackProps {
  onSubmit: (rating: number, feedback: string) => void;
}

const Feedback: React.FC<FeedbackProps> = ({ onSubmit }) => {
  const [rating, setRating] = useState<number>(0);
  const [feedback, setFeedback] = useState<string>("");

  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
  };

  const handleFeedbackChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFeedback(event.target.value);
  };

  const handleSubmit = () => {
    onSubmit(rating, feedback);
  };

  return (
    <div className="flex flex-col items-center pb-14 mx-auto w-full bg-gray-100 max-w-[480px]">
      <div className="flex gap-5 justify-between self-stretch w-full">
        <div className="flex gap-1 justify-center px-6 py-3 text-lg tracking-tight leading-3 text-center text-black whitespace-nowrap font-[590]">
          <div className="justify-center p-px">9:41</div>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f55aabedc79f92832a5796449ca566cf839ba6ab5a3100cd47a574c1880b9c45?apiKey=d756b2110af54b2291a49c0e6a10f702&" className="shrink-0 w-3.5 aspect-square" />
        </div>
        <div className="flex gap-2.5 justify-center px-6 py-3">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/500485c499f88d9550ceb0265829ada7437bccb7476ad6ee6e5c1ab067bb0930?apiKey=d756b2110af54b2291a49c0e6a10f702&" className="shrink-0 aspect-[1.28] w-[18px]" />
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b758dec230011747af2734df3d80950a15f75c839697b9a1c7f0353df7454040?apiKey=d756b2110af54b2291a49c0e6a10f702&" className="shrink-0 aspect-[1.28] w-[18px]" />
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4140e1c4b23f3b68ea3a9b49bc6a97459bd23e83ee64bb84f8e4430ee8cc8953?apiKey=d756b2110af54b2291a49c0e6a10f702&" className="shrink-0 aspect-[1.92] w-[27px]" />
        </div>
      </div>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e3528476858dff4bf1bc35ef5939487e857a5f2f3a7c4a2ced6c03c00e0b9651?apiKey=d756b2110af54b2291a49c0e6a10f702&" className="mt-11 max-w-full aspect-square w-[120px]" />
      <div className="mt-12 text-2xl font-bold text-center text-slate-800">
        Your feedback on rental
      </div>
      <div className="mt-5 text-base leading-6 text-center text-slate-800">
        Optional but useful, these comments allow your host to improve their rental experience. Your comments will be exclusively accessible to him and will not be posted on the reservation platforms
      </div>
      <div className="mt-16 text-2xl font-bold text-center text-slate-800">
        How would you rate your stay?
      </div>
      <div className="flex justify-between mt-4 w-[336px]">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => handleRatingChange(star)}
            className={`w-12 h-12 rounded-full ${
              rating >= star ? "bg-yellow-400" : "bg-gray-300"
            }`}
          >
            ★
          </button>
        ))}
      </div>
      <div className="mt-16 text-base font-bold text-center text-slate-800">
        Your advice and recommendations for the future:
      </div>
      <textarea
        className="shrink-0 mt-6 max-w-full rounded-lg bg-neutral-200 h-[149px] w-[392px] p-2"
        value={feedback}
        onChange={handleFeedbackChange}
      />
      <button
        onClick={handleSubmit}
        className="justify-center px-8 py-4 mt-12 text-base text-center text-white bg-sky-600 rounded-[30px]"
      >
        Submit Feedback
      </button>
    </div>
  );
};

export default Feedback;
