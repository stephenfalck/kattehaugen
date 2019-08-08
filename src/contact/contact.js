import React, { Fragment } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdbreact";
import Header from '../header';
import './contact.css'

const Contact = () => {
    return (
      <Fragment>
        <Header id="contact-header" title="Kontakt Oss" />
        <section  id="contact-page" className="pt-5">
          <MDBContainer>
            <MDBRow>
              <MDBCol  sm="12" md="8" className="lg-0 mb-4 offset-md-2">
                    <div>
                      <h3 className="mt-2">
                        <MDBIcon icon="user" /> Kontakt oss:
                      </h3>
                    </div>
                    <p className="grey-text">
                    Det er viktig for oss å være tilgjengelig, og vi vil svare på henvendelser fortløpende.
                    </p>
                    <div className="">
                      <p><MDBIcon icon="map-marker-alt" size="lg" /> Hangerslettveien 820, 7070, Bosberg</p>
                      <br></br>
                    </div>
                    <div>
                      <p><MDBIcon icon="phone" size="lg" /> 473 22 706 (11:00-19:00)</p>
                      <br></br>
                    </div>
                    <div className="">
                      <p><MDBIcon icon="envelope" size="lg" /> kattehaugen@yahoo.no</p>
                    </div>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
      </Fragment>
    )
}

export default Contact;