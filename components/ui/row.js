import classes from "./row.module.css";

function Row(props) {
  return (
    <div className={classes.row}>
      {props.children}
    </div>
  );
}

export default Row;
