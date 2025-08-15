import { HiOutlinePlusCircle } from 'react-icons/hi2';
import { HiOutlineHome } from 'react-icons/hi2';

export const Header = () => {
  return (
    <div className="flex flex-row md:flex-col items-center gap-6 p-1">
      <div>
        <img src="/logo.png" alt="logo" className="max-w-18" />
      </div>

      <HiOutlineHome className="size-8 md:size-6" />
      <HiOutlinePlusCircle className="size-8 md:size-6" />
    </div>
  );
};
