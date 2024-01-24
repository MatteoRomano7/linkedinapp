import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./Jobs.css";
import SingleJob from "./SingleJob/SingleJob";
import Container from "react-bootstrap/Container";
import JobsSidebar from "./JobsSidebar/JobsSidebar";
import OtherJobs from "./OtherJobs/OtherJobs";

function Jobs() {
  const jobs = useSelector((state) => state.jobs);
  const params = useParams();
  return (
    <Container as={"main"} className="jobs-wrapper">
      <JobsSidebar query={params.searchQuery} />
      <div >
        {jobs.map((elem) => {
          return <SingleJob key={elem._id} data={elem} />;
        })}
      </div>
      <OtherJobs />
    </Container>
  );
}

export default Jobs;
