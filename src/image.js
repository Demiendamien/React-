import React from 'react';
import product from './product'; // Assure-toi que ce fichier exporte correctement l'objet product.

const Image = () => (
  <img 
    src={product.image} 
    alt={product.name} 
    style={{ width: "250px" }} 
  />
);

const IImage = () => {
  return (
    <div>
      {/* Utilisation de l'image dynamique venant de l'objet product */}
      <Image />
    </div>
  );
};

export default IImage;
