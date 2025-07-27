import React, { useState } from 'react'
import {FaRegEye, FaRegEyeSlash} from "react-icons/fa"

const Input = ({
    value, onChange, label, placeholder, type
}) => {
    const [showPassword, setShowPassword] = useState(false)

    const toggleShowPassword = () => {
        setShowPassword(!showPassword)
    }
  return (
    <div>
        <label className=''>{label}</label>

        <div className=''>
            <input 
                type={
                    type == "password" ? (showPassword ? "text" : "password") : type
                }
                placeholder={placeholder}
                className=''
                value={value}
                onChange={(e) => onChange(e)}
            />

            {type === "password" && (
                <>
                    {showPassword ? (
                        <FaRegEye
                            size={22}
                            className=''
                        />
                    ) : (
                        <FaRegEyeSlash
                            size={22}
                            className=''
                            onClick={() => toggleShowPassword()}
                        />
                    )}
                </>
            )}
        </div>
    </div>
  )
}

export default Input