import React, { Fragment } from 'react';
import { MDBContainer , MDBRow, MDBCol } from "mdbreact";
import Header from '../header';
import './404.css';

const NoPageMatch = () => {
    return (
        <Fragment>
            <Header id="header-404" title="Oops" />
            <MDBContainer id="page404" className="d-flex justify-content-center align-items-center">
                <MDBRow>
                    <MDBCol className="text-center">
                        <h3>404: Ingen treff</h3>
                        <p>Siden du leter etter eksisterer ikke</p>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </Fragment>
    )
}

export default NoPageMatch;
