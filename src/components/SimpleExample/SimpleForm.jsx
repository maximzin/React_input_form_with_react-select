import React, { useState } from 'react'
import InputFormLine from './InputFormLine'

const SimpleForm = () => {
  const [inputForm, setInputForm] = useState({
    name: undefined,
    city: undefined,
    workStatus: undefined,
  })

  const nameList = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Vince' },
    { id: 3, name: 'Chris' },
    { id: 4, name: 'Steve' },
    { id: 5, name: 'Dwayne' },
  ]

  const cityList = [
    { id: 1, name: 'Miami' },
    { id: 2, name: 'New York' },
    { id: 3, name: 'Las Vegas' },
  ]

  const workStatusList = [
    { id: 1, status: 'hired' },
    { id: 2, status: 'fired' },
    { id: 3, status: 'works' },
  ]

  const customList = [
    {
      name: 'CustomValue1',
      id: 0,
    },
    {
      name: 'CustomValue2',
      id: 1,
    },
    {
      name: 'CustomValue3',
      id: 2,
    },
  ]

  const handleChange = (e, name) => {
    if (e === null) {
      setInputForm({ ...inputForm, [name]: undefined })
    } else {
      if (e.target === undefined) {
        setInputForm({ ...inputForm, [name]: e.value })
      } else {
        setInputForm({ ...inputForm, [e.target.name]: e.target.value })
      }
    }
  }

  const handleCleanForm = () => {
    setInputForm({
      name: undefined,
      city: undefined,
      workStatus: undefined,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    alert(
      'input form values :\n' +
        inputForm.name +
        '\n' +
        inputForm.city +
        '\n' +
        inputForm.workStatus
    )
  }

  console.log(inputForm)

  return (
    <div>
      <h4>Simple example</h4>
      <form id="idSearchForm" onSubmit={handleSubmit}>
        <InputFormLine
          label={'Name'}
          name={'name'}
          data={nameList}
          value={inputForm.name}
          handleChange={handleChange}
        />
        <InputFormLine
          label={'City'}
          name={'city'}
          data={cityList}
          value={inputForm.city}
          handleChange={handleChange}
        />
        <InputFormLine
          label={'Status'}
          name={'workStatus'}
          data={workStatusList}
          value={inputForm.workStatus}
          handleChange={handleChange}
        />
      </form>
      <br />
      <button form="idSearchForm" type="submit">
        Search!
      </button>
      <button
        onClick={() => {
          handleCleanForm()
        }}
      >
        Clean fields!
      </button>
    </div>
  )
}

export default SimpleForm
