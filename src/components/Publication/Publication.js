import React from "react";

import PropTypes from "prop-types";
import styles from "../Reader.module.css";

const Publication = ({ title, body }) => (
  <article className={styles.publication}>
    <h2 className={styles.title}>{title}</h2>
    <p className={styles.text}>{body}</p>
  </article>
);

Publication.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
};

export default Publication;
