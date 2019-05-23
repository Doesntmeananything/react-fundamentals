import React, { Component } from "react";

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
    const languages = ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"];
    return (
      <ul className="languages">
        {languages.map(language => {
          return (
            <li
              style={
                language === this.state.selectedLanguage
                  ? { color: "#d0021b" }
                  : null
              }
              onClick={this.updateLanguage.bind(null, language)}
              key={language}
            >
              {language}
            </li>
          );
        })}
      </ul>
    );
  }
}
