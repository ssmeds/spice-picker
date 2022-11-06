import Button from "./Button";
import { useState, useEffect } from "react";
import { ISpiceDisplay } from "../interfaces";

const SpiceDisplay = (props: ISpiceDisplay) => {
  const [show, setShow] = useState(false);
  const emptyDisplay = (value: boolean) => {
    setShow(value);
  };

  useEffect(() => {
    setShow(true);
  }, [props.name]);

  return (
    <>
      <div className="spice-display">
        <div className="group">
          <h4>Name</h4>
          <p>{show ? props?.name : ""}</p>
        </div>
        <div className="group">
          <h4>Price</h4>
          <p>{show ? props?.price : ""}</p>
        </div>
        <div className="group">
          <h4>Taste</h4>
          <p>{show ? props?.taste : ""}</p>
        </div>
        {props.name !== undefined ? (
          <Button
            spiceName={props.name}
            updateList={props.updateList}
            emptyDisplay={emptyDisplay}
            show={show}
          />
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default SpiceDisplay;
