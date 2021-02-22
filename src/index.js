import React from 'react'
import ReactDOM from 'react-dom'
import '../src/style.css'
import Card from './Card'
import Header from './Header'

class App extends React.Component {

    render() {
        return (
            <React.Fragment>
            <div className="container">
               <Header />
               <div className="cards">
                <Card imgName="./images/icon1.png" cardTitle="Declarative" cardText="React makes it painless to create interactive UIs." />
                <Card imgName="./images/icon2.png" cardTitle="Components" cardText="Build encapsulated components that manage their state." />
                <Card imgName="./images/icon3.png" cardTitle="Single-Way" cardText="A set of immutable values are passed to the components." />
                <Card imgName="./images/icon4.png" cardTitle="JSX" cardText="Statically typed, designed to run on modern browsers." />
               </div>
            </div>
            </React.Fragment>
        )
    }
}



ReactDOM.render(<App />, document.querySelector('#root'))