// Register.js
import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { UserContext } from "../Provider/AuthProvider";
import { NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Register = () => {
    const { userRegister, updateRegisterUser } = useContext(UserContext);
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

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

    const onSubmit = async (data) => {
        const { email, password, name, photo } = data;
        try {
            const userCredential = await userRegister(email, password);
            const user = userCredential.user;

            const photoURL = photo[0] ? URL.createObjectURL(photo[0]) : null;


            await updateRegisterUser(user, name, photoURL);
            navigate("/");
        } catch (error) {
            showTopRightAlert("Failed to register user");
        }
    };

    return (
        <>
            <Helmet>
                <title>Register</title>
            </Helmet>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h2 className="text-center text-2xl font-bold">Register</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/* Name Input */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter your name"
                                    className="input input-bordered"
                                    {...register("name", { required: "Name is required" })}
                                />
                                {errors.name && (
                                    <p className="text-red-500 text-sm">{errors.name.message}</p>
                                )}
                            </div>

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

                            {/* Photo Input */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image</span>
                                </label>
                                <input
                                    type="file"
                                    name="photo"
                                    className="file-input w-full max-w-xs"
                                    {...register("photo")}
                                />
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
                                    Register
                                </button>
                            </div>
                            <NavLink className="underline text-cyan-400" to="/login">Already have an account? Login</NavLink>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;
