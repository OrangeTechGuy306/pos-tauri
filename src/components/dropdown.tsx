import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { SxProps } from '@mui/material/styles';


interface DropdownProps{
    value?: string
    label?: string
    onChange?: (e: SelectChangeEvent)=> void
    id?: string,
    labelId?: string
    items?: string[]
    style?: SxProps
}


const DropdownComponent = ({value, label, labelId, onChange, id, items, style}: DropdownProps) => {

  return (
    <>
     <InputLabel id="demo-select-small-label">{label}</InputLabel>
      <Select
        labelId={labelId}
        id={id}
        value={value}
        label={label}
        onChange={onChange}
      >
        {
            items?.map((item)=>(
                <MenuItem value="" key={item} sx={style}>{item}</MenuItem>
            ))
        }
      </Select>
    </>
  )
}

export default DropdownComponent