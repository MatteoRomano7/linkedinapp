import "./JobsSidebar.css"

function JobsSidebar( { query }) {
  return (
    <div className="jobs-sidebar">
      <figure className="border rounded bg-white">
        <figcaption>Su questa pagina</figcaption>
        <ul>
          <li>
            <a href="#">Persone</a>
          </li>
          <li>
            <a href="#">Persone che parlano di #{query}</a>
          </li>
          <li>
            <a href="#">Offerte di lavoro</a>
          </li>
          <li>
            <a href="#">Prodotti</a>
          </li>
          <li>
            <a href="#">Post</a>
          </li>
          <li>
            <a href="#">Gruppi</a>
          </li>
          <li>
            <a href="#">Altre Persone</a>
          </li>
        </ul>
      </figure>
    </div>
  );
}

export default JobsSidebar;
