import React, { Fragment } from 'react';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Header from '../header';
import bewarePic from '../assets/images/hotel/beware-pic.jpg';
import './conditions.css';

const Conditions = () => {
    return (
        <Fragment>
            <Header id="conditions-header" title="Betingelser" />
            <MDBContainer id="conditions-page" className="pt-5">
                <MDBRow>
                    <MDBCol lg='5'>
                    <h3><strong>Ta Med</strong></h3>
                    <ul>
                        <li>
                            Vaksinasjonsattest (NB! Er det mer enn 1 år siden katten ble vaksinert 
                            må den revaksineres senest 14 dager før ankomst!) <strong>(Attesten skal 
                                oppbevares hos oss under oppholdet i tilfelle kontroll)</strong>
                        </li>
                        <li>
                            Pledd eller seng
                        </li>
                        <li>
                            P-piller hvis nødvendig
                        </li>
                        <li>
                            Eventuelt diettfor/spesielfor (reduserer ikke døgnprisen)
                        </li>
                        <li>
                            <strong>Vi anbefaler å ta med et par kopper av det tørrforet som brukes 
                            hjemme.</strong> Enkelle katter kan reagere på bra endring av foret og i 
                            verste fall få diare
                        </li>
                    </ul>
                    </MDBCol>
                    <MDBCol lg='7' className="mb-3">
                        <img src={bewarePic} alt="'Beware of cat' skilt" className="gallery-photo"/>
                    </MDBCol>
                    <MDBCol size='12'>
                    <h3><strong>Åpningstider</strong></h3>
                    <p>
                        Levering og henting av katter alle dager mellom <strong>kl 1700 - 1900 hvis ikke 
                            annet er avtalt!</strong>
                    </p>
                    <p>
                        Telefoniske henvendelser alle dager <strong>kl 1100 - 2100.</strong> 
                    </p>
                    <p>
                        <strong>Vennligst overhold åpningstiden! Ta kontakt hvis dere av en eller annen grunn 
                            blir forsinket!</strong>
                    </p>

                    <h3><strong>Sykdom under oppholdet</strong></h3>
                    <p>
                        Skulle det blie behov for veterinærbehandling mens katten er hoss oss, blir utgiftene 
                        belastet eier hvis det ikke skyldes skade some er skjedd under oppholdet. I tillegg 
                        blir kjøring t/r veterinær belastet
                    </p>

                    <h3><strong>Eventuell Avbestilling</strong></h3>
                    <ul>
                        <li>
                            Hvis katten hentes før eller leveres senere enn avtalt, betales allikevel for hele 
                            den reserverte periode. <u>Unntak er hvis det blir gitt beskjed senest 10 dager før 
                                avtalt ankomst.</u>
                        </li>
                        <li>
                            <strong>Ved full avbestilling</strong> senere enn 10 dager før avtalt ankomst 
                            <u> betales et gebyr på 500 kr.</u>
                        </li>
                    </ul>
                    </MDBCol>
                    <MDBCol size='12' className="mt-4">
                    <h4 className="text-center" id="welcome-text"><strong>Vi ønsker HJERTELIG VELKOMMEN til Kattehaugen!</strong></h4>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </Fragment>
    )
}

export default Conditions;