import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                name: "dummy"
            }
        }
    }
    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/Ayush-singh3662");
        const json = await data.json();
        this.setState({
            userInfo: json
        })
    }
    render() {
        const {name, avatar_url} = this.state.userInfo;
        return (
            <div className="user-card">
                <img src={avatar_url}></img>
                <h2>{name}</h2>
                <h3>Kolkata</h3>
            </div>
        )
    }
}

export default UserClass;