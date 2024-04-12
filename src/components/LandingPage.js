import React from 'react';
import './styles.css';
import { Header } from './Header';
import { PaanCorner } from './PaanCorner';
import { ProductGrid } from './ProductGrid';

const LandingPage = () => {
  return (
    <div>
      <Header />
      <PaanCorner />
      <ProductGrid />
    </div>
  );
};

export default LandingPage;