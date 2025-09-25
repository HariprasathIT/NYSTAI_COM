// import LazyImage from "../src/NYSTAI-WEBSITE/common/LazyImage";
// import React, { useState, useEffect } from "react";
// import "./App.css";
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap/dist/js/bootstrap.js";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   HashRouter,
// } from "react-router-dom";
// import AdminHub from "./NYSTAI-WEBSITE/C-PRODUCT LAYOUT/productmain";
// import Layout from "./NYSTAI-WEBSITE/A-LAYOUT/nav-layout-nystai";
// import Support from "./NYSTAI-WEBSITE/G-SUPPORT LAYOUT/support";
// import Faqs from "./NYSTAI-WEBSITE/G-SUPPORT LAYOUT/faqs";
// import Privacypolicy from "./NYSTAI-WEBSITE/A-LAYOUT/privacypolicy";
// import Warrenty from "./NYSTAI-WEBSITE/A-LAYOUT/warrenty";
// import Termspolicys from "./NYSTAI-WEBSITE/A-LAYOUT/terms";
// import Education from "./NYSTAI-WEBSITE/D-SOLUTION LAYOUT/education";
// import Smarthomesolu from "./NYSTAI-WEBSITE/D-SOLUTION LAYOUT/SMARTHOME";
// import Industrial from "./NYSTAI-WEBSITE/D-SOLUTION LAYOUT/industrial";
// import Warehouse from "./NYSTAI-WEBSITE/D-SOLUTION LAYOUT/ware";
// import Vms from "./NYSTAI-WEBSITE/D-SOLUTION LAYOUT/vms";
// import Parkinglot from "./NYSTAI-WEBSITE/D-SOLUTION LAYOUT/parkinglot";
// import Hospital from "./NYSTAI-WEBSITE/D-SOLUTION LAYOUT/hospital";
// import Services from "./NYSTAI-WEBSITE/F-SERVICES-LAYOUT/Services";
// import Protectplan from "./NYSTAI-WEBSITE/E-PLAN-LAYOUT/protect";
// import Hybriddetails from "./NYSTAI-WEBSITE/C-PRODUCTDETAILS/hybrid";
// import Nystaiblogs from "./NYSTAI-WEBSITE/A-LAYOUT/blogsnys";
// import Aivmsdet from "./NYSTAI-WEBSITE/C-PRODUCTDETAILS/AI-VMS";
// import Alarmdet from "./NYSTAI-WEBSITE/C-PRODUCTDETAILS/ALARM&AUTOMATION";
// import Digitaldet from "./NYSTAI-WEBSITE/C-PRODUCTDETAILS/DIGITALCLASS";
// import Electricdet from "./NYSTAI-WEBSITE/C-PRODUCTDETAILS/ELECTRICFENCE";
// import Industrialdet from "./NYSTAI-WEBSITE/C-PRODUCTDETAILS/IndustrialAINVR";
// import Cameradet from "./NYSTAI-WEBSITE/C-PRODUCTDETAILS/CAMERA";
// import Sensordet from "./NYSTAI-WEBSITE/C-PRODUCTDETAILS/SENSORS";
// import Smartdet from "./NYSTAI-WEBSITE/C-PRODUCTDETAILS/SMART SWITCH";
// import Accessdet from "./NYSTAI-WEBSITE/C-PRODUCTDETAILS/ACCESSCONTROL";
// import Waterdet from "./NYSTAI-WEBSITE/C-PRODUCTDETAILS/WATERMANAGEMENT";
// import Kitchendet from "./NYSTAI-WEBSITE/C-PRODUCTDETAILS/KITCHENSAFETY";
// import Ioedet from "./NYSTAI-WEBSITE/C-PRODUCTDETAILS/IOE";
// import Waredet from "./NYSTAI-WEBSITE/C-PRODUCTDETAILS/WAREHOUSE";
// import WORSHIP from "./NYSTAI-WEBSITE/D-SOLUTION LAYOUT/worship";
// import Retailcategory from "./NYSTAI-WEBSITE/D-SOLUTION LAYOUT/Retail";
// import Banking from "./NYSTAI-WEBSITE/D-SOLUTION LAYOUT/Banking";
// import Nystaihome from "./NYSTAI-WEBSITE/B-HOME LAYOUT/nystai-home";
// import AdminDashboard from "./ADMIN-DASHBOARD/src/AdminApp";
// import AdminRoutes from "./ADMIN-DASHBOARD/src/admintest";

