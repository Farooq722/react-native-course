import { useEffect, useState } from "react";

export const useFetch =  (uri: string) => {
  // Implementation of the useFetch hook
  const [data1, setData1] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(uri);
      const data = await res.json();
      setData1(data.meals)
    }
    getData();
  }, [uri]);

  return [data1];
};
