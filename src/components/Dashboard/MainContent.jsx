import React from 'react';
import { useDashboard } from '../../contexts/DashboardContext';
import DashboardView from './DashboardView';
import DataTable from './DataTable';

const MainContent = () => {
  const { activeTab } = useDashboard();

  return (
    <div className="p-4 md:p-8 flex-1 overflow-y-auto">
      {activeTab === 'dashboard' ? (
        <DashboardView />
      ) : (
        <DataTable />
      )}
      
      <footer className="mt-8 pt-4 text-center text-xs md:text-sm text-gray-500 border-t border-gray-200">
        &copy; {new Date().getFullYear()} MiEmpresa System.
      </footer>
    </div>
  );
};

export default MainContent;