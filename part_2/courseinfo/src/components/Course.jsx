const Header = ({ name }) => {
  return <h2>{name}</h2>;
};

const Content = ({ parts }) => {
  return (
    <>
      {parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
    </>
  );
};

const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  );
};

const Total = ({ parts }) => {
  const total = parts.reduce((s, p) => s + p.exercises, 0);

  return <strong>total of {total} exercises</strong>;
};

const Course = ({ courses }) => {
  return (
    <>
      <Header name={courses.name} />
      <Content parts={courses.parts} />
      <Total parts={courses.parts} />
    </>
  );
};

export default Course;
