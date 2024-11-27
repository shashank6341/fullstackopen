const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>
      {!isNaN(value) && value} {text == "positive" && !isNaN(value) && "%"}
    </td>
  </tr>
);

export default StatisticLine;
