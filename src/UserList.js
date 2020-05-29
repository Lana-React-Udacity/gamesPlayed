import React from 'react';

class UserList extends React.Component{
state={
  showNrOfGames:true,

}

  render(){
    let {showNrOfGames}=this.state;
  return( 
    <div> 
    <h2> User List </h2>
    <button onClick={()=> this.setState({showNrOfGames:!this.state.showNrOfGames})}> 
		{showNrOfGames ? "Hide the Number of Games Played" : "Show the Number of Games Played"} 
	</button> 
    
      <ol>
    	{this.props.users.map((user)=>{
    		return <li>{user.userName} played {showNrOfGames ? user.nrOfGames : "*"} games.</li>
  		})}
      </ol>
    </div>
  )
  }
  
}

export default UserList;