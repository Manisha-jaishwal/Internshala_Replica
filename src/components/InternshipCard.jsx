import ClockIcon from "../assets/wall-clock.png";
import LocationIcon from "../assets/location.png";
import StipendIcon from "../assets/money.png";
import CalenderIcon from "../assets/calendar.png";
import HomeIcon from "../assets/home.png";

const InternshipCard = ({ item }) => {
  return (
    <div className="card">
      {/* TITLE */}
      <h3 className="title">{item.title}</h3>

      {/* COMPANY + BADGE */}
      <div className="company-row">
        <span className="company">{item.company_name}</span>

        {item.actively_hiring && <span className="badge">Actively hiring</span>}
      </div>

      {/* LOCATION + STIPEND + DURATION */}
      <div className="info-row">
        {/* FIXED LOGIC */}
        <span>
          {item.work_from_home ? (
            <>
              <img src={HomeIcon} alt="home icon" className="stickers" />
              Work from home
            </>
          ) : (
            <>
              <img
                src={LocationIcon}
                alt="location icon"
                className="stickers"
              />
              {item.location_names?.join(", ")}
            </>
          )}
        </span>

        <span>
          <img src={StipendIcon} alt="stipend icon" className="stickers" />
          {item.stipend?.salary}
        </span>

        <span>
          <img src={CalenderIcon} alt="calendar icon" className="stickers" />
          {item.duration}
        </span>
      </div>

      {/* TAGS (labels) */}
      <div className="skills">
        {item.labels?.map((label, i) => (
          <span key={i} className="skill-tag">
            {label.label_value}
          </span>
        ))}
      </div>

      {/* POSTED DATE */}
      <div className="card-footer">
        <span>
          <img src={ClockIcon} className="stickers" />{" "}
          {item.posted_by_label || "Recently posted"}
        </span>
      </div>
    </div>
  );
};

export default InternshipCard;
