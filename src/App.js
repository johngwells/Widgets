import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';

const items = [
  {
    title: 'What is React?',
    content: 'Frontend framework'
  },
  {
    title: 'Why use React',
    content: 'favorite JS Library'
  },
  {
    title: 'How do you use React',
    content: 'make components'
  }
];

const options = [
  {
    label: 'The color red',
    value: 'red'
  },
  {
    label: 'The color green',
    value: 'green'
  },
  {
    label: 'The color blue',
    value: 'blue'
  }
];

export default () => {
  return (
    <div>
      <Dropdown options={options} />
    </div>
  );
};
