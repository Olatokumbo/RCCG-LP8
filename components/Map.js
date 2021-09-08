import GoogleMapReact from "google-map-react";
const Map = ({ coords, parishes, setChildClicked, childClicked }) => {
  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY }}
      defaultZoom={14}
      defaultCenter={coords}
      center={coords}
      margin={[50, 50, 50, 50]}
      options={{ disableDefaultUI: true, zoomControl: true }}
      // onChange={(e) => {console.log('HELLO')}}
      // onChildClick={(child) => setChildClicked(child)}
    >
      {parishes.map((parish, index) => (
        <div
          key={index}
          lat={Number(parish.coords.lat)}
          lng={Number(parish.coords.lng)}
          className={
            childClicked === index.toString() && "py-2 px-1 bg-blue-800 w-12 h-14 rounded-xl"
          }
        >
          <img
            src="/rccg.png"
            width={40}
            height={40}
            alt="RCCG Logo"
            onClick={(_child) => setChildClicked(`${index}`)}
          />
        </div>
      ))}
    </GoogleMapReact>
  );
};

export default Map;
