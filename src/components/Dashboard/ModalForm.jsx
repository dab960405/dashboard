import React from 'react';
import { X, Save } from 'lucide-react';
import { useDashboard } from '../../contexts/DashboardContext';
import Input from '../UI/Input';

const ModalForm = () => {
  const { 
    isModalOpen, 
    handleCloseModal, 
    activeTab, 
    currentItem, 
    formData, 
    setFormData, 
    handleSubmit 
  } = useDashboard();

  if (!isModalOpen) return null;

  const modalTitle = currentItem ? 'Editar' : 'Nuevo';
  const entityName = activeTab === 'products' ? 'Producto' : 
                    activeTab === 'clients' ? 'Cliente' : 'Orden';

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit(formData);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4 animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        className="bg-white rounded-lg shadow-xl w-full max-w-md p-6 animate-slideUp"
        role="document"
      >
        <div className="flex justify-between items-center mb-4">
          <h3 
            id="modal-title"
            className="text-lg font-bold text-gray-800"
          >
            {modalTitle} {entityName}
          </h3>
          <button 
            onClick={handleCloseModal}
            className="hover:bg-gray-100 p-1 rounded transition-colors"
            aria-label="Cerrar formulario"
          >
            <X size={20} className="text-gray-500" aria-hidden="true" />
          </button>
        </div>
        
        <form onSubmit={handleFormSubmit} className="space-y-4">
          {activeTab === 'orders' && (
            <>
              <Input 
                label="Cliente" 
                name="client" 
                value={formData.client} 
                onChange={handleInputChange}
                autoFocus
              />
              <Input 
                label="Monto ($)" 
                name="amount" 
                value={formData.amount} 
                onChange={handleInputChange}
                type="number" 
                step="0.01"
              />
              <Input 
                label="Fecha" 
                name="date" 
                value={formData.date} 
                onChange={handleInputChange}
                type="date"
              />
              <div>
                <label 
                  htmlFor="status-select"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Estado
                </label>
                <select 
                  id="status-select"
                  name="status" 
                  value={formData.status} 
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-indigo-500 outline-none"
                  aria-label="Seleccionar estado de la orden"
                >
                  <option value="Pendiente">Pendiente</option>
                  <option value="Completado">Completado</option>
                  <option value="Cancelado">Cancelado</option>
                </select>
              </div>
            </>
          )}
          
          {activeTab === 'products' && (
            <>
              <Input 
                label="Nombre Producto" 
                name="name" 
                value={formData.name} 
                onChange={handleInputChange}
                autoFocus
              />
              <div className="grid grid-cols-2 gap-4">
                <Input 
                  label="Precio" 
                  name="price" 
                  value={formData.price} 
                  onChange={handleInputChange}
                  type="number" 
                  step="0.01"
                />
                <Input 
                  label="Stock" 
                  name="stock" 
                  value={formData.stock} 
                  onChange={handleInputChange}
                  type="number"
                />
              </div>
              <Input 
                label="Categoría" 
                name="category" 
                value={formData.category} 
                onChange={handleInputChange}
              />
            </>
          )}
          
          {activeTab === 'clients' && (
            <>
              <Input 
                label="Nombre Completo" 
                name="name" 
                value={formData.name} 
                onChange={handleInputChange}
                autoFocus
              />
              <Input 
                label="Email" 
                name="email" 
                value={formData.email} 
                onChange={handleInputChange}
                type="email"
              />
              <Input 
                label="Teléfono" 
                name="phone" 
                value={formData.phone} 
                onChange={handleInputChange}
                type="tel"
              />
            </>
          )}
          
          <div className="flex justify-end gap-3 mt-6">
            <button 
              type="button" 
              onClick={handleCloseModal}
              className="px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
              aria-label="Cancelar y cerrar formulario"
            >
              Cancelar
            </button>
            <button 
              type="submit" 
              className="px-4 py-2 bg-indigo-600 text-white rounded-md flex items-center gap-2 hover:bg-indigo-700 transition-colors"
              aria-label={`Guardar ${entityName.toLowerCase()}`}
            >
              <Save size={16} aria-hidden="true" /> Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalForm;