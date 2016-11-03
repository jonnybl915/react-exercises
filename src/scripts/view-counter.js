const React = require('react')

const ViewCounterComponent = React.createClass({

    getInitialState: function() {
        let startingStateObject = {
            upvotes: 0,
            downvotes: 1
        }

        return startingStateObject
    },

    _handleUpVoteClick: function() {

        // let theVoteType = evt.target.dataset.votetype
        // let currentUpVoteCount, updatedUpVotes, newStateObj
        //
        // if(theVoteType === "upvote") {
        //   currentUpVoteCount = this.this.state.upvotes
        //   updatedUpVotes = curren
        //   newStateObj
        // }
        console.log('upVOTED!!!!!')

        let currentUpVoteCount = this.state.upvotes;
        console.log("current upVotes: ", currentUpVoteCount);
        let updatedUpVotes = currentUpVoteCount + 1

        let newStateObj = {
          upvotes: updatedUpVotes
        }

        this.setState(newStateObj)
          console.log("new state object: ", newStateObj)
    },

        _handleDownVoteClick: function() {

            // let theVoteType = evt.target.dataset.votetype
            // let currentUpVoteCount, updatedUpVotes, newStateObj
            //
            // if(theVoteType === "upvote") {
            //   currentUpVoteCount = this.this.state.upvotes
            //   updatedUpVotes = curren
            //   newStateObj
            // }
            console.log('upVOTED!!!!!')

            let currentDownVoteCount = this.state.downvotes;
            console.log("current downvotes: ", currentDownVoteCount);
            let updatedDownVotes = currentDownVoteCount - 1

            let newStateObj = {
              downvotes: updatedDownVotes
            }

            this.setState(newStateObj)
              console.log("new state object: ", newStateObj)
        },

    render: function() {
        return (
            <div>
                <h2 className="bg-info">
                    Thumbs Up or Thumbs Down?
                </h2>
                <div className="counter-container">
                    <p>
                        <i className="fa fa-thumbs-up fa-3x" onClick={this._handleUpVoteClick}></i> <span className="badge" ref="upVoteCount"> {this.state.upvotes} </span>
                    </p>
                    <p>
                        <i className="fa fa-thumbs-down fa-3x" onClick={this._handleDownVoteClick}></i>  <span className="badge" ref="downVoteCount">{this.state.downvotes}    </span>

                    </p>
                    <hr/>
                    <ReactEvaluation finalVoteTally={this.state.upvotes - this.state.downvotes * -1}/>
                </div>
            </div>
        )
    }
})

const ReactEvaluation = React.createClass({
  render: function(){
    let theEvaluationMsg
    console.log("final vote tally: ", this.props.finalVoteTally);
    if ( this.props.finalVoteTally === 0) {theEvaluationMsg = 'they dont care at all'}
    if ( this.props.finalVoteTally > 0) {theEvaluationMsg = 'they dig'}
    if ( this.props.finalVoteTally < 0) {theEvaluationMsg = 'they didnt react well'}


    return <h3 className="bg-warning">{theEvaluationMsg}</h3>
  }
})

module.exports = ViewCounterComponent
