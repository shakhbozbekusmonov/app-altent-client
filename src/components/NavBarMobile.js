import * as React from "react";
import "./Navbar.scss";
import {Link} from 'react-router-dom';

// eslint-disable-next-line no-unused-vars
class NavBarMobile extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Button/>
                <Navigation/>
            </div>
        );
    }
}

// eslint-disable-next-line no-undef
class Button extends React.Component {
    constructor(props) {
        super(props);
        Button.handleClick = Button.handleClick.bind(this);
    }

    static handleClick() {
        const hamburger = document.querySelector('.hamburger');
        const nav = document.querySelector('.navigation');
        hamburger.classList.toggle('hamburger--active');
        nav.classList.toggle('navigation--active');
    }

    render() {
        return (
            <div className="d-flex justify-content-between align-items-center w-100 pl-3 pr-3 mt-2 d-md-none d-block">
                <button className="hamburger" onClick={Button.handleClick}>
                    <span className="hamburger__box">
        <span className="hamburger__inner"/>
      </span>
                </button>

                <div className="d-flex align-items-center">
                    <Link to="/" className="navbar-brand font-poppins-regular">Altent<span
                        className="font-poppins-semibold text-primary">.</span></Link>

                    <button type="button" className="nav-item btn btn-primary border-0">
                        <Link to="/contact" className="text-decoration-none text-white font-montserrat-semibold">Contact</Link>
                    </button>
                </div>
            </div>
        );
    }
}


const Navigation = () => {
    return (
        <div className="navigation">
            <ul className="navigation__list">
                <div className="d-flex justify-content-between align-items-center">
                    <Link to="/" className="navbar-brand font-poppins-regular">Altent<span
                        className="font-poppins-semibold text-primary">.</span></Link>
                </div>
                <div className="line bg-white w-100 mt-3"></div>
                <li className="navigation__item font-inter-medium mt-4"><Link to="/"
                                                                           className="hamburger d-block d-sm-none"
                                                                           onClick={Button.handleClick}>Sabab</Link></li>
                <li className="navigation__item font-inter-medium"><Link to="/portfolio"
                                                                      className="hamburger d-block d-sm-none"
                                                                      onClick={Button.handleClick}>O'quvchilarimiz</Link></li>
                <li className="navigation__item font-inter-medium"><Link to="/about"
                                                                      className="hamburger d-block d-sm-none"
                                                                      onClick={Button.handleClick}>Biz haqimizda</Link></li>
            </ul>
        </div>
    )
};

export default NavBarMobile;