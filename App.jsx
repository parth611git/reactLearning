import React from 'react';

class App extends React.Component{
       constructor(props)
   {
       super(props);
       this.state = {counter :1};
      this.handleClick = this.handleClick.bind(this);
   }
   handleClick() {
       this.setState({counter : this.state.counter+1});       
   }
    render()
    {
        return(
            <div>
                <Button locaHandleClick = {this.handleClick}/>
                <Result localCounter = {this.state.counter}/>
                </div>
        );
    }
}
class Button extends React.Component {
    render() {
      return (
         <div>
            Hello World...!!!
            <button onClick={this.props.locaHandleClick}>+1</button>
            
         </div>		 
      );
   }
}

class Result extends React.Component
{
    render()
    {
        return(
            <div>{this.props.localCounter}</div>
        );
    };
}

export default App;