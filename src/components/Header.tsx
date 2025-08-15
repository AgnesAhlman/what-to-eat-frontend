import { HiOutlinePlusCircle } from 'react-icons/hi2';

export const Header = () => {
  return (
    <div className="flex flex-col items-center gap-2 border">
      <div>
        <img src="/logo.png" alt="logo" className="max-w-20" />
      </div>

      <HiOutlinePlusCircle />
    </div>
  );
};
