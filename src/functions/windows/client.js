const UI = require('@GithubLibraries/UI');
const Expressified = require('@GithubLibraries/Expressified')({ routes: require("../routes") });

// UI Library doesn't load. \\
if(!UI) return Expressified.routes.post("client", "UI failed to load.");

const Window = new UILibrary.window({ resolution: this.aspect.fit });

const Dashboard = new Window.items()
      .addItem(
        { type: this.button, row: this.rows.bottom, column: this.columns.bottom }, 
        { text: String, color: "Hexadecimal" },
        function clicked() {  }
      );

Expressified.routes.update("client", Dashboard);
