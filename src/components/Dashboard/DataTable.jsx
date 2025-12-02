import React from 'react';
import { Plus, Search, Mail, Phone } from 'lucide-react';
import { useDashboard } from '../../contexts/DashboardContext';
import ActionButtons from '../UI/ActionButtons';
import Badge from '../UI/Badge';

const DataTable = () => {
  const { 
    activeTab, 
    searchTerm, 
    setSearchTerm, 
    handleOpenModal, 
    handleDelete,
    filteredData 
  } = useDashboard();

  const data = filteredData();

  const renderTableHeaders = () => {
    if (activeTab === 'products') {
      return (
        <>
          <th className="px-4 md:px-6 py-3">Nombre</th>
          <th className="px-4 md:px-6 py-3">Categoría</th>
          <th className="px-4 md:px-6 py-3">Precio</th>
          <th className="px-4 md:px-6 py-3">Stock</th>
          <th className="px-4 md:px-6 py-3 text-right">Acciones</th>
        </>
      );
    }
    
    if (activeTab === 'orders') {
      return (
        <>
          <th className="px-4 md:px-6 py-3">ID</th>
          <th className="px-4 md:px-6 py-3">Cliente</th>
          <th className="px-4 md:px-6 py-3">Fecha</th>
          <th className="px-4 md:px-6 py-3">Monto</th>
          <th className="px-4 md:px-6 py-3">Estado</th>
          <th className="px-4 md:px-6 py-3 text-right">Acciones</th>
        </>
      );
    }
    
    if (activeTab === 'clients') {
      return (
        <>
          <th className="px-4 md:px-6 py-3">Nombre</th>
          <th className="px-4 md:px-6 py-3">Contacto</th>
          <th className="px-4 md:px-6 py-3">ID Cliente</th>
          <th className="px-4 md:px-6 py-3 text-right">Acciones</th>
        </>
      );
    }
    
    return null;
  };

  const renderTableRow = (item) => {
    if (activeTab === 'products') {
      return (
        <tr key={item.id} className="hover:bg-gray-50">
          <td className="px-4 md:px-6 py-3 md:py-4 font-medium">{item.name}</td>
          <td className="px-4 md:px-6 py-3 md:py-4">
            <span className="bg-gray-100 px-2 py-1 rounded text-xs">
              {item.category}
            </span>
          </td>
          <td className="px-4 md:px-6 py-3 md:py-4 text-gray-600">${item.price}</td>
          <td className="px-4 md:px-6 py-3 md:py-4 text-gray-600">{item.stock} uni.</td>
          <td className="px-4 md:px-6 py-3 md:py-4 text-right">
            <ActionButtons 
              onEdit={() => handleOpenModal(item)} 
              onDelete={() => handleDelete(item.id)} 
            />
          </td>
        </tr>
      );
    }
    
    if (activeTab === 'orders') {
      return (
        <tr key={item.id} className="hover:bg-gray-50">
          <td className="px-4 md:px-6 py-3 md:py-4 text-xs text-gray-500">#{item.id}</td>
          <td className="px-4 md:px-6 py-3 md:py-4 font-medium">{item.client}</td>
          <td className="px-4 md:px-6 py-3 md:py-4 text-gray-500 text-sm">{item.date}</td>
          <td className="px-4 md:px-6 py-3 md:py-4 font-bold text-gray-700">${item.amount}</td>
          <td className="px-4 md:px-6 py-3 md:py-4">
            <Badge status={item.status} />
          </td>
          <td className="px-4 md:px-6 py-3 md:py-4 text-right">
            <ActionButtons 
              onEdit={() => handleOpenModal(item)} 
              onDelete={() => handleDelete(item.id)} 
            />
          </td>
        </tr>
      );
    }
    
    if (activeTab === 'clients') {
      return (
        <tr key={item.id} className="hover:bg-gray-50">
          <td className="px-4 md:px-6 py-3 md:py-4 font-medium flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-xs">
              {item.name?.substring(0,2).toUpperCase() || 'NA'}
            </div>
            <span className="truncate max-w-[150px]">{item.name}</span>
          </td>
          <td className="px-4 md:px-6 py-3 md:py-4">
            <div className="text-sm text-gray-900 flex items-center gap-2 truncate">
              <Mail size={14} className="text-gray-400 flex-shrink-0"/> 
              <span className="truncate">{item.email}</span>
            </div>
            <div className="text-xs text-gray-500 flex items-center gap-2 mt-1">
              <Phone size={14} className="text-gray-400 flex-shrink-0"/> 
              <span>{item.phone}</span>
            </div>
          </td>
          <td className="px-4 md:px-6 py-3 md:py-4 text-gray-500 text-sm">C-{item.id}</td>
          <td className="px-4 md:px-6 py-3 md:py-4 text-right">
            <ActionButtons 
              onEdit={() => handleOpenModal(item)} 
              onDelete={() => handleDelete(item.id)} 
            />
          </td>
        </tr>
      );
    }
    
    return null;
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="p-4 md:p-6 border-b border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="relative w-full sm:w-auto">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text" 
            placeholder="Buscar..." 
            className="pl-10 pr-4 py-2 border rounded-lg text-sm focus:outline-indigo-500 w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button 
          onClick={() => handleOpenModal()} 
          className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors w-full sm:w-auto justify-center"
        >
          <Plus size={18} /> Agregar
        </button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-50 text-gray-500 text-xs uppercase font-bold">
            <tr>
              {renderTableHeaders()}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {data.length > 0 ? (
              data.map(item => renderTableRow(item))
            ) : (
              <tr>
                <td colSpan="100%" className="px-4 md:px-6 py-8 md:py-10 text-center text-gray-400">
                  No hay registros {searchTerm ? 'que coincidan con la búsqueda' : 'aún'}.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;