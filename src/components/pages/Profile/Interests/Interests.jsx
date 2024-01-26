import { useSelector } from "react-redux";
import './Interests.css';


const Interests = () => {
    const profilo = useSelector((state) => state.profile);
    return (
        <div className="section border rounded p-2">
            <div>
                <h3>Interessi</h3>
                <p className="Aziende">Aziende</p>
            </div>
            <hr />
            <div className="d-flex">
            <img className="fotoTonde" src={profilo.image}/>
                <div>
                    <p className="m-0 ms-2 fw-bold">LinkedIn Notizie</p>

                    <span className="m-2">{Math.round(Math.random() * 1000000)} follower</span>
                </div>
            </div>
            <div className="ms-5 ps-2 mt-2">
                <button className="outlined-button">Giá segui</button>
            </div>
        </div>
    )
}
export default Interests;