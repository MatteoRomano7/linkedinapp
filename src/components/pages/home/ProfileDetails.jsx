import React from "react";
import { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import {useSelector} from 'react-redux';
import { PersonFillAdd } from "react-bootstrap-icons";
import { App } from "react-bootstrap-icons";
import { BookmarkFill } from "react-bootstrap-icons";


const ProfileDetails = () => {
    const profilo = useSelector(state => state.profile)

    return(
        <div>
            <Card>
                <Card.Img
                    className="banner"
                    variant="top"
                    src={profilo.image}
                />
                <div className="text-center">
                    <img className="propic"
                    src={profilo.image}/>
                </div>
                <Card.Body>
                    <Card.Text>
                    <div className="text-center">
                        <h2>{`${profilo.name} ${profilo.surname}`}</h2>
                        <p>{profilo.title}</p>
                    </div>
                   
                    <div className="d-flex justify-content-between">
                        <div>
                        <p>Collegamenti</p>
                        <p className="fw-bold">Espandi la tua rete</p>
                        </div>
                        <div>
                        <PersonFillAdd />
                        </div>
                        </div>
                        <div>
                            <hr />
                            <div>
                                <p>Accedi a strumenti e informazioni in esclusiva</p>
                                <div className="d-flex">
                                    <App />
                                    <p className="fw-bold">Prova Premium per 0 EUR</p>
                                </div>
                                <hr />
                                <div className="d-flex">
                                    <BookmarkFill />
                                    <p>I miei elementi</p>
                                </div>
                            </div>
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>

    ) 
}

export default ProfileDetails;
