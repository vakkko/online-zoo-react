import axios from "axios";

import { BASE_URL } from "../consts/consts";

import { useEffect, useState } from "react";

const useGetData = (query: string) => {
  const [loading, setLoading] = useState<boolean>();
  const [data, setData] = useState();
  const [error, setError] = useState<boolean>();

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await axios(`${BASE_URL}/${query}`);
        if (response.status !== 200) {
          setError(true);
          return;
        }
        setData(response.data);
      } catch (err) {
        setError(true);
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [query]);

  return { loading, error, data };
};

export default useGetData;
