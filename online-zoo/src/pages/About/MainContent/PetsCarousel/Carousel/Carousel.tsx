import React from "react";

import useGetData from "../../../../../utils/useGetData";

import Loader from "../../../../../components/Loader/Loader";
import ErrorFallback from "../../../../../components/ErrorFallback/ErrorFallback";

const Carousel: React.FC = () => {
  const { loading, error, data } = useGetData("pets");

  return (
    <>
      {loading && <Loader />}
      {error && <ErrorFallback />}
    </>
  );
};

export default Carousel;
