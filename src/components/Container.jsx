import { useState } from "react";

const Container = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="w-42rem max-w-42rem relative rounded-md bg-secondary-light overflow-scroll">
      <button
        className="absolute top-1 right-1 h-2 aspect-1 rounded-full grow-0 shrink-0 border-0 bg-secondary-dark text-2xl text-dark cursor-pointer z-[999]"
        onClick={() => setIsOpen((s) => !s)}
      >
        {isOpen ? "-" : "+"}
      </button>
      {isOpen && children}
    </div>
  );
};

export default Container;
