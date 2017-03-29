import React from 'react';
import SingleView from './SingleView'
import ListView from './ListView'
//import Users from './database/Data.json'
import {BrowserRouter, Route, Link} from 'react-router-dom'


// console.log(Users[0].name.first)
const Contacts =  React.createClass({
 

  render: function(){
    return(

     
    <BrowserRouter>
      <div className="appContainer">
        

        <Route exact={true} path="/" component={ListView} />
        <Route path="/SingleView/:personId" component={SingleView} />
      </div>
    </BrowserRouter>
    )
  },
})

export default Contacts


