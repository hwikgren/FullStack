const Course = ({ course }) => {
    const Header = ({ course }) => {
        return (
          <>
          <h2>{course.name}</h2>
          </>
        )
      }
      
      
      const Content = ({ course }) => {
        return (
          <>
          <ul>
              {course.parts.map(part =>
                <Part key={part.id} part={part} />
                )}
          </ul>
          </>
        )
      }
      
      const Part = ({ part }) => {
        return (
          <p>
            {part.name} {part.exercises}
          </p>
        )
      }
      const Total = ({ parts }) => {
          const total = parts.reduce((s, p) =>  {
              console.log(s, p)
            
                if (s.id === 1) {
                    console.log(s.exercises)
                    return (
                        s.exercises + p.exercises
                    )
                }
                else {
                    return (
                    s + p.exercises
                    )
                }
          });
        return (
          <p><b>Number of exercises: {total}</b></p> 
        )
      }

    return (
        <>
        <Header course={course} /> 
        <Content course={course} />
        <Total parts={course.parts} />
        </>
      )
}

export default Course