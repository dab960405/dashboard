import React from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'lucide-react';
import { useDashboard } from '../../contexts/DashboardContext';
import logoMobile from '../../assets/logo-mobile.png';

const Header = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const { activeTab } = useDashboard();

  return (
    <header className="bg-white border-b h-20 flex justify-between items-center px-4 md:px-8 flex-shrink-0">
      <div className="flex items-center gap-4">
        <button 
          id="menu-button"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <Menu size={24} />
        </button>
        
        {/* Logo para mobile en el header (cuando el sidebar está cerrado) */}
        {typeof window !== 'undefined' && window.innerWidth < 768 && !isSidebarOpen && (
          <div className="flex items-center">
            <img 
              src={logoMobile} 
              alt="Mi Empresa" 
              className="h-24 w-auto object-contain"
            />
          </div>
        )}
        
        <h2 className="text-xl font-bold text-gray-800 capitalize">
          {activeTab === 'dashboard' ? 'Dashboard' : activeTab}
        </h2>
      </div>
      <div className="h-10 w-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-700 font-bold border border-indigo-200">
        AD
      </div>
    </header>
  );
};

Header.propTypes = {
  isSidebarOpen: PropTypes.bool.isRequired,
  setIsSidebarOpen: PropTypes.func.isRequired,
};

export default Header;