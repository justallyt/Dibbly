import { Link, NavLink } from "react-router-dom";
import { PiBellLight } from "react-icons/pi";
import profileImg from "../../../assets/profile.jpg"
import { RxChevronDown } from "react-icons/rx";

const Topbar = () => {
  return (
    <div className="topbar">
             <div className="inner-row">
                       <div className="topbar-content">
                                 <Link to={"/"}>
                                           <h1>Dibbly</h1>
                                  </Link>
                                  <div className="topbar-nav">
                                          <ul>
                                                <li><NavLink to={"/"}>Websites</NavLink></li>
                                                <li><NavLink to={"/templates"}>Templates</NavLink></li>
                                                <li><NavLink to={"/settings"}>Settings</NavLink></li>
                                          </ul>
                                  </div>
                                  <div className="topbar-column-items">
                                            <div className="notification-item-wrap">
                                                      <span className="notify"><PiBellLight /></span>
                                            </div>
                                            <div className="profile-item-wrap">
                                                      <div className="profile-box-item">
                                                               <div className="profile-image">
                                                                         <img src={profileImg} alt="" />
                                                               </div>
                                                               <h4>Alberto <span><RxChevronDown /></span></h4>                                                       
                                                      </div>
                                            </div>
                                  </div>
                       </div>
             </div>
    </div>
  )
}

export default Topbar