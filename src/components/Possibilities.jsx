import React from "react";
import IconSword from "../img/svg/swords";
import IconDog from "../img/svg/dog";
import IconCar from "../img/svg/car";

const Possibilities = () => {
  return (
    <div className="mt-20 p-2">
      <ul className="grid grid-cols-3 gap-4 text-center">
        <li className="pt-4">
          <div className="py-4 flex justify-center border-t border-r border-l">
            <IconSword />
          </div>
          <div className="p-4 bg-gray-100 rounded-b-lg shadow-lg">
            <p>You can fight for a new car...if you can!</p>
          </div>
        </li>
        <li className="pt-4">
          <div className="py-4 flex justify-center border-t border-r border-l">
            <IconDog />
          </div>
          <div className="p-4 bg-gray-100 rounded-b-lg shadow-lg">
            <p>"It's dangerous to go alone! Take this"</p>
          </div>
        </li>
        <li className="pt-4">
          <div className="py-4 flex justify-center border-t border-r border-l">
            <IconCar />
          </div>
          <div className="p-4 bg-gray-100 rounded-b-lg shadow-lg">
            <p>Maybe you will find a good car, who knows</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Possibilities;
