export const initialData = {
  orders: [
    { id: 1, client: "Ana García", status: "Completado", amount: "120.00", date: "2023-10-01" },
    { id: 2, client: "Carlos M.", status: "Pendiente", amount: "85.50", date: "2023-10-02" },
  ],
  products: [
    { id: 101, name: "Laptop Gamer", price: "1200.00", stock: 15, category: "Electrónica" },
    { id: 102, name: "Mouse Inalámbrico", price: "25.00", stock: 50, category: "Accesorios" },
    { id: 103, name: "Monitor 4K", price: "300.00", stock: 8, category: "Electrónica" },
  ],
  clients: [
    { id: 201, name: "Ana García", email: "ana@mail.com", phone: "555-0101" },
    { id: 202, name: "Carlos M.", email: "carlos@mail.com", phone: "555-0202" },
  ]
};

export const salesData = [
  { name: 'Lun', ventas: 4000 }, { name: 'Mar', ventas: 3000 },
  { name: 'Mie', ventas: 5000 }, { name: 'Jue', ventas: 2780 },
  { name: 'Vie', ventas: 1890 }, { name: 'Sab', ventas: 6390 },
  { name: 'Dom', ventas: 3490 },
];