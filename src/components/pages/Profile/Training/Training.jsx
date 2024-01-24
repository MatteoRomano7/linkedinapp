import { Plus, Pencil } from "react-bootstrap-icons"

const Training = () =>{
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
 