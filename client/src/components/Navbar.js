import { Link, NavLink } from "react-router-dom";

const Navbar = ({ navList, handler }) => (
  <nav className=" capitalize text-lg tracking-wide font-semibold  space-y-4 md:font-normal md:text-gray-400 md:space-y-0 md:text-base md:flex md:w-full md:items-center md:justify-between ">
    {navList?.map(({ name, link, id }) => {
      return (
        <NavLink
        onClick={handler}
          to={link}
          key={id}
          className={({ isActive }) =>
            isActive
              ? `block md:inline-block text-secondary  font-bold text-lg`
              : `block md:inline-block hover:text-secondary transition-all duration-50  hover:text-lg  `
          }
        >
          {name}
        </NavLink>
      );
    })}
    <div onClick={handler} >
      <Link
        to="/role"
        className=" hover:text-secondary transition-colors duration-300  md:hidden "
      >
        Find / Post Jobs
      </Link>
    </div>
    <Link
      onClick={handler}

        to="/contact"
        className=" hover:text-secondary transition-colors duration-300  md:hidden  block"
      >
        Contact
      </Link>
      <Link
      onClick={handler}
        to="/about"
        className=" hover:text-secondary transition-colors duration-300  md:hidden block"
      >
        About
      </Link>
  </nav>
);

export default Navbar;
