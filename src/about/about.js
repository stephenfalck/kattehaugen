import React, { Fragment } from 'react';
import { MDBContainer , MDBRow, MDBCol } from "mdbreact";
import paperImage1 from '../assets/images/paperimage1.jpg';
import Header from '../header';
import './about.css';

const About = () => {
    return (
        <Fragment>
            <Header id="about-header" title="Om Oss" />
            <MDBContainer id="about-page" className="pt-5">
                <MDBRow>
                    <MDBCol lg="5" xs="12" >
                    <h3><strong>Bakgrunnen vår</strong></h3>
                        <p>Vi åpnet kattehotellet i 2005, og har et anlegg med egne rom for kattene og med egne utegårder tilknyttet hvert rom. Der har kattene 2-3 benker og klatre-/kloretre.</p>
                        
                        <p>Katter er ikke flokkdyr, og vår teori er at de føler seg tryggere i nye omgivelser når de slipper å konkurrere om plassen med andre katter.</p>
                        
                        <p>Siden starten har vi hatt mange trofaste gjester, som tydelig kjenner seg igjen når de kommer tilbake år etter år.</p>
                    </MDBCol>
                    <MDBCol lg="7" xs="12" >
                        <img src={paperImage1} className="gallery-photo" alt="Elin Falck utenfor kattehotellet"/>
                    </MDBCol>
                    </MDBRow>
                    <MDBRow className="mt-3">
                    <MDBCol sm="12" lg="6">
                        <h3><strong>Vi tilbyr katten din:</strong></h3>
                        <ul>
                            <li>lang erfaring med katter og kattestell</li>
                            <li>enklere medisinering ved behov (de fleste katter godtar denne behandlingen)</li>
                            <li>førsteklasses tørrfôr , og bløtmat/fisk 3-4 gang i uken</li>
                            <li>kontakt med veterinær ved behov</li>
                            <li>og ikke minst:  god omsorg og kos mens den er på besøk!</li>
                        </ul>
                        
                        
                        <p>Vi er godkjent av Mattilsynet.</p>
                        
                        <p>Våre kattegjester og deres eiere er vår beste garanti for et godt opphold for katten din!</p>
                    </MDBCol>
                    <MDBCol sm='12' lg='6'>
                        <h3><strong>Kattehaugen i media</strong></h3>
        
                        <p>Adresseavisa: <a className="media-link" href="https://www.adressa.no/forbruker/article1661116.ece" target="_blank" rel="noopener noreferrer">Uansvarlig å ha katten hjemme i ferien</a></p>
                        <p>Sosiale medier: <a className="media-link" href="https://www.facebook.com/Kattehaugen-Hotell-175133246186790/" target="_blank" rel="noopener noreferrer">Våre Facebookside</a></p>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </Fragment>
    )
}

export default About;