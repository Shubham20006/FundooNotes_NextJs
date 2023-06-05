import React from 'react'
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import BrushIcon from '@mui/icons-material/Brush';
import CollectionsIcon from '@mui/icons-material/Collections';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';


   

function TakeNoteOne(props) {
    const redirectTakeTwo = () => {
        props.listenTakeNoteOne()
    }
    return (

        <Box
            sx={{
                display: 'flex',
                justifyContent: "center",
                alignItems: "center",
                flexWrap: 'wrap',
                '& > :not(style)': {
                    m: 1,
                    width: "48.5vw",
                    height: "7vh",
                },
            }}
        >
            <Paper className='flex   justify-between items-center relative left-[100px] ' elevation={2}>
                <div className='flex  justify-between items-center p-[10px] w-[100%] text-[rgb(90,90,90)]' >
                    <p  onClick={redirectTakeTwo}>Take a note...</p>
                    <div className='flex  justify-around  items-center w-[20%] cursor-pointer'>
                        <CheckBoxIcon />
                        <BrushIcon />
                        <CollectionsIcon />
                    </div>
                </div>
            </Paper>
        </Box>

    )
}

export default TakeNoteOne
