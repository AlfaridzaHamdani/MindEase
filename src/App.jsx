import Routes from "./routes";
import ScrollToTop from "./components/scrollToTop";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes />
      <Navbar />
    </>
  );
}
