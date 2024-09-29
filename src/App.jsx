import Routes from "./routes";
import ScrollToTop from "./components/scrollToTop";
import Navbar from "./components/Navbar";
import SmoothScroll from "./components/SmoothScroll";

export default function App() {
  return (
    <>
      <SmoothScroll>
        <ScrollToTop />
        <Routes />
      </SmoothScroll>
      <Navbar />
    </>
  );
}
