
import React from 'react';

const MissionVisionCard = ({
  image,
  alt,
  title,
  children,
  imageLeft = true,
}) => (
  <div
    className={`flex flex-col mx-4 md:mx-35 md:flex-row ${
      imageLeft ? '' : 'md:flex-row-reverse'
    } items-center gap-25 bg-black rounded-2xl p-6 `}
  >
    <img src={image} alt={alt} className="h-80 w-120  object-cover" />
    <div className="flex-1">
      <h2 className="text-4xl font-bold bg-gradient-to-tl from-cyan-400 via-blue-500 to-fuchsia-500 bg-clip-text text-transparent drop-shadow-lg mb-4">
        {title}
      </h2>
      <p className="text-white text-base">{children}</p>
    </div>
  </div>
);

export default MissionVisionCard;
