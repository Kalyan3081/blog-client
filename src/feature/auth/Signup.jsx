import React, { useState } from 'react'
import Button from '../../components/button/Button';

const Signup = () => {

    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const onSubmitfun = async (e) => {
        e.preventDefault();
        setIsLoading(true); // Set loading to true when form is submitted
        const form = e.target;
        // below is the object that will store the form data what we have entered in the form
        const formData = {
            name: form["username"].value,
            email: form["email"].value,
            password: form["password"].value,
            gender: form["gender"].value?.toUpperCase(),
        }
        // console.log(formData);
        try {
            const response = await fetch("http://localhost:5000/auth/signup", {
                method: "POST",
                // headers is used to tell the server that the data we are sending is in json format
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            if (response.status >= 200 && response.status < 300) {
                // Successful
                setError(""); // Clear any previous errors
            } else {
                const errMsg = await response.json();
                setError(errMsg.message || "Signup failed. Please try again.");
            }

            console.log(response);
        } catch (err) {
            setError("Network error. Please try again.");
        } finally {
            setIsLoading(false); // Set loading to false when request completes
        }
    }
    return (
        <>
            <div className="auth-container">
                <form action="" className="form signup-form" onSubmit={onSubmitfun}>
                    <input type="text" name="username" id="username" placeholder='Enter your username' required />
                    <input type="email" name="email" id="email" placeholder='Enter your email' required />
                    <input type="password" name="password" id="password" placeholder='Enter your password' required />
                    <div>
                        <label htmlFor="male">Male</label>
                        <input type="radio" id="male" value={"male"} name="gender" />
                    </div>
                    <div>
                        <label htmlFor="female">Female</label>
                        <input type="radio" id="female" value={"female"} name="gender" />
                    </div>

                    <Button text="Signup" isLoading={isLoading} />
                    {error && <p className='error-msg'>{error}</p>}
                </form>
            </div>
        </>
    )
}

export default Signup