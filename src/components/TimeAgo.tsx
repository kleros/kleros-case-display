import React, { useMemo } from "react";
import { format } from "timeago.js";

export const timeAgo = (s: number) => format(s * 1000);

interface TimeAgoProps {
  time: number;
}

const TimeAgo: React.FC<TimeAgoProps> = ({ time }) => (
  <span
    className="w-fit cursor-pointer"
    title={useMemo(() => new Date(time * 1000).toLocaleString(), [time])}
  >
    {timeAgo(time)}
  </span>
);

export default TimeAgo;
