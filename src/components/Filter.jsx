import React from "react";
import { VscChevronDown, VscChevronUp } from "react-icons/vsc";
import { components } from "react-select";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { selectCars } from "../redux/selectors";
import { filerData } from "../redux/slice";
import Select from "react-select";

const Filter = () => {
  const dispatch = useDispatch();
  const myCars = useSelector(selectCars);
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // =================== Price List ====================
  const costPerHour = myCars.map((item) => item.rentalPrice);
  const uniqueArray = [...new Set(costPerHour)];
  const sortedPrices = uniqueArray
    .map((price) => Number(price.replace("$", ""))) // Убрать символ "$" и преобразовать в число
    .sort((a, b) => a - b)
    .map((item) => `$${item}`); // Отсортировать числа

  const options = sortedPrices.map((item) => ({ value: item, label: item }));

  const submit = (data) => {
    dispatch(filerData(data));
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
        <label className="flex flex-col">
          <p className="absolute bottom-16">Car brand</p>
          <input {...register("brand")} className="border" />
        </label>
        <label className="flex flex-col content-center justify-center">
          <p className="absolute bottom-16">Price/ 1 hour</p>
          <Controller
            name="price"
            control={control}
            defaultValue={{ label: "Select Dept", value: "" }}
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
