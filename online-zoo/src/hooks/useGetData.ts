import axios, { AxiosError, CanceledError } from "axios";

import { BASE_URL } from "../consts/consts";

import { useEffect, useState } from "react";

function useGetData<T>(query: string) {
  const [loading, setLoading] = useState<boolean>();
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState<boolean>();

  useEffect(() => {
    const controller = new AbortController();
    async function fetchData() {
      try {
        setLoading(true);
        const response = await axios(`${BASE_URL}/${query}`, {
          signal: controller.signal,
        });

        setData(response.data.data);
      } catch (err) {
        if (err instanceof CanceledError) return;

        setError(true);
        console.error("Fetch Error:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();

    return () => {
      controller.abort();
    };
  }, [query]);

  return { loading, error, data };
}

export default useGetData;
