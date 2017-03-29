import React from 'react';
import './singleview.css';
import {Link} from 'react-router-dom'
import Users from './database/Data.json'
import Select from 'react-normalized-select';
import FontAwesome from 'react-fontawesome'




export default React.createClass({
    getInitialState(){
      return{
      contact: Users.filter(person=>{
        return Number(person.id === Number(this.props.match.params.personId))
      })[0]
    }
    },

    handleBack(e){
      e.preventDefault(),
      this.props.history.goBack()
    },

  render: function(){
    var contact = this.state.contact
    return(

      <div className="singleContainer">

            <button className="button" onClick={this.handleBack}>Back</button>
            <div className="topContainer">
	      			<div className="singleContactImg">
	      			
                <div className="singleContactImg"> 
                  <Link key={'ulist' + contact.id} to={'/'}>
                    <div className="contactImg"> 
                      <img src={contact.picture.large} />
                    </div>
                    
                  </Link>
                </div>
                
	      			</div>
              
                <div className="info">
                    <ul className="singleInfo">
                      <li><i class="fa fa-user" aria-hidden="true">{contact.name.first} {contact.name.last}</i></li>
                      <li>{contact.email}</li>
                      <li>{contact.phone}</li>
                      <li>{contact.location.city} {contact.location.state}</li>
                    </ul>
                </div>
	      		</div>

      </div>
    )
  },
})
