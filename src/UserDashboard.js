import React from 'react';
import UserForm from './UserForm';
import UserList from './UserList';

class UserDashboard extends React.Component{
  state = {
    users: [],
  }

  onAdd = (user) => {
    this.setState({
    	users: [...this.state.users, user]
    })
  }
  
  
  
  render(){
  
    return(
      <div>
      	<UserForm onAdd={this.onAdd} users={this.state.users}/>
      	<UserList users={this.state.users}/>
      </div>
    
    )
  }

}

export default UserDashboard; 