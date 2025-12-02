import React from 'react';
import PropTypes from 'prop-types';

const NavItem = React.memo(({ icon, label, active, onClick, isSidebarOpen }) => (
  <button 
    onClick={onClick} 
    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all group whitespace-nowrap ${
      active ? "bg-indigo-50 text-indigo-700 font-bold" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
    } ${!isSidebarOpen ? 'justify-center px-3' : ''}`}
    aria-label={`Navegar a ${label}`}
    aria-current={active ? 'page' : undefined}
  >
    <div className="flex-shrink-0" aria-hidden="true">
      {React.cloneElement(icon, { size: 20 })}
    </div>
    {isSidebarOpen && <span className="text-sm">{label}</span>}
  </button>
));

NavItem.propTypes = {
  icon: PropTypes.element.isRequired,
  label: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  isSidebarOpen: PropTypes.bool.isRequired,
};

NavItem.displayName = 'NavItem';

export default NavItem;