import React, { useState } from "react";

const countries = [
  {
    name: "India",
    value: "IN",
    cities: ["Delhi", "Mumbai"],
  },
  {
    name: "Pakistan",
    value: "PK",
    cities: ["Lahore", "Karachi"],
  },
  {
    name: "USA",
    value: "US",
    cities: ["Dallas", "Austin"],
  },
];

export default function DropDown() {
  const [selectedCountry, setSelectedCountry] = useState("");

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  return (
    <div>
      <select onChange={handleCountryChange} value={selectedCountry}>
        <option value="">Select a country</option>
        {countries.map((country) => (
          <option key={country.value} value={country.value}>
            {country.name}
          </option>
        ))}
      </select>

      {selectedCountry && (
        <select>
          {countries
            .find((country) => country.value === selectedCountry)
            .cities.map((city, i) => (
              <option key={i} value={city}>
                {city}
              </option>
            ))}
        </select>
      )}
    </div>
  );
}
