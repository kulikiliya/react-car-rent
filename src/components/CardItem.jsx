import React from "react";
import { useSelector } from "react-redux";
import { selectModalData } from "../redux/selectors";
import { useMyContext } from "./context/usMyContexst";

const CardItem = () => {
  const modalData = useSelector(selectModalData);
  const { isOpen, open, setId } = useMyContext();

  console.log(modalData);

  return (
    <div>
      <div className="flex flex-col ">
        <img
          src={modalData.img}
          alt={modalData.model}
          className=" w-full h-[314px] border rounded-[14px] "
        />
        <div className="pt-[14px] font-medium text-[14px] leading-6 text-black ">
          <h2>
            {modalData.make}
            <span className="text-[#3470FF]"> {modalData.model}, </span>
            {modalData.year}
          </h2>
        </div>
        <div>
          <div className="flex gap-x-[6px] align-middle	">
            <p>{modalData.rentalCompany}</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2"
              height="16"
              viewBox="0 0 2 16"
              fill="none"
            >
              <path d="M1 0V16" stroke="#121417" strokeOpacity="0.1" />
            </svg>
            <p>{modalData.type}</p>
          </div>
          <div className="flex gap-x-[6px] ">
            <p>{modalData.id}</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2"
              height="16"
              viewBox="0 0 2 16"
              fill="none"
            >
              <path d="M1 0V16" stroke="#121417" strokeOpacity="0.1" />
            </svg>
            <p>{modalData.engineSize}</p>
          </div>
          <div className="mt-[15px]">
            <p className="text-xl text-[#121417] ">{modalData.description}</p>
          </div>
          <div className="mt-[24px]">
            <h3 className="text-[black]">Accessories and functionalities</h3>
            <div className="w-full mt-[12px] ">
              <ul className="flex gap-6">
                {modalData?.accessories?.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-between flex-nowrap w-full text-xs "
                  >
                    {item}
                    {index !== modalData.accessories.length - 1 && (
                      <div className="after:content-[''] after:h-[10px] after:border after:rounded-sm"></div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full mt-[4px]">
              <ul className="flex gap-6">
                {modalData?.functionalities?.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-between flex-nowrap w-full text-xs"
                  >
                    {item}
                    {index !== modalData.accessories?.length - 1 && (
                      <div className="after:content-[''] after:h-[10px] after:border after:rounded-sm"></div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-[24px]">
            <h3>Rental Conditions:</h3>
            <ul className="flex w-full flex-wrap mt-[8px] gap-[8px]">
              {modalData?.rentalConditions
                ?.split("\n")
                .map((item, index, array) => {
                  const parts = item?.split(":");
                  if (parts.length === 2 && parts[0].trim() === "Minimum age") {
                    return (
                      <li
                        key={index}
                        className="py-[7px] px-[14px] bg-[#F9F9F9] border rounded-[35px]"
                      >
                        {parts[0]}:{" "}
                        <span className="text-red-500">{parts[1]}</span>
                      </li>
                    );
                  } else {
                    return (
                      <li
                        key={index}
                        className={`py-[7px] px-[14px] bg-[#F9F9F9] border rounded-[35px] ${
                          index === array.length - 2 ? "mr-[150px]" : ""
                        }`}
                      >
                        {item}
                      </li>
                    );
                  }
                })}
              <li className="py-[7px] px-[14px] mr-[10px] bg-[#F9F9F9] border rounded-[35px]">
                Mileage:{" "}
                <span className="text-[#3470FF]">
                  {modalData?.mileage
                    ?.toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </span>
              </li>
              <li className="py-[7px] px-[14px] mr-[10px] bg-[#F9F9F9] border rounded-[35px]">
                Price:{" "}
                <span className="text-[#3470FF]">
                  {modalData?.rentalPrice
                    ?.toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </span>
              </li>
            </ul>
            <a
              href="tel:+380730000000"
              className="inline-flex mt-[24px] py-[12px] px-[50px] border flex justify-center items-center rounded-xl bg-primary text-white"
            >
              Rental car
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
