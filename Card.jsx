import React from 'react';
import ReactDOM from 'react-dom';

class Card extends React.Component
{
    constructor(props)
   {
       super(props);
       this.state =  {
            avatar_url: '', 
            login:''
        };
   }
   
  componentDidMount()
  {
      var component = this;
      $.get("https://api.github.com/users/"+this.props.name,function(data){
        component.setState(data);
      });
  }
    render()
    {
        return (
            <div> 
                <img src={this.state.avatar_url} width="80px" />
                <h3>{this.state.login}</h3>
                <hr/>    
            </div>
        );
    }
}

class CardList extends React.Component
{    
   /* Rendering GIT user info using multiple cards. */ 
   /*
   render()
   {
       return(
           <div>
               <Card name="parth611git" />
               <Card name="ketulpatel215" />
               </div>
       );
   }
   */

  /* Rendering GIT users with using login name array */
  /*constructor(props)
   {
       super(props);
       this.state = {
        logins : ['parth611git','ketulpatel215']};
  }
  render()
  {
      var loginNameArr = this.state.logins.map(function(login)
      {
          return <Card name={login} />;
      });

      return (
          <div>
              {loginNameArr}
              </div>);

  }*/

  /* Render Git user info using Form */
  constructor(props)
   {
       super(props);
       this.state = {
        logins : []};
        this.addCard = this.addCard.bind(this);
  }
  addCard(logintoAdd)
  {
    this.setState({logins: this.state.logins.concat(logintoAdd)});
  };
  render()
  {
      var loginNameArr = this.state.logins.map(function(login)
      {
          return <Card name={login} />;
      });

      return (
          <div>
              <Form addCard={this.addCard} />
              {loginNameArr}
              </div>);

  }
}

class Form extends React.Component
{
    
  constructor(props)
   {
       super(props);
       this.handleSubmit = this.handleSubmit.bind(this);
   }
    handleSubmit(e)
    {
        e.preventDefault();
        
        var inputLoginName = ReactDOM.findDOMNode(this.refs.login);
console.log(inputLoginName.value);
        this.props.addCard(inputLoginName.value);
        inputLoginName = "";
    }
    render()
    {
        return(
            <form onSubmit={this.handleSubmit}>
                <input placeholder="git username" ref="login"/>
                <button>Add</button>
                </form>
        );
    }
}
export default CardList;