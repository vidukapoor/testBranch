import styles from './App.css';

import React, { Component } from 'react';

import Logo from './0-Logo/Logo';

export default class App extends Component {

  render() {
    return (
      <div className={styles.app}>
        <Logo />
        <h1>CSS Modules Webpack Demo</h1>
        <h2 className={styles.center}> kapoor </h2>
        <hr className={styles.hr} />

        <h2>Scoped Selectors</h2>
        <p>In CSS Modules, selectors are scoped by default.</p>
        <p>The following component uses two classes, <strong>.root</strong> and <strong>.text</strong>, both of which would typically be too vague in a larger project.</p>
        <p>CSS Module semantics ensure that these <strong>classes are locally scoped</strong> to the component and don't collide with other classes in the global scope.</p>

      </div>
    );
  }

};
