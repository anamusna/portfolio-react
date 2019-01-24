import React from 'react';
import './Footer.css'

export default class Footer extends React.Component {

  render() {
    const date = new Date();
    const year = date.getFullYear();
    return (
      <footer>
        <p>Handmade with <i className="fas fa-heart"></i> by <a href="https://github.com/anamusna" rel="noopener noreferrer" target="_blank">me </a> &copy; {year}</p>
      </footer>
    );
  }
}