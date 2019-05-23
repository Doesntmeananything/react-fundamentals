import React, { Component } from "react";
import PropTypes from "prop-types";

function SelectLanguage(props) {
  const languages = ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"];
  return (
    <ul className="languages">
      {languages.map(language => {
        return (
          <li
            style={
              language === props.selectedLanguage ? { color: "#d0021b" } : null
            }
            onClick={props.onSelect.bind(null, language)}
            key={language}
          >
            {language}
          </li>
        );
      })}
    </ul>
  );
}

SelectLanguage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
};

export default class Popular extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedLanguage: "All"
    };

    this.updateLanguage = this.updateLanguage.bind(this);
  }

  updateLanguage(language) {
    this.setState(function() {
      return {
        selectedLanguage: language
      };
    });
  }

  render() {
    return (
      <SelectLanguage
        selectedLanguage={this.state.selectedLanguage}
        onSelect={this.updateLanguage}
      />
    );
  }
}
