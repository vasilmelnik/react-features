import { useState, useEffect } from "react";

export const useFetch = url => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUrl = async () => {
    const response = await fetch(url);
    const jsonResponse = await response.json();


    setData(jsonResponse);
    setLoading(false);
  };
  
  useEffect(() => {
    fetchUrl();
  }, []);

  
  return [data, loading];
};