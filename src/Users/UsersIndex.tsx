import type { JSX } from "react"
import UserCard from "./UserCard"

function UserIndex(): JSX.Element {
    return (
        <>
            <div className="my-10">
                <UserCard />
                <UserCard />
            </div>
        </>
    )
}

export default UserIndex