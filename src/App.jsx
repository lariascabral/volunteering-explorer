// This project was created with GitHub Copilot prompts and the student.
// App.jsx: Main application file that manages state, handles data filtering, and renders the main components.

import { useEffect, useState } from "react";
import VolunteerFilter from "./components/VolunteerFilter";
import Gallery from "./components/Gallery";
import apiData from "./components/API.json";
import "./App.css";

function App() {
  // State to store all volunteers
  const [volunteers, setVolunteers] = useState([]);
  // State to store filtered volunteers based on the selected zone
  const [filteredVolunteers, setFilteredVolunteers] = useState([]);
  // State to handle loading status
  const [loading, setLoading] = useState(true);
  // State to handle errors
  const [error, setError] = useState(null);

  // Load volunteer data from the API.json file
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

  // Function to filter volunteers by zone
  const handleFilter = (zone) => {
    if (zone === "All") {
      setFilteredVolunteers(volunteers);
    } else {
      setFilteredVolunteers(volunteers.filter((v) => v.zone.startsWith(zone)));
    }
  };

  // Render loading or error messages if applicable
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
        <div className="organization-text">
          <h1>Volunteer Explorer</h1>
          <p>
            Empowering individuals to make a difference through education and collaboration. Meet our dedicated volunteers who are committed to creating a positive impact in out community!
          </p>
        </div>
      </header>

      {/* Volunteer Filter and Gallery */}
      <VolunteerFilter volunteers={volunteers} onFilter={handleFilter} />
      <Gallery volunteers={filteredVolunteers} />
    </div>
  );
}

export default App;
