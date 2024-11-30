// Mahamap.jsx
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// You will need to import the GeoJSON file of Maharashtra with district boundaries
import maharashtraGeoJson from './maharashtra-districts.json'; // path to your Maharashtra GeoJSON

const Mahamap = () => {
  const [mapData, setMapData] = useState(null);
  const [districtData, setDistrictData] = useState({
    // Example data: you can replace it with real data
    Pune: { value: 100, color: 'red' },
    Mumbai: { value: 200, color: 'blue' },
    Nashik: { value: 150, color: 'green' },
    // Add all districts here with their respective data and color
  });

  useEffect(() => {
    // Load the GeoJSON data for Maharashtra (could be done dynamically)
    setMapData(maharashtraGeoJson);
  }, []);

  const getColor = (districtName) => {
    return districtData[districtName]?.color || 'grey'; // Default color if not found
  };

  const onEachDistrict = (district, layer) => {
    const districtName = district.properties.NAME_2; // Assuming 'NAME_2' contains district names
    const color = getColor(districtName);
    layer.setStyle({
      fillColor: color,
      weight: 2,
      opacity: 1,
      color: 'black', // boundary color
      fillOpacity: 0.7,
    });

    // Bind popup to show the district name and value
    layer.bindPopup(
      `${districtName}: ${districtData[districtName]?.value || 'No data'}`
    );

    layer.on({
      mouseover: (e) => {
        const layer = e.target;
        layer.setStyle({
          weight: 3,
          color: 'yellow',
        });
      },
      mouseout: (e) => {
        const layer = e.target;
        layer.setStyle({
          weight: 2,
          color: 'black',
        });
      },
    });
  };

  return (
    <div style={{ height: '100vh' }}>
      {mapData && (
        <MapContainer
          style={{ height: '100%', width: '100%' }}
          center={[19.7515, 75.7139]} // Maharashtra center
          zoom={7}
          scrollWheelZoom={false}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <GeoJSON data={mapData.features} onEachFeature={onEachDistrict} />
        </MapContainer>
      )}
    </div>
  );
};

export default Mahamap;
