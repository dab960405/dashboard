import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  Users, 
  LogOut, 
  X 
} from 'lucide-react';
import { useDashboard } from '../../contexts/DashboardContext';
import NavItem from '../UI/NavItem';
import logoDesktop from '../../assets/logo-desktop.png';
import logoIcon from '../../assets/logo-icon.png';

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const { activeTab, setActiveTab } = useDashboard();
  const sidebarRef = useRef(null);

  // Cerrar sidebar al hacer click fuera en mobile
  useEffect(() => {
    const handleClickOutside = (event) => {
      const menuButton = document.getElementById('menu-button');
      
      if (window.innerWidth < 768 && 
          isSidebarOpen && 
          sidebarRef.current && 
          !sidebarRef.current.contains(event.target) && 
          menuButton && 
          !menuButton.contains(event.target)) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isSidebarOpen, setIsSidebarOpen]);

  const handleNavClick = (tab) => {
    setActiveTab(tab);
    if (window.innerWidth < 768) setIsSidebarOpen(false);
  };

  return (
    <>
      {/* Overlay para mobile cuando sidebar está abierto */}
      {isSidebarOpen && typeof window !== 'undefined' && window.innerWidth < 768 && (
        <div 
          className="fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity duration-300"
          onClick={() => setIsSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside 
        ref={sidebarRef}
        role="navigation"
        aria-label="Menú principal de navegación"
        className={`
          fixed md:relative
          top-0 left-0 
          h-full
          z-40 md:z-30
          bg-white border-r border-gray-200
          flex flex-col
          transition-all duration-300 ease-in-out
          ${isSidebarOpen ? 'translate-x-0 w-64' : '-translate-x-full md:translate-x-0 md:w-20'}
        `}
      >
        {/* Header del sidebar */}
        <div className="flex-shrink-0 h-20 flex items-center border-b border-gray-100 px-4">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-3">
              {isSidebarOpen ? (
                <img 
                  src={logoDesktop} 
                  alt="TechStore Dashboard - Logo de la empresa" 
                  className="h-24 w-auto max-w-full object-contain"
                />
              ) : (
                <div className="hidden md:flex items-center justify-center">
                  <img 
                    src={logoIcon} 
                    alt="TechStore - Icono del menú" 
                    className="h-24 w-auto object-contain"
                  />
                </div>
              )}
            </div>
            <button 
              onClick={() => setIsSidebarOpen(false)}
              className="md:hidden hover:bg-gray-100 p-1 rounded"
              aria-label="Cerrar menú de navegación"
            >
              <X size={24} className="text-gray-500" aria-hidden="true" />
            </button>
          </div>
        </div>
        
        {/* Menú de navegación */}
        <nav 
          role="navigation" 
          aria-label="Navegación del dashboard"
          className="mt-6 px-4 space-y-2 flex-1 overflow-y-auto"
        >
          <NavItem 
            icon={<LayoutDashboard size={20} />} 
            label="Dashboard" 
            active={activeTab === 'dashboard'} 
            onClick={() => handleNavClick('dashboard')}
            isSidebarOpen={isSidebarOpen}
          />
          <NavItem 
            icon={<Package size={20} />} 
            label="Productos" 
            active={activeTab === 'products'} 
            onClick={() => handleNavClick('products')}
            isSidebarOpen={isSidebarOpen}
          />
          <NavItem 
            icon={<ShoppingCart size={20} />} 
            label="Órdenes" 
            active={activeTab === 'orders'} 
            onClick={() => handleNavClick('orders')}
            isSidebarOpen={isSidebarOpen}
          />
          <NavItem 
            icon={<Users size={20} />} 
            label="Clientes" 
            active={activeTab === 'clients'} 
            onClick={() => handleNavClick('clients')}
            isSidebarOpen={isSidebarOpen}
          />
        </nav>
        
        {/* Footer del sidebar */}
        <div className="p-4 border-t border-gray-100">
          <button 
            className={`flex items-center text-gray-600 hover:text-red-600 w-full transition-all ${
              isSidebarOpen ? 'gap-3 px-4 py-3' : 'justify-center p-3'
            }`}
            aria-label="Cerrar sesión"
          >
            <LogOut size={20} aria-hidden="true" />
            {isSidebarOpen && (
              <span className="font-medium text-sm">
                Salir
              </span>
            )}
          </button>
        </div>
      </aside>
    </>
  );
};

Sidebar.propTypes = {
  isSidebarOpen: PropTypes.bool.isRequired,
  setIsSidebarOpen: PropTypes.func.isRequired,
};

export default Sidebar;