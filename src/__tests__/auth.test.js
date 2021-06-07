import React from "react";

import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import {initialState, reducer} from '../App'
import { AuthContext } from "../App";
import Login from '../pages/Login'

describe('Test auth reducer', () => {
	it('returns new state for "register" type', () => {
	  const initialState = {
		  isAuthenticated: false,
		  token: null
		};
	  const updateAction = {type: 'REGISTRATION', payload: {key:"xyz123"}}
	  const updatedState = reducer(initialState, updateAction)
	  expect(updatedState).toEqual({
		  isAuthenticated: true,
		  token: "xyz123"
		});
	});

	it('returns new state for "login" type', () => {
	  const initialState = {
		  isAuthenticated: false,
		  token: null
		};
	  const updateAction = {type: 'LOGIN', payload: {key:"xyz123"}}
	  const updatedState = reducer(initialState, updateAction)
	  expect(updatedState).toEqual({
		  isAuthenticated: true,
		  token: "xyz123"
		});
	});

	it('returns new state for "logout" type', () => {
	  const initialState = {
		  isAuthenticated: true,
		  token: "xyz123"
		};
	  const updateAction = {type: 'LOGOUT', payload: {key:"xyz123"}}
	  const updatedState = reducer(initialState, updateAction)
	  expect(updatedState).toEqual({
		  isAuthenticated: false,
		  token: null
		});
	});
})

describe('<Login/>', () => {
	it('renders email input', () => {
		render(
			<AuthContext.Provider value={false}>
				<Login />
			</AuthContext.Provider>
		);

		const inputEl = screen.getByTestId("email-input");
		expect(inputEl).toBeInTheDocument();
		expect(inputEl).toHaveAttribute("type", "email");
	});

	it('renders password input', () => {
		render(
			<AuthContext.Provider value={false}>
				<Login />
			</AuthContext.Provider>
		);

		const inputEl = screen.getByTestId("password-input");
		expect(inputEl).toBeInTheDocument();
		expect(inputEl).toHaveAttribute("type", "password");
	});

	it('is a valid email', () => {
		render(
			<AuthContext.Provider value={false}>
				<Login />
			</AuthContext.Provider>
		);

		const inputEl = screen.getByTestId("email-input");
		userEvent.type(inputEl, "test@gmail.com");

		expect(screen.getByTestId("email-input")).toHaveValue("test@gmail.com");
		expect(screen.queryByTestId("email-error-msg")).not.toBeInTheDocument();
	});

	it('pass invalid email to test input value', () => {
		render(
			<AuthContext.Provider value={false}>
				<Login />
			</AuthContext.Provider>
		);

		const inputEl = screen.getByTestId("email-input");
		userEvent.type(inputEl, "test");

		expect(screen.getByTestId("email-input")).toHaveValue("test");
		// expect(screen.queryByTestId("email-error-msg")).toBeInTheDocument();
	});

})
