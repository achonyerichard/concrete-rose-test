/* eslint-disable no-unused-vars */
import { useContext, useEffect } from "react";
import Layout from "../../components/layout";
import useLoanFetcher from "../../hooks/useFetchLoanData";
import LoanTable from "../../components/table/LoanTable";
import ApplyLoan from "../../components/ApplyLoanForm";
import { ModalsContext } from "../../contexts/ModalContext";
import ViewLoan from "../../components/modals/ViewLoan";

const Home = () => {
    const { data, loading,fetchLoans,error } = useLoanFetcher();
    const {loanId}= useContext(ModalsContext)
    console.log(loanId);
    useEffect(() => {
     fetchLoans()

    }, [])
    console.log(data);
  return (
    <>
    <Layout>
      <div className="flex flex-col  justify-center">
        
        <h1 className="text-blue-500 text-xl md:text-4xl font-semibold pb-5">Apply Loan</h1>
        <ApplyLoan/>
        <LoanTable data={data} loading={loading} error={error}/>
      </div>
      <ViewLoan data={data}/>
      </Layout>
    </>
  );
};

export default Home;