// // Auth components
// import AuthContext from "./NYSTAI-WEBSITE/CONTEXT AUTH/authContext";
// import ProtectedRoute from "./NYSTAI-WEBSITE/PROTECTED ROUTE/ProtectedRoute";
// import LoginModal from "./NYSTAI-WEBSITE/LOGIN/Login";

// function App() {
//   const [user, setUser] = useState(null);
//   const [showLoginModal, setShowLoginModal] = useState(false);

//   useEffect(() => {
//     // Check if user is already logged in
//     const savedUser = localStorage.getItem('user');
//     if (savedUser) {
//       try {
//         setUser(JSON.parse(savedUser));
//       } catch (error) {
//         localStorage.removeItem('user');
//       }
//     }
//   }, []);

//   const login = (userData) => {
//     setUser(userData);
//     localStorage.setItem('user', JSON.stringify(userData));
//     setShowLoginModal(false);
//   };

//   const logout = () => {
//     setUser(null);
//     localStorage.removeItem('user');
//   };

//   const handleLoginRequired = () => {
//     setShowLoginModal(true);
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout, handleLoginRequired }}>
//       <>
//         <div>
//           <a
//             href="https://wa.me/+918189977700"
//             className="whatsapp-float"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <LazyImage
//               src="https://cdn-icons-png.flaticon.com/512/124/124034.png"
//               alt="WhatsApp"
//             />
//           </a>
//         </div>

//         {/* Admin Dashboard - only for admin users */}
//         {user?.role === 'admin' && (
//           <Router>
//             <AdminRoutes />
//           </Router>
//         )}

//         {/* Main Website */}
//         <HashRouter>
//           <Routes>
//             <Route path="/*" element={<Layout />}>
//               {/* Public Routes - No login required */}
//               <Route index element={<Nystaihome />} />
//               <Route path="nystai-home" element={<Nystaihome />} />

