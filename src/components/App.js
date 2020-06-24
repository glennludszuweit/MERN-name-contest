import React, { Component } from 'react';
import Header from './Header';
import ContestPreview from './ContestPreview';

class App extends Component {
  state = {
    pageHeader: 'Naming Contests',
    contests: [
      {
        id: 1,
        categoryName: 'Business/Company',
        contestName: 'Cognitive Building Bricks',
      },
      {
        id: 2,
        categoryName: 'Magazine/Newsletter',
        contestName: 'Educating people about sustainable food production',
      },
      {
        id: 3,
        categoryName: 'Software Component',
        contestName: 'Big Data Analytics for Cash Circulation',
      },
      {
        id: 4,
        categoryName: 'Website',
        contestName: 'Free programming books',
      },
    ],
  };

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <div className='App'>
        <Header message={this.state.pageHeader} />
        <div>
          {this.state.contests.map((contest) => (
            <ContestPreview {...contest} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
