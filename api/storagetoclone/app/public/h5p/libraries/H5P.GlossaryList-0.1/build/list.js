"use strict";

(function (GlossaryList, React) {
  GlossaryList.List = React.createClass({
    displayName: "List",
    getInitialState: function getInitialState() {
      return {
        scores: []
      };
    },
    getAnswerHandler: function getAnswerHandler(i) {
      var scores = this.state.scores;
      var report = this.props.onAnswer;

      return function (correct) {
        scores[i] = correct ? 1 : 0;
        report(scores);
      };
    },
    render: function render() {
      var wordNodes = this.props.words.map(function (word, i) {
        return React.createElement(GlossaryList.Word, { key: i, disabled: this.props.disabled, original: word.original, translation: word.translation, checkAnswer: this.props.checkAnswers, onAnswer: this.getAnswerHandler(i) });
      }, this);

      return React.createElement(
        "div",
        { className: "h5p-glossary-list" },
        React.createElement(
          "ol",
          null,
          wordNodes
        )
      );
    }
  });
})(H5P.GlossaryList, H5P.React);