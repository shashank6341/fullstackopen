const Display = ({ name, count }) => (
  <div>
    {name} {!isNaN(count) && count} {name == "positive" && !isNaN(count) && "%"}
  </div>
);

export default Display;
