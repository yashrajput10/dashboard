import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isArticlesOpen, setIsArticlesOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div>
      {/* Hamburger (mobile) */}
      <button className="md:hidden text-black p-4" onClick={toggleSidebar}>
        <i className={`fas ${isSidebarOpen ? 'fa-times' : 'fa-bars'} text-2xl`} />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed inset-0 z-50 bg-gray-900 text-white p-4 md:relative md:w-64 md:h-screen md:flex md:flex-col md:block transition-all duration-300 transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0`}
      >
        <h2 className="text-2xl font-bold mb-6">Yash Rajput</h2>
        <nav className="space-y-4">
          {/* Home */}
          <Link to="/" className="flex items-center gap-2 hover:text-gray-300" onClick={closeSidebar}>
            <i className="fas fa-home text-xl" /> Home
          </Link>

          {/* Articles Dropdown */}
          <div>
            <button
              onClick={() => setIsArticlesOpen(!isArticlesOpen)}
              className="flex items-center justify-between w-full gap-2 hover:text-gray-300"
            >
              <span className="flex items-center gap-2">
                <i className="fas fa-chart-bar text-xl" /> Articles
              </span>
              <i className={`fas ${isArticlesOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`} />
            </button>

            {isArticlesOpen && (
              <div className="ml-6 mt-2 space-y-2 text-sm">
                <Link to="/articles/1" className="block hover:text-gray-300" onClick={closeSidebar}>
                  Article 1
                </Link>
                <Link to="/articles/2" className="block hover:text-gray-300" onClick={closeSidebar}>
                  Article 2
                </Link>
                <Link to="/articles/3" className="block hover:text-gray-300" onClick={closeSidebar}>
                  Article 3
                </Link>
                <Link to="/articles/4" className="block hover:text-gray-300" onClick={closeSidebar}>
                  Article 4
                </Link>
              </div>
            )}
          </div>

          {/* Settings Dropdown */}
          <div>
            <button
              onClick={() => setIsSettingsOpen(!isSettingsOpen)}
              className="flex items-center justify-between w-full gap-2 hover:text-gray-300"
            >
              <span className="flex items-center gap-2">
                <i className="fas fa-cogs text-xl" /> Settings
              </span>
              <i className={`fas ${isSettingsOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`} />
            </button>

            {isSettingsOpen && (
              <div className="ml-6 mt-2 space-y-2 text-sm">
                <Link to="/settings/profile" className="block hover:text-gray-300" onClick={closeSidebar}>
                  Profile
                </Link>
                <Link to="/settings/account" className="block hover:text-gray-300" onClick={closeSidebar}>
                  Account
                </Link>
                <Link to="/settings/notifications" className="block hover:text-gray-300" onClick={closeSidebar}>
                  Notifications
                </Link>
                <Link to="/settings/security" className="block hover:text-gray-300" onClick={closeSidebar}>
                  Security
                </Link>
              </div>
            )}
          </div>
        </nav>
      </div>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black opacity-50 z-40 md:hidden" onClick={closeSidebar} />
      )}
    </div>
  );
};

export default Sidebar;
