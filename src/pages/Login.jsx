// Login.js
import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { UserContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import auth from '../../firebase.config';

const Login = () => {
    const { userLogin, googleLogin, facebookLogin } = useContext(UserContext);
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        const { email, password } = data;
        try {
            // Email login
            const userCredential = await userLogin(email, password);
            console.log("Logged in successfully:", userCredential);
            navigate("/");
        } catch (error) {
            console.error("Error logging in:", error.message);
        }
    };

    // Handle Google login
    const handleGoogleLogin = async () => {
        try {
            const result = await googleLogin();
            console.log("Google login successful:", result);
            navigate("/"); // Redirect on success
        } catch (error) {
            console.error("Error with Google login:", error.message);
        }
    };

    // Handle Facebook login
    const handleFacebookLogin = async () => {
        try {
            const result = await facebookLogin();
            console.log("Facebook login successful:", result);
            navigate("/"); 
        } catch (error) {
            console.error("Error with Facebook login:", error.message);
        }
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

                        {/* Facebook Login Button */}
                        <button
                            onClick={handleFacebookLogin}
                            className="btn btn-outline btn-primary w-full mt-2"
                        >
                            Login with Facebook
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
