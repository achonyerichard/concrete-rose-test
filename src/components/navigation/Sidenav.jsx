import { useRef, useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { SideContext } from "../../contexts/SideContext";


function Sidebar() {
  const { sidebarOpen, setSidebarOpen, setSidebarExpanded, sidebarExpanded } =
    useContext(SideContext);
  console.log(sidebarOpen);
  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef(null);
  const sidebar = useRef(null);


  return (
    <div>
      {/* Sidebar backdrop (mobile only) */}
      <div
        className={`fixed inset-0 bg-white bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      ></div>

      {/* Sidebar */}
      <div
        id="sidebar"
        ref={sidebar}
        className={`flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 transform h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 ${
          sidebarExpanded && "w-20"
        }  sidebar-expanded:!w-72 2xl:!w-72 shrink-0 bg-white p-4 transition-all duration-200 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-64"
        }`}
      >
        {/* Sidebar header */}
        <div className="flex justify-between  -mt-6  sm:px-3">
          {/* Close button */}
          <button
            ref={trigger}
            className="lg:hidden text-black hover:text-red-400 z-50"
            onClick={() => setSidebarOpen(false)}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
          >
            <span className="sr-only ">Close sidebar</span>
            <svg
              className="w-10 h-10 text-black -z-50"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
            </svg>
          </button>
          {/* Logo */}
          <NavLink end to="/" className=" pt-10 flex justify-center">
          <h2 className="text-2xl font-bold text-blue-700">
            Logo
          </h2>
          </NavLink>
        </div>

        {/* Links */}
        <div
          className={`space-y-12 ${
            sidebarExpanded && "px-2 mt-32"
          } px-5 md:mt-10 mt-10 `}
        >
          {/* Pages group */}
          <div>
            <ul className="space-y-2">
              {/* Dashboard */}

              <li
                onClick={() => setSidebarOpen(false)}
                className={`px-3 ${
                  sidebarExpanded && "px-0"
                } py-2 rounded-sm mb-0.5 last:mb-0 ${
                  pathname.includes("profile") &&
                  "text-[#14543D] font-bold text-xl"
                }`}
              >
                <NavLink
                  end
                  to="/profile"
                  className={`block text-[#707070]  hover:text-[#E67719] pb-2 pt-2 truncate transition duration-150 ${
                    pathname.includes("profile") && "hover:text-black"
                  }`}
                >
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`shrink-0 h-8 w-8 fill-slate-400  hover:fill-[#E67719] &&  ${
                        pathname.includes("profile")  &&  "fill-[#14543D]"
                      } `}
                      viewBox="0 0 640 512"
                    >
                      <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h274.9c-2.4-6.8-3.4-14-2.6-21.3l6.8-60.9 1.2-11.1 7.9-7.9 77.3-77.3c-24.5-27.7-60-45.5-99.9-45.5zm45.3 145.3l-6.8 61c-1.1 10.2 7.5 18.8 17.6 17.6l60.9-6.8 137.9-137.9-71.7-71.7-137.9 137.8zM633 268.9L595.1 231c-9.3-9.3-24.5-9.3-33.8 0l-37.8 37.8-4.1 4.1 71.8 71.7 41.8-41.8c9.3-9.4 9.3-24.5 0-33.9z" />
                    </svg>
                    <span
                      className={`text-lg hover:font-black transition-transform  font-medium ml-3  2xl:opacity-100 duration-200 && ${
                        sidebarExpanded && "hidden"
                      }  ${
                        pathname.includes("profile") &&
                        " text-[#14543D] font-bold text-xl"
                      } `}
                    >
                      Home
                    </span>
                  </div>
                </NavLink>
              </li>
           
            </ul>
          </div>
        </div>

        {/* Expand / collapse button */}
        <div className="md:pt-3 inline-flex 2xl:hidden justify-end mt-auto">
          <div className="px-3 py-2">
            <button onClick={() => setSidebarExpanded(!sidebarExpanded)}>
              <span className="sr-only">Expand / collapse sidebar</span>
              <svg
                className={`w-6 h-6 fill-current rotate-180 ${
                  sidebarExpanded && "rotate-0"
                }`}
                viewBox="0 0 24 24"
              >
                <path
                  className="text-slate-400"
                  d="M19.586 11l-5-5L16 4.586 23.414 12 16 19.414 14.586 18l5-5H7v-2z"
                />
                <path className="text-slate-600" d="M3 23H1V1h2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
