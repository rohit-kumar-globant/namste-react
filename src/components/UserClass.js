import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        console.log('constructor')
        super(props);
        this.state = {
            userInfo: {
                name: 'Rohit',
                location: 'Pune',
                avatar_url: "http://dummy-photo.com"
            }
        }
    }

    async componentDidMount() {
        console.log('component did mount')
        const data = await fetch("https://api.github.com/users/akshaymarch7");
        const json = await data.json();

        this.setState({
            userInfo: json
        })
        console.log(json)
    }
    componentDidUpdate() {
        console.log('component did update')
    }
    componentWillUnmount() {
        console.log('component will unmount')
    }
    render() {
        console.log('render')
        const { name, location, avatar_url } = this.state.userInfo;

        return (
            <div className="user-card">
                <img src={avatar_url} alt="avatar" />
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: 789878893</h4>
            </div>
        )
    }
}

export default UserClass;