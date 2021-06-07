import React from "react";
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event';

import AddAppForm from '../components/forms/AddAppForm'

describe('<AddAppForm/>', ()=>{
	it('it renders without crashing', ()=>{
		render(<AddAppForm/>)
	});

	it('contains all app field', ()=> {
		render(<AddAppForm/>)
		const inputEl = screen.getByTestId('app-name');
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute("type", "text");
	});

	it('contains all app name field', ()=> {
		render(<AddAppForm/>)
		const inputEl = screen.getByTestId('app-name');
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute("type", "text");
	});

	it('contains all app description field', ()=> {
		render(<AddAppForm/>)
		const inputEl = screen.getByTestId('app-description');
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute("type", "text");
	})
})
