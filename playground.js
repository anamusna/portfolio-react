import React, { Component } from "react";

import Tags from ".././elements/Tags";

const Modal = ({ handleClose, show, title, description }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  return (
    <div id={title} className={showHideClassName} onClick={handleClose}>
      <div className="modal__content">
        <button className="modal__close" onClick={handleClose}>
          close
        </button>
        <h3 className="modal__heading">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default class Skill extends Component {
  constructor(props) {
    super(props);
  }


  showModal = () => {
    document.body.style.overflowY = "hidden";
    this.setState({ show: true });
  };

  hideModal = () => {
    document.body.style.overflowY = "auto";
    this.setState({ show: false });
  };

  render() {
    let skill = this.props.list;
    return (
      <div className="skills__item">
        <figure>
          <img className="img-center" src={skill.imgSrc} alt={skill.name} />
        </figure>
        <p className="skills__text">{skill.slogan}</p>
        <Tags tags={skill.tags} />
        <a className="skills__more" onClick={this.showModal}>
          +
        </a>
        <Modal
          show={this.state.show}
          title={skill.name}
          description={skill.description}
          handleClose={this.hideModal}
        />
      </div>
    );
  }
}
