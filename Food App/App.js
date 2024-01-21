import React from "react";
import ReactDOM from "react-dom/client"

const Header = () => {
    return (
        <div className="nav-items">
            <img src="data:image/png;base64,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" />
            <div className="nav-tags">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const Card = (props) => {
    const {source, name, time, rating} = props;
    return (
        <div className="res-card">
            <img src={source}/>
            <h2>{name}</h2>
            <h3>{time}</h3>
            <h3>{rating}</h3>
        </div>
    )
}

const Body = () => {
    return (
        <div>
            <p>Search</p>
            <div className="cards">
                <Card  source="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2b4f62d606d1b2bfba9ba9e5386fabb7" name="Domino's Pizza" time="15 minutes" rating="4.2 stars"/>
                <Card source="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/f01666ac73626461d7455d9c24005cd4" name="KFC" time="12 minutes" rating="4.3 stars"/>
                <Card source="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/e33e1d3ba7d6b2bb0d45e1001b731fcf" name="Burger King" time="25 minutes" rating="4.1 stars"/>
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="">
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);