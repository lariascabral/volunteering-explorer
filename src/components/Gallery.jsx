// This project was created with GitHub Copilot prompts and the student.
// Gallery.jsx: Component to display a gallery of volunteer cards.

import React from "react";
import VolunteerCard from "./VolunteerCard";

function Gallery({ volunteers }) {
  return (
    <div className="gallery">
      {volunteers.map((volunteer) => (
        <VolunteerCard key={volunteer.id} volunteer={volunteer} />
      ))}
    </div>
  );
}

export default Gallery;