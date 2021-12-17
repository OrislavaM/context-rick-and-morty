import { useContext, useState } from "react";
import UpdateUserModal from "./UpdateUserModal";
import { Context } from "./UserContext";

const UserInfo = () => {
    const {
        user: { name, status, gender },
    } = useContext(Context);
    const [isOpen, setOpened] = useState(false);
    return (
        <>
            <div>Name: {name}</div>
            <div>Status: {status}</div>
            <div>Gender: {gender}</div>
            <button onClick={() => setOpened(true)}>Update user info</button>
            {isOpen ? <UpdateUserModal close={() => setOpened(false)} /> : null}
        </>
    );
};

export default UserInfo;
