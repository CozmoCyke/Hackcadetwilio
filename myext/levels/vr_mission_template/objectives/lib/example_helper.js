// This is an example of how you might use objective validation helpers
// in your own code. You don't have to, but you'll often want to!
function isDevLink(testString = '') {
  return testString.toLowerCase() === "https://discord.com/developers";
}

function isBotLink(testString = ''){
  return testString.startsWith("https://discord.com/api/oauth2/authorize?");
}
function osImport(testString = ''){
  return testString === "import os";
}
function commandsImport(testString = ''){
  return testString === "from discord.ext import commands"
}
function isSufix(testString = ''){
  return testString === "command()"
}
function isFunctionName(testString = ''){
  return testString === "aysnc def hello(ctx):"
}
function ismessageSend(testString = ''){
  return testString === "await ctx.send('hello')";
}
module.exports = {
  isDevLink,
  isBotLink,
  osImport,
  commandsImport,
  isSufix,
  isFunctionName,
  ismessageSend
};
