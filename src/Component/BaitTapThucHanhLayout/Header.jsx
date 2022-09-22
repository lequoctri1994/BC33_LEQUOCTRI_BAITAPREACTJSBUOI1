import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            
            <div className='text-light'>
                <nav className="bg-dark navbar navbar-expand-sm navbar-light">
                    <div className='container'>
                    <div className='text-light'>
                        Start Bootstrap
                    </div>
                    <div className="navbar">
                        <a className="navbar-brand text-light" href="#">Home</a>
                        <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="collapsibleNavId">
                            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active text-light" href="#" aria-current="page">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-light" href="#">Contact</a>
                                </li>                                
                            </ul>
                            
                        </div>
                    </div>
                    </div>
                   
                    
                </nav>
            </div>

        )
    }
}
