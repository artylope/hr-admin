const React = require("react");
const Main = require('./templates/main.jsx');
import DayPicker from 'react-day-picker';

class Datepicker extends React.Component {
  render() {
    return (
      <Main>
        <DayPicker />
        <script src="../js/datepicker.js"></script>
        <script src="https://unpkg.com/react-day-picker/lib/daypicker.min.js"></script>
      </Main>
    );
  }
}

module.exports = Datepicker;
