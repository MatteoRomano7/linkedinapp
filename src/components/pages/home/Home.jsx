import { Link } from "react-router-dom"

function Home() {
  return (
    <>
      <p>ciao sono home</p>
      <Link to="/profile/pepe">vai al profilo</Link>
    </>
  )
}

export default Home
