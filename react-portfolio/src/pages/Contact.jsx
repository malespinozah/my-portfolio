export default function Contact(){
    return(
        <main id="main">
            <div className="wrap-contact">
                <h1>Let's get in contact!</h1>
                <div className="contact-box">
                    <div className="contact-browser">
                        <div>
                            <span class="fa-solid fa-xmark"></span>
                            <span class="fa-solid fa-minus"></span>
                            <span class="fa-solid fa-up-right-and-down-left-from-center"></span>
                        </div>
                        <div>Contact Me</div>
                    </div>
                    <div id="contact-form">
                        <form name="contactForm" action="#" method="get">
                            <div className="user-info">
                                <div className="column">
                                    <div>
                                        <label htmlFor="name-user">Name <span>*</span></label>
                                        <input type="text" name="name-user" id="name-user" />
                                    </div>
                                    <div>
                                        <label htmlFor="surname-user">Surname <span>*</span></label>
                                        <input type="text" name="surname-user" id="surname-user" />
                                    </div>
                                    <div>
                                        <label htmlFor="email-user">Email <span>*</span></label>
                                        <input type="text" name="email-user" id="email-user" />
                                    </div>
                                    <div>
                                        <label htmlFor="phone-user">Phone <span>*</span></label>
                                        <input type="text" name="phone-user" id="phone-user" />
                                    </div>
                                </div>
                                <div className="column">
                                    <div>
                                        <label htmlFor="subject-message">Subject <span>*</span></label>
                                        <input type="text" name="subject-message" id="subject-message" />
                                    </div>
                                    <div>
                                        <textarea name="text-user" id="text-user">Write your message here.</textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="form-btn">
                            <input type="submit" value="Submit" className="btn-submit" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}