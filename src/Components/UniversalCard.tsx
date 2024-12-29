import { ReactNode } from 'react';

interface UniversalCardProps {
  children: ReactNode; 
}

const UniversalCard= (children:UniversalCardProps ) => {
    const {children:child} = children;
  return (
    <div className="w-full max-w-full bg-[#121214] px-4 py-5 sm:px-10 sm:py-10 shadow-md rounded-2xl">
      {child}
    </div>
  );
};

export default UniversalCard;
