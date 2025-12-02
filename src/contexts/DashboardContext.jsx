import React, { createContext, useState, useContext, useCallback } from 'react';
import PropTypes from 'prop-types';
import useLocalStorage from '../hooks/useLocalStorage';
import { initialData } from '../utils/data';

const DashboardContext = createContext();

export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error('useDashboard debe usarse dentro de DashboardProvider');
  }
  return context;
};

export const DashboardProvider = ({ children }) => {
  // Estados globales
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [formData, setFormData] = useState({});
  const [searchTerm, setSearchTerm] = useState('');

  // Datos con persistencia
  const [orders, setOrders] = useLocalStorage('db_orders', initialData.orders);
  const [products, setProducts] = useLocalStorage('db_products', initialData.products);
  const [clients, setClients] = useLocalStorage('db_clients', initialData.clients);

  // Funciones CRUD
  const handleOpenModal = useCallback((item = null) => {
    setCurrentItem(item);
    if (item) {
      setFormData(item);
    } else {
      const defaults = {
        orders: { client: '', amount: '', status: 'Pendiente', date: new Date().toISOString().split('T')[0] },
        products: { name: '', price: '', stock: '', category: 'General' },
        clients: { name: '', email: '', phone: '' }
      };
      setFormData(defaults[activeTab] || {});
    }
    setIsModalOpen(true);
  }, [activeTab]);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
    setCurrentItem(null);
    setFormData({});
  }, []);

  const handleDelete = useCallback((id) => {
    if (!window.confirm('¿Eliminar registro?')) return;
    
    switch (activeTab) {
      case 'orders':
        setOrders(orders.filter(i => i.id !== id));
        break;
      case 'products':
        setProducts(products.filter(i => i.id !== id));
        break;
      case 'clients':
        setClients(clients.filter(i => i.id !== id));
        break;
      default:
        break;
    }
  }, [activeTab, orders, products, clients, setOrders, setProducts, setClients]);

  const handleSubmit = useCallback((formData) => {
    const saveLogic = (list, setList) => {
      if (currentItem) {
        return list.map(i => i.id === currentItem.id ? { ...formData, id: currentItem.id } : i);
      } else {
        return [{ ...formData, id: Date.now() }, ...list];
      }
    };

    switch (activeTab) {
      case 'orders':
        setOrders(saveLogic(orders, setOrders));
        break;
      case 'products':
        setProducts(saveLogic(products, setProducts));
        break;
      case 'clients':
        setClients(saveLogic(clients, setClients));
        break;
      default:
        break;
    }
    
    handleCloseModal();
  }, [activeTab, currentItem, orders, products, clients, setOrders, setProducts, setClients, handleCloseModal]);

  // Filtrar datos
  const filteredData = useCallback(() => {
    const dataMap = {
      orders: orders,
      products: products,
      clients: clients
    };
    
    const data = dataMap[activeTab] || [];
    
    if (!searchTerm) return data;
    
    const term = searchTerm.toLowerCase();
    return data.filter(item => {
      return Object.values(item).some(value => 
        String(value).toLowerCase().includes(term)
      );
    });
  }, [activeTab, orders, products, clients, searchTerm]);

  const value = {
    // Estados
    activeTab,
    setActiveTab,
    isModalOpen,
    setIsModalOpen,
    currentItem,
    formData,
    setFormData,
    searchTerm,
    setSearchTerm,
    
    // Datos
    orders,
    products,
    clients,
    
    // Funciones
    handleOpenModal,
    handleCloseModal,
    handleDelete,
    handleSubmit,
    filteredData,
  };

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
};

DashboardProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DashboardContext;