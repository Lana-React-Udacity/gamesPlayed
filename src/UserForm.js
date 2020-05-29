import React from 'react';

class UserForm extends React.Component{
  state={
    firstName:"",
    lastName:"",
    userName:"",
    nrOfGames: 0,
	userNameError:false,
  }
  

  onSubmit = (event) => {
    event.preventDefault()
    this.props.onAdd({
    	firstName:this.state.firstName,
    	lastName:this.state.lastName,
      	userName:this.state.userName,
      	nrOfGames:this.state.nrOfGames,
    })
    this.setState({
      firstName:"",
      lastName:"",
      userName:"",
      userNameError:false,
    })
    
  }

  setUserName = (event) => {
    let foundUser = this.props.users.find((user)=> user.userName === event.target.value)
    this.setState({
      userName: event.target.value,
      userNameError: foundUser != null
    })
  }

  render(){
    let {firstName, lastName, userName, userNameError}= this.state
    
	let disabled=(firstName.length === 0 || lastName.length === 0 || userName.length === 0 || userNameError === true);
	

    return(
      <div>
       
       <form onSubmit={this.onSubmit} >
       
       <label type="text" name="name"> First Name: 
       <input 
       		value={firstName} 
      		onChange={(e)=>this.setState({ firstName : e.target.value })}
		/> 
		</label> <br/>
       
	   <label type="text" name="name"> Last Name: 
       <input 
			value={lastName} 
			onChange={(e)=>this.setState({ lastName : e.target.value })}
		/>
		</label><br/>

	   <label type="text" name="name"> User Name: 
       <input 
			value={ userName } 
			onChange = { this.setUserName }
		/>
		</label><br/> 

		{userNameError && <p style={{color:"red"}}> Please enter a different user name </p>}

	   <input type="submit" value="Add User" disabled={disabled}/>
	  </form>
       
     </div>
    )
    
  }

}

export default UserForm; 