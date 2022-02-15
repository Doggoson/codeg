const UILibrary = require('@GithubLibraries/UI');
const Window = new UILibrary.window({ resolution: "1024x600" });

const Dashboard = new Window.items()
      .addItem({ type: this.button, row: this.rows.bottom, column: this.columns.bottom }, {})

if(!UILibrary) console.log('UI failed to load.');
