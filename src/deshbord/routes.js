import Dashboard from "./views/Dashboard.jsx";
import Notifications from "./views/Notifications.jsx";
import TableList from "./views/TableList.jsx";
import UserProfile from "./views/UserProfile.jsx";


// =>Dashboard
// =>Home
// =>Add flights
// =>Edit flights
// =>Invoice Generator
// =>Flight Analytics
// =>User Profile 
// =>Notification
var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/tables",
    name: "Add Flight",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-calendar-60",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/edit-flight",
    name: "Edit Flight",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-puzzle-10",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/invoice-generator",
    name: "Invoice Generator",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-tap-02",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/flight-analytics",
    name: "Flight Analytics",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-send",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "Notifications",
    rtlName: "إخطارات",
    icon: "tim-icons icon-bell-55",
    component: Notifications,
    layout: "/admin"
  },
  {
    path: "/user-profile",
    name: "User Profile",
    rtlName: "ملف تعريفي للمستخدم",
    icon: "tim-icons icon-single-02",
    component: UserProfile,
    layout: "/admin"
  },
];
export default routes;
