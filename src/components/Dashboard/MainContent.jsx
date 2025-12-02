import React from 'react';
import { useDashboard } from '../../contexts/DashboardContext';
import DashboardView from './DashboardView';
import DataTable from './DataTable';

const MainContent = () => {
  const { activeTab } = useDashboard();

  return (
    <main 
      role="main"
      aria-label="Contenido principal"
      className="p-4 md:p-8 flex-1 overflow-y-auto"
    >
      {activeTab === 'dashboard' ? (
        <DashboardView />
      ) : (
        <DataTable />
      )}
      
      <footer 
        role="contentinfo"
        className="mt-8 pt-4 text-center text-xs md:text-sm text-gray-500 border-t border-gray-200"
      >
        &copy; {new Date().getFullYear()} DAB's Store.
      </footer>
    </main>
  );
};

export default MainContent;