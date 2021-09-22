import "./App.css";
import Layout from "./Layout";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Homepage/Hero";

function App() {
  return (
    <div className="bg-white w-screen h-[200px] bg-[#fdf]">
      <Layout bgcolor="tertiary">
        <Navbar />
      </Layout>
      <Layout bgcolor="primary">
        <Hero />
      </Layout>
      <Layout bgcolor="primary">
        <Footer />
      </Layout>
    </div>
  );
}

export default App;
