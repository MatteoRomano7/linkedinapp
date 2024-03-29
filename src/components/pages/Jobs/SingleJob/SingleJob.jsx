import "./SingleJob.css";
import Card from "react-bootstrap/Card";
import * as Icon from "react-bootstrap-icons";

function SingleJob({ data }) {
  return (
    <Card className="my-1">
      <a href={data.url} className="job-link">
        <Card.Body className="jobContainer">
          <div className="job-img-box">
            {data.company_logo_url ? (
              <img src={data.company_logo_url} className="img-fluid" />
            ) : (
              <Icon.Buildings size={50} />
            )}
          </div>
          <div>
            <p>{data.company_name}</p>
            <p>{data.title}</p>
          </div>
        </Card.Body>
      </a>
    </Card>
  );
}

export default SingleJob;
