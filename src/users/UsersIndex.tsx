import { useEffect, useState, type JSX } from "react";
import UserCard from "./UserCard";
import { userIndexApi } from "../api/usersApi/indexUsersApi";
import { ApiResponse, Data, UserIndexResponse } from "../App.types";
import PaginationControls from "../helpers/PaginationHelper";
import { usePagination } from "../context/PaginationContext";
import { toast } from "react-toastify";

function UserIndex(): JSX.Element {
  // const response
  const { limit, offset, setTotalCount, resetOffset } = usePagination();

  const [check, setCheck] = useState<boolean>(false);
  useEffect(() => {
    resetOffset();
    setCheck(!check);
  }, []);

  const [users, setUsers] = useState<Data[] | null | undefined>([]);

  async function getUsersInfo(offset: number) {
    const usersInfo: UserIndexResponse | ApiResponse = await userIndexApi(
      `api/v1/users/`,
      offset,
    );

    console.log(`api/v1/users/?limit=${limit}&offset=${offset}`);
    return usersInfo;
  }

  useEffect(() => {
    const fetchUsers = async () => {
      const result: UserIndexResponse = await getUsersInfo(offset); // wait for resolved data
      if (result.success) {
        setUsers(result.payload?.data);
        setTotalCount(result.payload?.meta.count as number);
      } else {
        toast.error("Something went wrong.");
      }
    };

    fetchUsers();
  }, [limit, offset, check]);

  return (
    <>
      <PaginationControls />
      <div className="my-10">
        {users && users.length > 0
          ? users?.map((user: Data) => {
              return (
                <div key={user.id}>
                  <UserCard user={user} />
                </div>
              );
            })
          : null}
      </div>
      <PaginationControls />
    </>
  );
}

export default UserIndex;
