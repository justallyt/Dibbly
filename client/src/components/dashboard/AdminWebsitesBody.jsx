import { useState } from "react"
import ActiveTab from "./tabs/ActiveTab"
import DraftsTab from "./tabs/DraftsTab"
import ArchivesTab from "./tabs/ArchivesTab"

const AdminWebsitesBody = () => {
    const [ option, setOption ] = useState("Active")
  return (
    <div className="admin-websites-body">
               <div className="inner-row">
                         <div className="admin-websites-content">
                                   <div className="admin-websites-shifts">
                                           <ul>
                                                  <li onClick={() => setOption("Active")} className={ option === "Active" ? "active" : ""}>Active</li>
                                                  <li onClick={() => setOption("Media Assets")} className={option === "Media Assets" ? "active" : ''}>Media Assets</li>
                                                  <li onClick={() => setOption("Archive")} className={ option === "Archive" ? "active" : ""}>Archive</li>
                                           </ul>
                                   </div>

                                   <div className="admin-websites-tabs">
                                            { option === "Active" && <ActiveTab />}
                                            { option === "Media Assets" && <DraftsTab />}
                                            { option === "Archive" && <ArchivesTab />}
                                   </div>
                         </div>
               </div>
    </div>
  )
}

export default AdminWebsitesBody