import React from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadMoreButton from "../components/LoadMoreButton";
import Filter from "../components/Filter";
import { IconHeartDis } from "../img/svg/likeDisable";
import { IconHeartAct } from "../img/svg/likeActivel";
import { fetchCardForModal } from "../redux/operation";
import { useMyContext } from "../components/context/usMyContexst";
import Modal from "../components/Modal";
import CardItem from "../components/CardItem";
import {
  selectFav,
  selectMyFilterFav,
} from "../redux/FiterRedux/selectorsFilter";
import { removeFromFav } from "../redux/FiterRedux/sliceFilter";
import { fetchCarsByID } from "../redux/FiterRedux/operationFilter";

const Favorite = () => {
  const { isOpen, open, setId } = useMyContext();
  const favArray = useSelector(selectFav);
  const totalFav = useSelector(selectFav);
  const filterFav = useSelector(selectMyFilterFav);

  const dispatch = useDispatch();

  const getId = (id) => {
    dispatch(fetchCarsByID(id));
  };
  const handleRemove = (id) => {
    dispatch(removeFromFav(id));
  };

  const modelContent = (id) => {
    setId(id);
    dispatch(fetchCardForModal(id));
    open();
  };

  return (
    <div>
      {" "}
      <div className="w-[1440px] pr-32 pl-32 pt-10 flex flex-col justify-center	">
        <div className="w-full flex justify-center">
          <Filter />
        </div>
        <div className="mt-[50px]">
          <ul className="grid grid-cols-4 gap-[29px]">
            {filterFav?.map((car) => (
              <li key={car.id}>
                <div className="relative w-[274px] w-[276px]">
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
                        <path
                          d="M1 0V16"
                          stroke="#121417"
                          strokeOpacity="0.1"
                        />
                      </svg>
                      <p>{car.type}</p>
                    </div>
                    <div className="flex gap-x-[6px] ">
                      <p>{car.id}</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="2"
                        height="16"
                        viewBox="0 0 2 16"
                        fill="none"
                      >
                        <path
                          d="M1 0V16"
                          stroke="#121417"
                          strokeOpacity="0.1"
                        />
                      </svg>
                      <p>{car.engineSize}</p>
                    </div>
                  </div>
                  <div className="pt-[28px]">
                    <button
                      type="button"
                      id={car.id}
                      className="flex justify-center items-center px-[99px] py-[12px] w-[274px] h-[44px] border"
                      onClick={() => modelContent(car.id)}
                    >
                      <p className="w-full text-center text-[14px] font-semibold leading-5">
                        Load more
                      </p>
                    </button>
                    <div className="p-1 absolute top-0 right-0 ">
                      {favArray.some((item) => item.id === car.id) ? (
                        <div
                          type="button"
                          id={car.id}
                          className="w-fit"
                          onClick={() => handleRemove(car.id)}
                        >
                          <IconHeartDis />
                        </div>
                      ) : (
                        <div
                          type="button"
                          id={car.id}
                          className="w-fit"
                          onClick={() => getId(car.id)}
                        >
                          <IconHeartAct />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full flex justify-center">
          <LoadMoreButton showButton={totalFav.length >= 12} />
        </div>
        {isOpen ? (
          <Modal>
            <CardItem />
          </Modal>
        ) : null}
      </div>
    </div>
  );
};

export default Favorite;
