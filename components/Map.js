import GoogleMapReact from "google-map-react";
const Map = ({ coords, parishes, setChildClicked }) => {
  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY }}
      defaultZoom={14}
      defaultCenter={coords}
      center={coords}
      margin={[50, 50, 50, 50]}
      options={{ disableDefaultUI: true, zoomControl: true }}
      onChange={(e) => {}}
    >
      {parishes.map((parish, index) => (
        <div
          key={index}
          lat={Number(parish.coords.lat)}
          lng={Number(parish.coords.lon)}
        >
          <img
            src="/rccg.png"
            width={45}
            height={45}
            alt="RCCG Logo"
            onClick={(child) => setChildClicked(child)}
          />
        </div>
      ))}
    </GoogleMapReact>
  );
};

export default Map;
