import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { Link } from "react-router-dom";

const Register = () => {

    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const [show, setShow] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        setRegisterError('');
        setSuccess('');

        const email = e.target.email.value;
        const password = e.target.password.value;
        const accept = e.target.terms.checked;

        if (password.length < 6) {
            setRegisterError('Password should be at least 6 characters or long');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError('Password should have at least one upper case character!');
            return;
        }
        else if (!accept) {
            setRegisterError('Please accept terms and conditions!');
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then(res => {
                console.log(res.user);
                setSuccess('User created successfully');
            })
            .catch(error => {
                setRegisterError(error.message);
                console.error(error)
            });
    }

    return (
        <div className="">
            <h2 className="text-3xl mb-10 text-center">Register</h2>
            <form onSubmit={handleSubmit}>
                <input className="border mb-3 py-1 pl-3 pr-28 rounded-lg" type="email" placeholder="Email address" name="email" required />
                <br />
                <div className="flex gap-2 ">
                    <input className="border mb-3 py-1 pl-3 pr-28 rounded-lg" type={show ? "text" : "password"} placeholder="Password" name="password" required /> <span onClick={() => setShow(!show)} className="text-2xl">{show ? <AiFillEyeInvisible></AiFillEyeInvisible> : <AiFillEye></AiFillEye>}</span>
                </div>
                <div className="text-sm flex items-center gap-2 mb-3">
                    <input type="checkbox" name="terms" />
                    <label htmlFor="terms">Accept our <a href="">terms & conditions</a></label>
                </div>
                <Link to={'/login'} className="text-sm hover:underline">Already has account? Login</Link>
                <br />
                <input className="btn btn-secondary text-white w-1/2 mt-4" type="submit" />
                <br />
            </form>
            <div className="max-w-[80%]">
            {registerError && <p className="text-red-600">{registerError}</p>}
            {success && <p className="text-green-600">{success}</p>}
            </div>
        </div>
    );
};

export default Register;