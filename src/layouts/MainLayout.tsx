import { JSX } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "../pages/Home";
import About from "../pages/About";
import ArticleIndex from "../articles/ArticlesIndex";
import ShowArticle from "../articles/ShowArticle";
import UserProfile from "../users/ShowUser";
import UserIndex from "../users/UsersIndex";
import CategoryIndex from "../categories/CategoriesIndex";
import SignUpForm from "../session/NewUser";
import LoginForm from "../session/Login";
import EditArticle from "../articles/EditArticle";
import EditUser from "../users/EditUser";
import EditCategory from "../categories/EditCategory";
import NewArticle from "../articles/NewArticle";
import NewCategory from "../categories/NewCategory";
import { Outlet } from "react-router-dom";

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
                    {/* main content goes in here */}
                    {/* <Home />
                    <About />
                    <UserProfile />
                    <ShowArticle />
                    <ArticleIndex />
                    <UserIndex />
                    <CategoryIndex />
                    <SignUpForm />
                    <LoginForm />
                    <EditArticle />
                    <EditUser />
                    <EditCategory />
                    <NewArticle />
                    <NewCategory /> */}

                </main>

                <div className=" m-0">
                    <Footer></Footer>
                </div>
            </div>
        </>
    )
}

export default MainLayout