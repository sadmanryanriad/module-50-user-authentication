import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import auth from "../../firebase/firebase.config";
import { Link } from "react-router-dom";

const Login = () => {
    const [registerError, setRegisterError] = useState('');
    const [success,setSuccess] = useState('');

    function handleSubmit(e){
        e.preventDefault();
        setRegisterError('');
        setSuccess('');
        const email = e.target.email.value;
        const password = e.target.password.value;

        
        if (password.length < 6) {
            setRegisterError('Password should be at least 6 characters or long');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError('Password should have at least one upper case character!');
            return;
        }
        signInWithEmailAndPassword(auth,email,password)
        .then(userCredential=> {
            console.log(userCredential.user)
            setSuccess('Login successful')
        })
        .catch(error=>{
            console.log(error.message)
            setRegisterError(error.message);
        });

    }

    return (
        <div className="hero min-h-screen w-1/2 ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleSubmit} >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" name="email" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" name="password" required />
                                <label className="label">
                                    <Link className="hover:underline" to={'/register'}>New user? Register</Link>
                                </label>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <div>
                            {registerError && <p className="text-red-600">{registerError}</p>}
                            {success && <p className="text-green-600">{success}</p>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;