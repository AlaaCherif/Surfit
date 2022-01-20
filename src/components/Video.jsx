import React from "react";
import sample from "./video.mov";
import classes from "./video.module.css";
import Button from "./Button/Button";

export default function Video() {
  return (
    <div>
      <video autoPlay loop muted className={classes.video}>
        <source src={sample} type="video/mp4" />
      </video>
      <div className={classes["item-container"]}>
        MF
        <Button />
      </div>
      Hello again mf
    </div>
  );
}
