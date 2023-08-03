import  { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import useLoanFetcher from '../hooks/useFetchLoanData';
const ApplyLoan = () => {
    const { fetchLoans } = useLoanFetcher();
    const [loading,setLoading]=useState(false)
    const initialFormData = {
        name: '',
        amount: '',
        duration: '',
      };
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)

    const endpointUrl = 'https://okigwecreations.online/api/'; 

   
    const formDataObj = new FormData();
    formDataObj.append('FULL_NAME', formData.name);
    formDataObj.append('REPAYMENT_DURATION', formData.duration);
    formDataObj.append('LOAN_AMOUNT', formData.amount);
    formDataObj.append("action","get_all_loan_request")
    formDataObj.append("transaction_id","")


    axios.post(endpointUrl, formDataObj)
      .then((response) => {
        console.log('Response:', response.data);
        if(response){
            toast.success("Loan Applied Successfully !!!", {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              });
              fetchLoans()
        }
      setLoading(false)
      setFormData(initialFormData)
      })
      .catch((error) => {
        if(error){
            toast.error("Error occured while applying for Loan !!!", {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              });
        }
        console.error('Error:', error);
        setLoading(false)
      });
  };

  return (
    <>
    <ToastContainer/>
     <form onSubmit={handleSubmit} className='md:w-1/2 space-y-4 mb-5'>
      <div>
        <label>Full Name:</label>
        <input  className="w-full shadow-inner p-4 border-0" type="text" name="name" value={formData.name} onChange={handleChange} />
      </div>
      <div>
        <label>Amount(naira):</label>
        <input className="w-full shadow-inner p-4 border-0 appearance-none" type="number" name="amount" value={formData.amount} onChange={handleChange} />
      </div>
      <div>
        <label>Duration(days):</label>
        <input className="w-full shadow-inner p-4 border-0  appearance-none" type="number" name="duration" value={formData.duration} onChange={handleChange} />
      </div>
      <button disabled={loading} type="submit" className='bg-blue-500 px-10 py-3 text-white text-md w-auto rounded-lg my-5'>{loading ?"Loading...":'Submit'}</button>
    </form>
    </>
   
  );
};

export default ApplyLoan;
