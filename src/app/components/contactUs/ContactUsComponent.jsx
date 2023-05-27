import React from "react";
import { Grid, TextField, Button, Typography } from "@mui/material";

import "./ContactUs.css";
import "@fontsource/bodoni-moda";

import { withStyles } from "@material-ui/core/styles";

export default function ContactUsComponent() {
  const CssTextField = withStyles({
    root: {
      "& label.Mui-focused": {
        color: "000000",
      },
      "& .MuiInput-underline:after": {
        borderBottomColor: "yellow",
      },
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: "000000",
        },
        "&:hover fieldset": {
          borderColor: "000000",
        },
        "&.Mui-focused fieldset": {
          borderColor: "000000",
        },
      },
    },
  })(TextField);

  return (
    <div className="contactUs-center">
      <Grid container>
        <Grid item style={{ flexGrow: "1" }}>
          <Typography
            gutterBottom
            variant="h4"
            style={{
              fontFamily: "Bodoni Moda",
              fontSize: "40",
              color: "#000000",
            }}
          >
            Contact Us
          </Typography>
          <Typography
            gutterBottom
            variant="h6"
            style={{ marginTop: "40px", color: "#000000" }}
          >
            Redback Operation
          </Typography>
          <Typography
            gutterBottom
            variant="h6"
            style={{ marginTop: "40px", color: "#000000" }}
          >
            admin@mail.com
          </Typography>
        </Grid>
        <Grid xs={6} item>
          <form>
            <Grid container spacing={1}>
              <Grid xs={12} sm={12} item>
                <CssTextField
                  sx={{ "& label": { color: "000000" } }}
                  inputProps={{
                    style: { color: "000000" },
                  }}
                  placeholder="Enter your name"
                  label="Name"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <CssTextField
                  sx={{ "& label": { color: "000000" } }}
                  inputProps={{
                    style: { color: "000000" },
                  }}
                  style={{ borderColor: "000000" }}
                  type="email"
                  placeholder="Enter email"
                  label="Email"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <CssTextField
                  sx={{ "& label": { color: "000000" } }}
                  inputProps={{
                    style: { color: "000000" },
                  }}
                  type="number"
                  placeholder="Enter phone number"
                  label="Phone"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <CssTextField
                  style={{ color: "000000" }}
                  sx={{ "& label": { color: "000000" } }}
                  inputProps={{
                    style: { color: "000000" },
                  }}
                  label="Message"
                  multiline
                  rows={4}
                  placeholder="Type your message here"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={3}>
                <Button
                  style={{
                    borderRadius: 0,
                    backgroundColor: "#ADD8E6",
                    color: "black",
                    margin: "5px",
                  }}
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </div>
  );
}
