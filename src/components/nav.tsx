export default function Nav() {
  const navLinks = [
    {
      title: "Home",
      link: "./",
    },
    {
      title: "About",
      link: "./#about",
    },
    {
      title: "Projects",
      link: "./#projects",
    },
    {
      title: "Contact",
      link: "./#contact",
    },
  ]

  return (
    <>
      <nav className="flex w-full justify-between fixed text-xl h-16 px-4 z-50 backdrop-blur-lg bg-black/5 bg-opacity-10">
        <div className="my-auto">
          <a className="flex items-center" href="./">
            <img src="/img/Profile 2.png" alt="Logo" className="w-10 sm:w-12 block rounded-[50%]" />{" "}
            <div className="font-bold uppercase ml-2.5 text-base sm:text-xl">AB.Kayes</div>
          </a>
        </div>
        <ul className="hidden items-center sm:flex">
          {navLinks.map((navLink, index) => (
            <a key={index} href={navLink.link} className="text-black/0 h-full items-center">
              <li className="flex items-center font-bold uppercase rounded-md p-4 text-black h-full duration-300 hover:text-pink-500 hover:bg-gray-200 active:text-pink-700 active:text-gray-300">
                <span>{navLink.title}</span>{" "}
              </li>
            </a>
          ))}
        </ul>
      </nav>
      <div className="inline z-40 my-auto sm:hidden">
        <input type="checkbox" className="check" id="check" />
        <label htmlFor="check" className="check-label">
          <span className="bar" id="bar1"></span>
          <span className="bar" id="bar2"></span>
          <span className="bar" id="bar3"></span>
        </label>
        <ul className="mb-nav-links flex fixed flex-col top-16 w-48 h-screen z-50 bg-gray-100 duration-300">
          {navLinks.map((navLink, index) => (
            <a key={index} href={navLink.link}>
              <li className="flex items-center font-bold uppercase rounded-md p-4 duration-300 hover:text-pink-500 hover:bg-gray-200 active:text-pink-700 active:text-gray-300">
                <span>{navLink.title}</span>{" "}
              </li>
            </a>
          ))}
        </ul>
      </div>
    </>
  )
}

