import * as React from "react";

import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import Comment from "./Comment";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CommentsBlogDialog({ handleClose, data }) {
  const [tab, setTab] = React.useState(1);

  function handleTab(set) {
    setTab(set);
  }
  let unverified = data?.comments;
  let verified = data?.verifiedComment;
  console.log("V AND NV", verified, unverified);
  return (
    <React.Fragment>
      <Dialog
        fullScreen
        open={true}
        onClose={handleClose}
        TransitionComponent={Transition}
        style={{ zIndex: 10000 }}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Comments
            </Typography>
          </Toolbar>
        </AppBar>
        <div className="px-3 py-5 mt-3 ">
          <div className="flex space-x-5 mb-5">
            <button
              className={` ${
                tab == 1
                  ? "bg-blue-800 border border-1 border-blue-900 rounded"
                  : "bg-blue-400 rounded-full hover:bg-blue-100 hover:text-black"
              }   text-white px-5 py-3  `}
              onClick={() => setTab(1)}
            >
              Live Comments
            </button>

            <button
              className={`${
                tab == 2
                  ? "bg-blue-800"
                  : "bg-blue-400 rounded-full hover:bg-blue-100 hover:text-black"
              }  text-white px-5 py-3  `}
              onClick={() => setTab(2)}
            >
              Comments Request
            </button>
          </div>

          <div className="px-2 py-3 grid grid-cols-1 lg:grid-cols-2 gap-2 w-2/2">
            {tab == 1 &&
              verified.map((el, i) => {
                console.log("el", el);
                return <Comment data={el} key={i} />;
              })}
            {tab == 1 && verified.length == 0 && (
              <div className="text-2xl text-blue-600 animate-bounce">
                {" "}
                No comments on this blog is public yet !!{" "}
              </div>
            )}
            {tab == 2 &&
              unverified.map((el, i) => {
                return (
                  <Comment
                    data={el}
                    key={i}
                    options={true}
                    blogID={data?._id}
                  />
                );
              })}
            {tab == 1 && unverified.length == 0 && (
              <div className="text-2xl text-blue-600 animate-bounce">
                {" "}
                No comments on this blog is public yet !!{" "}
              </div>
            )}
          </div>
        </div>
      </Dialog>
    </React.Fragment>
  );
}