//               {/* All other routes require login */}
//               <Route path="blog" element={<ProtectedRoute><Nystaiblogs /></ProtectedRoute>} />
//               <Route path="nystai-solution-education" element={<ProtectedRoute><Education /></ProtectedRoute>} />
//               <Route path="nystai-solution-worship" element={<ProtectedRoute><WORSHIP /></ProtectedRoute>} />
//               <Route path="nystai-solution-home" element={<ProtectedRoute><Smarthomesolu /></ProtectedRoute>} />
//               <Route path="nystai-solution-banking" element={<ProtectedRoute><Banking /></ProtectedRoute>} />
//               <Route path="nystai-solution-retail" element={<ProtectedRoute><Retailcategory /></ProtectedRoute>} />
//               <Route path="nystai-solution-Industrial" element={<ProtectedRoute><Industrial /></ProtectedRoute>} />
//               <Route path="nystai-solution-Warehouse" element={<ProtectedRoute><Warehouse /></ProtectedRoute>} />
//               <Route path="nystai-solution-VMS" element={<ProtectedRoute><Vms /></ProtectedRoute>} />
//               <Route path="nystai-solution-parking" element={<ProtectedRoute><Parkinglot /></ProtectedRoute>} />
//               <Route path="nystai-solution-Hospital" element={<ProtectedRoute><Hospital /></ProtectedRoute>} />
//               <Route path="nystai-PLAN" element={<ProtectedRoute><Protectplan /></ProtectedRoute>} />
//               <Route path="nystai-SERVICE" element={<ProtectedRoute><Services /></ProtectedRoute>} />
//               <Route path="nystai-support" element={<ProtectedRoute><Support /></ProtectedRoute>} />
//               <Route path="faqs" element={<ProtectedRoute><Faqs /></ProtectedRoute>} />
//               <Route path="nystai-privacy-policy" element={<ProtectedRoute><Privacypolicy /></ProtectedRoute>} />
//               <Route path="nystai-warrenty" element={<ProtectedRoute><Warrenty /></ProtectedRoute>} />
//               <Route path="nystai-terms-condition" element={<ProtectedRoute><Termspolicys /></ProtectedRoute>} />
//               <Route path="Accessdet" element={<ProtectedRoute><Accessdet /></ProtectedRoute>} />
//               <Route path="vmsde" element={<ProtectedRoute><Aivmsdet /></ProtectedRoute>} />
//               <Route path="Alarmdet" element={<ProtectedRoute><Alarmdet /></ProtectedRoute>} />
//               <Route path="Camerdet" element={<ProtectedRoute><Cameradet /></ProtectedRoute>} />
//               <Route path="ditdet" element={<ProtectedRoute><Digitaldet /></ProtectedRoute>} />
//               <Route path="electricdet" element={<ProtectedRoute><Electricdet /></ProtectedRoute>} />
//               <Route path="Kitchendet" element={<ProtectedRoute><Kitchendet /></ProtectedRoute>} />
//               <Route path="indudet" element={<ProtectedRoute><Industrialdet /></ProtectedRoute>} />
//               <Route path="hybriddet" element={<ProtectedRoute><Hybriddetails /></ProtectedRoute>} />
//               <Route path="ioedet" element={<ProtectedRoute><Ioedet /></ProtectedRoute>} />
//               <Route path="sensordet" element={<ProtectedRoute><Sensordet /></ProtectedRoute>} />
//               <Route path="swichdet" element={<ProtectedRoute><Smartdet /></ProtectedRoute>} />
//               <Route path="waredet" element={<ProtectedRoute><Waredet /></ProtectedRoute>} />
//               <Route path="waterdet" element={<ProtectedRoute><Waterdet /></ProtectedRoute>} />
//               <Route path="SUPPORT" element={<ProtectedRoute><Support /></ProtectedRoute>} />
//               <Route path="footblog" element={<ProtectedRoute><Nystaiblogs /></ProtectedRoute>} />
//             </Route>
//             <Route path="nystai-product" element={<ProtectedRoute><AdminHub /></ProtectedRoute>} />
//           </Routes>
//         </HashRouter>

//         {/* Login Modal */}
//         <LoginModal 
//           show={showLoginModal} 
//           onHide={() => setShowLoginModal(false)}
//           onLogin={login}
//         />
//       </>
//     </AuthContext.Provider>
//   );
// }

// export default App;







// Updated App.js
import {useEffect} from "react";
import LazyImage from "../src/NYSTAI-WEBSITE/common/LazyImage";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

