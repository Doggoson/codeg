const Library = require('@Doggie-lab/Attributes-Library');
const Convert = require('@GithubBuilds/Language-Convert/Convert.c');

for(f = 0; f < Library.Attributes.length; require(Library.Attributes)[f++]) {
  (f.Name)(f.exports.arguments) = (Convert(f.Source));
}
