import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { red } from '@mui/material/colors';

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: red[500],
    '&:hover': {
        backgroundColor: red[700],
    },
}));

export default function CustomizedButtons() {
    return (
        <Stack spacing={2} direction="row">
            <ColorButton variant="contained">Custom CSS</ColorButton>
        </Stack>
    );
}
