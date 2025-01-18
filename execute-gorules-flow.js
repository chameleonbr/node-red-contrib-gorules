const crypto = require("crypto");
const { ZenEngine } = require("@gorules/zen-engine");

module.exports = function (RED) {
  function executeGorulesFlow(config) {
    RED.nodes.createNode(this, config);
    var node = this;
    this.name = config.name;
    this.flow = config.flow;
    this.trace = config.trace == "On" ? true : false;
    const engine = new ZenEngine();
    let decision = null;
    let lastModified = null;

    function isFlowChanged(flow) {
      const md5 = crypto.createHash("md5");
      const flowHash = md5.update(flow).digest("hex");

      if (flowHash != lastModified) {
        lastModified = flowHash;
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

      let flow = msg.flow || node.flow;

      try {
        if (isFlowChanged(flow)) {
          decision = engine.createDecision(JSON.parse(flow));
        }

        const data = await decision.evaluate(msg.payload, {
          trace: node.trace,
        });
        msg.payload = data.result;
        if (data.trace) {
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
  RED.nodes.registerType("execute-gorules-flow", executeGorulesFlow);
};
