import React from 'react';
import { useForm } from 'react-hook-form';
import '../assets/styles/loginInput.scss';
import { useNavigate } from 'react-router-dom';

export function LoginInput() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();
    
    const navigate = useNavigate();

    const onSubmit = (data) => {
        if (data.username === 'Admin' && data.password === 'Admin') {
            console.log(data);
            navigate('/userData');
            reset();
        }
    };

    return (
        <div className="signin">
            <div className="content">
                <h2>Sign In</h2>
                <form className="form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="inputBox">
                        <input
                            type="text"
                            {...register('username', {
                                required: true,
                            })}
                        />
                        <i className={(errors.username || (errors.username === 'Tco' && errors.username !== '')) ? 'error-color' : ''}>
                            Username
                        </i>
                    </div>
                    <div className="inputBox">
                        <input
                            type="password"
                            {...register('password', {
                                required: true,
                            })}
                        />
                        <i className={errors.password ? 'error-color' : ''}>
                            Password
                        </i>
                    </div>
                    <div className="links">
                        <a href="#">Forgot Password</a>
                        <a href="#">Signup</a>
                    </div>
                    <div className="button-box">
                        <button type="submit">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
