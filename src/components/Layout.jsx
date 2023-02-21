import { Link, Outlet } from "react-router-dom";
import IconMenu from "../assets/IconMenu.svg";
import IconHome from "../assets/IconHome.svg";
import IconAdd from "../assets/IconAdd.svg";
import IconTask from "../assets/IconTask.svg";
import SearchFilter from "./SearchFilter";

const Layout = () => {
  return (
    <>
      <header className="h-20 w-full bg-white shadow-2xl px-4">
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <img src={IconMenu} alt="menu icon" className="h-8 w-8" />
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content text-center my-4 p-2 shadow bg-[#DDE5B6] rounded-box w-52"
              >
                <Link to="/" className="flex mb-2 text-lg">
                  <img
                    src={IconHome}
                    alt="home icon"
                    className="h-8 w-8 mr-2"
                  />
                  Home
                </Link>
                <Link to="/notes/add" className="flex mb-2 text-lg">
                  <img src={IconAdd} alt="add icon" className="h-8 w-8 mr-2" />
                  Add Note
                </Link>
                <Link to="/task-todo" className="flex mb-2 text-lg">
                  <img src={IconTask} alt="add icon" className="h-8 w-8 mr-2" />
                  Task
                </Link>
              </ul>
            </div>
          </div>
          <div className="navbar-center">
            <h1 className="font-bold normal-case text-xl underline decoration-[#ADC178]">TakeNotes APP</h1>
          </div>
          <SearchFilter />
        </div>
      </header>

      <main className="min-h-screen w-full flex flex-col items-center bg-gray-100 mx-auto my-0 px-4">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;