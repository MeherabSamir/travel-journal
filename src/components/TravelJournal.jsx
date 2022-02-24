import datalist from "../data/datalist";
import world from "../img/world.png";
import locationIcon from "../img/location.png";

function Header() {
  return (
    <header>
      <img src={world} alt="world-icon" />
      <h4>my travel journal.</h4>
    </header>
  );
}

function Footer() {
  return (
    <footer>
      A React Solo Project From Scrimba Coded By{" "}
      <a
        href="https://github.com/MeherabSamir"
        target="_blank"
        rel="noreferrer"
      >
        Meherab Samir
      </a>
    </footer>
  );
}

function Journal({
  imageUrl,
  location,
  googleMapsUrl,
  title,
  startDate,
  endDate,
  description,
}) {
  return (
    <div className="journal">
      <div className="journal-img">
        <img src={imageUrl} alt="img" />
      </div>
      <div className="journal-content">
        <h5 className="journal-subtitle">
          <span className="journal-location">
            <img src={locationIcon} alt="icon" />
            {location}
          </span>
          <span className="journal-map-link">
            <a href={googleMapsUrl} target="_blank" rel="noreferrer">
              View on Google Maps
            </a>
          </span>
        </h5>
        <h2 className="journal-title">{title}</h2>
        <h6 className="jounal-date">
          <span className="jounal-date-start">{startDate}</span> -{" "}
          <span className="jounal-date-end">{endDate}</span>
        </h6>
        <p className="journal-desc">{description}</p>
      </div>
    </div>
  );
}

function TravelJournal() {
  return (
    <div className="travel-journal">
      <Header />
      <div className="journal-container">
        {datalist.map((data) => {
          return <Journal {...data} />;
        })}
      </div>
      <Footer />
    </div>
  );
}

export default TravelJournal;
