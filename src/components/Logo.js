import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <a className="block text-2xl font-bold lg:text-3xl">
        <span className="text-red-500">COVID</span>
        <span className="text-gray-500">19</span>
      </a>
    </Link>
  );
};

export default Logo;
