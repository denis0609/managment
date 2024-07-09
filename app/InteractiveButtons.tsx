// InteractiveButtons.tsx
import * as React from "react";

interface InteractiveButtonsProps {
  handleClick: (message: string) => void;
}

const InteractiveButtons: React.FC<InteractiveButtonsProps> = ({ handleClick }) => {
  return (
    <>
      <button onClick={() => handleClick("Activity Clicked")}>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/dd3854742ea9b91d28a15d63935645293b8e119193e43aac99f17d10078c6998?apiKey=e6ca5815e046456fa7dc3340ed86c31e&" className="shrink-0 aspect-square w-[30px]" />
      </button>
      {/* Add other buttons here */}
    </>
  );
};

export default InteractiveButtons;