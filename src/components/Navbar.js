import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'
const List = styled.li`
    margin-right:2rem;
    text-decoration: none;
`
const Navbar = () => {
    return (
        <div>
            <nav>
                <ul className="navbar-item">
                    <List>
                        <Link to="/" activeClassName="active-nav">
                            corona-tracker
                        </Link>
                    </List>
                    <List>
                        <Link to="/" activeClassName="active-nav">Home</Link>
                    </List>
                    <List>
                        <Link to="/link">Helpful links</Link>
                    </List>
                    <List>
                        <Link to="/faq">faq</Link>
                    </List>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;