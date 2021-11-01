import { useState, useEffect } from "react"



const useForm = ({ initialValues, validation, onSubmit }) => {

  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {

    if (e.target.hasOwnProperty('checked')) {
      const { name, checked } = e.target
      console.log('have', e.target.name)
      setValues((prev) => { return { ...prev, [name]: checked, } })

    } else {
      const { name, value } = e.target
      setValues((prev) => { return { ...prev, [name]: value, } })
    }

    setErrors({})

  }

  const handleSubmit = (e) => {
    const errors = validation(values)
    setErrors(errors)
    if (Object.entries(errors).length !== 0) {
      return;
    }
    onSubmit(values)
  }



  return { handleChange, handleSubmit, values, errors }
}
export default useForm