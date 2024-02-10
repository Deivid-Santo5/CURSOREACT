import logo from './assets/Logo.svg'
import { NewNoteCard } from './componentes/new-note-card'
import { NoteCard } from './componentes/note-card'
import {useState } from 'react'



export function App() {
const [notes, setNotes] = useState([
{id:1, date: new Date(), content: 'Hello World'},
{id:2, date: new Date(), content: 'Nota Rascunho'}
]

)

function onNoteCreated(content:string) {
   const newNote = {
      id: Math.random(),
      date: new Date(),
      content,
   }

   setNotes([newNote, ...notes])
}

  return ( 
    // LOGO
    <div className='mx-auto max-w-6xl my-12'>
       <img src={logo}/>
  {/* BARRA DE BUSCA */}
       <form className='w-full'>
        <input
         type="text" 
         placeholder='Busque em suas notas...'
         className="w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder:text-slate-500"
         />
       </form>

   <div className="h-px bg-slate-700"/>

{/* PRIMEIRO CARD */}
<div className='grid grid-cols-3 gap-6 auto-rows-[250px]'>
   <NewNoteCard onNoteCreated={onNoteCreated}/>

{notes.map(note =>{
 return <NoteCard note={note} />  
})}



        

        


       </div>
       </div>
    )
}