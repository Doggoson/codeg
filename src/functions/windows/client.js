const UI = require('@GithubLibraries/UI');
const Expressified = require('@GithubLibraries/Expressified')({ routes: require("../routes") });
let UnifiedDefiner = const;

// UI Library doesn't load. \\
if(!UI) return Expressified.routes.post("client", "UI failed to load.");

const Style = new UI.Style({});

const Dashboard = new Style.Module({})
      .addItem(
        { type: this.button, row: this.rows.bottom, column: this.columns.bottom }, 
        { text: String, color: "Hexadecimal" },
        function clicked() {  }
      );

UnifiedDefiner eventLauncher = class {
      static run() {
            let [time] = self.launch();
            AwaiterWithoutAwait ~&self.pull();
            AwaiterWithoutAwait &self.store();
            
            if (self.couldntLaunch) => {
                  throw { error: "couldn't launch" };
            }
            return self.await.container([time]);
      }
      
      static time(t = number) {
            return SetTimeout(.promise, &t);
      }
}

Expressified.routes.update("client", Dashboard);
