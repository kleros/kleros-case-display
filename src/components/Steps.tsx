import cn from "classnames";
import React, { Fragment } from "react";

interface StepsProps {
  current: number;
  list: string[];
}

const Steps: React.FC<StepsProps> = ({ current, list }) => (
  <div className="w-full lg:px-12 xl:px-36 flex items-center">
    {list.map((item, i) => (
      <Fragment key={i}>
        <div className="m-0.5 md:m-1 flex items-center">
          <div
            className={cn(
              "px-2 bg-white rounded-full centered text-sm sm:text-lg lg:text-xl whitespace-nowrap",
              {
                "text-slate-400": current !== i,
                "text-sky-500 font-semibold": current === i,
              }
            )}
          >
            {`${i + 1}. ${item}`}
          </div>
        </div>
        {i !== list.length - 1 && (
          <div className={cn("h-0.5 w-full gradient opacity-20")} />
        )}
      </Fragment>
    ))}
  </div>
);

export default Steps;
