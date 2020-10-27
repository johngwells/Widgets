import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

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
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <Header />
      <Route path='/'><Accordion items={items} /></Route>
      <Route path='/list'><Search /></Route>
      <Route path='/dropdown'><Dropdown label='select a color' options={options} selected={selected} onSelectedChange={setSelected} /></Route>
      <Route path='/translate'><Translate /></Route>
    </div>
  );
};
