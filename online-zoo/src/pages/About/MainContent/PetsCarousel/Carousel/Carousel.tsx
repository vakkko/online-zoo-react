import React from "react";

import useGetData from "../../../../../utils/useGetData";

const Carousel: React.FC = () => {
  const { loading, error, data } = useGetData("pets");

  return <></>;
};

export default Carousel;
