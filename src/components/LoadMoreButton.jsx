import React, { useCallback, useEffect, useState } from "react";
import { taskApi } from "../redux/operation";
import { useDispatch, useSelector } from "react-redux";
import { addPage } from "../redux/slice";
import { selectCars, selectFav } from "../redux/selectors";

const LoadMoreButton = ({ showButton }) => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  const fetchData = useCallback(
    async (page) => {
      taskApi.defaults.params.page = page;
      try {
        const { data } = await taskApi.get("adverts");
        dispatch(addPage({ data, page }));
      } catch (error) {
        console.log(error);
      }
    },
    [dispatch]
  );

  useEffect(() => {
    try {
      fetchData(page);
    } catch (error) {
      console.log(error);
    }
  }, [page, dispatch, fetchData]);
  // totalCars.length !== 32 && totalFav.length >= 12
  return (
    <div>
      {showButton ? (
        <button className="mt-[100px] border" onClick={handleLoadMore}>
          Load more
        </button>
      ) : null}
    </div>
  );
};

export default LoadMoreButton;
