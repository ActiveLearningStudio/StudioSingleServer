'use strict';

(function (GlossaryTest, React) {
  GlossaryTest.Summary = React.createClass({
    displayName: 'Summary',
    render: function render() {

      var score = 0;
      var max = 0;

      // Calculate score and max score
      for (var i = 0; i < this.props.scores.length; i++) {
        var listScores = this.props.scores[i];

        for (var j = 0; j < listScores.length; j++) {
          score += listScores[j];
          max += 1;
        }
      }

      return React.createElement(
        'div',
        null,
        React.createElement(
          'p',
          null,
          this.props.l10n.summary.replace(':num', score).replace(':total', max)
        ),
        React.createElement(
          GlossaryTest.Button,
          { onPress: this.props.onReset },
          this.props.l10n.startOver
        )
      );
    }
  });
})(H5P.GlossaryTest, H5P.React);