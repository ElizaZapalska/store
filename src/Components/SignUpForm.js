import React from "react";
import "./SignUpForm.css"


const SignUpForm = ({
    onSubmit,
    onChange,
    errors,
    user,
    score,
    pwMask,
    onPwChange
}) => {
    return (
        <div className={"sign-up-box"}>
            <h1>Sign Up</h1>

            <form onSubmit={onSubmit}>
                <label className={'label'}>
                    User name
                    <input className={'input'} type="text" name={"username"} />
                </label>
                <br/>
                <label className={'label'}>
                    Email
                    <input className={'input'} type="text" name={"email"} />
                </label>
                <br/>
                <label className={'label'}>
                    Password
                    <input className={'input'} type="text" name={"password"} />
                </label>
                <br/>
                <label className={'label'}>
                    Confirm password
                    <input className={'input'} type="text" name={"conf-password"} />
                </label>
                <br/>
                <button id={"btn-submit"}onSubmit={onSubmit}>Submit</button>

            </form>
            <p>
                Already have an account? <br />
                <a href="/">Log in here</a>
            </p>
        </div>
    )
}


export default SignUpForm;
