import classNames from "classnames";
import React from "react";

import styles from "./Button.module.css";

export const Button = (
  ({ active, className, cursor, style, ...props }, ref) => {
    return (
      <button
        ref={ref}
        {...props}
        className={classNames(styles.Action, className)}
        tabIndex={0}
        style={
          {
            ...style,
            cursor,
            "--fill": active?.fill,
            "--background": active?.background
          }
        }
      />
    );
  }
);
