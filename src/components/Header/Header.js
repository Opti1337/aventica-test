import React from 'react';

function Header(props) {
    let count = props.items.filter(item => item.flag).length;

    return (
        <nav className="navbar navbar-dark bg-dark shadow-sm">
            <div className="container">
                <a className="navbar-brand" href="/">Aventica</a>
                <div className="ml-auto">
                    <span className="badge badge-pill badge-light">{count}</span>
                </div>
            </div>
        </nav>
    );
}

export default Header;