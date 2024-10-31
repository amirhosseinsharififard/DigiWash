import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import L from "leaflet";

// تنظیمات پیش‌فرض آیکون‌های Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const LocationMarker = () => {
  const [position, setPosition] = useState(null);
  const map = useMap();

  // به‌دست آوردن موقعیت مکانی کاربر
  useEffect(() => {
    if (!navigator.geolocation) {
      console.log("موقعیت‌یاب در دسترس نیست.");
      return;
    }

    navigator.geolocation.getCurrentPosition((pos) => {
      const { latitude, longitude } = pos.coords;
      setPosition([latitude, longitude]);
      map.flyTo([latitude, longitude], 13);
    });
  }, [map]);

  // اگر موقعیت مکانی کاربر موجود باشد، نشانگر را نمایش می‌دهد
  return position ? (
    <Marker
      position={position}
      eventHandlers={{
        click: () => {
          console.log("Latitude:", position[0], "Longitude:", position[1]);
        },
      }}
    />
  ) : null;
};

const MyMap = () => {
  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: "100vh" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <LocationMarker />
    </MapContainer>
  );
};

export default MyMap;
