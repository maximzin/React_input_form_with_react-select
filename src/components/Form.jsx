import React, { useState } from 'react'
import InputFormLine from './InputFormLine'

const Form = () => {
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

  console.log(inputForm)

  return (
    <>
      <InputFormLine
        label={'Name'}
        name={'name'}
        data={nameList}
        inputForm={inputForm}
        setInputForm={setInputForm}
      />
      <InputFormLine
        label={'City'}
        name={'city'}
        data={cityList}
        inputForm={inputForm}
        setInputForm={setInputForm}
      />
      <InputFormLine
        label={'Status'}
        name={'workStatus'}
        data={workStatusList}
        inputForm={inputForm}
        setInputForm={setInputForm}
      />
    </>
  )
}

export default Form
