import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { UserContext } from "../Provider/AuthProvider";
import { NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
    const { userLogin, googleLogin, githubLogin } = useContext(UserContext);
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const showTopRightAlert = (message) => {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: message,
            toast: true,  
            position: 'top-end',  
            showConfirmButton: false,
            timer: 3000,  
            width: '350px',  
            heightAuto: false,  
            timerProgressBar: true, 
        });
    };

    const onSubmit = (data) => {
        const { email, password } = data;
        // Email login
        userLogin(email, password)
            .then((userCredential) => {
                console.log(userCredential);
                navigate("/");
            })
            .catch((error) => {
                showTopRightAlert("Invalid credentials");
            });
    };

    // Handle Google login
    const handleGoogleLogin = () => {
        googleLogin()
            .then((userCredential) => {
                console.log("Google login successful:", userCredential);
                navigate("/");
            })
            .catch((error) => {
                showTopRightAlert("Failed to login through Google");
            });
    };

    // Handle GitHub login
    const handleGithubLogin = () => {
        githubLogin()
            .then((userCredential) => {
                console.log("Github login successful:", userCredential);
                navigate("/");
            })
            .catch((error) => {
                showTopRightAlert("Failed to login through Github");
            });
    };

    return (
        <>
            <Helmet>
                <title>Login</title>
            </Helmet>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h2 className="text-center text-2xl font-bold">Login</h2>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/* Email Input */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    className="input input-bordered"
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: {
                                            value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                                            message: "Invalid email address",
                                        },
                                    })}

                                />

                                {errors.email && (
                                    <p className="text-red-500 text-sm">{errors.email.message}</p>
                                )}

                            </div>

                            {/* Password Input */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Enter your password"
                                    className="input input-bordered"
                                    {...register("password", {
                                        required: "Password is required",
                                        minLength: {
                                            value: 6,
                                            message: "Password must be at least 6 characters long",
                                        },
                                    })}
                                />
                                {errors.password && (
                                    <p className="text-red-500 text-sm">
                                        {errors.password.message}
                                    </p>
                                )}
                            </div>

                            {/* Submit Button */}
                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-primary text-white">
                                    Login
                                </button>
                            </div>
                        </form>

                        <div className="divider">OR</div>

                        {/* Google Login Button */}
                        <button
                            onClick={handleGoogleLogin}
                            className="btn btn-outline btn-secondary w-full mt-2"
                        >
                            Login with Google
                        </button>

                        {/* Github Login Button */}
                        <button
                            onClick={handleGithubLogin}
                            className="btn btn-outline btn-primary w-full mt-2"
                        >
                            Login with GitHub
                        </button>

                        <p>
                            Don't have an account?{" "}
                            <NavLink className="text-red-600 underline" to="/register">
                                Create one
                            </NavLink>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
