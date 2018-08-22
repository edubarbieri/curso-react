import React, { Component } from 'react';
import PageHeader from '../template/pageHeader';
import TodoForm from '../todo/todoForm';
import TodoList from '../todo/todoList';

export default props => (
	<div>
		<PageHeader title='Tarefas' small='minhas tarefas'></PageHeader>
		<TodoForm />
		<TodoList />
	</div>
);
