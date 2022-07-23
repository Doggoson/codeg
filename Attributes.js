const gapi = require('googleapis');
const { Account } = gapi.CookieParser.GetCookie("https://github.com", "UserJSON");

const Library = require(`@${Account.username}/Attributes-Library`);
const Language = require('@GithubBuilds/Language-Convert/Convert.c')();
const Functions = require(Library.Attributes)
var Function;


for(i = 0; i < Library.Attributes.length; i++) {
  Function = Functions[i];

  *Function.id = (Function.arguments) => {
    Language.Convert({ type: Global.JavaScript, source: Function.Source });
  }
}