// Your existing imports...
import AdminHub from "./NYSTAI-WEBSITE/C-PRODUCT LAYOUT/productmain";
import Layout from "./NYSTAI-WEBSITE/A-LAYOUT/nav-layout-nystai";
import Support from "./NYSTAI-WEBSITE/G-SUPPORT LAYOUT/support";
import Faqs from "./NYSTAI-WEBSITE/G-SUPPORT LAYOUT/faqs";
import Privacypolicy from "./NYSTAI-WEBSITE/A-LAYOUT/privacypolicy";
import Warrenty from "./NYSTAI-WEBSITE/A-LAYOUT/warrenty";
import Termspolicys from "./NYSTAI-WEBSITE/A-LAYOUT/terms";
import Education from "./NYSTAI-WEBSITE/D-SOLUTION LAYOUT/education";
import Smarthomesolu from "./NYSTAI-WEBSITE/D-SOLUTION LAYOUT/SMARTHOME";
import Industrial from "./NYSTAI-WEBSITE/D-SOLUTION LAYOUT/industrial";
import Warehouse from "./NYSTAI-WEBSITE/D-SOLUTION LAYOUT/ware";
import Vms from "./NYSTAI-WEBSITE/D-SOLUTION LAYOUT/vms";
import Parkinglot from "./NYSTAI-WEBSITE/D-SOLUTION LAYOUT/parkinglot";
import Hospital from "./NYSTAI-WEBSITE/D-SOLUTION LAYOUT/hospital";
import Services from "./NYSTAI-WEBSITE/F-SERVICES-LAYOUT/Services";
import Protectplan from "./NYSTAI-WEBSITE/E-PLAN-LAYOUT/protect";
import Hybriddetails from "./NYSTAI-WEBSITE/C-PRODUCTDETAILS/hybrid";
import Nystaiblogs from "./NYSTAI-WEBSITE/A-LAYOUT/blogsnys";
import Accessdet from "./NYSTAI-WEBSITE/C-PRODUCTDETAILS/ACCESSCONTROL";
import Aivmsdet from "./NYSTAI-WEBSITE/C-PRODUCTDETAILS/AI-VMS";
import Alarmdet from "./NYSTAI-WEBSITE/C-PRODUCTDETAILS/ALARM&AUTOMATION";
import Cameradet from "./NYSTAI-WEBSITE/C-PRODUCTDETAILS/CAMERA";
import Digitaldet from "./NYSTAI-WEBSITE/C-PRODUCTDETAILS/DIGITALCLASS";
import Electricdet from "./NYSTAI-WEBSITE/C-PRODUCTDETAILS/ELECTRICFENCE";
import Industrialdet from "./NYSTAI-WEBSITE/C-PRODUCTDETAILS/IndustrialAINVR";
import Sensordet from "./NYSTAI-WEBSITE/C-PRODUCTDETAILS/SENSORS";
import Smartdet from "./NYSTAI-WEBSITE/C-PRODUCTDETAILS/SMART SWITCH";
import Waterdet from "./NYSTAI-WEBSITE/C-PRODUCTDETAILS/WATERMANAGEMENT";
import Kitchendet from "./NYSTAI-WEBSITE/C-PRODUCTDETAILS/KITCHENSAFETY";
import Ioedet from "./NYSTAI-WEBSITE/C-PRODUCTDETAILS/IOE";
import Waredet from "./NYSTAI-WEBSITE/C-PRODUCTDETAILS/WAREHOUSE";
import WORSHIP from "./NYSTAI-WEBSITE/D-SOLUTION LAYOUT/worship";
import Retailcategory from "./NYSTAI-WEBSITE/D-SOLUTION LAYOUT/Retail";
import Banking from "./NYSTAI-WEBSITE/D-SOLUTION LAYOUT/Banking";
import Nystaihome from "./NYSTAI-WEBSITE/B-HOME LAYOUT/nystai-home";

// Dashboard
import AdminRoutes from "./ADMIN-DASHBOARD/src/admintest";

// New imports for auth system
import { AuthProvider } from "./NYSTAI-WEBSITE/CONTEXT AUTH/authContext";
import Login from "./NYSTAI-WEBSITE/LOGIN/Login";
import ProtectedRoute from './NYSTAI-WEBSITE/PROTECTED ROUTE/ProtectedRoute';

