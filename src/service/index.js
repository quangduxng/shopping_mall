import axios from 'axios'
import { useState, useEffect } from 'react';
import { URL_BASE } from '../components/constants'
const useFetch = (endpoint, options = null) => {
    const url = URL_BASE + endpoint; 
  const [data, setData] = useState();
  useEffect(() => {
    axios.get(url).then(function (res){
        setData(res.data)
    }) 
  }, [url, options]);
  return {data}
}
export default useFetch;