import React from "react";
import "./styles.scss";

import Bca from "../../../public/Brands/Bca.png";
import Bi from "../../../public/Brands/Bi.png";
import Google from "../../../public/Brands/Google.png";
import Mandiri from "../../../public/Brands/Mandiri.png";
import Microsoft from "../../../public/Brands/Microsoft.png";
import Traveloka from "../../../public/Brands/Traveloka.png";

const images = [
  { src: Bca, alt: "BCA Logo" },
  { src: Bi, alt: "BI Logo" },
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
