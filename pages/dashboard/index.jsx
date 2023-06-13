import React, { useState } from 'react'
import Header from '@/components/Header';
import NavDrawer from '@/components/NavDrawer';
import TakeNoteOne from '@/components/TakeNoteOne';
import TakeNoteTwo from '@/components/TakeNoteTwo';
import TakeNoteThree from '@/components/TakeNoteThree';
import { getNotes } from '@/services/Dataservices';

function Dashboard() {
  const [toggles, setToggle] = useState(true)
  const [notes, setNotes] = useState([])
  const [open, setOpen] = useState(false);
  const [typeOfNotes, setTypeOfNotes] = useState('Notes')

  const handleDrawer = () => {
    setOpen(!open);
  };
  const listenTakeNoteOne = () => {
    setToggle(false);
  }
  const listenTakeNoteTwo = () => {
    setToggle(true);
  }

  const loaddata = async () => {
    let response = await getNotes()
    let arr = response.data.data.data
    if (typeOfNotes === 'Notes') {

      let newArr = arr.filter((note) => note.isArchived === false && note.isDeleted === false)
      setNotes(newArr)

    } else if (typeOfNotes === 'Archive') {
      let newArr = arr.filter((note) => note.isArchived === true && note.isDeleted === false)
      setNotes(newArr)
    }
    else if (typeOfNotes === 'Trash') {
      let newArr = arr.filter((note) => note.isArchived === false && note.isDeleted === true)
      setNotes(newArr)
    }
  }

  const updatecolor = () => {
    loaddata()
  }
  console.log(notes)

  React.useEffect(() => {
    loaddata()
  }, [typeOfNotes])

  return (
    <div className='w-screen   bg-white' >
      <Header handleDrawer={handleDrawer} />
      <NavDrawer open={open} setTypeOfNotes={setTypeOfNotes} />
      {
        toggles ? <TakeNoteOne listenTakeNoteOne={listenTakeNoteOne} /> : <TakeNoteTwo listenTakeNoteTwo={listenTakeNoteTwo} />
      }
      <div className='flex bg-white  flex-wrap justify-around w-[80%]  absolute top-[45%] left-[17%] gap-[1em]'>
        {
          notes.map((noteobj) => (<TakeNoteThree noteobj={noteobj} updatecolor={updatecolor} />))
        }
      </div>
    </div>
  )
}

export default Dashboard
