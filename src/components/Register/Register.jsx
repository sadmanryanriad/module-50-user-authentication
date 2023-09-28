import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";

const Register = () => {

    const handleSubmit = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        createUserWithEmailAndPassword(auth, email, password)
        .then(res =>{
            console.log(res.user);
        })
        .catch(error=> console.error(error));
    }

    return (
        <div className="">
            <h2 className="text-3xl mb-10 text-center">Register</h2>
            <form onSubmit={handleSubmit}>
                <input className="border mb-3 py-1 pl-3 pr-28 rounded-lg" type="email" placeholder="Email address" name="email" />
                <br />
                <input className="border mb-3 py-1 pl-3 pr-28 rounded-lg" type="password" placeholder="Password" name="password" />
                <br />
                <input className="btn btn-secondary text-white w-1/2" type="submit"  />
                <br />
            </form>
        </div>
    );
};

export default Register;