import {  useEffect, useState } from "react";
import { createContext } from "react";
import PropTypes from "prop-types";

export const ModalsContext = createContext({
  loanModal: {},
  setLoanModal: () => {},

  loanId: {},
  setLoanId: () => {},
});

export const ModalsProvider = ({ children }) => {
  ModalsProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

  const [loanModal, setLoanModal] = useState(false);

  const [loanId, setLoanId] = useState("");

useEffect(()=>{
  loanId
})

  const value = {
    setLoanModal,
    loanModal,
    loanId,
    setLoanId,
  };
  return (
    <ModalsContext.Provider value={value}>{children}</ModalsContext.Provider>
  );
};
