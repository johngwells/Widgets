import React from 'react';
import Accordion from './components/Accordion';

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

export default () => {
  return <h1><Accordion items={items} /></h1>
}
