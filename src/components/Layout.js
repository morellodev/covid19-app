// Components
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen pt-24 bg-gray-100 lg:pt-0">
      <Header />
      <div className="container flex flex-col items-center justify-center flex-1 px-4 py-6 mx-auto">
        {children}
      </div>
    </div>
  );
};

export default Layout;