const Backbone = require('backbone')
const React = require('react')
const ReactDOM = require('react-dom')
//======================
// React View Imports
const ViewCounterComponent = require('./view-counter.js');
const SelectView = require('./view-selector.js')
const AppRouter = Backbone.Router.extend({

   routes: {
      "counter" : "showCounter",
      "select" : "showSelect",
      "" : "showHomeView"
   },

   showCounter: function(){
     ReactDOM.render( <ViewCounterComponent/> , document.querySelector('#app-container') )
   },
   showSelect: function(){
     ReactDOM.render( <SelectView/>, document.querySelector('#app-container') )
   },

   showHomeView: function(){
     document.querySelector( '#app-container').innerHTML = `<i class= fa fa-thumbs-up fa-5x></i>`
   },

   initialize: function(){
      Backbone.history.start()
   }
})


new AppRouter()
