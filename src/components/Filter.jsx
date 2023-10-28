import React from "react";
import { VscChevronDown, VscChevronUp } from "react-icons/vsc";
import { components } from "react-select";
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { filerData } from "../redux/slice";
import Select from "react-select";
import { filerFavData } from "../redux/FiterRedux/sliceFilter";
import { useLocation } from "react-router-dom";
import cars from "../components/assets/cars.json";

const Filter = () => {
  const dispatch = useDispatch();
  const { register, control, handleSubmit } = useForm();

  // =================== Price List ====================

  var priceArray = [];
  for (var i = 1; i <= 10; i++) {
    let item = i * 10;
    priceArray.push(item);
  }
  const options = [
    { value: "All", label: "All" },
    ...priceArray.map((item) => ({ value: item, label: `$${item}` })),
  ];
  const carslist = cars.map((item) => ({ value: item, label: item }));
  console.log(options);

  const { pathname } = useLocation();

  const submit = (data) => {
    if (pathname === "/catalog") {
      dispatch(filerData(data));
    } else {
      dispatch(filerFavData(data));
    }
  };

  const DropdownIndicator = (props) => {
    if (props.isFocused) {
      return (
        <components.DropdownIndicator {...props}>
          <VscChevronUp />
        </components.DropdownIndicator>
      );
    }
    return (
      <components.DropdownIndicator {...props}>
        <VscChevronDown />
      </components.DropdownIndicator>
    );
  };

  return (
    <div>
      <form
        className="flex content-center justify-center gap-[18px] relative"
        onSubmit={handleSubmit(submit)}
      >
        <label className="flex flex-col content-center justify-center">
          <p className="absolute bottom-16">Car brand</p>
          {/* <input {...register("brand")} className="border" /> */}
          <Controller
            name="brand"
            control={control}
            defaultValue={{ label: "Enter the text", value: "" }}
            render={({ field }) => (
              <Select
                {...field}
                options={carslist}
                components={{ DropdownIndicator }}
                classNames={{
                  control: () => "",
                }}
              />
            )}
          />
        </label>
        <label className="flex flex-col content-center justify-center">
          <p className="absolute bottom-16">Price/ 1 hour</p>
          <Controller
            name="price"
            control={control}
            defaultValue={{ label: "To $", value: "" }}
            render={({ field }) => (
              <Select
                {...field}
                options={options}
                components={{ DropdownIndicator }}
                classNames={{
                  control: () => "",
                }}
              />
            )}
          />
        </label>
        <label className="flex flex-col flex-1 ">
          <p className="absolute bottom-16">Сar mileage / km</p>
          <div>
            <input
              {...register("from")}
              className="border py-[16px] pr-[115px] pl-[24px]"
            />
            <input
              {...register("to")}
              className="border py-[16px] pr-[115px] pl-[24px]"
            />
          </div>
        </label>
        <button className="py-[14px] px-[44px] flex justify-center items-center border rounded-xl bg-primary text-white">
          Search
        </button>
      </form>
    </div>
  );
};

export default Filter;
