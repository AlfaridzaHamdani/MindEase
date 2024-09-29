import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation(); // Mendapatkan pathname dari URL

  useEffect(() => {
    window.scrollTo(0, 0); // Mengatur posisi scroll ke atas (x=0, y=0)
  }, [pathname]); // Efek akan berjalan setiap kali pathname berubah (navigasi berubah)

  return null; // Komponen ini tidak perlu merender apapun
};

export default ScrollToTop;
