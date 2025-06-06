import { GoSearch, GoPlus } from "react-icons/go";

const HeaderStrip = () => {
  return (
    <div className="header-strip">
              <div className="inner-row">
                        <div className="header-strip-content">
                                 <h2>Websites</h2>
                                 <div className="header-strip-column">
                                           <div className="header-strip-search">
                                                     <span><GoSearch /></span>
                                                     <input type="text" placeholder="Search a website" />
                                           </div>
                                           <button className="create-btn"><span><GoPlus /></span>Create Website</button>
                                 </div>
                        </div>
              </div>
    </div>
  )
}

export default HeaderStrip