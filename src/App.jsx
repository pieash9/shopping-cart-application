import "./App.css";
import Home from "./components/pages/Home/Home";
import Footer from "./components/shared/Footer";
import Navbar from "./components/shared/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="min-h-[calc(100vh-288px)]">
        <Home />
      </div>
      <Footer />
    </>
  );
}

export default App;
