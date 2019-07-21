import React from "react";

import PropTypes from "prop-types";
import styles from "../Reader.module.css";

const Controls = ({
  handleIncrement,
  handleDecrement,
  disabledUp,
  disabledDown
}) => (
  <section className={styles.controls}>
    <button
      type="button"
      className={styles.button}
      onClick={handleDecrement}
      disabled={disabledDown}
    >
      Назад
    </button>
    <button
      type="button"
      className={styles.button}
      onClick={handleIncrement}
      disabled={disabledUp}
    >
      Вперед
    </button>
  </section>
);

Controls.defaultProps = {
  disabledUp: false,
  disabledDown: false
};

Controls.propTypes = {
  disabledUp: PropTypes.bool,
  disabledDown: PropTypes.bool,
  handleIncrement: PropTypes.func.isRequired,
  handleDecrement: PropTypes.func.isRequired
};

export default Controls;
