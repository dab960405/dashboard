import React, { useState, useEffect } from 'react';
import { DashboardProvider } from '../../contexts/DashboardContext';
import Sidebar from './Sidebar';
import Header from './Header';
import MainContent from './MainContent';
import ModalForm from './ModalForm';

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth >= 768;
    }
    return true;
  });

  // Prevenir scroll en mobile cuando sidebar está abierto
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (isSidebarOpen && window.innerWidth < 768) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    }
    
    return () => {
      if (typeof window !== 'undefined') {
        document.body.style.overflow = 'auto';
      }
    };
  }, [isSidebarOpen]);

  return (
    <DashboardProvider>
      <div className="flex h-screen bg-gray-50 font-sans text-gray-900 overflow-hidden">
        <Sidebar 
          isSidebarOpen={isSidebarOpen} 
          setIsSidebarOpen={setIsSidebarOpen} 
        />
        <div className={`flex-1 flex flex-col transition-all duration-300 ${
          isSidebarOpen ? 'md:ml-0' : 'md:ml-20'
        }`}>
          <Header 
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
          <MainContent />
        </div>
        <ModalForm />
      </div>
    </DashboardProvider>
  );
};

export default Dashboard;