import { Component } from "react";

class Users extends Component{

    constructor(props){
        super(props);
        this.state = {
            users:[]
        }
    }
    //Ensure component is rendered before data is loaded
    componentDidMount(){
        fetch('/api/users')
            .then(res => res.json())
            .then(users =>{
                 this.setState({ users: users });
            });

    }
    render() {
        return(
            <ul>
                {
                    this.state.users.map(user => (
                        <li>Username {user.username}, Email: {user.age}</li>
                        ))
                }
        </ul>
        )
    }
}
export default Users;