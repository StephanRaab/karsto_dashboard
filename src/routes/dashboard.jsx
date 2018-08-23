import Dashboard from "views/Dashboard/Dashboard";
import UserProfile from "views/UserProfile/UserProfile";
import TableList from "views/TableList/TableList";
import Map from "views/Map/Map";
import Notifications from "views/Notifications/Notifications";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "pe-7s-graph1",
    component: Dashboard
  },
  {
    path: "/map",
    name: "Map",
    icon: "pe-7s-map-marker",
    component: Map
  },
  {
    path: "/user",
    name: "Users",
    icon: "pe-7s-user",
    component: UserProfile
  },
  {
    path: "/table",
    name: "Data Tables",
    icon: "pe-7s-note2",
    component: TableList
  },
    {
      path: "/notifications",
      name: "Notifications",
      icon: "pe-7s-bell",
      component: Notifications
    },
    { redirect: true, path: "/", to: "/dashboard", name: "Dashboard" }
  ];

  export default dashboardRoutes;
