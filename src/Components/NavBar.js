import React, { useState } from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {FaAlignRight} from 'react-icons/fa'

import logo from '../images/logo.png'


export default function NavBar() {

    const [isOpen, setIsOpen] = useState(false);

    const  handleToggle = () =>{
          setIsOpen(!isOpen);
      }
  
    return (
        <NavBar2>
            <div className="nav-center">
                    <div className="nav-header">
                        <Link to="/">
                            <img src={logo} alt="Beach resort" className='imgLogo'/>
                        </Link>
                        <button type="button" 
                        onClick={handleToggle}
                        className="nav-btn">
                            <FaAlignRight className="nav-icon"/>
                        </button>
                    </div>
                    <ul className={isOpen?"nav-links show-nav":"nav-links"}>
                         <button type="button"  
                        onClick={handleToggle}
                        className="nav-btn2">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                        </button>
                        <button type="button"  
                        onClick={handleToggle}
                        className="nav-btn2">
                            <li>
                                <Link to="/clases">Comunidad</Link>
                            </li>
                        </button>
                        <button type="button"  
                        onClick={handleToggle}
                        className="nav-btn2">
                            <li>
                                <a>
                                    Contacto
                                </a>
                            </li>
                        </button>
                        <button type="button"  
                        onClick={handleToggle}
                        className="nav-btn2">
                            <li>
                                <a>
                                    Descarga
                                </a>
                            </li>
                        </button>
                        
                    </ul>
                </div>
        </NavBar2>
    )
}

const NavBar2 = styled.div`
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        padding: 0.75rem 0.20rem;
        z-index: 1;
        
        :hover{
            color: #A8C813; 
        }

        .imgLogo{
            margin-top: 10px;
            height: 30px;
        }

        .nav-header {
            display: flex;
            justify-content: space-between;
            }

        .nav-btn {
            background: transparent;
            border: none;
            cursor: pointer;
            outline: none;
            }
            .nav-btn2 {
                display:block;
                background: transparent;
                border: none;
                cursor: pointer;
                outline: none;
                text-align:center;
            }
        .nav-icon {
            font-size: 1.5rem;
            color: #fff;
            }
        .nav-links {
            height: 0;
            overflow: hidden;
            transition: all 0.3s linear;
            list-style-type: none;
        }
        .nav-links a {
            font-family: 'Montserrat', sans-serif!important;
            font-style: italic;
            font-size: 28px;
            text-decoration: none;
            padding: .5rem 0;
            color: #A8C813;
            transition: all 0.3s linear;
            text-align: right;
            /* font-size: 1rem; */
            font-weight: 400;
            letter-spacing: 1px;
            font-weight: 400;
            }
            .nav-links a:hover {
                color: #fff; 
            cursor: pointer;
            }

            .show-nav {
            height: 150px;
            }

            /* Cuando no es para dispositivos moviles */

        @media screen and (min-width: 768px){
            .nav-btn {
                display: none;

            }

            .imgLogo{
                    margin-top: 10px;
                    height: 50px;
                }
            .nav-btn2 {
                background: transparent;
                border: none;
                outline: none;
                text-align:center;
                cursor: pointer;
            }
            .nav-center {
                max-width: 1170px;
                margin: 0 auto;
                display: flex;
                justify-content: space-between;
                
            }
            .nav-links {
                height: auto;
                display: flex;
                margin-left: 2rem;
            }
            .nav-links a {
                margin: 0 1rem;
                padding: 0.5rem 0;
            }
        }
`