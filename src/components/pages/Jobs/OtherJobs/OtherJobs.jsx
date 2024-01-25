import "./OtherJobs.css"
import data from "../../../../data/default.json"
function OtherJobs() {
  return (
    <div className="border rounded bg-white jobs-sidebar">
      <figure>
        <figcaption className="fs-4 fw-bold mb-2">
          Lavori che potrebbero interessarti
        </figcaption>
        <ul>
          {data.map((elem) => (
            <li>{elem.company_name}</li>
          ))}
        </ul>
      </figure>
    </div>
  )
}

export default OtherJobs
