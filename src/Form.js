import React from 'react'

export default function Form(props) {
  const {
    values,
    change,
  } = props


  const onChange = evt => {

    const { name, value, type, checked } = evt.target
    const valueToUse = type === 'checkbox' ? checked : value
    change(name, valueToUse)
  }

  return (
    <form className='form container' >
      <div className='form-group submit'>
      </div>

      <div className='form-group inputs'>
        <h4>General information</h4>

        <label>firstname:
          <input
            value={values.firstname}
            onChange={onChange}
            name='firstname'
            type='text'
          />
        </label>

        <label>lastname:
          <input
            value={values.lastname}
            onChange={onChange}
            name='lastname'
            type='text'
          />
        </label>

        <label>Email
          <input
            value={values.email}
            onChange={onChange}
            name='email'
            type='text'
          />
        </label>

        <label>Role
          <select
            onChange={onChange}
            value={values.role}
            name='role'
          >
            <option value=''>- Select an option -</option>
            <option value='ugly'>ugly</option>
            <option value='cute'>cute</option>
            <option value='al pacino'>al pacino</option>
            <option value='miley cyrus'>miley cyrus</option>
          </select>
        </label>
      </div>
    </form>
  )
}