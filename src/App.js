import { CreateNote, NavBar,  NoteUICollection, UpdateNote } from './ui-components'
import {useState } from 'react'

import { withAuthenticator } from '@aws-amplify/ui-react'
//import { DataStore } from 'aws-amplify'

function App ({ signOut }) {
  const [showCreateModel, setShowCreateModel] = useState(false)
  const [showUpdateModel, setShowUpdateModel] = useState(false)
  const [updateNote, setUpdateNote] = useState(0)
  return (
    <>
      <NavBar width="100%" marginBottom='20px' overrides={{
        Button31632483: { onClick: () => setShowCreateModel(true) },
        Button31632487: { 
          onClick: async () => {
            signOut()
            //await DataStore.clear()
        }}
        }}
        />
      <div className='container'>
      <NoteUICollection overrideItems={({ item, idx }) => {
        return {
          overrides: {
            Vector31472745: {
              as: 'button',
              onClick: () => {
                setShowUpdateModel(true)
                setUpdateNote(item)
              }
            }
          }
        }
      }} />
      </div>
      <div className='model' style={{display: showCreateModel === false && 'none'}}>
        <CreateNote overrides={{MyIcon: { as: 'button', onClick: () => setShowCreateModel(false) } }} />
      </div>
      <div className='model' style={{display: showUpdateModel === false && 'none'}}>
        <UpdateNote 
          note={updateNote} overrides={{
           MyIcon: {
            as: 'button',
            onClick: () => setShowUpdateModel(false)
          }
        }}
          />
      </div>
   </>
  );
}
export default withAuthenticator(App)