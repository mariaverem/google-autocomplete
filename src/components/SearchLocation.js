import React, { useState, useEffect, useRef } from "react";
import { loadScript } from "../utils/loadScript";
import { renderInitialMap } from "../utils/renderInitialMap";
import { renderMapByGeocode } from "../utils/renderMapByGeocode";

let autoComplete;
let map;

function handleScriptLoad(updateQuery, autoCompleteRef) {
  autoComplete = new window.google.maps.places.Autocomplete(
    autoCompleteRef.current,
    { types: ["(cities)"], componentRestrictions: { country: "us" } }
  );
  autoComplete.setFields(["address_components", "formatted_address"]);
  autoComplete.addListener("place_changed", () => {
    handlePlaceSelect(updateQuery).then(() => {
      map = renderInitialMap();
      renderMapByGeocode(autoCompleteRef, map)
    });
  });
}

async function handlePlaceSelect(updateQuery) {
  const addressObject = autoComplete.getPlace();
  const query = addressObject.formatted_address;
  updateQuery(query);
}

function SearchLocation() {
  const [query, setQuery] = useState("");
  const autoCompleteRef = useRef(null);

  useEffect(() => {
    loadScript(
      `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_API_KEY}&libraries=places`,
      () => handleScriptLoad(setQuery, autoCompleteRef)
    );
  }, []);

  return (
    <>
      <div className="search-location" data-testid="search-location">
        <input
          ref={autoCompleteRef}
          onChange={event => setQuery(event.target.value)}
          placeholder="Enter a Location"
          value={query}
        />
      </div>
      <div className="map-wrapper">
        <div id="map" data-testid="map"></div>
      </div>
    </>
  );
}

export default SearchLocation;
