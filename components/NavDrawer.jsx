import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import ArchiveIcon from '@mui/icons-material/Archive';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
//import { connect } from "react-redux"




const drawerWidth = 240;
{/* <style>
.MuiListItem-root:hover{
    backgroundColor="#1976D2 !important",
    borderRadius= "0 30px 30px 0"
}
</style> */}

const openedMixin = (theme) => ({
    width: drawerWidth,
    marginTop: "63px",
    hover:{backgroundColor:"#1976D2"},
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
        hover:{backgroundColor:"#1976D2"},
    }),
    overflowX: 'hidden',

});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
        marginTop: "63px",
        hover:{backgroundColor:"#1976D2"},
    },
});



const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    marginTop: "63px",
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
        ...closedMixin(theme),
   
        '& .MuiDrawer-paper': closedMixin(theme),
    }),
}));

function NavDrawer({ open, setTypeOfNotes, dispatch }) {
    console.log(dispatch)
    return (
        <Box sx={{ display: 'flex' }}>
            <Drawer variant="permanent" open={open}>
                <List   >

                    <ListItem className='hover:bg-[#feefc3] rounded-e-[30px]' key={'Notes'} onClick={() => dispatch({ type: "Notes" })} disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            onClick={() => setTypeOfNotes('Notes')}
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                <LightbulbOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary={'Notes'} sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem key={'Archive'} className='hover:bg-[#feefc3] rounded-e-[30px]' onClick={() => dispatch({ type: "Archive" })} disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            onClick={() => setTypeOfNotes('Archive')}
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                <ArchiveIcon />
                            </ListItemIcon>
                            <ListItemText
                                primary={'Archive'}
                                sx={{ opacity: open ? 1 : 0 }}
                            />
                        </ListItemButton>
                    </ListItem>
                    <ListItem key={'Trash'} className='hover:bg-[#feefc3] rounded-e-[30px]' onClick={() => dispatch({ type: "Trash" })} disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            onClick={() => setTypeOfNotes('Trash')}
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                <DeleteOutlineIcon />
                            </ListItemIcon>
                            <ListItemText primary={'Trash'} sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>
        </Box>
    )
}
export default NavDrawer