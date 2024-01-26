import { useSelector } from "react-redux";
import "./Interests.css";

const Interests = () => {
  const profilo = useSelector((state) => state.profile);
  return (
    <div className="section border rounded p-2">
      <div>
        <h3>Interessi</h3>
        <p className="Aziende">Aziende</p>
      </div>
      <hr />
      <div className="d-flex gap-2">
        <div>
          <img className="fotoTonde" src={profilo.image} />
        </div>
        <div>
          <div className="ms-2">
            <p className="m-0  fw-bold">LinkedIn Notizie</p>

            <p className="">{Math.round(Math.random() * 1000000)} follower</p>
          </div>
          <button className="outlined-button">Giá segui</button>
        </div>
      </div>
      <div className=""></div>
    </div>
  );
};
export default Interests;
