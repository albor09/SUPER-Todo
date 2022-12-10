import { useAppDispatch } from "../../app/hooks";
import { toggle } from "../SideNav/slice";
import * as s from "./style";

const TopBar = () => {
  const dispatch = useAppDispatch();

  return (
    <s.TopBarWrapper>
      <s.TopBar>
        <s.Hamburger onClick={() => dispatch(toggle())}>
          <div></div>
          <div></div>
          <div></div>
        </s.Hamburger>
      </s.TopBar>
    </s.TopBarWrapper>
  );
};

export default TopBar;
