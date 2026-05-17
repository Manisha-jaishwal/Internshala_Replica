import { useEffect, useState } from "react";
import InternshipCard from "./InternshipCard";

const InternshipList = ({ filters }) => {
  const [internships, setInternships] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://internshala.com/hiring/search")
      .then((res) => res.json())
      .then((data) => {
        setInternships(Object.values(data.internships_meta));
        setLoading(false);
      });
  }, []);

  const filteredData = internships.filter((item) => {
    return (
      (!filters.profile ||
        item.title.toLowerCase().includes(filters.profile.toLowerCase())) &&

      (!filters.location ||
        item.location_names
          .join(" ")
          .toLowerCase()
          .includes(filters.location.toLowerCase())) &&

      (!filters.duration ||
        item.duration.includes(filters.duration)) &&

      (!filters.stipend ||
        parseInt(item.stipend?.salary?.replace(/[^0-9]/g, "")) >=
          parseInt(filters.stipend)) &&

      (!filters.wfh || item.work_from_home === true)
    );
  });

  if (loading) return <p>Loading internships...</p>;

  return (
    <div className="internship-container">
      <div className="top-header">
        <h2>{filteredData.length} Total Internships</h2>
        <p>Latest Summer Internships</p>
      </div>

      {filteredData.length === 0 ? (
        <p>No internships found</p>
      ) : (
        filteredData.map((item) => (
          <InternshipCard key={item.id} item={item} />
        ))
      )}
    </div>
  );
};

export default InternshipList;