import React, { Fragment } from 'react';
import image1 from '../assets/images/IMG_0001 (1).JPG';
import {  MDBMask, MDBRow, MDBCol,  MDBBtn, MDBView, MDBContainer, 
  MDBAnimation, MDBIcon } from "mdbreact";
import './home.css';

class Home extends React.Component {
    handleClick = () => {
      this.props.history.push("/")
    }

    render() {
      return (
        <Fragment>
          <MDBView src={image1}>
            <MDBMask className="d-flex justify-content-center align-items-center" id="mask">
              <MDBContainer id="title-container">
                <MDBRow>
                  <MDBCol md="12" className="mb-4 white-text text-center">
                    <MDBAnimation type="fadeIn" duration="3s">
                        <h1 className="h1-reponsive white-text text-uppercase  mb-0 pt-md-5 pt-5 ">Kattehaugen Hotell</h1>
                        <hr className="hr-light my-4" />
                        <h5 className="text-uppercase mb-4 white-text ">Den beste plassen for katten din</h5>
                    
                      <MDBBtn /* outline */ className="round-button" href="/kontakt" color="white" onClick={this.handleClick}>
                          Kontakt
                      </MDBBtn>
                    </MDBAnimation>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </MDBMask>
            
          </MDBView>
          <MDBContainer fluid className="">
                <MDBRow className="py-5 px-4 grey-row">
                    <MDBCol className="order-2 order-sm-1" sm="12" md="6">
                        <p className="home-text">
                            Kattehaugen Hotell ligger på Byneset, ca 30 min fra Trondheim, idyllisk til i rolige omgivelser. 
                            I de 15 årene vi har drevet har vi hatt mange faste gjester som har besøkt oss, ofte flere ganger i året.
                        </p>
                    </MDBCol>
                    <MDBCol className="text-center order-1 order-sm-2" sm="12" md="6">
                      <MDBIcon icon="map-marked-alt" size="5x" className="home-icons" />
                    </MDBCol>
                    
                </MDBRow>
                <MDBRow className="py-5 px-4">
                    <MDBCol className="text-center" sm="12" md="6">
                      <MDBIcon icon="award" size="5x" className="home-icons" />
                    </MDBCol>
                    <MDBCol sm='12' md="6">
                        <p className="home-text">
                            Vi har arbeidet med katter i flere ti-år, vi har vært aktiv på katteutstillinger og har hatt eget oppdrett. 
                            Erfaringene vi har tilegnet oss kommer våre gjester tilgode.
                        </p>
                    </MDBCol>
                </MDBRow>
                <MDBRow className="py-5 px-4 grey-row">
                    <MDBCol className="order-2 order-sm-1" sm='12' md="6">
                        <p className="home-text">
                            Vi har gjennom årene hatt besøk av de fleste katteraser, 
                            og selvsagt også vanlige huskatter. Alle er like verdifulle for oss, og de blir tatt hånd om som om de var våre egne. 
                        </p>
                    </MDBCol>
                    <MDBCol className="text-center order-1 order-sm-2" sm='12' md="6">
                      <MDBIcon icon="cat" size="5x" className="home-icons" />
                    </MDBCol>
                </MDBRow>
                <MDBRow className="pt-5 px-4">
                    <MDBCol className="text-center" sm='12' md="6">
                      <MDBIcon icon="heartbeat" size="5x" className="home-icons" />
                    </MDBCol>
                    <MDBCol sm='12' md="6">
                        <p className="home-text">
                            Kattens helse er noe vi er opptatt av, ikke bare dagens helsetilstand, men også eventuelle tidligere problemer. 
                            Dermed får vi et mer helhetlig bilde av katten vi skal ha ansvaret for. Skulle det oppstå problemer, har vi god 
                            kontakt med veterinær.
                        </p>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            
        </Fragment>
      );
    }
  }

export default Home;