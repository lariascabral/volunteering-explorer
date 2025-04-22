import React from "react";

function VolunteerCard({ volunteer }) {
  return (
    <div className="volunteer-card">
      <img
        src={volunteer.pictureUrl}
        alt={volunteer.name}
        className="volunteer-image"
      />
      <h3>{volunteer.name}</h3>
      <p>Years in Volunteering: {volunteer.yearsInVolunteering}</p>
      <p>Expertise: {volunteer.expertise}</p>
      <p>{volunteer.description}</p>
    </div>
  );
}

export default VolunteerCard;