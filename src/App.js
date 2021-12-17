import Account from "./Account";
import { UserContextProvider } from "./UserContext";

function App() {
    return (
        <UserContextProvider>
            <Account />
        </UserContextProvider>
    );
}

export default App;
