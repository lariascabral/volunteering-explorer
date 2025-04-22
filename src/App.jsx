import { useEffect, useState } from "react";
import VolunteerFilter from "./components/VolunteerFilter";
import Gallery from "./components/Gallery";
import apiData from "./components/API.json";
import "./App.css";

function App() {
  const [volunteers, setVolunteers] = useState([]);
  const [filteredVolunteers, setFilteredVolunteers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      setVolunteers(apiData.volunteers);
      setFilteredVolunteers(apiData.volunteers);
      setLoading(false);
    } catch (err) {
      setError("Failed to load data");
      setLoading(false);
    }
  }, []);

  const handleFilter = (zone) => {
    if (zone === "All") {
      setFilteredVolunteers(volunteers);
    } else {
      setFilteredVolunteers(volunteers.filter((v) => v.zone.startsWith(zone)));
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="App">
      {/* Organization Title and Logo */}
      <header className="organization-header">
        <img
          src="/src/assets/logo.png" // Path to the volunteering logo
          alt="Organization Logo"
          className="organization-logo"
        />
        <h1>Volunteer Explorer</h1>
        <h3 className="organization-description">
          Empowering individuals to make a difference through education and collaboration. Meet the dedicated volunteers who are shaping a brighter future for our community!.
        </h3>
      </header>

      {/* Volunteer Filter and Gallery */}
      <VolunteerFilter volunteers={volunteers} onFilter={handleFilter} />
      <Gallery volunteers={filteredVolunteers} />
    </div>
  );
}

export default App;
