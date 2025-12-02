import React from 'react';
import PropTypes from 'prop-types';

const KpiCard = ({ title, value, change, color, icon }) => {
  const colorMap = { 
    green: { bg: "bg-emerald-100", text: "text-emerald-700" }, 
    red: { bg: "bg-rose-100", text: "text-rose-700" }, 
    blue: { bg: "bg-blue-100", text: "text-blue-700" } 
  };
  const colors = colorMap[color] || colorMap.blue;

  return (
    <article className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex flex-col justify-between hover:-translate-y-1 transition-transform h-32">
      <div className="flex justify-between items-start">
        <h3 className="text-gray-600 text-xs font-bold uppercase tracking-wider">{title}</h3>
        <div className={`p-2 rounded-lg ${colors.bg}`}>
          {React.cloneElement(icon, { size: 16, className: colors.text })}
        </div>
      </div>
      <div className="flex items-end justify-between">
        <span className="text-2xl font-extrabold text-gray-900">{value}</span>
        <span className={`text-xs font-bold px-2 py-1 rounded-md ${colors.bg} ${colors.text}`}>
          {change}
        </span>
      </div>
    </article>
  );
};

KpiCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  change: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['green', 'red', 'blue']).isRequired,
  icon: PropTypes.element.isRequired,
};

KpiCard.displayName = 'KpiCard';

export default KpiCard;