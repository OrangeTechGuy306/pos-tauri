
import { SxProps } from "@mui/material/styles"
import TextField from "@mui/material/TextField"
import { ChangeEvent } from "react"


interface CustomInputProps{
    placeholder?: string
    label?: string
    type?: string
    style?: SxProps
    onChange?: (e: ChangeEvent<HTMLInputElement>)=>void
}



const CustomInput = ({placeholder, label, type, style, onChange}: CustomInputProps) => {
  return  <TextField 
            placeholder={placeholder} 
            label={label} 
            variant="outlined" 
            type={type} 
            sx={style}
            onChange={onChange}
        />
}

export default CustomInput