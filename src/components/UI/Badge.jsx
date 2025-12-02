import React from 'react';
import PropTypes from 'prop-types';

const Badge = React.memo(({ status }) => {
  const styles = { 
    Completado: "bg-green-100 text-green-800 border-green-200", 
    Pendiente: "bg-yellow-100 text-yellow-800 border-yellow-200", 
    Cancelado: "bg-red-100 text-red-800 border-red-200" 
  };
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide border ${
      styles[status] || "bg-gray-100 text-gray-800 border-gray-200"
    }`}>
      {status}
    </span>
  );
});

Badge.propTypes = {
  status: PropTypes.string.isRequired,
};

Badge.displayName = 'Badge';

export default Badge;