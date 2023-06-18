import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import "../App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const theme = createTheme({
  components: {
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: "#fe5829",
          height: 5,
        },
      },
    },
  },
});

const TabComponent = (props) => {
  const [value, setValue] = useState("All");
  const [eventvalue, setEventValue] = useState("");
  const handleChange = (event, newValue) => {
    setValue(newValue);
    props.fn(newValue)
    if (eventvalue) {
      eventvalue.target.style.color = "#1f252e";
    }

    setEventValue(event);
    event.target.style.color = "#fe5829";
  };

  return (
    <ThemeProvider theme={theme} style={{}}>
      <Box
        sx={{ width: "50%" }}
        style={{marginLeft: "4vw" }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="secondary tabs example"
        >
          <Tab
            style={{
              color: value === "All" ? "#fe5829" : "#1f252e",
              fontWeight: "900",
              fontSize: "large",
            }}
            value="All"
            label="All"
          />
          <Tab
            style={{   color: "#1f252e", fontWeight: "900", fontSize: "large" }}
            value="Custom"
            label="Custom"
          />
          <Tab
            style={{   color: "#1f252e", fontWeight: "900", fontSize: "large" }}
            value="ICP"
            label="ICP"
          />
          <Tab
            style={{   color: "#1f252e", fontWeight: "900", fontSize: "large" }}
            value="Mission"
            label="Mission"
          />
          <Tab
            style={{   color: "#1f252e", fontWeight: "900", fontSize: "large" }}
            value="Product"
            label="Product"
          />
        </Tabs>
      </Box>
    </ThemeProvider>
  );
};

export default TabComponent;
