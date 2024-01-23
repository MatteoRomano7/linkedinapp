import { Plus, Pencil } from "react-bootstrap-icons"

const Training = () =>{
    return (
        <div >
            <div className="d-flex justify-content-between">
            <h2>Formazione</h2>
            <div>
                <Plus className="m-2 fs-2"/>
                <Pencil />
                </div>

            </div>
            <div className="d-flex">
                <img src="" alt="" /> <p className="m-1">QMF</p>
            
            <div>
            <p>EPICODE</p>
            <span>2023-2024</span>
            </div>
            </div>
        </div>
    )
}
export default Training;
 