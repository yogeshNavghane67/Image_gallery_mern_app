import React from 'react'
import { FaFileCirclePlus } from "react-icons/fa6";


const Button = () => {
  return (
    <label className="button" htmlFor="file_picker"><FaFileCirclePlus />
    <input hidden type="file" name="file_picker" id="file_picker"/>
    </label>
  )
}

export default Button