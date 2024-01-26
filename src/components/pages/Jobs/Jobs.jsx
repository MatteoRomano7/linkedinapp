import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import "./Jobs.css"
import SingleJob from "./SingleJob/SingleJob"
import Container from "react-bootstrap/Container"
import LeftSidebar from "./LeftSidebar/LeftSidebar"
import RightSidebar from "./RightSidebar/RightSidebar"
import JobSearch from "./JobSearch/JobSearch"
import Card from "react-bootstrap/Card"
import { Alert } from "react-bootstrap"

function Jobs() {
  const jobs = useSelector((state) => state.jobs)
  const params = useParams()
  return (
    <Container as={"main"} className="jobs-wrapper">
      <LeftSidebar query={params.searchQuery} />
      {params?.searchQuery ? (
        <div style={{flexGrow: "2"}}>
          <Card className="p-3" >
            <h1>Lavori che includono "{params.searchQuery}"</h1>
          {jobs.length > 0 ? (
            jobs.map((elem) => {
              return <SingleJob key={elem._id} data={elem} />
            })
          ) : (
            <Alert variant="info" className="jobs-center-element">
              Non è stato trovato nulla con questa chiave di ricerca.
            </Alert>
          )}
          </Card>
        </div>
      ) : (
        <JobSearch />
      )}
      <RightSidebar />
    </Container>
  )
}

export default Jobs
