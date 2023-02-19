import React from 'react';
export default class FormValidation extends React.
Component{
  state={
      userName:'',
      userFeedback:'',

    };
    changeHandler=(event)=>{
      this.setState({ 
        [event.target.name]:  event.target.value, 
       });
   };
formSubmit=(event) =>{
  //prevent it from submitting a form -default behaviour
  event.preventDefault();
  console.log(his.state);
  let valFlag=this.isValidate();
  if(valFlag){
    console.log('Username cannot be blank');
    }
    this.setState({
      userName:'',
      userFeedback:'',

    });
};
isValidate=() =>{
  let bFlag=false;
  if(!this.state.userName){
    bFlag=true;
  }
  return bFlag;
};
render(){
  return(
    <>
    <h1>Form Validation Demo</h1>
    <form onSubmit={(event)=> this.formSubmit(event)}>
      
      <span>User Name:</span>
      <input 
      name="userName"
      type="text"
      value={this.state.userName}
      onChange={(event)=>this.changeHandler (event)}
      />
      
      <br/>
      
      <span>Feedback:</span>
      <textarea
      name="userFeedback"
      value={this.state.userFeedback}
      onChange={(event)=>this.changeHandler
      (event)}
      />
     
      <br/>
      <buttom type="submit">Click Me</buttom>

      </form>
      </>
      
      
  );
      }
    }