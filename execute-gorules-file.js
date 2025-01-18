const fs = require("fs/promises");
const { ZenEngine } = require("@gorules/zen-engine");

module.exports = function (RED) {
  function executeGorulesFile(config) {
    RED.nodes.createNode(this, config);
    this.file = config.file;
    this.name = config.name;
    this.trace = config.trace == "On" ? true : false;
    var node = this;
    let lastModified = null;
    const engine = new ZenEngine();
    let decision = null;

    async function isFileChanged() {
      const stats = await fs.stat(node.file);
      if (lastModified === null) {
        lastModified = stats.mtime;
        return true;
      }
      if (stats.mtime > lastModified) {
        lastModified = stats.mtime;
        return true;
      }
      return false;
    }

    node.on("input", async function (msg, send, done) {
      send =
        send ||
        function () {
          node.send.apply(node, arguments);
        };
      done =
        done ||
        function (err) {
          if (err) node.error(err, msg);
        };

      try {
        if (await isFileChanged()) {
          const content = await fs.readFile(node.file, "utf-8");
          decision = engine.createDecision(JSON.parse(content));
        }

        const data = await decision.evaluate(msg.payload, { trace: node.trace });
        msg.payload = data.result;
        if(data.trace){
          msg.trace = data.trace;
        }
        msg.performance = data.performance;
        node.send(msg);
        done();
      } catch (e) {
        node.error(e, msg);
        done(e);
      }
    });
  }
  RED.nodes.registerType("execute-gorules-file", executeGorulesFile);
};
