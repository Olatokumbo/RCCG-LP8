import { createRef, useState, useEffect } from "react";
import ChurchCard from "./ChurchCard";
const List = ({ parishes, childClicked, setCoords, setChildClicked }) => {
  const [elRefs, setElRefs] = useState([]);
  useEffect(() => {
    setElRefs((refs) =>
      Array(parishes.length)
        .fill()
        .map((_, i) => refs[i] || createRef())
    );
  }, [parishes]);

  const cardClicked = (parish, index) => {
    setCoords(parish.coords);
    setChildClicked(`${index}`);
  };
  return (
    <div className="flex-1 p-3 overflow-auto bg-gray-200">
      {parishes.length > 0 ? (
        parishes.map((parish, index) => (
          <div ref={elRefs[index]} onClick={() => cardClicked(parish, index)}>
            <ChurchCard
              key={index}
              data={parish}
              selected={Number(childClicked) === index}
              refProp={elRefs[index]}
            />
          </div>
        ))
      ) : (
        <h1 className="text-center font-bold text-gray-600">Not Found</h1>
      )}
    </div>
  );
};

export default List;
