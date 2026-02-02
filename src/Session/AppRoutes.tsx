import type { JSX } from "react"
import { Routes, Route } from "react-router-dom"
import Home from "../Pages/Home"
import About from "../Pages/About"
import ArticleIndex from "../Articles/ArticlesIndex"
import ShowArticle from "../Articles/ShowArticle"
import NewArticle from "../Articles/NewArticle"
import EditArticle from "../Articles/EditArticle"
import UserIndex from "../Users/UsersIndex"
import SignUpForm from "../Users/NewUser"
import UserProfile from "../Users/ShowUser"
import EditUser from "../Users/EditUser"
import LoginForm from "./Login"
import CategoryIndex from "../Categories/CategoriesIndex"
import NewCategory from "../Categories/NewCategory"
import EditCategory from "../Categories/EditCategory"

EditUser
function AppRoutes(): JSX.Element {
    return (
        <Routes>
            {/* pages routes */}
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />

            {/* session routes */}
            <Route path="login" element={<LoginForm />} />

            {/* article routes */}
            <Route path="articles" element={<ArticleIndex />} />
            <Route path="articles/new" element={<NewArticle />} />
            <Route path="articles/:id" element={<ShowArticle />} />
            <Route path="articles/:id/edit" element={<EditArticle />} />

            {/* user routes */}
            <Route path="users" element={<UserIndex />} />
            <Route path="signup" element={<SignUpForm />} />
            <Route path="users/:id" element={<UserProfile />} />
            <Route path="users/:id/edit" element={<EditUser />} />

            {/* user routes */}
            <Route path="users" element={<UserIndex />} />
            <Route path="signup" element={<SignUpForm />} />
            <Route path="users/:id" element={<UserProfile />} />
            <Route path="users/:id/edit" element={<EditUser />} />

            {/* user routes */}
            <Route path="categories" element={<CategoryIndex />} />
            <Route path="categories/new" element={<NewCategory />} />
            {/* <Route path="categories/:id" element={< />} /> */}
            <Route path="categories/:id/edit" element={<EditCategory />} />
        </Routes>
    )
}

export default AppRoutes