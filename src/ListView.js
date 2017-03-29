import React from 'react';
import './listview.css';
import Users from './database/Data.json'
import { Link} from 'react-router-dom'
import Select from 'react-normalized-select';





export default React.createClass({
	  getInitialState: function() {
    return{
 
  }

},

  render: function(){
    return(
	    <div className="contactContainer">
		   
	      	<div className="peeps">
	      		<p className="listTitle">My Peeps</p>
	      	</div>

	      		<div className="contact_list">
	      		<ul className="ulContain">
	      			
	      			{Users.map(function(user){   
	      				return(
	      				<div className="contactName" key={"ulist" + user.id}>
	      					<li className="contactImg">
	      						<Link to="/SingleView/ + user.id"><img src={user.picture.thumbnail} alt=""/></Link>
	      					</li>
	      					<li className="contactsList" key={"ulist" + user.id}><Link to={"/SingleView/" + user.id}>{user.name.first + " " + user.name.last}</Link></li>
	      				</div>
	      				)

	      			})}

	      		</ul>
	      		</div>
	     </div>
    )
  },
})
