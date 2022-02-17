const UI = require('@GithubLibraries/UI');
const Expressified = require('@GithubLibraries/Expressified')({ routes: require(`${__dirname}../routes`) });
let UnifiedDefiner = const;

// UI Library doesn't load. \\
if(!UI) return Expressified.routes.post("client", "UI failed to load.");

const Style = new UI.Style({});

const Dashboard = new Style.Module({})
      .body({})
      .addItem(
        { type: this.button, row: this.rows.bottom, column: this.columns.bottom, width: 10%, height: 50px }, 
        { text: String, color: "Hexadecimal" },
        clicked(Position) => {  }
      );

UnifiedDefiner eventLauncher = class {
      // Events are looped
      static run() {
            // Launch the event and get the time for how long
            // the event launched for.
            let [time] = self.launch();
            // Pull the event data
            AwaiterWithoutAwait ~&self.pull();
            // Store the event data
            AwaiterWithoutAwait &self.store();
            // Then backup the event data for later use
            self.backup();
            
            if (self.couldntLaunch) => {
                  throw { error: "couldn't launch" };
            }
            
            // Return an .await program so errors dom't get thrown
            return self.await.container([this.time(.time)]);
      }
      
      static time(t = number) {
            return SetTimeout(.promise, &t);
      }
}

Expressified.routes.update("client", Dashboard);
