import { useState } from 'react';

export default function Contact(){

    const [formData, setFormData] = useState({
        nameUser: '',
        surnameUser: '',
        emailUser: '',
        phoneUser: '',
        subjectMessage: '',
        textUser: '',
    });

    const [formError, setFormError] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Validate the form
    const validateForm = () => {
        let errors = {};
        if (!formData.nameUser) errors.nameUser = 'Name is required';
        if (!formData.surnameUser) errors.surnameUser = 'Surname is required';
        if (!formData.emailUser) errors.emailUser = 'Email is required';
        if (!formData.phoneUser) errors.phoneUser = 'Phone is required';
        if (!formData.subjectMessage) errors.subjectMessage = 'Subject is required';
        if (!formData.textUser) errors.textUser = 'Message is required';
        return errors;
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        const errors = validateForm();
        if (Object.keys(errors).length > 0) {
            setFormError(errors);
            return;
        }

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setIsSubmitted(true);
                setFormData({
                    nameUser: '',
                    surnameUser: '',
                    emailUser: '',
                    phoneUser: '',
                    subjectMessage: '',
                    textUser: '',
                });
            } else {
                alert('Failed to submit the form. Please try again later.');
            }
        } catch (error) {
            console.error('Error submitting the form:', error);
            alert('There was an error submitting the form.');
        }
    };

    return(
        <main id="main">
            <div className="wrap-contact">
                <h1>Let's get in contact!</h1>
                <div className="contact-box">
                    <div className="contact-browser">
                        <div>
                            <span className="fa-solid fa-xmark"></span>
                            <span className="fa-solid fa-minus"></span>
                            <span className="fa-solid fa-up-right-and-down-left-from-center"></span>
                        </div>
                        <div>Contact Me</div>
                    </div>
                    <div id="contact-form">
                        {isSubmitted ? (
                            <p>Thank you for your message! We will get back to you soon.</p>
                        ) : (
                            <form name="contactForm" onSubmit={handleSubmit}>
                                <div className="user-info">
                                    <div className="column">
                                        <div>
                                            <label htmlFor="name-user">Name <span>*</span></label>
                                            <input
                                                type="text"
                                                name="nameUser"
                                                id="name-user"
                                                value={formData.nameUser}
                                                onChange={handleChange}
                                            />
                                            {formError.nameUser && <p>{formError.nameUser}</p>}
                                        </div>
                                        <div>
                                            <label htmlFor="surname-user">Surname <span>*</span></label>
                                            <input
                                                type="text"
                                                name="surnameUser"
                                                id="surname-user"
                                                value={formData.surnameUser}
                                                onChange={handleChange}
                                            />
                                            {formError.surnameUser && <p>{formError.surnameUser}</p>}
                                        </div>
                                        <div>
                                            <label htmlFor="email-user">Email <span>*</span></label>
                                            <input
                                                type="text"
                                                name="emailUser"
                                                id="email-user"
                                                value={formData.emailUser}
                                                onChange={handleChange}
                                            />
                                            {formError.emailUser && <p>{formError.emailUser}</p>}
                                        </div>
                                        <div>
                                            <label htmlFor="phone-user">Phone <span>*</span></label>
                                            <input
                                                type="text"
                                                name="phoneUser"
                                                id="phone-user"
                                                value={formData.phoneUser}
                                                onChange={handleChange}
                                            />
                                            {formError.phoneUser && <p>{formError.phoneUser}</p>}
                                        </div>
                                    </div>
                                    <div className="column">
                                        <div>
                                            <label htmlFor="subject-message">Subject <span>*</span></label>
                                            <input
                                                type="text"
                                                name="subjectMessage"
                                                id="subject-message"
                                                value={formData.subjectMessage}
                                                onChange={handleChange}
                                            />
                                            {formError.subjectMessage && <p>{formError.subjectMessage}</p>}
                                        </div>
                                        <div>
                                            <textarea
                                                name="textUser"
                                                id="text-user"
                                                value={formData.textUser}
                                                onChange={handleChange}
                                            >Write your message here.</textarea>
                                            {formError.textUser && <p>{formError.textUser}</p>}
                                        </div>
                                    </div>
                                </div>
                                <div className="form-btn">
                                    <input type="submit" value="Submit" className="btn-submit" />
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </main>
    )
}