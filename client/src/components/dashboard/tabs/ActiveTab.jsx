import { GoPlus } from "react-icons/go";
const ActiveTab = () => {
  return (
    <div className="active-tab">
            <div className="empty-websites-skeleton">
                     <div className="empty-skeleton-content">
                                <div className="empty-skeleton-box">
                                           <div className="image-skeleton">
                                                     <span></span>
                                           </div>
                                           <div className="skeleton-texts">
                                                     <div className="simple-div"></div>
                                                     <div className="price-div"></div>
                                           </div>
                                           <div className="skeleton-actions">
                                                     <div className="action-div"></div>
                                                     <div className="extra-div"></div>
                                           </div>
                                </div>
                                <div className="empty-skeleton-texts">
                                         <h3>No Websites Created Yet</h3>
                                         <p>No worries. Create a new website now and publish instantly.</p>
                                         <button className="create-btn"><span><GoPlus /></span>Create Website</button>
                                </div>
                     </div>
            </div>
    </div>
  )
}

export default ActiveTab