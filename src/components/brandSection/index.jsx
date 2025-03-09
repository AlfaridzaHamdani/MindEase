import React from "react";
import "./styles.scss";

import Bca from "/Brands/Bca.png";
import BI from "/Brands/BankIndonesia.png";
import Google from "/Brands/Google.png";
import Mandiri from "/Brands/Mandiri.png";
import Microsoft from "/Brands/Microsoft.png";
import Traveloka from "/Brands/Traveloka.png";

const images = [
  { src: Bca, alt: "BCA Logo" },
  { src: BI, alt: "BI Logo" },
  { src: Google, alt: "Google Logo" },
  { src: Mandiri, alt: "Mandiri Logo" },
  { src: Microsoft, alt: "Microsoft Logo" },
  { src: Traveloka, alt: "Traveloka Logo" },
];

const BrandSection = () => {
  return (
    <section className="brands">
      <hr />
      <div className="brand-logos">
        {images.map((image, index) => (
          <img key={index} src={image.src} alt={image.alt} loading="lazy" />
        ))}
      </div>
      <hr />
    </section>
  );
};

export default BrandSection;
