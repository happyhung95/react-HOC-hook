import { useEffect, useState } from "react";

import AxioInstance from "../api/axioInstance";

const UseApi = (name) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadData() {
      try {
        const api = AxioInstance();
        const response = await api.get(`/name/${name}`);
        setData(response);
        setError(null); // just for rendering if there was error before
      } catch (exc) {
        setError(exc);
        setData(null); // just for rendering if there was data before
      }
    }
    // eslint-disable-next-line no-use-before-define
    loadData();
  }, [name]);

  return [data, error];
};

export default UseApi;
