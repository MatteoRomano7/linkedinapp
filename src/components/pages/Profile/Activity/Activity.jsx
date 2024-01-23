import { Pencil, ArrowRight } from "react-bootstrap-icons";

const Activity = () => {
    return (
        <div>
            <div>
                <div className="d-flex justify-content-between">
                    <div>
            <h2>Attivitá</h2>
            <p>0 follower</p>
            </div>
            <div>
            <button>Crea un post</button>
            <Pencil />
            </div>
            </div>
            <div>
                <p className="m-0">Non hai ancora pubblicato nulla</p>
                <span>I post che condividi appariranno qui</span>
            </div>
            <div className="d-flex justify-content-center">
                <h2>Show all analytics</h2> <ArrowRight className="aling-items-center m-2" />
            </div>

            </div>

        </div>
    )
}

export default Activity;