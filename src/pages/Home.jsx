import { useState } from "react";
import Navbar from "../components/Navbar";
import Filters from "../components/Filters";
import InternshipList from "../components/InternshipList";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ"
import "../styles/styles.css";

const Home = () => {
  const [filters, setFilters] = useState({});
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div>
      <Navbar />

      <button
        className="filter-btn"
        onClick={() => setShowFilters(!showFilters)}
      >
        ☰ Filters
      </button>

      <div className="main-container">
        <div className={`left ${showFilters ? "show" : ""}`}>
          <Filters setFilters={setFilters} />
        </div>

        <div className="right">
          <InternshipList filters={filters} />
        </div>
      </div>
      <div>
        <FAQ/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;