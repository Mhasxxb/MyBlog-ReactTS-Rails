import { JSX } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MainLayout(): JSX.Element {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <div className="sticky top-0 z-50">
          <Navbar></Navbar>
        </div>
        <main className="grow my-10 mx-15">
          {/* Outlet is used for rendering pages according to the routes exactly like yield in rails */}
          <Outlet />
        </main>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          className="mt-18"
        />
        <div className=" m-0">
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}

export default MainLayout;
