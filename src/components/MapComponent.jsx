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

// // بارگذاری آیکون لوکیشن
// import markerIcon from "leaflet/dist/images/marker-icon.png";
// import markerShadow from "leaflet/dist/images/marker-shadow.png";

// // آیکون لوکیشن
// const locationIcon = new L.Icon({
//   iconUrl: markerIcon,
//   shadowUrl: markerShadow,
//   iconSize: [25, 41],
//   iconAnchor: [12, 41],
//   popupAnchor: [1, -34],
//   shadowSize: [41, 41],
// });

// // آیکون موقعیت کاربر
// const userLocationIcon = new L.Icon({
//   iconUrl:
//     'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="%23000000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><g transform="rotate(180 12 12)"><line x1="12" y1="2" x2="12" y2="20"/><circle cx="12" cy="18" r="4" fill="%23FF0000"/></g></svg>',
//   iconSize: [48, 48],
//   iconAnchor: [24, 48],
//   popupAnchor: [1, -34],
// });

// // کامپوننت برای جابجایی آیکون
// const DraggableMarker = ({
//   position,
//   setPosition,

// }) => {
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
//       }}
//       style={{zIndex: "30"}}>
//       <Popup>
//         موقعیت: {position[0].toFixed(5)}, {position[1].toFixed(5)}
//       </Popup>
//     </Marker>
//   );
// };

// const MapComponent = ({setGetPostiton,}) => {
//   const [position, setPosition] = useState([28.9916, 50.8355]); // مختصات بوشهر
//   const [userPosition, setUserPosition] = useState(null); // موقعیت کاربر
//   setGetPostiton(position)
//   useEffect(() => {
//     // بررسی اینکه آیا Geolocation پشتیبانی می‌شود
//     const getUserPosition = () => {
//       if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(
//           (position) => {
//             const {latitude, longitude} = position.coords;
//             setUserPosition([latitude, longitude]); // به روز رسانی موقعیت کاربر
//           },
//           (error) => {
//             console.error("Error getting location: ", error);
//           }
//         );
//       }
//     };
//     getUserPosition();
//   }, []);

//   return (
//     <div style={{zIndex:"1"}}>
//       <MapContainer
//         center={position}
//         zoom={13}
//         style={{height: "80vh", width: "100%", mt: "-3rem"}}>
//         <TileLayer
//           url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         />
//         <DraggableMarker position={position} setPosition={setPosition} />
//         {userPosition && (
//           <Marker
//             position={userPosition}
//             icon={userLocationIcon}
//             style={{zIndex: "0"}}>
//             <Popup>
//               موقعیت لحظه‌ای کاربر: {userPosition[0].toFixed(5)},{" "}
//               {userPosition[1].toFixed(5)}
//             </Popup>
//           </Marker>
//         )}
//       </MapContainer>
//     </div>
//   );
// };

// *******************************************************--------------------------------------------
import React, {useState, useEffect} from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import L, { latLng, map } from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import {Geocoder} from "leaflet-control-geocoder";
import { Button } from "@mui/material";



import MyLocationIcon from '@mui/icons-material/MyLocation';
const LocationPicker = ({setGetPostiton}) => {
  // وضعیت موقعیت مکانی کاربر
  const [userLocation, setUserLocation] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);

  // وضعیت برای نمایش مختصات
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);

  // استفاده از Geolocation API برای دریافت موقعیت مکانی پیش‌فرض

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const {latitude, longitude} = position.coords;
        setUserLocation([latitude,longitude])
        setGetPostiton([latitude,longitude])
        setLat(latitude)
        setLng(longitude)
      },
    (error)=>{
      console.log("error getting location", error)
    })
  }
    else{
alert("geolocation is not supported by this borwser")
    }

  }, []);
  // useEffect(() => {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(
  //       (position) => {
  //         const {latitude, longitude} = position.coords;
  //         setUserLocation([latitude, longitude]);
  //         setLat(latitude);
  //         setLng(longitude);
  //       },
  //       (error) => {
  //         console.error("Error getting location", error);
  //       }
  //     );
  //   } else {
  //     alert("Geolocation is not supported by this browser.");
  //   }
  // }, []);
// console.log(selectedLocation&&selectedLocation)
  // کامپوننتی برای تغییر موقعیت
  // function LocationChange() {
  //   useMapEvents({
  //     click(e) {

  //       setSelectedLocation(e.latlng);
  //       setLat(e.latlng.lat);
  //       setLng(e.latlng.lng);
  //       // بعد از انتخاب مارکر، زوم به 20 انجام می‌شود
  //       map.setView(e.latlng, 20);
  //     },
  //   });
  //   return null;
  // }

  // ********* live change location user for change in map  *********
  function LocationChange() {
    useMapEvents({
      move(e) {
        const center = e.target.getCenter();  // دریافت موقعیت مرکزی نقشه
        setSelectedLocation(center);  // ذخیره موقعیت جدید
        setLat(center.lat);
        setLng(center.lng);

      },
    });
    return null;
  }
  // تابع برای بازگشت به موقعیت فعلی
  const goToCurrentLocation = () => {
    if (userLocation) {
      setSelectedLocation(null); // بازگشت به موقعیت پیش‌فرض
      setLat(userLocation[0]);
      setLng(userLocation[1]);
    }
  };

  // استفاده از useRef برای دسترسی به شیء نقشه و کنترل جستجو
  const mapRef = React.useRef();


  useEffect(() => {
    if (mapRef.current) {
      const map = mapRef.current;

      // افزودن Geocoder به نقشه
      const geocoder = L.Control.geocoder().addTo(map);

      // اگر می‌خواهید در هنگام جستجو موقعیت پیدا شده را روی نقشه نشان دهید:
      geocoder.on('markgeocode', function(e) {
        // پس از جستجو، موقعیت انتخابی را ذخیره می‌کنیم
        setSelectedLocation(e.geocode.center);
        setLat(e.geocode.center.lat);
        setLng(e.geocode.center.lng);

        // زوم به موقعیت پیدا شده
        map.setView(e.geocode.center, 13);
      });
    }
  }, [mapRef.current]);

  return (
    <div style={{position:"relative",height:"100%"}}>


      {userLocation && (
        <MapContainer
          center={selectedLocation || userLocation}
          zoom={20}
          style={{width: "100%", height: "70vh"}}
          whenCreated={(map) => {
            mapRef.current = map;
          }} // ذخیره شیء نقشه
        >
          <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />

          <LocationChange />

          {/* مارکر برای موقعیت پیش‌فرض یا موقعیت انتخابی */}
          <Marker position={selectedLocation || userLocation}>
            <Popup>موقعیت انتخابی یا موقعیت پیش‌فرض</Popup>
          </Marker>
        </MapContainer>
      )}

      {/* دکمه بازگشت به موقعیت فعلی */}
      <Button onClick={goToCurrentLocation} style={{position:'absolute',bottom:"15px",zIndex:"400",}}>
      <MyLocationIcon />
      </Button>
    </div>
  );
};

export default LocationPicker;
