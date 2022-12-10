import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectTheme, toggleTheme } from "./indexSlice";

const ThemeToggle = () => {
  const theme = useAppSelector(selectTheme);
  const dispatch = useAppDispatch();

  return <button onClick={() => dispatch(toggleTheme())}>{theme}</button>;
};

export default ThemeToggle;
