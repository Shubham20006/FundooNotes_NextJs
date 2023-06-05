import React from 'react'
import AddAlertIcon from '@mui/icons-material/AddAlert';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PhotoIcon from '@mui/icons-material/Photo';
import ArchiveIcon from '@mui/icons-material/Archive';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ColorPopper from './ColorPopper';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import { createNote } from '@/services/Dataservices';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';


function TakeNoteTwo(props) {
    const [note, setNotes] = React.useState({ title: "", description: "", color: "", isArchived: false })

    const redirectTakeOne = () => {
        props.listenTakeNoteTwo()
    }

    const takeTitle = (event) => {
        setNotes((prevState) => ({ ...prevState, title: event.target.value }))
    }
    const takeDescritpion = (event) => {
        setNotes((prevState) => ({ ...prevState, description: event.target.value }))
    }

    const submit = async () => {
        console.log(note)
        let response = await createNote(note)
        console.log(response)
    }
    const createArchive = () => {
        setNotes((prevState) => ({ ...prevState, isArchived: true }))
    }
    return (
        <div className=' w-screen relative top-[60px] h-[20vh]'>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: "center",
                    alignItems: "center",
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        m: 1,
                        width: "48.5vw",
                        height: "17vh",
                    },
                }}
            >
                <Paper className='flex flex-col justify-around items-start  p-[10px] relative left-[100px]' style={{ backgroundColor: note.color }} elevation={2}>
                    <div className='flex justify-between items-center w-[100%] h-[20%]'>
                        <input style={{ backgroundColor: note.color }} onChange={takeTitle} className='flex justify-between items-center w-[80%] h-[100%] outline-none border-none' type="text" placeholder='Title' />
                        <PushPinOutlinedIcon className=' cursor-pointer' />
                    </div>
                    <input style={{ backgroundColor: note.color }} onChange={takeDescritpion} type="text" className='flex justify-between items-center w-[80%] h-[20%] outline-none border-none' placeholder='Take a note...' />
                    <div className='flex justify-between items-center w-[100%]'>
                        <div className='flex justify-between items-center w-[50%] text-[rgb(90,90,90)] h-[100%] cursor-pointer'>
                            <AddAlertIcon fontSize='small' />
                            <PersonAddIcon fontSize='small' />
                            <ColorPopper fontSize='small' action="create" setNotes={setNotes} />
                            <PhotoIcon fontSize='small' />
                            <ArchiveIcon fontSize='small' onClick={createArchive} />
                            <MoreVertIcon fontSize='small' />
                        </div>
                        <div className='flex justify-center items-center w-[30%]' ><button className='text-[rgb(90,90,90)] border-none bg-white text-[20px] cursor-pointer' style={{ backgroundColor: note.color }} onClick={() => { submit(); redirectTakeOne() }}>close</button></div>
                    </div>

                </Paper>

            </Box>
        </div>
    )
}

export default TakeNoteTwo
