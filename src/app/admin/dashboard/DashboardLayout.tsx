"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  MessageSquare, 
  Users, 
  Building, 
  BarChart3, 
  Menu, 
  X, 
  Rss,
  LogOut,
  User,
  File, 
  Briefcase
} from "lucide-react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    {
      name: "Statistics",
      href: "/admin/dashboard/statistics",
      icon: BarChart3,
    },
    {
      name: "Messages",
      href: "/admin/dashboard/messages",
      icon: MessageSquare,
    },
    {
      name: "Owners",
      href: "/admin/dashboard/owners",
      icon: Users,
    },
    {
      name: "Properties",
      href: "/admin/dashboard/properties",
      icon: Building,
    },
    {
      name: "Reports", 
      href: "/admin/dashboard/reports",
      icon: File
    }, 
    {
      name: "Blogs", 
      href: "/admin/dashboard/blogs",
      icon: Rss
    }, 
    {
      name: "Careers", 
      href: "/admin/dashboard/careers",
      icon: Briefcase
    }
  ];

  const isActive = (href: string) => {
    if (href === "/admin/statistics") {
      return pathname === href;
    }
    return pathname?.startsWith(href);
  };

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        >
          <div className="absolute inset-0 bg-gray-600 opacity-75"></div>
        </div>
      )}

      <div className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-xl
        transform transition-transform duration-300 ease-in-out
        lg:relative lg:translate-x-0 lg:shadow-none
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200 bg-white">
            <h2 className="text-xl font-bold text-emerald-600">findHome Panel</h2>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden p-1 rounded-md hover:bg-gray-100 transition-colors"
              aria-label="Close sidebar"
            >
              <X size={20} />
            </button>
          </div>

          <nav className="flex-1 px-3 py-6 overflow-y-auto">
            <div className="space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`group flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                      isActive(item.href)
                        ? "bg-emerald-100 text-emerald-700 shadow-sm"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                    onClick={() => setSidebarOpen(false)}
                  >
                    <Icon
                      className={`mr-3 h-5 w-5 transition-colors duration-200 ${
                        isActive(item.href)
                          ? "text-emerald-600"
                          : "text-gray-400 group-hover:text-gray-600"
                      }`}
                    />
                    {item.name}
                  </Link>
                );
              })}
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="space-y-1">
                <button
                  className="w-full group flex items-center px-3 py-2.5 text-sm font-medium text-red-600 rounded-lg hover:bg-red-50 transition-all duration-200"
                  onClick={() => {
                    localStorage.removeItem("token");
                    window.location.href = "/admin/login";
                  }}
                >
                  <LogOut className="mr-3 h-5 w-5 text-red-500" />
                  Logout
                </button>
              </div>
            </div>
          </nav>
        </div>
      </div>

      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-16 bg-white shadow-sm border-b border-gray-200 flex items-center justify-between px-4 lg:px-6 relative z-10">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden p-2 -ml-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
            aria-label="Open sidebar"
          >
            <Menu size={20} />
          </button>
          
          <div className="flex items-center space-x-4 ml-auto">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center shadow-sm">
                <User size={16} className="text-white" />
              </div>
              <span className="hidden sm:block text-sm font-medium text-gray-900">Admin User</span>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto overflow-x-hidden bg-gray-50 w-full">
          <div className="w-full max-w-full">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;