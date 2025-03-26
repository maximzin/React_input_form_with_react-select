import React, { useState } from 'react'
import InputFormLine from './InputFormLine'

const ComplexForm = () => {
  const [searchForm, setSearchForm] = useState({
    name: undefined,
    color: undefined,
    type: undefined,
    custom: 0,
  })

  const [isClear, setIsClear] = useState(true)

  const models = ['toyota', 'huinday', 'nissan']
  const colors = ['green', 'blue', 'black']
  const types = ['jeep', 'light', 'hatchbek']

  const handleSubmit = async (e) => {
    e.preventDefault()

    alert(
      'searched with form:\n' +
        searchForm.model +
        '\n' +
        searchForm.color +
        '\n' +
        searchForm.type +
        '\n' +
        searchForm.custom
    )
  }

  const handleCleanForm = () => {
    setSearchForm({
      name: undefined,
      color: undefined,
      type: undefined,
    })
  }

  return (
    <div>
      <h4>Complex example</h4>
      <form id="idSearchForm" onSubmit={handleSubmit}>
        <div>
          <div>
            <label htmlFor="model">Model</label>
            <InputFormLine
              name={'model'}
              data={models}
              searchForm={searchForm}
              setSearchForm={setSearchForm}
              isClear={isClear}
              setIsClear={setIsClear}
            />
          </div>

          <div>
            <label htmlFor="color">Color</label>
            <InputFormLine
              name={'color'}
              data={colors}
              searchForm={searchForm}
              setSearchForm={setSearchForm}
              isClear={isClear}
              setIsClear={setIsClear}
            />
          </div>

          <div>
            <label htmlFor="type">Type</label>
            <InputFormLine
              name={'type'}
              data={types}
              searchForm={searchForm}
              setSearchForm={setSearchForm}
              isClear={isClear}
              setIsClear={setIsClear}
            />
          </div>

          <div>
            <label htmlFor="custom">Custom</label>
            <InputFormLine
              name={'custom'}
              data={null}
              searchForm={searchForm}
              setSearchForm={setSearchForm}
              isClear={isClear}
              setIsClear={setIsClear}
            />
          </div>
        </div>
      </form>
      <br />
      <button form="idSearchForm" type="submit">
        Search!
      </button>
      <button
        onClick={() => {
          handleCleanForm()
          setIsClear(true)
        }}
      >
        Clean fields!
      </button>
    </div>
  )
}

export default ComplexForm
