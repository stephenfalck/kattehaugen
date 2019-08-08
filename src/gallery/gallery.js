import React, { Fragment } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";
import './gallery.css';
import Header from '../header';
import image1 from '../assets/images/IMG_0001 (1).JPG';
import hotelImage2 from '../assets/images/hotel/IMG_0004.JPG';
import hotelImage3 from '../assets/images/hotel/IMG_0007.JPG';
import hotelImage4 from '../assets/images/hotel/IMG_0008.JPG';
import hotelImage5 from '../assets/images/hotel/IMG_2999.jpeg';
import hotelImage6 from '../assets/images/hotel/IMG_2998.jpeg';
import catImage1 from '../assets/images/cat-guests/IMG_0005.JPG';
import catImage2 from '../assets/images/cat-guests/IMG_0012.JPG';
import catImage3 from '../assets/images/cat-guests/IMG_0015.JPG';
import catImage4 from '../assets/images/cat-guests/IMG_0040.JPG';
import catImage5 from '../assets/images/cat-guests/IMG_0041.JPG';
import catImage6 from '../assets/images/cat-guests/IMG_0087.JPG';
import catImage7 from '../assets/images/cat-guests/IMG_0096.JPG';
import catImage8 from '../assets/images/cat-guests/IMG_0011.JPG';
import catImage9 from '../assets/images/cat-guests/IMG_0009.JPG';
import catImage10 from '../assets/images/cat-guests/IMG_0155.JPG';

class Gallery extends React.Component {
    state = {
        activeItemJustified: "1"
      }

      toggleJustified = tab => e => {
        if (this.state.activeItemJustified !== tab) {
          this.setState({
            activeItemJustified: tab
          });
        }
      };


    render() {
        const hotelPictures = [
            { id: 1, image: image1, alt: "Kattehaugen fra utsiden" },
            { id: 2, image: hotelImage3, alt: "Innsiden med hotell rommene" },
            { id: 3, image: hotelImage2, alt: "Utendørs lekeområde for kattene" },
            { id: 4, image: hotelImage4, alt: "Utendørs lekeområde for kattene" },
            { id: 5, image: hotelImage5, alt: "Bilde av innsiden av katte rommet" },
            { id: 6, image: hotelImage6, alt: "Bilde av innsiden av katte rommet" },
        ]

        const catPictures = [
            { id: 1, image: catImage1, alt: "Katt inni katte rommet" },
            { id: 2, image: catImage2, alt: "Orange og hvit katt i lekeområde sitt" },
            { id: 3, image: catImage3, alt: "To katter hilse på hverandre i hotellet" },
            { id: 4, image: catImage4, alt: "Katt som hvile seg på bengken i lekeområdet" },
            { id: 5, image: catImage5, alt: "To katter leker i gresset" },
            { id: 6, image: catImage6, alt: "Langhåret grå katt" },
            { id: 7, image: catImage7, alt: "En katt som ligger på senga sitt" },
            { id: 8, image: catImage8, alt: "En katt som ligger på senga sitt" },
            { id: 9, image: catImage9, alt: "Nysgjerrig katt som ser inn på kamera" },
            { id: 10, image: catImage10, alt: "Hvit og grå katt" },
        ]
        return (
            <Fragment>
                <Header id="gallery-header" title="Galleri" />
                <MDBContainer className="pt-5" id="gallery-page">
                    <MDBNav tabs className="nav-justified gallery-tabs" color='indigo'>
                        <MDBNavItem>
                            <MDBNavLink className="tab-links" to="#" active={this.state.activeItemJustified === "1"} onClick={this.toggleJustified("1")} role="tab" >
                                Hotellet
                            </MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink className="tab-links" to="#" active={this.state.activeItemJustified === "2"} onClick={this.toggleJustified("2")} role="tab" >
                                Våre gjester
                            </MDBNavLink>
                        </MDBNavItem>
                    </MDBNav>
                    <MDBTabContent
                    className="pt-5 p-3"
                    activeItem={this.state.activeItemJustified}
                    >
                    <MDBTabPane tabId="1" role="tabpanel">
                        <MDBContainer>
                            <MDBRow>
                                {hotelPictures.map(picture => (
                                    <MDBCol size="12" sm="6" className="mb-3" key={picture.id}>
                                        <img src={picture.image} alt={picture.alt} className="gallery-photo" />
                                    </MDBCol>
                                ))}
                            </MDBRow>
                        </MDBContainer>
                    </MDBTabPane>
                    <MDBTabPane tabId="2" role="tabpanel">
                        <MDBContainer>
                            <MDBRow>
                                {catPictures.map(picture => (
                                    <MDBCol size="12" sm="6" className="mb-3" key={picture.id}>
                                        <img src={picture.image} alt={picture.alt} className="gallery-photo" />
                                    </MDBCol>
                                ))}
                            </MDBRow>
                        </MDBContainer>
                    </MDBTabPane>
                    </MDBTabContent>
                </MDBContainer>
            </Fragment>
        )
    }
}

export default Gallery;