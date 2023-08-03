import { useContext } from "react";
import { SideContext } from "../../contexts/SideContext";

function Header() {
  const { sidebarOpen, setSidebarOpen } = useContext(SideContext);

  return (
    <header className="sticky top-0 bg-white border-b border-slate-200 z-50 shadow-sm">
      <div className="px-4 sm:px-6 lg:px-6">
        <div className="flex items-center justify-between h-24 -mb-px">
          {/* Header: Left side */}
          <div className="flex">
            {/* Hamburger button */}
            <button
              className="text-slate-500 hover:text-slate-600 lg:hidden"
              aria-controls="sidebar"
              aria-expanded={sidebarOpen}
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <span className="sr-only">Open sidebar</span>
              <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="4" y="5" width="16" height="2" />
                <rect x="4" y="11" width="16" height="2" />
                <rect x="4" y="17" width="16" height="2" />
              </svg>
            </button>
          </div>

          {/* Header: Right side */}
          <ul className="flex items-center justify-center space-x-10 md:space-x-[100px]">
          <li className="flex cursor-pointer">
              <span className="inline-flex justify-center items-center border border-gray-200 rounded-md bg-gray-300 p-2">
           
               <p>Loan Balance : </p> 
              </span>
            </li>
            <li className="flex cursor-pointer">
              <span className="inline-flex justify-center items-center group">
                <img
                  className="w-10 h-10 rounded-full object-cover"
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  alt="User"
                />
                <div className="flex items-center truncate">
                  <span className="truncate ml-2 text-sm font-medium d text-gray-500 capitalize">
                    Richard Achonye
                  </span>
                  <svg
                    className="w-3 h-3 shrink-0 ml-1 fill-current text-slate-400"
                    viewBox="0 0 12 12"
                  >
                    <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                  </svg>
                </div>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
