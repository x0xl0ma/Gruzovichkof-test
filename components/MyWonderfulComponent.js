import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  headerStyles: {
    textAlign: "center",
    color: "#FF0000",
  },
});

const MyWonderfulComponent = ({ id, options, children, count, str }) => {
  const [summ, setSumm] = useState(count);

  const classes = useStyles();

  useEffect(() => {
    if (id && options?.params?.fields?.isDynamic) {
      setSumm(summ + 1);
    }
  }, []);

  console.log(summ);
  console.log(str);

  return (
    <>
      <h1 className={classes.headerStyles}>Hello World!</h1>
      <Grid container>
        <Grid item xs={12}>
          {children}
        </Grid>
      </Grid>
    </>
  );
};

export default MyWonderfulComponent;
