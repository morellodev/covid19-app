import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen pt-16 bg-gray-50 lg:pt-0">
      <Header />
      <div className="container py-8 mx-auto max-w-7xl sm:px-6">{children}</div>
    </div>
  );
};

export default Layout;
