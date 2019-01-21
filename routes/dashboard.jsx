import Dashboard from "views/Dashboard/Dashboard.jsx";

import Error from "views/Error/Error.jsx";





var dashRoutes = [
  {
    path: "/dashboard/:id?",
    name: "Dashboard",
    icon: "ic_dashboard",
    component: Dashboard,
    show:true
  },

  {
    path:"/error",
    name:"Error",
    component:Error,
    show:false

  },
  {
    redirect: true,
    path:"/",
    pathTo:"/dashboard",
    component:Dashboard
  }


];
export default dashRoutes;
