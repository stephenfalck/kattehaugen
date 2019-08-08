import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBMask } from "mdbreact";

const Header = (props) => {
    return (
        <MDBContainer fluid>
            <MDBRow id={props.id} className="header justify-content-center align-items-center">
                <MDBMask overlay="stylish-light" className="d-flex justify-content-center align-items-center header-mask">
                    <MDBCol>
                        <h1 className="display-4 text-center page-title">{props.title}</h1>
                    </MDBCol>
                </MDBMask>
            </MDBRow>
        </MDBContainer>
    )
}  

export default Header;