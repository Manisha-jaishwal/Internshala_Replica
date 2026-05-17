import InternshalaLogo from "../assets/Internshala_Colored_1.png";
import "../styles/styles.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-left">
        <img src={InternshalaLogo} alt="logo" className="logo" />

        <div className="nav-links">
          <span className="active">Internships</span>
          <span>Courses</span>
          <span>Jobs</span>
          <span>IS PRO</span>
        </div>
      </div>

      <div className="nav-right">
        <span className="icon">💬</span>
        <span className="profile">M</span>
      </div>
    </div>
  );
};

export default Navbar;