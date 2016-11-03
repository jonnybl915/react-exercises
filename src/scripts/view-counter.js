const React = require('react')


const ViewCounterComponent = React.createClass({

getInitialState: function(){
  
}





  render: function(){
    return (
      <div>
        <h2 className="bg-info"> Thumbs Up or Thumbs Down? </h2>
        <p> <i className="fa fa-thumbs-up fa-3x">  </i> <span className="badge"> {this.state.upvotes} </span> </p>
        <p> <i className="fa fa-thumbs-down fa-3x">  </i> <span className="badge"> 0 </span> {this.state.downvotes}  </p>
      </div>
    )
  }
})


module.exports = ViewCounterComponent
