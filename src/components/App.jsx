import { Component } from 'react';
import { Layout } from './Layout';
import  FeedbackMain  from './FeedbackMain/FeedbackMain';

export class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };
      
    onLeaveFeedback = option => {
        this.setState(prevState => ({ [option]: prevState[option] + 1 }));
    }
    
    render() {
       // const { good, neutral, bad } = this.state;
        return (
            <Layout>
             <FeedbackMain
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          ></FeedbackMain>
            </Layout>)
    }
}


export default App;