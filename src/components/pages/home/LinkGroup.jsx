import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { Plus } from 'react-bootstrap-icons';

const LinkGroup = () => {
    return(
        <div>
            <Card>
                <div>
                    <h2><Link to='/'>Gruppi</Link></h2>
                    <div className='d-flex justify-content-between'>
                        <h2><Link to='/'>Eventi</Link></h2>
                        <Plus />
                    </div>
                   <h2> <Link to='/'>Hashtag seguiti</Link></h2>
                    <hr />
                    <div>
                        <p>Scopri di piú</p>
                    </div>                
                </div>

            </Card>

        </div>
    )
}
export default LinkGroup;