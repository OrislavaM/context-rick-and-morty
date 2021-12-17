import { useRef, useContext } from "react";
import { Context } from "./UserContext";

const UpdateUserModal = ({ close }) => {
    const { setUser } = useContext(Context);

    const ref = useRef(null);

    const updateUser = () => {
        const newUser = {
            name: ref.current.name.value,
            status: ref.current.status.value,
            gender: ref.current.gender.value,
        };
        setUser(newUser);
    };

    return (
        <form ref={ref}>
            <div>
                <label htmlFor="name">Name:</label>
                <input placeholder="Input name" id="name"></input>
            </div>
            <div>
                <label htmlFor="status">Status:</label>
                <input
                    placeholder="Input status"
                    id="status"
                    name="status"
                ></input>
            </div>
            <div>
                <label>
                    Gender:
                    <input
                        placeholder="Input gender"
                        id="gender"
                        name="gender"
                    ></input>
                </label>
            </div>
            <button type="button" onClick={updateUser}>
                Update user
            </button>
            <button type="button" onClick={close}>
                Close
            </button>
        </form>
    );
};

export default UpdateUserModal;
