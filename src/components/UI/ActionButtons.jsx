import React from 'react';
import PropTypes from 'prop-types';
import { Pencil, Trash2 } from 'lucide-react';

const ActionButtons = React.memo(({ onEdit, onDelete }) => (
  <div className="flex justify-end gap-2">
    <button 
      onClick={onEdit} 
      className="p-1.5 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 rounded transition-colors" 
      title="Editar"
    >
      <Pencil size={16} />
    </button>
    <button 
      onClick={onDelete} 
      className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded transition-colors" 
      title="Eliminar"
    >
      <Trash2 size={16} />
    </button>
  </div>
));

ActionButtons.propTypes = {
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

ActionButtons.displayName = 'ActionButtons';

export default ActionButtons;