/* es-lint disabled */
import React, { Component } from "react";
import Publication from "./Publication/Publication";
import PropTypes from "prop-types";
import Counter from "./Counter/Counter";
import styles from "./Reader.module.css";
import Controls from "./Controls/Controls";
// import publication from "./assets/publication.json";

export default class Reader extends Component {
  static defaultProps = {
    initialValue: 0
  };

  static propTypes = {
    initialValue: PropTypes.number,
    items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired
  };

  handleIncrement = () => {
    this.setState((state) => ({ value: state.value + 1 }));
  };

  handleDecrement = () => {
    this.setState((state) => ({ value: state.value - 1 }));
  };

  state = {
    value: this.props.initialValue
  };

  render() {
    const { items } = this.props;
    const { value } = this.state;

    return (
      <div className={styles.reader}>
        <Publication title={items[value].title} body={items[value].text} />
        <Counter items={items} count={value} />
        <Controls
          disabledUp={value + 1 === items.length}
          disabledDown={value === 0}
          handleIncrement={this.handleIncrement}
          handleDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}
