import { ISpiceList, ISpice } from "../interfaces";
import SpiceDisplay from "./SpiceDisplay";
import { useState } from "react";

const SpiceList = (props: ISpiceList) => {
  const [spice, setSpice] = useState<ISpice>();
  const [selected, setSelected] = useState(-1);
  const handleClick = (spice: ISpice) => {
    setSpice(spice);
  };
  const toggleClass = (i: number) => {
    setSelected(i);
  };

  return (
    <>
      <div className="container">
        <div className="spice-list">
          {props.data.map((spice, i) => {
            return (
              <p
                key={i}
                id={selected === i ? "selected" : ""}
                onClick={() => {
                  handleClick(spice);
                  toggleClass(i);
                }}
              >
                {spice.name}
              </p>
            );
          })}
        </div>
        <SpiceDisplay {...spice} updateList={props.updateList} />
      </div>
    </>
  );
};

export default SpiceList;
