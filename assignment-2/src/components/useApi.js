import { useEffect, useState } from "react";
import AxioInstance from "./axioInstance";

const UseApi = (name) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // eslint-disable-next-line no-use-before-define
    loadData();
  }, [name]);

  async function loadData() {
    try {
      // prevent fetching data when name is null
      if (!name) {
        return;
      }
      const api = AxioInstance();
      const response = await api.get(`/name/${name}`);
      setData(response);
      setError(null) // just for rendering if there was error before
    } catch (exc) {
      setError(exc);
      setData(null) // just for rendering if there was data before
    }
  }
  return [data, error];
};

export default UseApi;
