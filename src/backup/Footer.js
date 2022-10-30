const Footer = () => {
    // Make each "topic" into its own component and render through props


    return (
        <div className="footer">
             <div className="container mx-auto px-4 py-6">
                <div className="items ">
                    <div className="item py-3">
                        <div className="topic text-sm flex justify-between font-light">
                            <p>Top Destinations</p>
                            <img src="./icons/arrow_down_2.svg" height="13" width="13" />
                        </div>
                        <div className="expand"></div>
                    </div>
                    <div className="item py-3">
                        <div className="topic text-sm flex justify-between font-light">
                            <p>Top Countries & Regions</p>
                            <img src="./icons/arrow_down_2.svg" height="13" width="13" />
                        </div>
                        <div className="expand"></div>
                    </div>
                    <div className="item py-3">
                        <div className="topic text-sm flex justify-between font-light">
                            <p>Support & FAQs</p>
                            <img src="./icons/arrow_down_2.svg" height="13" width="13" />
                        </div>
                        <div className="expand"></div>
                    </div>
                    <div className="item py-3">
                        <div className="topic text-sm flex justify-between font-light">
                            <p>For suppliers, affiliates, and the media</p>
                            <img src="./icons/arrow_down_2.svg" height="13" width="13" />
                        </div>
                        <div className="expand"></div>
                    </div>
                    <div className="item py-3">
                        <div className="topic text-sm flex justify-between font-light">
                            <p>User terms & Privacy</p>
                            <img src="./icons/arrow_down_2.svg" height="13" width="13" />
                        </div>
                        <div className="expand"></div>
                    </div>
                </div>
             </div>
        </div>
    )
}

export default Footer;