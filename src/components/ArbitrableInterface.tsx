import Link from "next/link";
import React from "react";

interface ArbitrableInterfaceProps {
  uri?: string;
}

const ArbitrableInterface: React.FC<ArbitrableInterfaceProps> = ({ uri }) => {
  if (!uri) return null;

  return (
    <div className="my-3">
      <Link
        className="text-xl text-sky-500"
        href={uri}
        rel="noopener noreferrer"
        target="_blank"
      >
        Go to arbitrable application from here
      </Link>
    </div>
  );
};

export default ArbitrableInterface;
