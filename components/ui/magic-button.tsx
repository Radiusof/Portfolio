import React, { ReactNode } from 'react';

interface MagicButtonProps {
  title: string;
  icon?: ReactNode;
  position?: 'left' | 'right';
  handleClick?: () => void;
  otherClasses?: string;
}

const MagicButton: React.FC<MagicButtonProps> = ({
  title,
  icon,
  position = 'left',
  handleClick,
  otherClasses = '',
}) => {
  return (
    <button
      className={`inline-flex h-12 animate-shimmer items-center justify-center border border-slate-700 bg-[linear-gradient(110deg,#000103,49%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-7 font-medium text-slate-300 transition-colors focus:outline-none w-full rounded-lg md:w-60 md:mt-10 ${otherClasses}`}
      onClick={handleClick}
    >
      {position === 'left' && icon}
      <span className={icon ? (position === 'left' ? 'ml-4' : 'mr-4') : ''}>
        {title}
      </span>
      {position === 'right' && icon}
    </button>
  );
};

export default MagicButton;
