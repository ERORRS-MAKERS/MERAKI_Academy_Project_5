import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DropDown from "./DropDown";
import SocialWidget from "../Widget/SocialWidget";
import Newsletter from "../Widget/Newsletter";
import IconBoxStyle11 from "../IconBox/IconBoxStyle11";
import Spacing from "../Spacing";
import { useSelector, useDispatch } from "react-redux";
import {
  setLogin,
  setLogout,
  setNotification,
} from "../../service/redux/reducers/auth/index";
import { setDoctorLogout } from "../../service/redux/reducers/doctorsAuth/index";
import SocketConnection from "../Notifications/SocketConnection";

export default function Header({ logoSrc, variant }) {
  const dispatch = useDispatch();
  const { isLoggedIn, userId, showNotification } = useSelector((state) => ({
    isLoggedIn: state.auth.isLoggedIn,
    userId: state.auth.userId,
    showNotification: state.auth.showNotification,
  }));

  const isDoctorLoggedIn = useSelector((state) => state.doctor.isLoggedIn);

  const [isSticky, setIsSticky] = useState(false);
  const [mobileToggle, setMobileToggle] = useState(false);
  const [sideNav, setSideNav] = useState(false);
  const [searchToggle, setSearchToggle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`cs_site_header cs_style1 cs_sticky_header ${
          mobileToggle ? "cs_mobile_toggle_active" : ""
        } ${variant} ${isSticky ? "cs_active_sticky" : ""}`}
      >
        <div className="cs_main_header">
          <div className="container">
            <div className="cs_main_header_in">
              <div className="cs_main_header_left">
                <Link className="cs_site_branding" to="/">
                  <img src={logoSrc} alt="Logo" />
                </Link>
                {isLoggedIn ? (
                  <nav className="cs_nav">
                    <ul
                      className={`cs_nav_list ${
                        mobileToggle ? "cs_active" : ""
                      }`}
                    >
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/about">About</Link>
                      </li>

                      <li>
                        <Link to="/appointments">Appointments</Link>
                      </li>
                      {/*   <li>
                        <Link to="/blog">Blog</Link>
                      </li> */}
                      <li className="menu-item-has-children">
                        <Link>Pages</Link>
                        <DropDown>
                          <ul>
                            <li>
                              <Link to="/doctors">Our Doctors</Link>
                            </li>

                            <li>
                              <Link to="/departments">Departments</Link>
                            </li>
                            <li>
                              <Link to="/gallery">Gallery</Link>
                            </li>
                          </ul>
                        </DropDown>
                      </li>
                      <li>
                        <Link to={`/user/profile/${userId}`}>Profile</Link>
                      </li>
                      <li>
                        <Link to="/" onClick={() => dispatch(setLogout())}>
                          Logout
                        </Link>
                      </li>
                    </ul>
                    <span
                      className={`cs_menu_toggle ${
                        mobileToggle ? "cs_toggle_active" : ""
                      }`}
                      onClick={() => setMobileToggle(!mobileToggle)}
                    >
                      <span></span>
                    </span>
                  </nav>
                ) : isDoctorLoggedIn ? (
                  <nav className="cs_nav">
                    <ul
                      className={`cs_nav_list ${
                        mobileToggle ? "cs_active" : ""
                      }`}
                    >
                      <li>
                        <Link
                          to="/login/doctor"
                          onClick={() => dispatch(setDoctorLogout())}
                        >
                          Logout
                        </Link>
                      </li>
                    </ul>
                  </nav>
                ) : (
                  <nav className="cs_nav">
                    <ul
                      className={`cs_nav_list ${
                        mobileToggle ? "cs_active" : ""
                      }`}
                    >
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/about">About</Link>
                      </li>
                      <li>
                        <Link to="/departments">Departments</Link>
                      </li>
                      <li>
                        <Link to="/doctors">Our Doctors</Link>
                      </li>
                      <li>
                        <Link to="/login" onClick={() => dispatch(setLogin())}>
                          Login
                        </Link>
                      </li>
                    </ul>
                    <span
                      className={`cs_menu_toggle ${
                        mobileToggle ? "cs_toggle_active" : ""
                      }`}
                      onClick={() => setMobileToggle(!mobileToggle)}
                    >
                      <span></span>
                    </span>
                  </nav>
                )}
              </div>
              <div className="cs_main_header_right">
                <div className="cs_toolbox">
                  {isLoggedIn && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="50px"
                      height="50px"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M4 19v-2h2v-7q0-2.075 1.25-3.687T10.5 4.2v-.7q0-.625.438-1.062T12 2t1.063.438T13.5 3.5v.7q2 .5 3.25 2.113T18 10v7h2v2zm8 3q-.825 0-1.412-.587T10 20h4q0 .825-.587 1.413T12 22"
                        aria-controls="offcanvasRight"
                        onClick={() => {
                          dispatch(setNotification());
                        }}
                      />
                    </svg>
                  )}

                  {showNotification && <SocketConnection />}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Spacing mb={20} />
      </header>
    </>
  );
}
