const React = require('react')

const SelectViewComponent = React.createClass({
   getInitialState: function(){
      this.startingState = {
         itemsList: [
            {pid: 123, item: 'milk' },
            {pid: 321, item: 'bread'},
            {pid: 456, item: 'eggs'},
            {pid: 187, item: 'cola'},
            {pid: 713, item: 'milk'}
         ]
      }

      return this.startingState
   },

   render: function(){
      let jsxListEls = this.state.itemsList.map(function(itemEl, i){
        return <GroceryItem key={i} itemData={itemEl}/>

      }) // (1) you need to create the jsx els with .map

      return (
         <div className="container">
            <h2>Grocery List</h2>
            <ul style={{listStyleType: 'none', fontSize: '21px'}}>
               {jsxListEls}
            </ul>
         </div>
      )
   }
})

const GroceryItem = React.createClass({
   getInitialState: function(){
      let stateObj = {
         inInventory: false
      }
      return stateObj
   },

   _changeBackgroundColor: function() {
       let newStateObject = {}
       let currentInventoryStatus = this.state.inInventory;
       console.log("current status: ", currentInventoryStatus);
       if(currentInventoryStatus === false) {
         this.state.inInventory = true;
       } else {
         this.state.inInventory = false;
       }
       newStateObject = {
         inInventory : this.state.inInventory
       }
         this.setState(newStateObject)
   },

   render: function(){

      let styleObj = {padding: '10px 5px', background: '#ddd', marginBottom: '4px', cursor: 'pointer'}

      if(this.state.inInventory === true){
         styleObj.background= 'cadetblue'
      }

      return <li style={styleObj} onClick={this._changeBackgroundColor}>{this.props.itemData.item}</li>
   }
})

module.exports = SelectViewComponent
