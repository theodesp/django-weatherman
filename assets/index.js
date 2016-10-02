const React = require('react')
const ReactDOM = require('react-dom')


const App = React.createClass({
   render: function(){
       return <h1>Hello, world.</h1>
   }
})

ReactDOM.render(<App/>, document.getElementById('app'))