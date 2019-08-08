import React from 'react';
import './navbar.css';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, 
    MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBContainer } from "mdbreact";
import logo from '../assets/logo/Kattehaugen Logo 2 White.png'

    class Navbar extends React.Component {
        state = {
            collapsed: false
          };
        
          handleTogglerClick = () => {
            this.setState({
              collapsed: !this.state.collapsed
            });
          };

          setCollapsed = () => {
              this.setState({
                  collapsed: false
              })
          }

          render() {
            const overlay = (
                <div
                  id="sidenav-overlay"
                  style={{ backgroundColor: "transparent" }}
                  onClick={this.handleTogglerClick}
                />
            );
            return (
                <div>
                    <MDBNavbar
                        color="default-color" 
                        dark
                        expand="md"
                        fixed="top"
                        scrolling
                        transparent
                    >
                        <MDBContainer>
                            <MDBNavbarBrand /* className="mb-1" */>
                            <img src={logo} alt="Kattehaugen logo" id="logo"/>
                            </MDBNavbarBrand>
                            <MDBNavbarToggler onClick={this.handleTogglerClick} />
                            <MDBCollapse isOpen={this.state.collapsed} navbar>
                                <MDBNavbarNav right>
                                    <MDBNavItem>
                                        <MDBNavLink exact to="/" onClick={this.setCollapsed}>Hjem</MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink to="/om-oss" onClick={this.setCollapsed}>Om oss</MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink to="/betingelser" onClick={this.setCollapsed}>Betingelser</MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink to="/galleri" onClick={this.setCollapsed}>Galleri</MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink to="/kontakt" onClick={this.setCollapsed}>Kontakt</MDBNavLink>
                                    </MDBNavItem>
                                </MDBNavbarNav>
                            </MDBCollapse>
                        </MDBContainer>
                    </MDBNavbar>
                    {this.state.collapsed && overlay}
                </div>
            )
          }
    }

    export default Navbar;