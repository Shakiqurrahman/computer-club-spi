/* eslint-disable react-hooks/rules-of-hooks */

import axios from "axios";
import { basepath } from "../config/basepath";
import { useEffect, useState } from "react";

export const useGetData = (route) => {
  const fetchPath = `${basepath}/${route}/get`;

  const [datas, setDatas] = useState([]); // Initialize as an empty array
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // Changed to true initially

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(fetchPath);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data, " from server");
        setDatas(data);
        setError(null);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // Include route in the dependency array if you want to refetch data when it changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchPath]);

  return { datas, error, loading };
};

export const useGetDataById = (route, name) => {
  console.log(route, name);
  const fetchPath = `${basepath}/${route}/one/${name}`;
  console.log(fetchPath, "path");
  const [datas, setDatas] = useState([]); // Initialize as an empty array
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // Changed to true initially

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.patch(fetchPath);
        console.log(response);
        const data = await response.data;
        setDatas(data);
        setError(null);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // Include route in the dependency array if you want to refetch data when it changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchPath]);

  return { datas, error, loading };
};
