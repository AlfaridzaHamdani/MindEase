import React from "react";
import "./styles.scss";

import Bca from "/Brands/Bca.svg";
import BI from "/Brands/Bi.svg";
import Google from "/Brands/Google.svg";
import Mandiri from "/Brands/Mandiri.svg";
import Microsoft from "/Brands/Microsoft.svg";
import Traveloka from "/Brands/Traveloka.svg";

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
        {images.map(
          (image, index) => (
            console.log(image.src),
            (<img key={index} src={image.src} alt={image.alt} loading="lazy" />)
          )
        )}
      </div>
      <hr />
    </section>
  );
};

export default BrandSection;
