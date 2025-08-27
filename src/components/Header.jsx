'use client';

export default function Header() {
  return (
    <>
      <div className="navbar bg-white flex items-center justify-between font-bold italic">
        <div className="navbar-start hover:text-blue-800">
          <a
            href="/"
            className="btn btn-ghost text-xl hover:bg-white hover:outline-none focus:outline-none shadow-none border-none font-mono"
          >
            HSUANSKY
          </a>
        </div>
        <div className="navbar-end space-x-4">
          <a
            href="/about"
            className="btn btn-ghost hover:bg-white hover:outline-none hover:text-blue-800 focus:outline-none shadow-none border-none"
          >
            Me
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
