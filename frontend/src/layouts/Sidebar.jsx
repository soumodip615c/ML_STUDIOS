import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Database,
  FlaskConical,
  Brain,
  BarChart3,
  FileText,
} from "lucide-react";

const menuItems = [
  {
    name: "Dashboard",
    path: "/",
    icon: <LayoutDashboard size={20} />,
  },
  {
    name: "Datasets",
    path: "/datasets",
    icon: <Database size={20} />,
  },
  {
    name: "Experiments",
    path: "/experiments",
    icon: <FlaskConical size={20} />,
  },
  {
    name: "Models",
    path: "/models",
    icon: <Brain size={20} />,
  },
  {
    name: "Analytics",
    path: "/analytics",
    icon: <BarChart3 size={20} />,
  },
  {
    name: "Reports",
    path: "/reports",
    icon: <FileText size={20} />,
  },
];

function Sidebar() {
  return (
    <aside className="w-64 bg-slate-900 text-white min-h-screen shadow-lg">

      <div className="h-20 flex items-center justify-center border-b border-slate-700">

        <h1 className="text-2xl font-bold">
          🚀 ML Studio
        </h1>

      </div>

      <nav className="mt-6">

        {menuItems.map((item) => (

          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-4 px-6 py-4 transition-all duration-200 ${
                isActive
                  ? "bg-blue-600"
                  : "hover:bg-slate-800"
              }`
            }
          >
            {item.icon}

            <span className="font-medium">
              {item.name}
            </span>

          </NavLink>

        ))}

      </nav>

    </aside>
  );
}

export default Sidebar;