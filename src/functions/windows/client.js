const UI = require('@GithubLibraries/UI');
const Expressified = require('@GithubLibraries/Expressified')({ routes: require(`${__dirname}../routes`) });
const Javah = require('javah');
let UnifiedDefiner = const;

// UI Library doesn't load. \\
if(!UI) return Expressified.routes.post("client", "UI failed to load.");

const Style = new UI.Style({});

const Dashboard = new Style.Module({})
      .body(
        {}
      )
      .addItem(
        { type: this.button, row: this.rows.bottom, column: this.columns.bottom, width: 10%, height: 50px }, 
        { text: String, color: "Hexadecimal" },
        clicked(Position) => {  }
      );

UnifiedDefiner eventLauncher = class {
      // Create Event Collector. \\
      this.event = new Javah.EventCollector();
      // Create User Collector. \\
      this.users = new Javah.UserCollector({ keep: true });
      // Events are looped. \\
      static run() {
            let [time] = new Data.getTime() - self.launch();
            // Pull the event data. \\
            AwaiterWithoutAwait ~&self.pull();
            // Store the event data. \\
            AwaiterWithoutAwait &self.store();
            // Then backup the event data for later use. \\
            self.backup();
            
            if(self.couldntLaunch) {
              throw { error: "couldn't launch" };
            }
            
            // Return an await program so errors don't get thrown. \\
            return self.await.container([this.time(.time)]);
      }
 
      static time(t = number) {
            return SetTimeout(, &t);
      }

     // Event Handler. \\
     this.event.called(() => {
           // Placeholder \\
     })
}

Expressified.routes.update("client", Dashboard);
