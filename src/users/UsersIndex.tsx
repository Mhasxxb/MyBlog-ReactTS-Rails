import { useEffect, useState, type JSX } from "react"
import UserCard from "./UserCard"
import { userIndexApi } from "../api/usersApi/indexUsersApi";
import { ApiResponse, Data, UserIndexResponse } from "../App.types";
import PaginationControls from "../helpers/PaginationHelper";
import { usePagination } from "../context/PaginationContext";

function UserIndex(): JSX.Element {

    // const response
    const { limit, offset, setTotalCount } = usePagination()

    const [users, setUsers] = useState<Data[] | null | undefined>([]);

    async function getUsersInfo(offset:number) {
        const usersInfo: UserIndexResponse | ApiResponse = await userIndexApi(`api/v1/users/`, offset);

        console.log(`api/v1/users/?limit=${limit}&offset=${offset}`);
        return usersInfo;
    }

    useEffect(() => {
        const fetchUsers = async () => {
            const result: UserIndexResponse = await getUsersInfo(offset); // wait for resolved data
            console.log(result);
            if (result.success) {
                setUsers(result.payload?.data)
                setTotalCount(result.payload?.meta.count as number)
            }
            // handle error message

        };

        fetchUsers();
    }, [limit, offset]);

    return (
        <>
            <PaginationControls />
                <div className="my-10">
                    {users && users.length > 0 ? users?.map((user: Data) => {
                        return (
                            <div key={user.id}>
                                <UserCard user={user} />
                            </div>
                        )
                    }) : null}
                </div>
            <PaginationControls />
        </>
    )
}

export default UserIndex