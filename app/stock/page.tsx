// page.tsx
'use client';
import React, { useState } from 'react';
import StockManagement from './component';  // Adjust the path as needed
import { getAllStock } from '@/lib/service';

const StockManagementPage: React.FC = () => {
  const [mockStockItems, setmockStockItems] = useState([
  ]);

  React.useEffect(() => {
    putStocks()
  }, [])

  const putStocks = async () => {
    const allStocks = await getAllStock();
    setmockStockItems(allStocks.stocks)
  }

  return <StockManagement stockItems={mockStockItems} />;
};

export default StockManagementPage;
