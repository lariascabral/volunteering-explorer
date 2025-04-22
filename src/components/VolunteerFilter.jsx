import React from "react";

function VolunteerFilter({ volunteers, onFilter }) {
  const zones = ["All", ...new Set(volunteers.map((v) => v.zone.split(" - ")[0]))];

  return (
    <div className="volunteer-filter">
      <label htmlFor="zone-filter">Filter by Zone: </label>
      <select
        id="zone-filter"
        onChange={(e) => onFilter(e.target.value)}
      >
        {zones.map((zone) => (
          <option key={zone} value={zone}>
            {zone}
          </option>
        ))}
      </select>
    </div>
  );
}

export default VolunteerFilter;