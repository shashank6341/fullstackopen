const StatisticLine = ({ text, value }) => (
  <div>
    {text} {!isNaN(value) && value} {text == "positive" && !isNaN(value) && "%"}
  </div>
);

export default StatisticLine;
