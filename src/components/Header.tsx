import Link from "next/link";

const Header = () => {
  return (
    <header className="container mx-auto px-4">
      <p className="mt-8 text-center text-base leading-6 text-gray-400">
        Header
      </p>
      <div className="flex w-full min-w-full space-x-4">
        <Link href="/">
          <a className="inline-flex items-center justify-center">Home</a>
        </Link>
      </div>
    </header>
  );
};

export default Header;
