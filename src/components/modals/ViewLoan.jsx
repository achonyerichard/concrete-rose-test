/* eslint-disable react/prop-types */
import { useContext } from "react";
import { ModalsContext } from "../../contexts/ModalContext";

const ViewLoan = ({ data }) => {
  const { loanModal, setLoanModal, loanId } = useContext(ModalsContext);

  const filteredData = data?.filter((item) => item?.ID === loanId);
  console.log(filteredData);

  return (
    <>
      {loanModal && (
        <div
          className=" fixed z-10 overflow-y-auto top-[200px] md:top-[100px] w-full left-0 "
          id="modal"
        >
          <div className=" flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-500 opacity-75" />
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-auto">
              &#8203;
            </span>
            <div></div>
            <div
              className="relative inline-block align-center px-5 py-5  bg-white  text-left  shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg w-full"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <span className="absolute z-50 top-0 right-0 bg-[#095AD3] p-1">
                <span
                  onClick={() => setLoanModal(false)}
                  className="cursor-pointer   hover:text-gray-700"
                >
                  <svg
                    className="w-4 h-4 font-bold"
                    fill="white"
                    stroke="white"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </span>
              </span>
              <h1 className="text-2xl md:text-3xl pb-3 font-semibold text-[#095AD3]">
                {` Loan Details for User : ${filteredData[0]?.FULL_NAME}`}
              </h1>

              <div className="py-5">
                <form>
                  <div className="flex flex-col md:items-center md:gap-x-4 gap-y-6 md:gap-y-6">
                    <div className="group  w-full ">
                      <label>Trans. Id</label>
                      <input
                        id="id"
                        type="text"
                        disabled
                        defaultValue={filteredData[0]?.TRANSACTION_ID}
                        placeholder="Transaction Id"
                        className="peer h-10 w-full border-none  text-black rounded-md bg-gray-50 px-4 font-semibold outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:shadow-lg focus:shadow-blue-400"
                      />
                    </div>
                    <div className="group  w-full ">
                      <label>Loan Amount</label>
                      <input
                        id="id"
                        type="number"
                        disabled
                        defaultValue={filteredData[0]?.LOAN_AMOUNT}
                        placeholder="Transaction Id"
                        className="peer h-10 w-full border-none  text-black rounded-md bg-gray-50 px-4 font-semibold outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:shadow-lg focus:shadow-blue-400"
                      />
                    </div>
                    <div className="group  w-full ">
                      <label>Duration in Days </label>
                      <input
                        id="id"
                        type="number"
                        disabled
                        defaultValue={filteredData[0]?.REPAYMENT_DURATION}
                        placeholder="Transaction Id"
                        className="peer h-10 w-full border-none  text-black rounded-md bg-gray-50 px-4 font-semibold outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:shadow-lg focus:shadow-blue-400"
                      />
                    </div>
                  </div>
                 
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ViewLoan;
