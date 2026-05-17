import FilterIcon from "../assets/filter.png"
const Filters = ({ setFilters }) => {
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFilters((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="filters-container">
      <h3 className="filters-title"><span><img src={FilterIcon} className="stickers"/></span> Filters</h3>

      <div className="checkbox-row">
        <input type="checkbox" />
        <span>
          As per my <span className="blue-text">preferences</span>
        </span>
      </div>

      <div className="filter-group">
        <label>Profile</label>
        <input
          type="text"
          name="profile"
          placeholder="e.g. Marketing"
          onChange={handleChange}
        />
      </div>

      <div className="filter-group">
        <label>Location</label>
        <input
          type="text"
          name="location"
          placeholder="e.g. Delhi"
          onChange={handleChange}
        />
      </div>

      <div className="checkbox-row">
        <input type="checkbox" name="city" onChange={handleChange} />
        <span>Internships in my city</span>
      </div>

      <div className="checkbox-row">
        <input type="checkbox" name="wfh" onChange={handleChange} />
        <span>Work from home</span>
      </div>

      <div className="filter-group">
        <label>Duration</label>
        <select name="duration" onChange={handleChange}>
          <option value="">Choose duration</option>
          <option value="1 Month">1 Month</option>
          <option value="3 Months">3 Months</option>
          <option value="6 Months">6 Months</option>
          <option value="12 Months">12 Months</option>
          <option value="24 Months">24 Months</option>
          <option value="36 Months">36 Months</option>
        </select>
      </div>

      <div className="filter-group">
        <label>Minimum Stipend</label>
        <input
          type="number"
          name="stipend"
          placeholder="e.g. 5000"
          onChange={handleChange}
        />
      </div>
      <button className="clear-btn" onClick={() => setFilters({})}>
        Clear All
      </button>
    </div>
  );
};

export default Filters;
