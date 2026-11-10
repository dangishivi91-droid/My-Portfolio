export default function Home() {

    return (
        <>

            {/* HOME SECTION */}

            <section id="home">

                {/* LEFT SIDE */}

                <div className="hero-content">

                    <h3>Hello, I'm</h3>

                    <h1>SHIVANI DANGI</h1>

                    <h2>Full Stack Python Developer</h2>

                    <p>
                        Hello! I'm Shivani, an aspiring Full Stack
                        Python Developer with knowledge of Python,
                        Django, React, JavaScript, HTML and CSS.

                        I enjoy building web applications and
                        learning new technologies. I am looking
                        for an opportunity to start my career as
                        a Web Developer.
                    </p>

                    {/* SOCIAL LINKS */}

                    <div className="social-links">

                        <a
                            href="https://github.com/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            GitHub
                        </a>

                        <a
                            href="https://www.linkedin.com/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            LinkedIn
                        </a>

                    </div>


                    {/* BUTTONS */}

                    <div className="hero-actions">

                        <a href="#projects">
                            View My Work
                        </a>

                        <a
                            href="/assets/Shivani%20Dangi%20-%20Resume.docx"
                            download
                        >
                            Download Resume
                        </a>

                    </div>

                </div>


                {/* RIGHT SIDE IMAGE */}

                {/* <div className="hero-image">

                    <img
                        src={profileImage}
                        alt="Shivani Dangi"
                    />

                </div> */}

            </section>
        </>
    );

}
