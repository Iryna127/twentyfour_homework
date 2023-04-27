import { useState } from 'react';
import axios from 'axios';

const usePutRecords = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(undefined);
  

  const changeRecord = (id, ...data) => {
    
    console.log(data)
    console.log(id)
    setLoading(true);
    axios.put(`records/${id}`, ...data).then((resp) => {
      setData(resp);
      setLoading(false);
    });
  };

  return { changeRecord, data, loading, error };
};

export default usePutRecords;