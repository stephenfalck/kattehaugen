import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
    return (
        <MDBFooter color="mdb-color" className="font-small pt-4 mt-5">
      <MDBContainer className="text-center text-md-left">
        <MDBRow className="text-center text-md-left mt-3 pb-3">
        <MDBCol md="3" lg="4" xl="3" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">
                Nyttige lenker
            </h6>
            <p>
                <a href="https://www.facebook.com/Kattehaugen-Hotell-175133246186790/" target="_blank" rel="noopener noreferrer">Våre Facebooksider</a>
            </p>
            <p>
                <a href="https://www.adressa.no/forbruker/article1661116.ece" target="_blank" rel="noopener noreferrer">Adresseavisa artikkel</a>
            </p>
            <p>
              <a href="https://www.google.com/maps/dir//Hangerslettvegen+820,+7070,+Norway/@63.3744735,10.0887354,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x4612d2f8f30574bd:0xbd930f0f39ffd11d!2m2!1d10.0909241!2d63.3744735" target="_blank" rel="noopener noreferrer">
                Veibeskrivelse til Kattehaugen
              </a>
            </p>
          </MDBCol>
          <hr className="w-100 clearfix d-md-none" />
          <MDBCol md="4" lg="4" xl="3" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">
              Åpningstider
            </h6>
            <p>
            Telefoniske henvendelser:<br />
            11:00–21:00 (Mandag-Søndag)<br />
            Levering og henting:<br />
            17:00–19:00 (Mandag-Søndag)
            </p>
          </MDBCol>
          <hr className="w-100 clearfix d-md-none" />
          <MDBCol md="5" lg="4" xl="4" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Kontakt</h6>
            <p>
              <i className="fa fa-home mr-3" /> Hangerslettveien 820, 7070, Bosberg
            </p>
            <p>
              <i className="fa fa-envelope mr-3" /> kattehaugen@yahoo.no
            </p>
            <p>
              <i className="fa fa-phone mr-3" /> + 47 473 22 706
            </p>
          </MDBCol>
          
          
        </MDBRow>
        <hr />
        <MDBRow className="d-flex align-items-center">
          <MDBCol md="12" lg="12">
            <p className="text-center grey-text">
              &copy; {new Date().getFullYear()} Copyright:{" "}
              <a href="https://github.com/stephenfalck"> Kattehaugen Hotell </a>
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
    )
}

export default Footer;