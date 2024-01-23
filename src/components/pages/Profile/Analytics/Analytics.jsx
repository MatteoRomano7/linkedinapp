import { ArrowRight, EyeFill, PeopleFill, Search } from "react-bootstrap-icons";

const Analytics = () => {
    return (
        <div >
            <div className="container-fluid">
                <h2>Analytics</h2>
                <EyeFill /><span>Private to you</span>
            </div>
            <div className="d-flex">
                <div className="">
                    <div className="d-flex">
                    <PeopleFill  /><p>41 profile views</p>
                    </div>
                    <span>Discover who's viewed your profile.</span>
                </div>
                <div className="">
                    <div className="d-flex">
                        <Search /><h3> 11 search appearances</h3>
                    </div>
                    <span className="m-3">See how often you appear in search results</span>
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <h2>Show all analytics</h2> <ArrowRight className="aling-items-center m-2" />
            </div>
        </div>

    )
}
export default Analytics;


