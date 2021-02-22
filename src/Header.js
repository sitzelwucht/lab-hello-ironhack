import React from 'react'

class Header extends React.Component {

    render() {
        return (
            <React.Fragment>
                 <div className="header">
                 <div className="top">
                    <img src="./images/ironhack-logo.svg" width="80" />
                    <img src="./images/menu-top.svg" width="30" />
                 </div>
                 <div className="bottom">
                    <div className="left">
                        <div className="header-text">
                        <h1>Say hello to ReactJS</h1>
                        <p className="subtext">You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
                        </div>
                        <button>Awesome!</button>
                    </div>
                    <div className="right">
                        <img src="./images/react-logo.svg" width="160" />
                        <img src="./images/react-logo.svg" width="200" />
                        <img src="./images/react-logo.svg" width="275" />
                    </div>
                </div>
            </div>
            </React.Fragment>
        )
    }
}

export default Header