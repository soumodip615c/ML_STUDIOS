import { Search, Bell, Moon, CircleHelp } from "lucide-react";

function Navbar() {
  return (
    <header className="h-20 bg-white shadow-sm border-b border-gray-200 flex items-center justify-between px-8">

      {/* Left Side */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">
          Dashboard
        </h1>
        <p className="text-sm text-gray-500">
          Welcome to ML Studio
        </p>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4">

        {/* Search */}
        <div className="flex items-center bg-gray-100 rounded-lg px-4 py-2 w-72">
          <Search size={18} className="text-gray-500" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none ml-2 w-full"
          />
        </div>

        {/* Icons */}
        <button className="p-2 rounded-lg hover:bg-gray-100">
          <Moon size={20} />
        </button>

        <button className="p-2 rounded-lg hover:bg-gray-100">
          <Bell size={20} />
        </button>

        <button className="p-2 rounded-lg hover:bg-gray-100">
          <CircleHelp size={20} />
        </button>

        {/* Avatar */}
        <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
          S
        </div>

      </div>

    </header>
  );
}

export default Navbar;