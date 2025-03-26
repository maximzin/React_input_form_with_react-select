import React, { useEffect, useState } from 'react'
import Select from 'react-select'

const InputFormLine = ({
  name,
  data,
  searchForm,
  setSearchForm,
  isClear,
  setIsClear,
}) => {
  const [options, setOptions] = useState([])
  const [formValue, setFormValue] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      await getOptions()
    }
    fetchData()
  }, [])

  const getOptions = async () => {
    let tempOptions = []

    if (name !== 'custom') {
      data.map((row) => {
        tempOptions.push({ name: name, label: row, value: row })
      })
    } else {
      tempOptions = [
        {
          name: name,
          label: 'CustomValue1',
          value: 'CustomValue1',
        },
        {
          name: name,
          label: 'CustomValue2',
          value: 'CustomValue2',
        },
        {
          name: name,
          label: 'CustomValue3',
          value: 'CustomValue3',
        },
      ]
    }

    setOptions(tempOptions)
  }

  useEffect(() => {
    if (isClear === true) {
      if (name !== 'custom')
        setFormValue({ label: '', name: name, value: undefined })
      else {
        setFormValue({
          label: 'CustomValue1',
          name: name,
          value: 'CustomValue1',
        })
      }
    } else {
      let option = options.find((option) => option.value === searchForm[name])
      if (option) {
        setFormValue(option)
      } else {
        setFormValue({ label: '', name: name, value: undefined })
      }
    }
  }, [searchForm[name]])

  const customStyles = {
    container: (provided) => ({
      ...provided,
      fontSize: '11px',
      width: '70%',
      height: '95%',
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

  console.log(data)

  return (
    <Select
      id={name}
      placeholder={''}
      isSearchable
      isClearable={name === 'custom' ? false : true}
      options={options}
      value={formValue}
      onChange={(e) => {
        if (e !== null) {
          setSearchForm({ ...searchForm, [name]: e.value })
        } else {
          setSearchForm({ ...searchForm, [name]: undefined })
        }
        setIsClear(false)
      }}
      unstyled
      styles={customStyles}
    />
  )
}

export default InputFormLine
