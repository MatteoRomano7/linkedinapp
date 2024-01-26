import { ArrowRight, EyeFill, PeopleFill, Search } from "react-bootstrap-icons";
import "./Analytics.css";
import Container from "react-bootstrap/Container";

const Analytics = () => {
  return (
    <Container fluid className="border rounded section">
      <div>
        <h3>Analytics</h3>
        <p className="onlyYou">
          <EyeFill />
          <span>Private to you</span>
        </p>
      </div>
      <div className="border-bottom d-flex gap-4">
        <div className="profile-highlight">
          <PeopleFill size={24} />
          <div>
            <p>{Math.round(Math.random() * 1000000)} profile views</p>
            <p>Discover who's viewed your profile.</p>
          </div>
        </div>
        <div className="profile-highlight">
          <Search size={24}/>
          <div>
            <p className="h5">{Math.round(Math.random() * 1000000)} search appearances</p>
            <p>See how often you appear in search results</p>
          </div>
        </div>
      </div>
      <div className="showAll">
        <h5>Show all analytics</h5>
        <ArrowRight />
      </div>
    </Container>
  );
};
export default Analytics;
