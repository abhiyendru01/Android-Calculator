class Calculator extends React.Component {
  constructor() {
    super();
    this.enterDigit = this.enterDigit.bind(this);
    this.enterOperator = this.enterOperator.bind(this);
    this.state = {
      input: '',
      output: '',
      operator: null,
      deleteToggle: 'DEL' };

  }
  enterDigit(value) {
    if (value === '=') {
      this.setState({
        input: this.state.output,
        output: '',
        operator: null,
        deleteToggle: 'CLR' });

    } else if (this.state.operator !== null) {
      var newInput = this.state.input + value;
      var replace = newInput.replace(/x/g, '*').replace(/÷/g, '/');
      var result = eval(replace);
      this.setState({
        input: newInput,
        output: result,
        deleteToggle: 'DEL' });

    } else {
      this.setState({
        input: this.state.input + value,
        deleteToggle: 'DEL' });

    }
  }
  enterOperator(value) {
    if (value == 'CLR') {
      this.setState({
        input: '',
        output: '',
        operator: null });

    } else if (value == 'DEL') {
      this.setState({
        input: this.state.input.slice(0, -1) });

    } else {
      this.setState({
        input: this.state.input + value,
        operator: value.replace(/x/g, '*').replace(/÷/g, '/') });


    }
  }
  render() {
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement(Display, { input: this.state.input, output: this.state.output }), /*#__PURE__*/
      React.createElement(CalcInput, { enterDigit: this.enterDigit, enterOperator: this.enterOperator, deleteToggle: this.state.deleteToggle })));


  }}

class Display extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "display z-depth-3" }, /*#__PURE__*/
      React.createElement("div", { className: "input" }, this.props.input.toString()), /*#__PURE__*/
      React.createElement("div", { className: "output" }, this.props.output)));


  }}

class CalcInput extends React.Component {
  render(props) {
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement(KeyPad, { className: "keypad", enterDigit: this.props.enterDigit }), /*#__PURE__*/
      React.createElement(Operators, { enterOperator: this.props.enterOperator, deleteToggle: this.props.deleteToggle }), /*#__PURE__*/
      React.createElement(ExtendedOperators, { enterDigit: this.props.enterDigit })));


  }}


class KeyPad extends React.Component {
  constructor(props) {
    super(props);
  }
  mapKeys(arr) {
    return arr.map(a => /*#__PURE__*/React.createElement(Key, { key: a.toString(), value: a, enterValue: this.props.enterDigit }));
  }
  render() {
    let rowOne = [7, 8, 9],
    rowTwo = [4, 5, 6],
    rowThree = [1, 2, 3],
    rowFour = [".", 0, '='];

    return /*#__PURE__*/(
      React.createElement("div", { className: "keypad" }, /*#__PURE__*/
      React.createElement("div", { className: "keyRow" }, this.mapKeys(rowOne)), /*#__PURE__*/
      React.createElement("div", { className: "keyRow" }, this.mapKeys(rowTwo)), /*#__PURE__*/
      React.createElement("div", { className: "keyRow" }, this.mapKeys(rowThree)), /*#__PURE__*/
      React.createElement("div", { className: "keyRow" }, this.mapKeys(rowFour))));



  }}


class Key extends React.Component {
  render() {
    const value = this.props.value;
    return /*#__PURE__*/(
      React.createElement("button", { className: "key waves-effect waves-circle waves-light", onClick: this.props.enterValue.bind(this, value) }, value));

  }}

class Operators extends React.Component {
  constructor() {
    super();
  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "operators" }, /*#__PURE__*/
      React.createElement(Key, { value: this.props.deleteToggle, enterValue: this.props.enterOperator }), /*#__PURE__*/
      React.createElement(Key, { value: "\xF7", enterValue: this.props.enterOperator }), /*#__PURE__*/
      React.createElement(Key, { value: "x", enterValue: this.props.enterOperator }), /*#__PURE__*/
      React.createElement(Key, { value: "-", enterValue: this.props.enterOperator }), /*#__PURE__*/
      React.createElement(Key, { value: "+", enterValue: this.props.enterOperator })));


  }}

class ExtendedOperators extends React.Component {
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "extendedOperators" }));

  }}

ReactDOM.render( /*#__PURE__*/React.createElement(Calculator, null), document.getElementById('calculator'));