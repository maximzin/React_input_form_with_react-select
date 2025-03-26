import React from 'react'
import Select from 'react-select'

const InputFormLine = ({ name, data, inputForm, setInputForm }) => {
  let options = []

  if (name === 'name') {
    data.map((row) => {
      options.push({ name: 'name', label: row.name, value: row.id })
    })
  }

  if (name === 'city') {
    data.map((row) => {
      options.push({ name: 'city', label: row.name, value: row.id })
    })
  }

  if (name === 'workStatus') {
    data.map((row) => {
      options.push({ name: 'workStatus', label: row.status, value: row.id })
    })
  }

  const customStyles = {
    container: (provided) => ({
      ...provided,
      fontSize: '14px',
      width: '200px',
      height: '50px',
      borderRadius: '5px',
      border: '1px solid grey',
      boxSizing: 'border-box',
      margin: '0 0 0 10px',
      backgroundColor: 'white',
    }),
    control: (provided) => ({
      ...provided,
      marginLeft: '4px',
      height: '100%',
      minHeight: 'unset',
    }),
    menu: (provided) => ({
      ...provided,
      border: 'solid 1px grey',
      borderRadius: '4px 4px 8px 8px',
      zIndex: '9999',
    }),
    menuList: (provided) => ({
      ...provided,
      borderRadius: '4px 4px 8px 8px',
    }),
    option: (provided, state) => ({
      ...provided,
      padding: '5px',

      backgroundColor: state.isSelected ? '#c4d0ff;' : 'white',
      backgroundColor: state.isFocused ? '#c4d0ff;' : 'white',
    }),
  }

  return (
    <Select
      placeholder={'Select!'}
      isSearchable
      isClearable
      options={options}
      onChange={(e) => {
        if (e !== null) {
          setInputForm({ ...inputForm, [name]: e.value })
        } else {
          setInputForm({ ...inputForm, [name]: undefined })
        }
      }}
      unstyled
      styles={customStyles}
    />
  )
}

export default InputFormLine
