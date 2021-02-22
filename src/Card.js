import React from 'react'

function Card(props) {

        return (
            <React.Fragment>
            <section>
                <img src={props.imgName} />
                <div className="card-text">
                    <h2>{props.cardTitle}</h2>
                    <p>{props.cardText}</p>
                </div>
                </section>
            </React.Fragment>
        )

}

export default Card