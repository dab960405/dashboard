import React from 'react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import { TrendingUp, ShoppingCart, Package } from 'lucide-react';
import { useDashboard } from '../../contexts/DashboardContext';
import KpiCard from './KpiCard';
import Badge from '../UI/Badge';
import { salesData } from '../../utils/data';

const DashboardView = () => {
  const { orders, products } = useDashboard();

  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
        <KpiCard 
          title="Ingresos Totales" 
          value="$24.5k" 
          change="+12%" 
          color="green" 
          icon={<TrendingUp size={20} />} 
        />
        <KpiCard 
          title="Órdenes Activas" 
          value={orders.length} 
          change="+5%" 
          color="blue" 
          icon={<ShoppingCart size={20} />} 
        />
        <KpiCard 
          title="Productos" 
          value={products.length} 
          change="Inv" 
          color="red" 
          icon={<Package size={20} />} 
        />
      </section>
      
      <section className="flex flex-col lg:flex-row gap-6 md:gap-8 h-96">
        <article className="flex-1 bg-white p-4 md:p-6 rounded-xl shadow-sm border flex flex-col">
          <h3 className="font-bold text-gray-800 mb-4">Ventas Recientes</h3>
          <div className="flex-1">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip />
                <Area type="monotone" dataKey="ventas" stroke="#4f46e5" fill="#e0e7ff" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </article>
        
        <article className="lg:w-96 bg-white rounded-xl shadow-sm border overflow-hidden flex flex-col">
          <div className="p-4 md:p-6 border-b">
            <h3 className="font-bold text-gray-800">Últimas Órdenes</h3>
          </div>
          <div className="overflow-y-auto">
            <table className="w-full text-left">
              <tbody>
                {orders.slice(0, 4).map(order => (
                  <tr key={order.id} className="border-b last:border-0 hover:bg-gray-50">
                    <td className="px-4 md:px-6 py-3 md:py-4">
                      <div>
                        <span className="font-bold block text-sm md:text-base">{order.client}</span>
                        <span className="text-xs text-gray-500">${order.amount}</span>
                      </div>
                    </td>
                    <td className="px-4 md:px-6 py-3 md:py-4 text-right">
                      <Badge status={order.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>
      </section>
    </>
  );
};

export default DashboardView;