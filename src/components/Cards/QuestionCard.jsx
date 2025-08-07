import React, { useEffect, useRef, useState } from "react";
import { LuChevronDown, LuPin, LuPinOff, LuSparkle } from "react-icons/lu";

const QuestionCard = ({
  question,
  answer,
  onLearnMore,
  isPinned,
  onTogglePin,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [height, setHeight] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    if (isExpanded) {
      const contentHeight = contentRef.current.scrollHeight;
      setHeight(contentHeight + 10);
    } else {
      setHeight(0);
    }
  }, [isExpanded]);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="bg-white rounded-lg mb-4 overflow-hidden py-4 px-5 shadow-xl shadow-gray-100/70 border border-gray-100/60 group">
      <div className="flex items-center justify-between cursor-pointer">
        <div className="flex items-start gap-3.5">
          <span className="text-xs md:text-[15px] font-semibold text-gray-400 leading-[18px]">Q</span>

          <h3 
            className="text-xs md:text-[14px] font-medium text-gray-800 mr-0 md:mr-20"
            onClick={toggleExpand}
          >
            {question}
          </h3>
        </div>

        <div className="flex items-center justify-end ml-4 relative">
            <div
                className={`flex ${isExpanded ? "md:flex" : "md:hidden group-hover:flex"}`}
            >
                <button
                    className="flex items-center gap-2 text-xs text-indigo-800 font-medium bg-indigo-50 px-3 py-1"
                    onClick={onTogglePin}
                >
                    {
                        isPinned ? (
                            <LuPinOff className="" />
                        ) : (
                            <LuPin className="" />
                        )
                    }
                </button>

                <button
                    className=""
                    onClick={() => {
                        setIsExpanded(true)
                        onLearnMore()
                    }}
                >
                    <LuSparkle />
                    <span className="">Learn More...</span>
                </button>
            </div>

            <button
                className=""
                onClick={toggleExpand}
            >
                <LuChevronDown 
                    size={10} 
                    className={`transform transition-transform duration-300 ${
                        isExpanded ? "rotate-180" : ""
                    }`} 
                />
            </button>
        </div>
      </div>

      <div
        className=""
        style={{maxHeight: `${height}px`}}
      >
        <div
            ref={contentRef}
            className=""
        >

        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
