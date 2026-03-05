import { type JSX } from "react";
import { Link } from "react-router-dom";
import { Data } from "../types/App.types";
import { capitalize } from "../lib/capitalizeString";
import { useAuth } from "../context/AuthenticateContext"; // ✅ import auth hook
import Button from "../shared/Button";

type UserCardProps = {
  user: Data;
};

function UserCard({ user }: UserCardProps): JSX.Element {
  const contributions = user.article_count;
  const { deleteAccount } = useAuth();
  const name: string =
    capitalize(user.first_name) +
    (user.last_name ? ` ${capitalize(user.last_name)}` : "");

  const handleDelete = () => {
    const confirmDelete = confirm(
      "Are you sure you want to delete your profile?",
    );
    if (confirmDelete) {
      deleteAccount(); // ✅ call centralized function
    }
  };

  return (
    <>
      <div className="max-w-3xl mx-auto mt-10 space-x-55 rounded-xl outline-2 outline-gray-100 bg-amber-50 shadow-2xl shadow-gray-400/70 p-6">
        <div className="flex items-center w-full">
          <div className="flex flex-1 flex-col space-y-3 items-center">
            <div className="w-28 h-28 flex justify-around items-center rounded-full border-2 text-center border-gray-500 bg-gray-300 cursor-pointer shadow-2xl font-bold text-purple-950 text-6xl shadow-gray-700/60 hover:shadow-gray-700/90 transition-all">
              {`${user.first_name[0].toUpperCase()}${
                user.last_name[0] ? user.last_name[0].toUpperCase() : ""
              }`}
            </div>
            <h2 className="text-purple-800 font-semibold cursor-pointer text-shadow-lg/20">
              {name}
            </h2>
          </div>

          <div className="flex-4">
            <h2 className="text-purple-800 font-semibold text-shadow-lg/20">
              Made {contributions ? contributions : "no"} Contributions so far.
            </h2>
          </div>
        </div>

        <div className="h-px w-full my-3 space-x-6 bg-purple-500"></div>

        {user.id.toString() === localStorage.getItem("id") ? (
          <div className="flex justify-between mx-2">
            <div>
              <Link to={`/users/${user.id}`}>
                <Button text="View" color="green" />
              </Link>

              <Link to={`/users/${user.id}/edit`}>
                <Button text="Edit" color="blue" />
              </Link>
            </div>
            <div>
              <Button text="Delete" color="red" onClick={handleDelete} />
            </div>
          </div>
        ) : (
          <div className="flex mx-2 justify-end">
            <Link to={`/users/${user.id}`}>
              <Button text="View" color="green" />
            </Link>
          </div>
        )}
      </div>
    </>
  );
}

export default UserCard;
