import User from "./User"
import UserClass from "./UserClass"
import { Component } from 'react'
class About extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
    }

    render() {

        return (
            <div>
                {/* <User name="Rohit (Functional)" /> */}
                <UserClass name="Rohit (class)" location={"Pune (class)"} />
            </div>
        )
    }
}

export default About