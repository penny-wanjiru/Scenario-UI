import React from "react";

import {cleanup} from '@testing-library/react'
import {initialState, reducer} from '../App'


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
