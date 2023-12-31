/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useContext, useState } from "react";
import Pagination from "../pagination/Pagination";
import { ModalsContext } from "../../contexts/ModalContext";

const LoanTable = ({ data, loading,error }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(5);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = data?.slice(indexOfFirstProduct, indexOfLastProduct);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const {setLoanId,setLoanModal}= useContext(ModalsContext)

  return (
    <>
      <div className="w-full  overflow-x-auto  lg:overflow-hidden">
        <table className="w-full leading-normal  overflow-x-scroll ">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-5 py-3 border-b-2 border-gray-200  text-left text-lg font-normal text-[#8A8A8A] capitalize tracking-wider">
                Id
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200  text-left text-lg font-normal text-[#8A8A8A] capitalize tracking-wider">
                Trans. Id
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200  text-left text-lg font-normal text-[#8A8A8A] capitalize tracking-wider">
                Full Name
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200  text-left text-lg font-normal text-[#8A8A8A] capitalize tracking-wider">
                Loan Amount
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200  text-left text-lg font-normal text-[#8A8A8A] capitalize tracking-wider">
                Duration
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200  text-left text-lg font-normal text-[#8A8A8A] capitalize tracking-wider">
                Actions
              </th>
            </tr>
          </thead>

          {data && (
            <tbody>
              {currentProducts?.map((item) => (
                <tr key={item?.id}>
                  <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                    <p
                      className={` whitespace-no-wrap text-md font-normal   capitalize`}
                    >
                      {item?.ID}
                    </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                    <p className={` whitespace-no-wrap text-md font-normal   `}>
                      {item?.TRANSACTION_ID}
                    </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                    <p
                      className={` whitespace-no-wrap text-md font-normal  capitalize `}
                    >
                      {item?.FULL_NAME}
                    </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                    <p
                      className={` whitespace-no-wrap text-md font-normal  capitalize `}
                    >
                      {item?.LOAN_AMOUNT}
                    </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                    <p
                      className={` whitespace-no-wrap text-md font-normal  capitalize `}
                    >
                      {item?.REPAYMENT_DURATION}
                    </p>
                  </td>
                  <td className="px-5 py-5 lg:py-8 border-b border-gray-400 bg-white text-sm flex items-center">
                    <button
                      value={"remove"}
                      onClick={(e) => {
                        e.preventDefault()
                        setLoanId(item?.ID)
                        setLoanModal(true)
                      }}
                      className={` whitespace-no-wrap text-md font-semibold bg-blue-600 ml-3 p-2 rounded-md text-white cursor-pointer  `}
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
        {loading && (
          <div className="flex  justify-center  w-full pt-5">
            <svg
              aria-hidden="true"
              className="w-10 h-10   text-gray-200 animate-spin  fill-blue-800"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
          </div>
        )}
        {error && <div className="flex  justify-center items-center  w-full mt-5 p-2 bg-red-200">
          <h1 className="text-xl text-red-600 font-semibold">{error}</h1>
          </div>}
        <Pagination
          itemsPerPage={productsPerPage}
          total={data?.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </>
  );
};

export default LoanTable;
