// Components
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="fixed inset-x-0 top-0 flex items-center bg-gray-100 border-b-2 border-gray-200 lg:border-b-0 lg:static z-100">
      <div className="relative w-full max-w-screen-xl px-6 mx-auto">
        <div className="flex flex-col justify-center h-24 lg:border-b-2 lg:border-gray-200">
          <div className="flex items-center -mx-6">
            <div className="px-6 lg:w-1/4 xl:w-1/5">
              <Logo />
            </div>
            <div className="flex flex-grow lg:w-3/4 xl:w-4/5"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
