// /* eslint-disable react/prop-types */
// /* eslint-disable no-unused-vars */
// import React, {useState, useEffect} from "react";
// import {
//   MapContainer,
//   TileLayer,
//   Marker,
//   Popup,
//   useMapEvents,
// } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import L from "leaflet";

// // آیکون لوکیشن
// const locationIcon = new L.Icon({
//   iconUrl: markerIcon,
//   shadowUrl: markerShadow,
//   iconSize: [25, 41],
//   iconAnchor: [12, 41],
//   popupAnchor: [1, -34],
//   shadowSize: [41, 41],
// });

// // بارگذاری آیکون لوکیشن
// import markerIcon from "leaflet/dist/images/marker-icon.png";
// import markerShadow from "leaflet/dist/images/marker-shadow.png";

// // آیکون موقعیت کاربر
// const userLocationIcon = new L.Icon({
//   iconUrl:
//     'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="%23000000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><g transform="rotate(180 12 12)"><line x1="12" y1="2" x2="12" y2="20"/><circle cx="12" cy="18" r="4" fill="%23FF0000"/></g></svg>',
//   iconSize: [48, 48], // اندازه آیکون جدید
//   iconAnchor: [24, 48], // نقطه‌ای که آیکون به آن متصل می‌شود
//   popupAnchor: [1, -34], // نقطه‌ای که پنجره‌ی پاپ‌آپ به آن متصل می‌شود
// });

// // کامپوننت برای جابجایی آیکون
// const DraggableMarker = ({position, setPosition}) => {
//   const map = useMapEvents({
//     dragend() {
//       const marker = map.getCenter();
//       setPosition([marker.lat, marker.lng]);
//     },
//   });

//   return (
//     <Marker
//       position={position}
//       icon={locationIcon}
//       draggable={true}
//       eventHandlers={{
//         dragend(e) {
//           const marker = e.target;
//           const {lat, lng} = marker.getLatLng();
//           setPosition([lat, lng]);
//         },
//       }}>
//       <Popup>
//         موقعیت: {position[0].toFixed(5)}, {position[1].toFixed(5)}
//       </Popup>
//     </Marker>
//   );
// };

// const MapComponent = () => {
//   const [position, setPosition] = useState([28.9916, 50.8355]); // مختصات بوشهر
//   const [userPosition, setUserPosition] = useState(null); // موقعیت کاربر

//   useEffect(() => {
//     // بررسی اینکه آیا Geolocation پشتیبانی می‌شود
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const {latitude, longitude} = position.coords;
//           setUserPosition([latitude, longitude]); // به روز رسانی موقعیت کاربر
//         },
//         (error) => {
//           console.error("Error getting location: ", error);
//         }
//       );
//     }
//   }, []);

//   return (
//     <div>
//       <MapContainer
//         center={position}
//         zoom={13}
//         style={{height: "70vh", width: "100%"}}>
//         <DraggableMarker position={position} setPosition={setPosition} />
//         {userPosition && (
//           <Marker position={userPosition} icon={userLocationIcon}>
//             <Popup>
//               موقعیت لحظه‌ای کاربر: {userPosition[0].toFixed(5)},{" "}
//               {userPosition[1].toFixed(5)}
//             </Popup>
//           </Marker>
//         )}
//       </MapContainer>

//       {/* <div style={{marginTop: "10px", fontSize: "16px"}}>
//         <h3>مختصات فعلی:</h3>
//         <p>عرض جغرافیایی: {position[0].toFixed(5)}</p>
//         <p>طول جغرافیایی: {position[1].toFixed(5)}</p>
//       </div> */}
//     </div>
//   );
// };

// export default MapComponent;

/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// بارگذاری آیکون لوکیشن
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// آیکون لوکیشن
const locationIcon = new L.Icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// آیکون موقعیت کاربر
const userLocationIcon = new L.Icon({
  iconUrl:
    'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="%23000000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><g transform="rotate(180 12 12)"><line x1="12" y1="2" x2="12" y2="20"/><circle cx="12" cy="18" r="4" fill="%23FF0000"/></g></svg>',
  iconSize: [48, 48],
  iconAnchor: [24, 48],
  popupAnchor: [1, -34],
});

// کامپوننت برای جابجایی آیکون
const DraggableMarker = ({
  position,
  setPosition,

}) => {
  const map = useMapEvents({
    dragend() {
      const marker = map.getCenter();
      setPosition([marker.lat, marker.lng]);
    },
  });

  return (
    <Marker
      position={position}
      icon={locationIcon}
      draggable={true}
      eventHandlers={{
        dragend(e) {
          const marker = e.target;
          const {lat, lng} = marker.getLatLng();
          setPosition([lat, lng]);
        },
      }}
      style={{zIndex: "30"}}>
      <Popup>
        موقعیت: {position[0].toFixed(5)}, {position[1].toFixed(5)}
      </Popup>
    </Marker>
  );
};

const MapComponent = ({setGetPostiton,}) => {
  const [position, setPosition] = useState([28.9916, 50.8355]); // مختصات بوشهر
  const [userPosition, setUserPosition] = useState(null); // موقعیت کاربر
  setGetPostiton(position)
  useEffect(() => {
    // بررسی اینکه آیا Geolocation پشتیبانی می‌شود
    const getUserPosition = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const {latitude, longitude} = position.coords;
            setUserPosition([latitude, longitude]); // به روز رسانی موقعیت کاربر
          },
          (error) => {
            console.error("Error getting location: ", error);
          }
        );
      }
    };
    getUserPosition();
  }, []);

  return (
    <div style={{zIndex:"1"}}>
      <MapContainer
        center={position}
        zoom={13}
        style={{height: "80vh", width: "100%", mt: "-3rem"}}>
        <TileLayer
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <DraggableMarker position={position} setPosition={setPosition} />
        {userPosition && (
          <Marker
            position={userPosition}
            icon={userLocationIcon}
            style={{zIndex: "0"}}>
            <Popup>
              موقعیت لحظه‌ای کاربر: {userPosition[0].toFixed(5)},{" "}
              {userPosition[1].toFixed(5)}
            </Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
