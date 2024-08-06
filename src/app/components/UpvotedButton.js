// components/UpvotedButton.js

import React from "react";
import { Button, createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  button: {
    border: `2px solid orange`,
    color: "black",
    padding: "10px 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
  },
  triangle: {
    width: 0,
    height: 0,
    borderLeft: "10px solid transparent",
    borderRight: "10px solid transparent",
    borderBottom: "20px solid orange",
  },
}));

const UpvotedButton = () => {
  const { classes } = useStyles();

  return (
    <Button className={classes.button} variant="outline">
      <div className={classes.triangle}></div>
      UPVOTED
    </Button>
  );
};

export default UpvotedButton;
