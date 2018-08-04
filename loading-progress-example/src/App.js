import React, { Component } from 'react';
import LoadingProgress from 'react-js-loading-progress-bar';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      total: 523
    };
    this.changeProgressBar();
  }

  timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async changeProgressBar(){
    for (let i = 0 ; i < this.state.total ; i++){
      await this.timeout(100);
      await this.setState({current: i+1});
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">react-js-loading-progress Component</h1>
        </header>

        <h1> Full mode: </h1>
          <div>
            <LoadingProgress
              active={true}
              total={this.state.total}
              current={this.state.current}
            />
          </div>
        <h1> Compact mode: </h1>
          <div>
            <LoadingProgress
              active={true}
              total={this.state.total}
              current={this.state.current}
              showCompact
              
            />
          </div>

        <h1> Throbber mode: </h1>
        <div>
          <LoadingProgress
            useSpinner
            active={true}
            total={this.state.total}
            current={this.state.current}
          />
        </div>

        <h1> Visual only Throbber mode: </h1>
        <div>
          <LoadingProgress
            useSpinner
            visualOnly
            active={true}
            total={this.state.total}
            current={this.state.current}
          />
        </div>

        <h1> Visual only Bar mode: </h1>
        <div>
          <LoadingProgress
            visualOnly
            active={true}
            total={this.state.total}
            current={this.state.current}
          />
        </div>

      </div>
    );
  }
}

export default App;
