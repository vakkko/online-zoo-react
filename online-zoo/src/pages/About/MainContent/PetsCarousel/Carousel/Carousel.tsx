import React from "react";

import useGetData from "../../../../../utils/useGetData";
import Loader from "../../../../../components/Loader/Loader";

const Carousel: React.FC = () => {
  const { loading, error, data } = useGetData("pets");

  return <>{loading && <Loader />}</>;
};

export default Carousel;
