import axios from 'axios'
import { useEffect, useState } from 'react'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [letters, setletters] = useState('')
  const [showAll, setShowAll] = useState(true)

const hook =() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }
useEffect(hook, [])
  console.log('render', persons.length, 'persons')

  const addPerson = (event) => {
    event.preventDefault()
    
    if (!persons.some(e => e.name === newName)) {
      const personObject = {
        name: newName,
        number: newNumber,
      }
      setPersons(persons.concat(personObject))
    }
    else {
  
      window.alert(newName + ' is already in the phonebook')
    }
    console.log(persons)
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    //console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    //console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setletters(event.target.value)
    setShowAll(true)
    if (event.target.value != '') {
      setShowAll(false)
    }
  } 

  const personsToShow = filterPersons(letters)

  function filterPersons(letters) {
    return (
      showAll
      ? persons
      : persons.filter(person => person.name.toLowerCase().includes(letters.toLowerCase()))
    )
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        Filter persons with: <input
        value={letters}
          onChange={handleFilterChange}
        />
      </div>
      <h2>Add New Name</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input
          value={newName}
          onChange={handleNameChange}
          />
        </div>
        <div>
          number: <input
          value={newNumber}
          onChange={handleNumberChange}
          />
        </div>
        <div>
          <button type="submit">Add Person</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {personsToShow.map((person, i) =>
            <Persons key={i} person={person} />
          
        )}
      </ul>
    </div>
  )

}

export default App
