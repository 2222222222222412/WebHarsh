 
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import FirstComponent from './component/Learning-Example/firstComponent'
import React,{ Component } from 'react';
import Counter from './component/Counter/Counter'
import TodoApp from './component/todo/TodoApp'
import './bootstrap.css';
 
class  App extends Component {
   render(){
  return(
    <div className="App">
    
        <TodoApp></TodoApp>
      
    </div> 
  );
}
}

class LearningComponent extends Component{
   render() {
     return (
      <div className="learningcomponent">
          My Hello World
          <FirstComponent/>
          <Counter></Counter>
      </div>
     );
   }
}




export default App;
