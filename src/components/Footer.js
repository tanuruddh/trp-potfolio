import React from 'react'

const Footer = () => {
    return (
        <>
            <div className="footer-dark">
                <footer>

                    <div className="container">
                        <div className="row">
                            {/* <div className="col-sm-6 col-md-3 item">
                                <h3>Services</h3>
                                <ul>
                                    <li><a href="#">Web design</a></li>
                                    <li><a href="#">Development</a></li>
                                    <li><a href="#">Hosting</a></li>
                                </ul>
                            </div>
                            <div className="col-sm-6 col-md-3 item">
                                <h3>About</h3>
                                <ul>
                                    <li><a href="#">Company</a></li>
                                    <li><a href="#">Team</a></li>
                                    <li><a href="#">Careers</a></li>
                                </ul>
                            </div> */}
                            <div className="col-md-6 item text">
                                <h3>Trp Singh</h3>
                                <p>A passionate developer having expertise in Web, API, and Database and the ability to adapt in
                                    both self-starting and collaborative
                                    environments while staying focused on
                                    achieving high-quality results under strict
                                    deadlines</p>
                            </div>
                            <div className="col item social">
                                <a href="https://www.instagram.com/_trp_singh?igsh=cDR1M3BkZ3FoZzBu" rel="noreferrer" target='_blank'><i className="ri-instagram-fill"></i></a>
                                <a href="https://github.com/tanuruddh/" rel="noreferrer" target='_blank'><i className="ri-github-fill"></i></a>
                                <a href="https://x.com/_trp_singh?t=zhNHkxWPjG_1yGYy9M4jqw&s=35" rel="noreferrer" target="_blank"><i className="ri-twitter-fill"></i></a>
                                <a target='_blank' href="https://www.linkedin.com/in/tanuruddh-pratap-singh-1b3845211/" rel="noreferrer"><i className="ri-linkedin-fill"></i></a>
                                <a href="https://wa.me/9548247281" target='_blank' rel="noreferrer"><i className="ri-whatsapp-line"></i></a>
                                {/* <a href="" target='_blank'><i className="ri-phone-line"></i></a> */}
                            </div>

                        </div>
                        <p className="copyright">© 2024 Trp Singh. All right reserved</p>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Footer
