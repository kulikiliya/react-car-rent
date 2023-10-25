import React, { useCallback, useEffect, useState } from "react";
import { taskApi } from "../redux/operation";
import { useDispatch, useSelector } from "react-redux";
import { addPage } from "../redux/slice";
import { selectCars } from "../redux/selectors";

const LoadMoreButton = () => {
  //   const basicCars = useSelector(selectCars);
  const [page, setPage] = useState(1);
  //   const [limit, setLimit] = useState(7);
  //   const [totalHits, setTotalHits] = useState(32);
  //   const [data1, setData] = useState([]);
  const dispatch = useDispatch();

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

  return (
    <div>
      <button className="mt-[100px] border" onClick={handleLoadMore}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreButton;
