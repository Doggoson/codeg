const Library = require('@Mafia-Doggo/Attributes-Library');
const Convert = require('@GithubBuilds/Lang-Convert');

for(f = 0; f < Library.Attributes.length; require(Library.Attributes)[f++]) {
  (f.Name)(f.exports.arguments) = (Convert(f.Source));
}
