import { Alert } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeAlert } from "../Redux/Slices/errorSlice";

export default function Error() {
  const dispatch = useDispatch();
  const alertType = useSelector((state) => state.error.alertType);
  const alertMsg = useSelector((state) => state.error.alertMsg);
  const show = useSelector((state) => state.error.show);

  show &&
    setTimeout(() => {
      dispatch(closeAlert());
    }, [4000]);

  //   useEffect(() => {}, [alertType]);

  return (
    <>
      {show && alertType == "success" && (
        <div className="absolute mt-10  z-[100]  animate-bounce ">
          <Alert severity="success"> {alertMsg}</Alert>
        </div>
      )}
      {show && alertType == "info" && (
        <div className="absolute z-[100] mt-8 animate-bounce ">
          <Alert severity="info"> {alertMsg}</Alert>
        </div>
      )}
      {show && alertType == "warning" && (
        <div className="absolute z-[100] mt-8 animate-bounce ">
          <Alert severity="warning"> {alertMsg}</Alert>
        </div>
      )}
      {show && alertType == "error" && (
        <div className="absolute z-[100] mt-8 animate-bounce ">
          <Alert severity="error"> {alertMsg}</Alert>
        </div>
      )}
    </>
  );
}
