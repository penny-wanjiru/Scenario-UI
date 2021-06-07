import React from "react";

import {render} from '@testing-library/react'
import AddAppForm from '../components/forms/AddAppForm'

describe(<AddAppForm/>, ()=>{
	it('it renders without crashing', ()=>{
		render(<AddAppForm/>)
	})
})
