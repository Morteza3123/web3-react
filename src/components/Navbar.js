import {React, useState} from 'react'
import Wallets from './Wallets';

export default function Navbar() {

    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const [isWallet, setIsWallet] = useState(true);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
    const showWallet = () => setIsWallet(!isWallet);


    return (
        
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Web3-React</a>
            <button className="navbar-toggler" onClick={handleNavCollapse} type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item">
                <a className="nav-link " href="#" tabIndex="-1" aria-disabled="true">Link</a>
                </li>
            </ul>
                <Wallets />            
            </div>
        </div>
        </nav>
    )
}
