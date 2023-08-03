'use client'
import axios from 'axios';
import { useState } from 'react';


const useLoanFetcher = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error,setError]=useState()
  const baseUrl = "https://okigwecreations.online/api/"

  const formdata = new FormData()
  formdata.append("action","get_all_loan_request")
  formdata.append("transaction_id","")

  const fetchLoans = async () => {
    try {
      const response = await axios.post(
          `${baseUrl}`,formdata,
          {
            headers: {},
          }
        );
        console.log("resss",response);
      const responseData = await response.data.data;
      setData(responseData);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data', error);
      setError('Error fetching data:')
      setLoading(false);
    }
  };

  

  return { data, loading,fetchLoans,error };
};

export default useLoanFetcher;
