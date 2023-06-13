import React from 'react'
import AddAlertIcon from '@mui/icons-material/AddAlert';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PhotoIcon from '@mui/icons-material/Photo';
import ArchiveIcon from '@mui/icons-material/Archive';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import ColorPopper from './ColorPopper';
import { updateArchive } from '@/services/Dataservices';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Grid from "@mui/material/Grid";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Deleting } from '@/services/Dataservices';



function TakeNoteThree({ noteobj, updatecolor }) {
    const updateArchive1 = async () => {
        let archive = { noteIdList: [noteobj.id], isArchived: true }
        let response = await updateArchive(archive);
        console.log(response)
    }
    const Delete1 = async () => {
        let deletenote = { noteIdList: [noteobj.id], isDeleted: true }
        let response = await Deleting(deletenote);
        console.log(response)
    }

    return (
        <Grid item container spacing={0} xs={12} sm={6} md={4} lg={3} >

            <Card className='flex flex-col justify-between items-start p-[5px]' style={{ backgroundColor: noteobj.color, width: 250 }}  >
                <CardContent>
                    <Typography className='flex justify-between items-center w-[17vw] h-[5vh]' sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        <div>{noteobj?.title}</div>
                        <PushPinOutlinedIcon id="Pin" />
                    </Typography>
                    <Typography variant="h6">
                        <div className='flex justify-between items-center w-[17vw] h-[5vh]'>{noteobj?.description}</div>
                    </Typography>
                </CardContent>
                <CardActions className='flex justify-between items-start w-[19vw] cursor-pointer text-[rgb(90,90,90)]'>
                    <AddAlertIcon fontSize='small' />
                    <PersonAddIcon fontSize='small' />
                    <ColorPopper action="edit" Noteid={noteobj.id} updatecolor={updatecolor} />
                    <PhotoIcon fontSize='small' />
                    <ArchiveIcon fontSize='small' onClick={updateArchive1} />
                    <DeleteOutlineIcon fontSize='small' onClick={Delete1} />
                    <MoreVertIcon fontSize='small' />
                </CardActions>
            </Card>

        </Grid>




    )
}

export default TakeNoteThree
