import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./Jobs.css";
import SingleJob from "./SingleJob/SingleJob";
import Container from "react-bootstrap/Container";
import JobsSidebar from "./JobsSidebar/JobsSidebar";
import OtherJobs from "./OtherJobs/OtherJobs";
import JobSearch from "./JobsSidebar/JobSearch/JobSearch";
import { Alert } from "react-bootstrap";

function Jobs() {
  const jobs = useSelector((state) => state.jobs);
  const params = useParams();
  return (
    <Container as={"main"} className="jobs-wrapper">
      <JobsSidebar query={params.searchQuery} />
      {params?.searchQuery ? (
        <div>
          {jobs.length > 0 ? (
            jobs.map((elem) => {
              return <SingleJob key={elem._id} data={elem} />;
            })
          ) : (
            <Alert variant="info" className="jobs-center-element">
              Non è stato trovato nulla con questa chiave di ricerca.
            </Alert>
          )}
        </div>
      ) : (
        <JobSearch />
      )}
      <OtherJobs />
    </Container>
  );
}

export default Jobs;
