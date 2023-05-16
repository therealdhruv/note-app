import React from 'react'
import { useState } from 'react'
import styles from './Note-app.module.css'

// importing the firebase database
import { app, database } from '../../firebaseConfig';

// We also need a few functions from Firebase Firestore
import { collection, addDoc } from 'firebase/firestore';


const NoteOperations = () => {


  // now let's create a collection first
  const dbInstance = collection(database, 'notes');
  
  // function to add a new note
  const saveNote = () => {
    // we'll use the addDoc function to add a new document to the collection
    addDoc(dbInstance, {
      noteTitle: noteTitle
    })
  }
  
  // This addDoc function takes two parameters. The first is the dbInstance, which we created previously. The second is the data we want to send. Add them in curly brackets.

  const [isInputVisible, setInputVisible] = useState(false);
  const [noteTitle, setNoteTitle] = useState('');



  // we also need a method that can triggre the visiblility of the input button when the use wants to add a new todo
  const inputToggle = () => {
    setInputVisible (!isInputVisible);
  }




  return (
    <>
      <div className={styles.btnContainer}>
        <button className={styles.button} onClick={inputToggle}>
          Add a New Note
        </button>
      </div>


      {/* if the isinputVisible is true display the input button, else don't */}
      {
        isInputVisible ? (
          <div className={styles.inputContainer}>
            <input 
              placeholder = 'Enter the Title..'
              className = {styles.input}
              onChange = {(e) => setNoteTitle(e.target.value)}
            />
            <button className={styles.savBtn} onClick={saveNote}> Save Note </button>
          </div>
          // we'll also have a save button to save the data 
        ) : (
          <></>
        )
      }




  </>
  )
}

export default NoteOperations
