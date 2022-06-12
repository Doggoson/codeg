const Library = require('@Doggieson/Attributes-Library');
const Language = require('@GithubBuilds/Language-Convert/Convert.c')();
const Functions = require(Library.Attributes)
var Function;


for(i = 0; i < Library.Attributes.length; i++) {
  Function = Functions[i];

  *Function.id = (Function.arguments) => {
    Language.Convert({ type: this.JavaScript, source: Function.Source });
  }
}
