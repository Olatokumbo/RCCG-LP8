import Image from "next/image";
import {
  UserIcon,
  LocationMarkerIcon,
  PhoneIcon,
  MailIcon,
} from "@heroicons/react/solid";
const ChurchCard = ({ data, selected, refProp }) => {
  if (selected) refProp?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  return (
    <div className="w-full bg-white my-3 rounded-md shadow-md">
      <div className={ "w-full h-5 rounded-t-md flex items-center" + (selected ? " bg-yellow-600" : " bg-gray-500")}>
        <h1 className="text-white text-xs px-2 font-semibold">{data.area}</h1>
      </div>
      <div className="flex p-4 ">
        <div className="w-10">
          <Image src="/rccg.png" width={30} height={30} alt="RCCG LOGO" />
        </div>
        <div className="flex-1">
          <h1 className="text-xl font-medium text-gray-700">{data.name}</h1>
          <div className="flex my-1">
            <LocationMarkerIcon className="w-5 h-5 mr-2 text-gray-500" />
            <h1 className="text-gray-800 text-sm font-normal">
              {data.address}
            </h1>
          </div>
          <div className="flex my-1 items-center">
            <UserIcon className="w-5 h-5 mr-2 text-gray-500" />
            <h1 className="text-gray-800 text-sm font-normal">{data.pic}</h1>
          </div>
          <div className="flex my-1 items-center">
            <PhoneIcon className="w-5 h-5 mr-2 text-gray-500" />
            <h1 className="text-gray-800 text-sm font-normal">
              {data.contact}
            </h1>
          </div>
          {data.email && (
            <div className="flex my-1 items-center">
              <MailIcon className="w-5 h-5 mr-2 text-gray-500" />
              <h1 className="text-gray-800 text-sm font-normal">
                {data.email}
              </h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChurchCard;
