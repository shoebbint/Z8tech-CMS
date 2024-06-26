
import { Link } from "react-router-dom";
import logo from "../../../../assets/logo.png"
const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-transparent px-20">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link to="/">Home</Link ></li>
        <li>
          <Link>Parent</Link>
          <ul className="p-2">
            <li><Link>Submenu 1</Link></li>
            <li><Link>Submenu 2</Link></li>
          </ul>
        </li>
        <li><Link>Item 3</Link></li>
      </ul>
    </div>
    <Link to="/" className=" w-40 "><img src={logo} alt="" /></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><Link to="/">Home</Link ></li>
    <li><Link to="/about">About us</Link></li>
      <li tabIndex={0}>
        <details>
          <summary>Disscussions</summary>
          <ul className="p-2">
            <li><Link to="/forum">Forum</Link></li>
            <li><Link to="/blog">Blogs</Link></li>
          </ul>
        </details>
      </li>

      <li><Link to="/mycourses">MyCourses</Link></li>
      <li><Link to="/faq">Faqs</Link></li>
      <li><Link to="/blog">Blogs</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
    <Link className="btn">      <li><Link to="/login">Login</Link></li></Link>
  </div>
</div>
        </div>
    );
};

export default Navbar;