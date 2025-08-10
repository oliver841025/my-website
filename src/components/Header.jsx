'use client';

export default function Header() {
  return (
    <>
      <div className="navbar bg-white flex items-center justify-between">
        <div className="navbar-start">
          <a
            href="/"
            className="btn btn-ghost text-xl hover:bg-white hover:outline-none focus:outline-none shadow-none border-none"
          >
            HSUANSKY
          </a>
        </div>
        <div className="navbar-end space-x-10">
          <a
            href="/about"
            className="btn btn-ghost hover:bg-white hover:outline-none hover:text-blue-800 focus:outline-none shadow-none border-none"
          >
            About
          </a>
          <a
            href="/works"
            className="btn btn-ghost hover:bg-white hover:outline-none hover:text-blue-800 focus:outline-none shadow-none border-none"
          >
            Works
          </a>
          <a
            href="/articles"
            className="btn btn-ghost hover:bg-white hover:outline-none hover:text-blue-800 focus:outline-none shadow-none border-none"
          >
            Articles
          </a>
        </div>
      </div>
    </>
  );
}
