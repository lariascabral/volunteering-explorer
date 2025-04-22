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