function App() {
  document.addEventListener("contextmenu", (event) => event.preventDefault());
  useEffect(() => {
    document.querySelectorAll("img").forEach((img) => {
      img.setAttribute("draggable", "false");
    });
  }, []);

  return (
    <AuthProvider>
      <div>
        <a
          href="https://wa.me/+918189977700"
          className="whatsapp-float"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LazyImage
            src="https://cdn-icons-png.flaticon.com/512/124/124034.png"
            alt="WhatsApp"
          />
        </a>
      </div>

      <Router>
        <Routes>
          <Route path="/*" element={<Layout />}>
            {/* ONLY HOME PAGE IS PUBLIC - NO AUTHENTICATION REQUIRED */}
            <Route index element={<Nystaihome />} />
            <Route path="nystai-home" element={<Nystaihome />} />

            {/* ALL OTHER PAGES REQUIRE AUTHENTICATION - MODAL WILL APPEAR */}
            <Route path="blog" element={
              <ProtectedRoute><Nystaiblogs /></ProtectedRoute>
            } />
            <Route path="nystai-solution-education" element={
              <ProtectedRoute><Education /></ProtectedRoute>
            } />
            <Route path="nystai-solution-worship" element={
              <ProtectedRoute><WORSHIP /></ProtectedRoute>
            } />
            <Route path="nystai-solution-home" element={
              <ProtectedRoute><Smarthomesolu /></ProtectedRoute>
            } />
            <Route path="nystai-solution-banking" element={
              <ProtectedRoute><Banking /></ProtectedRoute>
            } />
            <Route path="nystai-solution-retail" element={
              <ProtectedRoute><Retailcategory /></ProtectedRoute>
            } />
            <Route path="nystai-solution-Industrial" element={
              <ProtectedRoute><Industrial /></ProtectedRoute>
            } />
            <Route path="nystai-solution-Warehouse" element={
              <ProtectedRoute><Warehouse /></ProtectedRoute>
            } />
            <Route path="nystai-solution-VMS" element={
              <ProtectedRoute><Vms /></ProtectedRoute>
            } />
            <Route path="nystai-solution-parking" element={
              <ProtectedRoute><Parkinglot /></ProtectedRoute>
            } />
            <Route path="nystai-solution-Hospital" element={
              <ProtectedRoute><Hospital /></ProtectedRoute>
            } />
            <Route path="nystai-PLAN" element={
              <ProtectedRoute><Protectplan /></ProtectedRoute>
            } />
            <Route path="nystai-SERVICE" element={
              <ProtectedRoute><Services /></ProtectedRoute>
            } />
            <Route path="nystai-support" element={
              <ProtectedRoute><Support /></ProtectedRoute>
            } />
            <Route path="faqs" element={
              <ProtectedRoute><Faqs /></ProtectedRoute>
            } />
            <Route path="nystai-privacy-policy" element={
              <ProtectedRoute><Privacypolicy /></ProtectedRoute>
            } />
            <Route path="nystai-warrenty" element={
              <ProtectedRoute><Warrenty /></ProtectedRoute>
            } />
            <Route path="nystai-terms-condition" element={
              <ProtectedRoute><Termspolicys /></ProtectedRoute>
            } />
            <Route path="footblog" element={
              <ProtectedRoute><Nystaiblogs /></ProtectedRoute>
            } />
            <Route path="SUPPORT" element={
              <ProtectedRoute><Support /></ProtectedRoute>
            } />

            {/* Product detail pages - ALL PROTECTED */}
            <Route path="Accessdet" element={
              <ProtectedRoute><Accessdet /></ProtectedRoute>
            } />
            <Route path="vmsde" element={
              <ProtectedRoute><Aivmsdet /></ProtectedRoute>
            } />
            <Route path="Alarmdet" element={
              <ProtectedRoute><Alarmdet /></ProtectedRoute>
            } />
            <Route path="Camerdet" element={
              <ProtectedRoute><Cameradet /></ProtectedRoute>
            } />
            <Route path="ditdet" element={
              <ProtectedRoute><Digitaldet /></ProtectedRoute>
            } />
            <Route path="electricdet" element={
              <ProtectedRoute><Electricdet /></ProtectedRoute>
            } />
            <Route path="Kitchendet" element={
              <ProtectedRoute><Kitchendet /></ProtectedRoute>
            } />
            <Route path="indudet" element={
              <ProtectedRoute><Industrialdet /></ProtectedRoute>
            } />
            <Route path="hybriddet" element={
              <ProtectedRoute><Hybriddetails /></ProtectedRoute>
            } />
            <Route path="ioedet" element={
              <ProtectedRoute><Ioedet /></ProtectedRoute>
            } />
            <Route path="sensordet" element={
              <ProtectedRoute><Sensordet /></ProtectedRoute>
            } />
            <Route path="swichdet" element={
              <ProtectedRoute><Smartdet /></ProtectedRoute>
            } />
            <Route path="waredet" element={
              <ProtectedRoute><Waredet /></ProtectedRoute>
            } />
            <Route path="waterdet" element={
              <ProtectedRoute><Waterdet /></ProtectedRoute>
            } />
            {/* <Route path="nystai-product" element={
              <ProtectedRoute><AdminHub /></ProtectedRoute>
            } /> */}
          </Route>

          {/* <Route path="nystai-product" element={<AdminHub />} /> */}
          <Route path="nystai-product" element={<ProtectedRoute><AdminHub /></ProtectedRoute>} />
          {/* <Route path="admin/*" element={<AdminRoutes />} /> */}
          <Route path="admin*" element={<AdminRoutes />} />
        </Routes>

        {/* Auth Modal - Shows when user tries to access protected pages */}
        <Login />
      </Router>
    </AuthProvider>
  );
}

export default App;
