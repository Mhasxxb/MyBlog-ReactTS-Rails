import { JSX } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "../Pages/Home";
import About from "../Pages/About";
import ArticleIndex from "../Articles/ArticlesIndex";
import ShowArticle from "../Articles/ShowArticle";
import UserProfile from "../Users/ShowUser";
import UserIndex from "../Users/UsersIndex";
import CategoryIndex from "../Categories/CategoriesIndex";
import SignUpForm from "../Users/NewUser";
import LoginForm from "../Session/Login";
import EditArticle from "../Articles/EditArticle";
import EditUser from "../Users/EditUser";
import EditCategory from "../Categories/EditCategory";
import NewArticle from "../Articles/NewArticle";
import NewCategory from "../Categories/NewCategory";

function MainLayout(): JSX.Element {

    return (
        <>
            <div className="min-h-screen flex flex-col">
                <div className="sticky top-0 z-50">
                    <Navbar></Navbar>
                </div>

                <div className="grow my-10 mx-15">

                    {/* main content goes in here */}
                    {/* <Home /> */}
                    {/* <About /> */}
                    {/* <UserProfile /> */}
                    {/* <ShowArticle /> */}
                    {/* <ArticleIndex /> */}
                    {/* <UserIndex /> */}
                    {/* <CategoryIndex /> */}
                    <SignUpForm />
                    <LoginForm />
                    <EditArticle />
                    <EditUser />
                    <EditCategory />
                    <NewArticle />
                    <NewCategory />

                </div>

                <div className=" m-0">
                    <Footer></Footer>
                </div>
            </div>
        </>
    )
}

export default MainLayout