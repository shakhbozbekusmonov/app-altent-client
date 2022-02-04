import React, {useState} from 'react';

const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-md">
                <div className="container">
                    <a href="#" className="navbar-brand">LOGO</a>

                    <button type="button" className="navbar-toggler">
                        <img src="/images/menu.svg" alt="Logo"/>
                    </button>

                    <div className="collapse navbar-collapse d-flex justify-content-end">
                        <ul className="navbar-nav">
                            <li className="nav-item"><a href="#" className="nav-link font-inter-medium text-white">Sabab</a></li>
                            <li className="nav-item"><a href="#" className="nav-link font-inter-medium text-white">O'quvchilarimiz</a></li>
                            <li className="nav-item"><a href="#" className="nav-link font-inter-medium text-white">Biz haqimizda</a></li>
                        </ul>

                        <select className="form-control select bg-transparent border-0 text-white">
                            <option value="UZB">UZB</option>
                            <option value="EN">EN</option>
                            <option value="RU">RU</option>
                        </select>

                        <button type="button" className="btn btn-warning ml-3"><a href="#" className="text-decoration-none text-white">Contact</a></button>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default NavBar;