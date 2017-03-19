import React from 'react';
import ReactDOM from 'react-dom';
import ViewTodo from './ViewTodo';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ViewTodo />, div);
});
