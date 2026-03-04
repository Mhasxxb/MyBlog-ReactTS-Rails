import { JSX } from "react";
import { useAuth } from "../context/AuthenticateContext";
function Footer(): JSX.Element {
  const { isAuthenticated } = useAuth();
  return (
    <>
      <footer className="bg-purple-900 text-amber-100 py-4 text-center">
        Copyright © {isAuthenticated ? "MyBlog" : <a href="">MyBlog</a>}
      </footer>
    </>
  );
}

export default Footer;
