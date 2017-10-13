import React from 'react';

import './App.less';
import styles from './App.modules.less';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <h1 className={styles.title}>dva-scaffolding</h1>
        <p>Welcome to index ...^__^...</p>
      </div>
    );
  }
}

export default App;
