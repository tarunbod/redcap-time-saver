function doIt() {
  const varName = prompt('variable name');
  const choices = prompt('choices');
  let andOrOr = prompt('ANY (1) or ALL (2)');
  andOrOr = andOrOr === '1' ? 'or' : 'and';

  const choiceLines = choices.split('\n');
  console.log(choiceLines);
  let output = "";
  for (let i = 0; i < choiceLines.length; i++) {
    const choice = choiceLines[i].replaceAll('\r', '');
    console.log(choice);
    const [id, _] = choice.split(',');

    output += `[${varName}] = "${id}"`;
    if (i != choiceLines.length - 1) {
      output += ` ${andOrOr} `;
    }
  }
  prompt('', output);
}
