import React from "react";
import { useSelector } from "react-redux";

import { selectMyFilter } from "../redux/selectors";
import Filter from "../components/Filter";
import LoadMoreButton from "../components/LoadMoreButton";

const Main = () => {
  const filteredCars = useSelector(selectMyFilter);

  return (
    <div className="w-[1440px] pr-32 pl-32 pt-10 flex flex-col justify-center	">
      <div className="w-full flex justify-center">
        <Filter />
      </div>
      <div className="mt-[50px]">
        <ul className="grid grid-cols-4 gap-[29px]">
          {filteredCars?.map((car) => (
            <li key={car.id}>
              <div className="w-[274px] w-[276px]">
                <img
                  src={car.img}
                  alt={car.model}
                  className="w-[400px] h-[268px] outline"
                />
                <div className="flex justify-between pt-[12px] font-medium leading-6 text-black">
                  <div>
                    {car.make}
                    <span className="text-[#3470FF]"> {car.model}, </span>
                    {car.year}
                  </div>
                  <div>{car.rentalPrice}</div>
                </div>
                <div className="flex flex-wrap flex-col leading-[18px] gap-y-[4px] pt-[8px] font-normal text=[12px] leading-[18px]">
                  <div className="flex gap-x-[6px] align-middle	">
                    <p>{car.rentalCompany}</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="2"
                      height="16"
                      viewBox="0 0 2 16"
                      fill="none"
                    >
                      <path d="M1 0V16" stroke="#121417" stroke-opacity="0.1" />
                    </svg>
                    <p>{car.type}</p>
                  </div>
                  {/* <span classame="after:content-[''] after:border-r"></span> */}
                  <div className="flex gap-x-[6px] ">
                    <p>{car.id}</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="2"
                      height="16"
                      viewBox="0 0 2 16"
                      fill="none"
                    >
                      <path d="M1 0V16" stroke="#121417" stroke-opacity="0.1" />
                    </svg>
                    <p>{car.engineSize}</p>
                    {/* <p>{car.functionalities[0]}</p> */}
                  </div>
                </div>
                <div className="pt-[28px]">
                  <button
                    type="button"
                    className="px-[99px] py-[12px] w-[274px] h-[44px] border"
                  >
                    Add to fav
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full flex justify-center">
        <LoadMoreButton />
      </div>
    </div>
  );
};

export default Main;
