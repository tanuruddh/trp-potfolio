import React from 'react';

const Contact = () => {

    function clearAllInputs(event) {
        var allInputs = document.querySelectorAll('.input-field');
        setTimeout(() => {
            if (allInputs[0].value !== '' && allInputs[1].value !== '' && allInputs[2].value !== '') {
                allInputs.forEach(singleInput => { singleInput.value = '' });

            }
        }, "500")

    }
    return (
        <div>
            <div className="contact">
                <div className="para">
                    <h1>Contact Us</h1>
                    <p>Need to get in touch with us? Either fill out the form with your inquiry or
                        find the department email you'd like to contact below.</p>
                </div>
                <div className="form" >
                    <div className="inner-div">
                        <form action='https://formspree.io/f/xleqnjzz' method='post' id='form'>
                            <label htmlFor="userName">UserName:</label>
                            <input type="text" id='userName' name='username' required className='input-field' />
                            <label htmlFor="email">Email</label>
                            <input type="email" id='email' name='email' required className='input-field' />
                            <label htmlFor="msg">What can I help you?</label>
                            <textarea id='msg' name="w3review"
                                rows="4" cols="50" required className='input-field' />
                            <input onClick={(e) => clearAllInputs(e)} type="submit" value={"Submit"} className='btn' />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
