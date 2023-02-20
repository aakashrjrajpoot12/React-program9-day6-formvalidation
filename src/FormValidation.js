import React from 'react';
export default class FormValidation extends React.
Component{
  state={ //step2 value will be updated to userName, userFeedback
      userName:'',
      userFeedback:'',

    };
    changeHandler=(event)=>{
      this.setState({ 
        [event.target.name]:  event.target.value, //step4 here .name can be userFeedback/userName and .value is the value which we provide in inside.name
       });
   };
formSubmit=(event) =>{//step6
  //prevent it from submitting a form -default behaviour
  event.preventDefault();
  console.log(this.state);
  let valFlag=this.isValidate();//step7 go to line 28
  if(valFlag){ //step9
    console.log('Username cannot be blank');//step10 if you kept Username empty then this msg would be displayed 
    //Step11 check console
    }
    this.setState({
      userName:'',
      userFeedback:'',

    });
};
isValidate=() =>{        // step8 this method is called to check 
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
      value={this.state.userName}//step1
      onChange={(event)=>this.changeHandler (event)}//Step3 :whenever you are changing value of username onChange would be called and it will update the state this.setState(line 22) ,after that go to .changehandler line 9
      />
      
      <br/>
      
      <span>Feedback:</span>
      <textarea
      name="userFeedback"
      value={this.state.userFeedback}
      onChange={(event)=>this.changeHandler(event)}
      />
     <br/>
     {/* step5: when we click on click me buttton it will go to fromsubmit */}
      
      <input type="submit" value="Click Me" />

      </form>
      </>
      
      
  );
      }
    }