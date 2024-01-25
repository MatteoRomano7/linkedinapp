import "./SingleJob.css";
import Card from "react-bootstrap/Card";
import * as Icon from "react-bootstrap-icons";

function SingleJob({ data }) {
  return (
    <Card>
      <Card.Body className="jobContainer">
        <div className="job-img-box">

          {data.company_logo_url ? (
            <img src={data.company_logo_url} className="img-fluid" />
          ) : (
            <Icon.Buildings size={50} />
          )}
          <source srcset={data.company_logo_url} />
        </div>
        <div>
          <p>{data.company_name}</p>
          <p>{data.title}</p>
        </div>
      </Card.Body>
    </Card>
  );
}

export default SingleJob;
