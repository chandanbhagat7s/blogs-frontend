import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function HideBlogDialog({ handleClose, data }) {
  const [value, setValue] = React.useState("");
  return (
    <React.Fragment>
      <Dialog
        open={true}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          id="alert-dialog-title"
          className="font-bold text-2xl px-3 py-2 bg-blue-700 font-bold text-white"
        >
          <div>{data?.blogName}</div>
        </DialogTitle>
        <DialogContent>
          <div className="px-3 py-5">You want to delete this blog</div>
          <div className="p-2">
            <div className="text-gray-500 text-sm">case sensitive </div>
            <input
              type="text"
              className={`p-2 border border-2 border-blue-300`}
              placeholder="Type the title of blog"
              onChange={(e) => {
                setValue(e.target.value);
              }}
            />
          </div>
        </DialogContent>
        <DialogActions>
          <button
            onClick={handleClose}
            className="text-blue-700 bg-blue-100 p-2 rounded"
          >
            CLOSE
          </button>
          <button
            onClick={handleClose}
            className={` p-2 rounded  ${
              value != data.blogName
                ? "  bg-gray-300 text-white disable"
                : "  bg-blue-200 text-blue-500 "
            }`}
          >
            HIDE
          </button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
