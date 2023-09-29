import { signOut } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";

const Logout = () => {

    const [signState,setSignState] = useState('');

    function handleSignOut(){
        setSignState('');
        signOut(auth)
        .then(()=>{
            console.log('sign out');
            setSignState('sign out successfully');
        })
        .catch(error=>{
            console.log(error)
        })
    }

    return (
        <div>
            <h2 className="text-center text-3xl text-red-600">This is LogOut page</h2>
            <button onClick={handleSignOut} className="btn btn-primary text-white mt-5">Log Out</button>
            <p className="text-indigo-600">{signState}</p>
        </div>
    );
};

export default Logout;