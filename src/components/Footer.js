import Collapsible from "./Collapsible";
import { collapsibles } from '../data.js'

const Footer = () => {
    // Make each "topic" into its own component and render through props
  
    return (
        <div className="footer">
             <div className="container mx-auto px-4 py-6">
                <div className="items mb-4">
                    {collapsibles && collapsibles.map(({label, categories }) => (
                        <Collapsible  label={label} categories={categories} collapsed={false} />
                    ))}
                    <div className="item py-3 text-sm font-light">
                        <p><a href="#">Website feedback</a></p>
                    </div>
                    <div className="item py-3 text-sm font-light">
                        <p><a href="#">About us</a></p>
                    </div>
                    <div className="item py-3 text-sm font-light">
                        <p><a href="#">List your property</a></p>
                    </div>
                    <div className="item py-3 text-sm font-light">
                        <p><a href="#">Careers</a></p>
                    </div>
                    <div className="item py-3 text-sm font-light">
                        <p><a href="#">Travel Guides</a></p>
                    </div>
                    <div className="item py-3 text-sm font-light">
                        <p><a href="#">Site index</a></p>
                    </div>
                </div>
                <div>
                    <h3 className="font-bold text-red-900 mb-2">expedia group™</h3>
                    <p className="text-xs font-thin mb-2">* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget sem egestas lectus lobortis malesuada vitae sit amet diam.</p>
                    <p className="text-xs font-thin mb-2">© 2022 Duis ornare vel tellus a bibendum. Praesent dui est, mattis eu tempus vel, dapibus et nibh.</p>
                    <p className="text-xs font-thin mb-2">Ut laoreet neque non aliquet sollicitudin. Donec vitae risus eu tortor hendrerit egestas sit amet eget ligula. Pellentesque dignissim enim et urna aliquam, in vestibulum leo dignissim. Aliquam sit amet placerat ipsum, sed congue lacus.</p>
                    <a href="#" className="text-xs font-thin mb-2 text-blue-400">* Learn more about VLHotels® Rewards</a>
                </div>
             </div>
        </div>
    )
}

export default Footer;