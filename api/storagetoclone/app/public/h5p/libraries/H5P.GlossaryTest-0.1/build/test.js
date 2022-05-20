"use strict";

(function (GlossaryTest, React) {
  GlossaryTest.Test = React.createClass({
    displayName: "Test",
    getInitialState: function getInitialState() {
      return {
        stage: GlossaryTest.STAGE_START
      };
    },
    handleStart: function handleStart() {
      this.setState({ stage: GlossaryTest.STAGE_PAGE });
    },
    handleFinish: function handleFinish(scores) {
      this.setState({ stage: GlossaryTest.STAGE_SUMMARY, scores: scores });
    },
    handleReset: function handleReset() {
      this.setState({ stage: GlossaryTest.STAGE_START, scores: [] });
    },
    render: function render() {
      var stage;
      switch (this.state.stage) {
        default:
        case GlossaryTest.STAGE_START:
          stage = React.createElement(GlossaryTest.Start, { from: this.props.from, to: this.props.to, l10n: this.props.l10n, onStart: this.handleStart });
          break;

        case GlossaryTest.STAGE_PAGE:
          stage = React.createElement(GlossaryTest.Page, { words: this.props.words, numPerList: 2, l10n: this.props.l10n, onFinish: this.handleFinish });
          break;

        case GlossaryTest.STAGE_SUMMARY:
          stage = React.createElement(GlossaryTest.Summary, { scores: this.state.scores, l10n: this.props.l10n, onReset: this.handleReset });
          break;
      }

      return React.createElement(
        "div",
        { className: "h5p-glossary-test" },
        stage
      );
    }
  });
})(H5P.GlossaryTest, H5P.React);