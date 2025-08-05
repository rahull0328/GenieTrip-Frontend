import React from "react";

const SummaryCard = ({
  colors,
  role,
  topicsToFoucs,
  experience,
  questions,
  description,
  lastUpdated,
  onSelect,
  onDelete,
}) => {
  return (
    <>
      <div 
        className="bg-white border border-gray-300/40 rounded-xl p-2 overflow-hidden cursor-pointer hover:shadow-xl shadow-gray-100 relative group" 
        onClick={onSelect}
    >
        <div
          className="rounded-lg p-4 cursor-pointer relative"
          style={{
            background: colors.bgcolor,
          }}
        >
          <div className="flex items-start">
            <div className="flex-shrink-0 w-12 h-12 bg-white rounded-md flex items-center justify-center mr-4">
              <span className="">GU</span>
            </div>
          </div>

          {/* context container */}
          <div className="">
            <div className="">
              <div className="">
                <h2 className="">{role}</h2>
                <p className="">{topicsToFoucs}</p>
              </div>
            </div>
          </div>
        </div>
        <button
          className=""
          onClick={(e) => {
            e.stopPropagation();
            onDelete();
          }}
        >
          Delete
        </button>
      </div>

      <div className="">
        <div className="">
          <div className="">
            Experience: {experience} {experience == 1 ? "Year" : "Years"}
          </div>

          <div className="">{questions} Q&A</div>

          <div className="">Last Updated: {lastUpdated}</div>
        </div>

        {/* Description */}
        <p className="">{description}</p>
      </div>
    </>
  );
};

export default SummaryCard;
