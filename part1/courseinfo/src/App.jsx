import { useState } from "react";
import Button from "./Button";
import StatisticLine from "./StatisticLine";

const Statistics = ({ good, neutral, bad }) => {
  return (
    <>
      <h2>statistics</h2>

      {good || neutral || bad ? (
        <>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={good + neutral + bad} />
          <StatisticLine
            text="average"
            value={(good - bad) / (good + neutral + bad)}
          />
          <StatisticLine
            text="positive"
            value={(good / (good + neutral + bad)) * 100}
          />
        </>
      ) : (
        <p>No feedback given</p>
      )}
    </>
  );
};

// const Statistics = ({ good, neutral, bad }) => {
//   return (
//     <StatisticLine text="good" value={good} />
//     <StatisticLine text="neutral" value={neutral} />
//     <StatisticLine text="bad" value={bad} />

//     <>
//       <h2>statistics</h2>
//       {good || neutral || bad ? (
//         <>
//           <Display name="good" count={good} />
//           <Display name="neutral" count={neutral} />
//           <Display name="bad" count={bad} />
//           <Display name="all" count={good + neutral + bad} />
//           <Display
//             name="average"
//             count={(good - bad) / (good + neutral + bad)}
//           />
//           <Display
//             name="positive"
//             count={(good / (good + neutral + bad)) * 100}
//           />
//         </>
//       ) : (
//         <p>No feedback given</p>
//       )}
//     </>
//   );
// };

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h2>give statistics</h2>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
