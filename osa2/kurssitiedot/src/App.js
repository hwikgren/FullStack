import Course from './components/Course'

const App = () => {
  const courses = [
    {
    name:'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamendals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'New part',
        exercises: 5,
        id: 4
      }
    ]
  },
  {
    name: 'Node.js',
    id: 2,
    parts: [
      {
        name: 'Routing',
        exercises: 3,
        id: 1
      },
      {
        name: 'Middlewares',
        exercises: 7,
        id: 2
      }
    ]
  }
]


  return (
    <>
    <h1>Web development curriculum</h1>
    <ul>
      {courses.map(course =>
        <Course key={course.id} course={course} />
        )}
    </ul>
    
    </>
  )
}


export default App;
