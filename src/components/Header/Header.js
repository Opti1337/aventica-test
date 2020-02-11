import React from 'react';

function Header(props) {
    let count = props.items.filter(item => item.flag).length;

    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="/">Aventica</a>
            <div className="ml-auto">
                <span className="navbar-text">{count}</span>
            </div>
        </nav>
    );
}

export default Header;