const UI = require('@GithubLibraries/UI');
const Expressified = require('@GithubLibraries/Expressified')({ routes: require("../routes") });

if(!UI) return Expressified.routes.post("client", "UI failed to load.");
const Window = new UILibrary.window({ resolution: this.aspect.fit });

const Dashboard = new Window.items()
      .addItem({ type: this.button, row: this.rows.bottom, column: this.columns.bottom }, {});

Expressified.route("client", Dashboard);
