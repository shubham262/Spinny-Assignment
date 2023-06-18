import React, { useEffect, useState } from "react";
import TabComponent from "./Tabs";
import "../App.css";
import List from "./List";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import data from "../Data/data.json";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const ParentComponent = () => {
  const [open, setOpen] = useState(false);
  const [list, setList] = useState([...data.item]);
  const [tab, setTab] = useState("All");
  const [snaack, setSnack] = useState(false);
  const [topicForm, setTopic] = useState({ topic: "", keyword: "" });
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setTopic({ topic: "", keyword: "" });
  };

  const filterFunction = (filterCategory) => {
    if (filterCategory === "All") {
      setList([...data.item]);
      return;
    }
    const temp = data.item.filter((element) => {
      return element.category === filterCategory;
    });

    setList((prev) => {
      return [...temp];
    });
  };

  const addCustomTopic = (IncomingData) => {
    const temp = {
      topic: IncomingData.topic,
      keywords: IncomingData.keyword.split(","),
      category: "Custom",
    };
    data.item.push(temp);
    handleClose();
    setSnack(true);
  };

  useEffect(() => {
    filterFunction(tab);
  }, [tab]);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 6,
  };

  return (
    <div className="ParenComponent">
      <h1>Categories</h1>
      <div className="Navbar">
        <TabComponent fn={setTab} />
        <button className="btn" onClick={handleOpen}>
          Add Topic >
        </button>
      </div>

      <br></br>
      <List data={list} />

      <Snackbar
        open={snaack}
        autoHideDuration={1000}
        onClose={() => setSnack(false)}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Topic Added successfully
        </Alert>
      </Snackbar>

      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h2>Add Topic </h2>
            <TextField
              required
              id="outlined-required"
              label="Required"
              placeholder="Enter Topic Name"
              style={{ width: "100%", marginBottom: "5%" }}
              value={topicForm.topic}
              onChange={(e) =>
                setTopic((prev) => {
                  return { ...prev, topic: e.target.value };
                })
              }
            />

            <TextField
              required
              id="outlined-required"
              label="Required"
              placeholder="Enter keywords comma seperated"
              style={{ width: "100%", marginBottom: "5%" }}
              onChange={(e) =>
                setTopic((prev) => {
                  return { ...prev, keyword: e.target.value };
                })
              }
              value={topicForm.keyword}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",

                width: "100%",
              }}
            >
              <Button
                size="large"
                variant="contained"
                color="success"
                style={{ marginRight: "5%" }}
                onClick={() => addCustomTopic(topicForm)}
              >
                Success
              </Button>
              <Button
                size="large"
                variant="outlined"
                color="error"
                onClick={handleClose}
              >
                Error
              </Button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default ParentComponent;
