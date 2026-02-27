import type { JSX } from "react"
import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import About from "../pages/About"
import ArticleIndex from "../articles/ArticlesIndex"
import ShowArticle from "../articles/ShowArticle"
import NewArticle from "../articles/NewArticle"
import EditArticle from "../articles/EditArticle"
import UserIndex from "../users/UsersIndex"
import SignUpForm from "../session/NewUser"
import UserProfile from "../users/ShowUser"
import EditUser from "../users/EditUser"
import LoginForm from "../session/Login"
import CategoryIndex from "../categories/CategoriesIndex"
import NewCategory from "../categories/NewCategory"
import EditCategory from "../categories/EditCategory"
import ProtectedRoute from "../authentication/ProtectedRoutes"
import PublicOnlyRoute from "../authentication/PublicOnlyRoutes"
import ErrorPage from "./ErrorPage"
import { usePreviousRoute } from "../authentication/previousRoute"
import { PaginationProvider } from "../context/PaginationContext"


function AppRoutes(): JSX.Element {
    usePreviousRoute()
    return (
        <Routes>
            {/* BEFORE AUTHENTICATION ONLY ROUTES */}

            <Route element={<PublicOnlyRoute />}>
                {/* session routes */}
                <Route path="signup" element={<SignUpForm />} />
                <Route path="login" element={<LoginForm />} />

                {/* pages routes */}
                <Route index element={<Home />} />
            </Route>

            {/* ----------------------------------------------------------------- */}

            {/* BEFORE AND AFTER AUTHENTICATION ROUTES */}


            {/* pages routes */}
            <Route path="about" element={<About />} />

            {/* ----------------------------------------------------------------- */}


            {/* AFTER AUTHENTICATION ONLY ROUTES */}

            <Route element={<ProtectedRoute />}>
                {/* article routes */}
                <Route path="articles" element={<ArticleIndex />} />
                <Route path="articles/new" element={<NewArticle />} />
                <Route path="articles/:id" element={<ShowArticle />} />
                <Route path="articles/:id/edit" element={<EditArticle />} />

                {/* user routes */}
                <Route path="users" element={
                    <PaginationProvider>
                        <UserIndex />
                    </PaginationProvider>}
                />
                <Route path="users/:id" element={<UserProfile />} />
                <Route path="users/:id/edit" element={<EditUser />} />

                {/* category routes */}
                <Route path="categories" element={<CategoryIndex />} />
                <Route path="categories/new" element={<NewCategory />} />
                {/* <Route path="categories/:id" element={< />} /> */}
                <Route path="categories/:id/edit" element={<EditCategory />} />

                {/* Error page */}
                <Route path="authenticated_user" element={<ErrorPage />} />

                {/* ADD A ROUTE FOR UNKOWN ROUTES */}
            </Route>
        </Routes>
    )
}

export default AppRoutes