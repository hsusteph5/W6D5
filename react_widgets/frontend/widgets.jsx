import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import Tabs from './tabs';

const tabTitles = ["one", "two", "three"];

const tabContents = ["this is tab one!", ":3", ":D"];

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <div>
      <Clock />
      <Tabs titles={tabTitles} contents={tabContents} />
    </div>,
    document.getElementById('root'));
});
