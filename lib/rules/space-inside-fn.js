function addNewLine(firstBlockEnd, secondBlockStart) {
  return secondBlockStart - firstBlockEnd === 1 ? '\n\n' : '\n'
}

function isArrowFunction(node){
  return node.type==="VariableDeclaration" && 
    node.declarations[0].init.type==='ArrowFunctionExpression';
}

function isFunctionDeclaration(node){
  return node.type==='FunctionDeclaration';
}

module.exports = {
  meta: {
    docs: {
      description: 'two line above nested function',
    },
    fixable: 'whitespace',
  }
  ,
  create(context) {
    return {
      BlockStatement(node) {
        const body = node.body;
        for (let i = 1; i < body.length; i++) {
          const currentNode = body[i];
          if ((isArrowFunction(currentNode) || isFunctionDeclaration(currentNode)) && body[i].loc.start.line - body[i - 1].loc.end.line < 3) {
            context.report({
              node,
              message: "Expected two lines above nested function",
              loc: body[i - 1].loc,
              fix(fixer) {
                return fixer.insertTextAfter(
                  body[i - 1],
                  addNewLine(body[i - 1].loc.end.line),
                  body[i].loc.start.line
                );
              }
            });
          }
        }
      }
    };
  }
};
