import { ArrowRight, EyeFill, PeopleFill, Search } from "react-bootstrap-icons";
import "./Analytics.css";
import Container from "react-bootstrap/Container";

const Analytics = () => {
  return (
    <Container fluid className="border rounded">
      <div>
        <h2>Analytics</h2>
        <p className="onlyYou">
          <EyeFill />
          <span>Private to you</span>
        </p>
      </div>
      <div className="border-bottom d-flex gap-4">
        <div className="profile-highlight">
          <PeopleFill size={24} />
          <div>
            <p>{Math.round(Math.random() * 1000)} profile views</p>
            <p>Discover who's viewed your profile.</p>
          </div>
        </div>
        <div className="profile-highlight">
          <Search size={24}/>
          <div>
            <h4>11 search appearances</h4>
            <p>See how often you appear in search results</p>
          </div>
        </div>
      </div>
      <div className="show-analytics">
        <h4 className="py-1">Show all analytics</h4>
        <ArrowRight className="aling-items-center m-2" />
      </div>
    </Container>
  );
};
export default Analytics;