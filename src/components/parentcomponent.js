import React from 'react';
import '../styles/App.css';
import ChildComponent from './childcomponent';
import DisplayComponent from './displaycomponent';
import { Form, FormGroup, Input} from 'reactstrap';

export default class ParentComponent extends React.Component {
  constructor(props){
    super(props);

    //we are really in a *bind* here.... :)
    //fix it...

    //state lives here
    this.state = {
      whatToSay: "",
      whatWasSaid: ""
    }
  }

  handleInput = (e) => {
    e.preventDefault();
    //set the state on input change
    this.setState({whatToSay: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    //check console to see if firing
    console.log("fired");
    //set the state for props and for value (prevents output from appearing when typing)
    this.setState({
    //clear our input by resetting state
      whatToSay: '',
      whatWasSaid: this.state.whatToSay,
    });

  }

  render() {
    return (
    <div>
      {/*Smart Component: I have a function, but something isn't working? I also need to pass that function to the ChildComponent.*/}
      <Form>
        <FormGroup>
          <Input id="exampleEmail" value={this.state.whatToSay} onChange={this.handleInput} type="text" placeholder="Say It, Don't Spray It!"  />
        </FormGroup>
        <div>
        </div>
        <div>
          <ChildComponent onClick={this.handleSubmit}/>
          <DisplayComponent sayWhat={this.state.whatWasSaid} />
        </div>
     </Form>
    </div>
    );
  }
}
