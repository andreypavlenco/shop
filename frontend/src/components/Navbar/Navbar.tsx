import React, { FC } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Shop from '../../pages/Shop';
import ShopCard from '../../pages/ShopCard';
import Link from './Link';

const Navbar: FC = () => {
  return (
    <div>
      <Link />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/shop-card" element={<ShopCard />} />
      </Routes>
    </div>
  );
};

export default Navbar;
