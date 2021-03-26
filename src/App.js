import React, { useState, useEffect } from 'react'
import Form from './Form'
import './App.css';
import Schema from './Schema'
import * as yup from 'yup'

const initialFormValues = {

  firstname: '',
  lastname: '',
  email: '',
  password: '',
  role: '',
  civil: '',
  accept: false,
}



function App() {
  const [formValues, setFormValues] = useState(initialFormValues) 


  const inputChange = (name, value) => {
    yup.reach(Schema, name)
      .validate(value)
    setFormValues({
      ...formValues,
      [name]: value 
    })
  }

  useEffect(() => {
    Schema.isValid(formValues)
  }, [formValues])


  return (
    <div className="App">
      <header className="App-header">
      <h1>info please</h1>
      <Form
        values={formValues}
        change={inputChange}
      />
      </header>
    </div>
  );
}

export default App;
