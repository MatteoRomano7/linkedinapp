import "./RightSidebar.css";
import data from "../../../../data/default.json";
function RightSidebar() {
  return (
    <div className="border rounded bg-white jobs-sidebar">
      <figure>
        <figcaption className="fs-4 fw-bold mb-2">
          Lavori che potrebbero interessarti
        </figcaption>
        <ul>
          {data.slice(0,7).map((elem) => (
            <li key={elem._id}>
              <a href={elem.url}>
                <div>
                  <h5>{elem.company_name}</h5>
                  <p>{elem.title}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </figure>
    </div>
  );
}

export default RightSidebar;
