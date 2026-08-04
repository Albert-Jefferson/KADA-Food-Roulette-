import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

const MainLayout: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    { path: '/', icon: 'restaurant', label: 'Home' },
    { path: '/locket', icon: 'photo_library', label: 'Locket' },
    { path: '/profile', icon: 'person', label: 'Profile' },
  ];

  return (
    <>
      {/* TopAppBar */}
      <header className="w-full top-0 sticky bg-background dark:bg-background z-40">
        <div className="flex justify-between items-center px-margin-mobile py-base w-full max-w-7xl mx-auto border-none shadow-none">
          <div className="flex items-center gap-stack-sm">
            <span className="material-symbols-outlined text-primary dark:text-primary-fixed-dim text-[24px]">local_fire_department</span>
            <h1 className="font-display-hero text-headline-md-mobile text-primary dark:text-primary-fixed-dim tracking-tight">Food Roulette</h1>
          </div>
          <div className="flex items-center">
            <span className="text-primary dark:text-primary-fixed-dim font-label-strong text-caption">1,250 🪙</span>
          </div>
        </div>
      </header>

      {/* Desktop Nav Cluster */}
      <nav className="hidden md:flex fixed top-0 right-margin-desktop h-[72px] items-center gap-stack-md z-50">
        {navItems.map((item) => {
          const isActive = currentPath === item.path || (item.path !== '/' && currentPath.startsWith(item.path));
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`px-4 py-2 rounded-full flex items-center gap-2 transition-colors ${
                isActive
                  ? 'text-primary font-bold bg-primary-container'
                  : 'text-on-surface-variant hover:bg-surface-container-low'
              }`}
            >
              <span 
                className="material-symbols-outlined" 
                style={isActive ? { fontVariationSettings: "'FILL' 1" } : {}}
              >
                {item.icon}
              </span>
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Main Content Area */}
      <Outlet />

      {/* BottomNavBar (Mobile Only) */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 py-2 pb-safe border-t border-subtle-gray dark:border-outline-variant bg-surface-white dark:bg-surface-container shadow-md rounded-t-xl">
        {navItems.map((item) => {
          const isActive = currentPath === item.path || (item.path !== '/' && currentPath.startsWith(item.path));
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center justify-center px-4 py-2 transition-all duration-200 cursor-pointer ${
                isActive
                  ? 'bg-primary-container text-on-primary-container dark:bg-primary-fixed dark:text-on-primary-fixed rounded-xl scale-90'
                  : 'text-on-surface-variant dark:text-surface-variant hover:bg-surface-container-high'
              }`}
            >
              <span 
                className="material-symbols-outlined" 
                style={isActive ? { fontVariationSettings: "'FILL' 1" } : {}}
              >
                {item.icon}
              </span>
              <span className="font-label-strong text-caption mt-1">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </>
  );
};

export default MainLayout;
