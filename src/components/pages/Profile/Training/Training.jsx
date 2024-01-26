import { Plus, Pencil } from "react-bootstrap-icons"
import { useSelector } from "react-redux";
import './Training.css';
import imgFormazione from "./0x0.png";



const Training = () =>{
/*     const profilo = useSelector((state) => state.profile);
 */
    return (
        <div className="section border rounded p-2">
            <div className="d-flex justify-content-between">
            <h3>Formazione</h3>
            <div>
                <Plus className="m-2 fs-2"/>
                <Pencil />
                </div>

            </div>
            <div className="d-flex">
                <img  src={imgFormazione} className="fotoTonde"/>
            
            <div className="ms-2">
            <p className="m-0 fw-bold">EPICODE SCHOOL</p>
            <span className="fs-6">2023-2024</span>
            </div>
            </div>
        </div>
    )
}
export default Training;
 