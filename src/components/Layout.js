// Components
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen pt-16 bg-gray-100 lg:pt-0">
      <Header />
      <div className="container max-w-4xl px-4 py-8 mx-auto lg:py-16">{children}</div>
    </div>
  );
};

export default Layout;
