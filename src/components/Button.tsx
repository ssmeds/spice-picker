import { IButton } from "../interfaces";

const Button = (props: IButton) => {
  return (
    <button
      className="btn"
      onClick={() => {
        props.updateList(props.spiceName);
        props.emptyDisplay(false);
      }}
    >
      Delete
    </button>
  );
};

export default Button;
