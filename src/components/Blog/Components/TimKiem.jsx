import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Search from '@mui/icons-material/Search';

export default function TimKiem({
    id,
    label,
    type,
    onClick,
    ariaLabel,
    position,
}) {
    return (
        <FormControl
            sx={{ m: 1, width: '100%' }}
            variant="outlined"
        >
            <InputLabel htmlFor={id}>{label}</InputLabel>
            <OutlinedInput
                id={id}
                type={type}
                endAdornment={
                    <InputAdornment position={position}>
                        <IconButton
                            aria-label={ariaLabel}
                            onClick={onClick}
                            onMouseDown={onClick}
                            edge={position}
                        >
                            <Search />
                        </IconButton>
                    </InputAdornment>
                }
                label={label}
            />
        </FormControl>
    )
}
