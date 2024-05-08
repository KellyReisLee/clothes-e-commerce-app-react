import React from 'react'

const FormInput = ({ title, name, value, type, data, setData }) => {

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value })

  }
  return (
    <div>
      <label htmlFor={name}>{title}</label>
      <input name={name} onChange={handleChange} value={value} type={type} id={name} required />
    </div>
  )
}

export default FormInput