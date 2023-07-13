import { useState } from "react";

const Container = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="w-26rem  max-w-26rem relative rounded-2xl bg-secondary-dark overflow-y-scroll scrollbar-thin scrollbar-thumb-primary-light scrollbar-track-gray-100">
      <button
        className="absolute top-2 right-2 font-bold h-1 aspect-1 rounded-full grow-0 shrink-0 border-0 bg-tertiary-dark text-2xl text-white cursor-pointer z-[999]"
        onClick={() => setIsOpen((s) => !s)}
      >
        {isOpen ? "-" : "+"}
      </button>
      {isOpen && children}
    </div>
  );
};

export default Container;
