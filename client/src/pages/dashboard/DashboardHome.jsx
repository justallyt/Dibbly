import Copyright from "../../components/common/dashboard/Copyright"
import Topbar from "../../components/common/dashboard/Topbar"
import AdminWebsitesBody from "../../components/dashboard/AdminWebsitesBody"
import HeaderStrip from "../../components/dashboard/HeaderStrip"
import "../../css/dashboard.css"

const DashboardHome = () => {
  return (
    <>
          <Topbar />
          <HeaderStrip />
          <AdminWebsitesBody />
          <Copyright />
    </>
  )
}

export default DashboardHome