import { Link, Outlet } from "react-router-dom";

function About() {
    return (
        <div>
            About 페이지
            <div>
                <Link to="/about/member">Member</Link>
                <Link to="/about/location">Location</Link>
            </div>
            <Outlet />
        </div>
    );
}

export default About;
