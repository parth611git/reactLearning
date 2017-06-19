import React from 'react';


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
   render()
   {
       return(
           <div>
               <Card name="parth611git" />
               <Card name="ketulpatel215" />
               </div>
       );
   }

}
export default CardList;