import axios from "axios";
import { basepath } from "../config/basepath";
import { useState } from "react";

export const usePostData = (form, route) => {
  const fetchPath = `${basepath}/${route}/post`;

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const postData = async () => {
    setLoading(true);
    try {
      const response = await axios.post(fetchPath, form);
      setData(response.data);
      setError(null);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  // This function will be invoked when the component using this hook mounts
  // You can use it in useEffect if you want it to be called conditionally
  const executePost = () => {
    postData();
  };

  return { data, error, loading, executePost };
};
