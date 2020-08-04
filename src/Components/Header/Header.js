import React from "react";
import { ReactComponent as Logo } from "../../assets/instagram.svg";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";
import { ReactComponent as Home } from "../../assets/home.svg";
import { ReactComponent as Explore } from "../../assets/explore.svg";
import "./header.css";
import { connect } from "react-redux";
import { login } from "../../redux/action/login.action";
const Header = ({ history, login }) => {
  return (
    <nav>
      <div className="nav-div">
        <div className="img-svg">
          <Logo onClick={() => history.push("/")} />
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <NavLink exact to="/">
            <Home className="img-svg" />
          </NavLink>
          <NavLink exact to="/explore">
            <Explore className="img-svg" />
          </NavLink>
          {/* <NavLink to='/myprofile' className='img-svg' activeClassName='active'></NavLink> */}
          <button
            className="nav-div-div-button"
            onClick={() => {
              login(false);
              history.push("/");
            }}
          >
            Log out
          </button>
        </div>
      </div>
    </nav>
  );
};
const mapDispatchToprops = dispatch => ({
  login: isLogin => dispatch(login(isLogin))
});
export default connect(
  null,
  mapDispatchToprops
)(withRouter(Header));
