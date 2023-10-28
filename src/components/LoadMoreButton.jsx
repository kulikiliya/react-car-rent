import React, { useCallback, useEffect, useState } from "react";
import { taskApi } from "../redux/operation";
import { useDispatch } from "react-redux";
import { addPage } from "../redux/slice";

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

  return (
    <div>
      {showButton ? (
        <button
          className="mt-[100px] py-[14px] px-[44px] flex justify-center items-center border rounded-xl bg-primary text-white"
          onClick={handleLoadMore}
        >
          Load more
        </button>
      ) : null}
    </div>
  );
};

export default LoadMoreButton;
