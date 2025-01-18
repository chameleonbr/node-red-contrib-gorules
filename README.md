# node-red-contrib-gorules

NodeRED Node to Run GoRules flows

To get more information about gorules, go to https://gorules.io. 

Ok, it's a workflow inside another workflow, but you have a lot of resources focused on business rules and not so much on development.

Integrating GoRules.io into Node-RED offers a compelling solution for developers seeking to enhance their applications with robust, rule-based decision-making capabilities. GoRules is an open-source Business Rules Engine (BRE) that enables the creation and management of complex decision logic through an intuitive interface. By embedding GoRules within Node-RED, users can leverage its powerful features to streamline workflows and improve system performance.

Key Benefits of Integration:

* Simplified Rule Management: GoRules provides a user-friendly, spreadsheet-like interface for defining and managing business rules. This approach allows both technical and non-technical users to collaborate effectively, reducing the complexity of rule creation and maintenance. 

* Enhanced Decision-Making: With GoRules, developers can implement sophisticated decision tables, expressions, and functions directly within Node-RED. This integration enables dynamic, context-aware routing and processing, ensuring that applications respond intelligently to varying inputs. 

* Cross-Platform Compatibility: GoRules is designed to be cross-platform, with native bindings for Node.js, Python, and Go. This flexibility ensures that applications can seamlessly integrate GoRules, regardless of the underlying technology stack. 

* Improved Performance: Built with Rust, GoRules offers high performance and reliability. Integrating it into Node-RED allows for efficient rule evaluation and processing, which is crucial for applications requiring real-time decision-making. 

Practical Application:

By integrating GoRules into Node-RED, developers can create flows that incorporate complex decision logic without extensive coding. For example, a flow could evaluate customer data against predefined rules to determine eligibility for promotions or assess credit risk. This integration streamlines the development process, reduces errors, and enhances the overall functionality of the application.

In summary, embedding GoRules.io within Node-RED empowers developers to build intelligent, rule-driven applications with ease. The combination of GoRules' powerful rule management and Node-RED's visual programming environment provides a robust framework for developing sophisticated decision-making systems.

Check this example:

```
[{"id":"24275160.f731f6","type":"tab","label":"Flow 1","disabled":false,"info":""},{"id":"5f18dc906ad2f7bf","type":"execute-gorules-flow","z":"24275160.f731f6","name":"Rules","flow":"{\"contentType\":\"application/vnd.gorules.decision\",\"nodes\":[{\"type\":\"inputNode\",\"id\":\"385949f6-3900-4819-ba6a-25678add8fa9\",\"name\":\"request\",\"position\":{\"x\":460,\"y\":180}},{\"type\":\"outputNode\",\"id\":\"e4e4af39-c5df-46ef-a1bb-b0ffb94e22d7\",\"name\":\"response\",\"position\":{\"x\":1195,\"y\":180}},{\"type\":\"decisionTableNode\",\"content\":{\"hitPolicy\":\"first\",\"rules\":[{\"_id\":\"df7b3dc4-cd40-4dca-9d2a-b73c01b5ec08\",\"9cff7fb6-a497-4118-a458-787d47a0639d\":\"1\",\"a6abcc46-247d-4ed5-8513-5f517393905b\":\"0.10\"},{\"_id\":\"9f6596e1-8f2c-4dce-bc91-1ca6ae8132b4\",\"9cff7fb6-a497-4118-a458-787d47a0639d\":\"2\",\"a6abcc46-247d-4ed5-8513-5f517393905b\":\"0.25\"},{\"_id\":\"304813e0-9d2d-43c8-8376-c70a59a876cb\",\"9cff7fb6-a497-4118-a458-787d47a0639d\":\"3\",\"a6abcc46-247d-4ed5-8513-5f517393905b\":\"0.5\"}],\"inputs\":[{\"id\":\"9cff7fb6-a497-4118-a458-787d47a0639d\",\"name\":\"Input\",\"field\":\"field\"}],\"outputs\":[{\"id\":\"a6abcc46-247d-4ed5-8513-5f517393905b\",\"name\":\"Output\",\"field\":\"output\"}],\"passThrough\":true,\"inputField\":null,\"outputPath\":null,\"executionMode\":\"single\",\"passThorough\":false},\"id\":\"6ccdc8a1-dac2-475a-bfc2-ab75af310455\",\"name\":\"decisionTable1\",\"position\":{\"x\":820,\"y\":180}},{\"type\":\"expressionNode\",\"content\":{\"expressions\":[{\"id\":\"179384c0-4f51-43cd-8238-3eb69b891f20\",\"key\":\"xpto\",\"value\":\"field * 17\"}],\"passThrough\":true,\"inputField\":null,\"outputPath\":null,\"executionMode\":\"single\"},\"id\":\"0382525b-5350-40e6-94cb-29232907a9d8\",\"name\":\"expression1\",\"position\":{\"x\":820,\"y\":300}}],\"edges\":[{\"id\":\"237df3d7-b1d3-473b-9366-bd5428dd4c96\",\"sourceId\":\"385949f6-3900-4819-ba6a-25678add8fa9\",\"type\":\"edge\",\"targetId\":\"6ccdc8a1-dac2-475a-bfc2-ab75af310455\"},{\"id\":\"f7e3f0e8-0b4b-4974-8928-16ed5e0df3d0\",\"sourceId\":\"6ccdc8a1-dac2-475a-bfc2-ab75af310455\",\"type\":\"edge\",\"targetId\":\"e4e4af39-c5df-46ef-a1bb-b0ffb94e22d7\"},{\"id\":\"9055509f-b8b1-4c4a-ae24-b8314364c135\",\"sourceId\":\"385949f6-3900-4819-ba6a-25678add8fa9\",\"type\":\"edge\",\"targetId\":\"0382525b-5350-40e6-94cb-29232907a9d8\"},{\"id\":\"14f8982d-6fe9-4ad3-8fb8-bb115c4c82ad\",\"sourceId\":\"0382525b-5350-40e6-94cb-29232907a9d8\",\"type\":\"edge\",\"targetId\":\"e4e4af39-c5df-46ef-a1bb-b0ffb94e22d7\"}]}","trace":"On","x":530,"y":160,"wires":[["ee4f6bf4d99ebd3a"]]},{"id":"0cd16cb8f82c12e2","type":"inject","z":"24275160.f731f6","name":"","props":[{"p":"payload"},{"p":"topic","vt":"str"}],"repeat":"","crontab":"","once":false,"onceDelay":0.1,"topic":"","payload":"{\"field\":1}","payloadType":"json","x":320,"y":120,"wires":[["5f18dc906ad2f7bf"]]},{"id":"ee4f6bf4d99ebd3a","type":"debug","z":"24275160.f731f6","name":"debug 1","active":true,"tosidebar":true,"console":false,"tostatus":false,"complete":"true","targetType":"full","statusVal":"","statusType":"auto","x":720,"y":160,"wires":[]},{"id":"fcaddd787f6ea7e7","type":"inject","z":"24275160.f731f6","name":"","props":[{"p":"payload"},{"p":"topic","vt":"str"}],"repeat":"","crontab":"","once":false,"onceDelay":0.1,"topic":"","payload":"{\"field\":2}","payloadType":"json","x":320,"y":160,"wires":[["5f18dc906ad2f7bf"]]},{"id":"8c5775e91864bfa3","type":"inject","z":"24275160.f731f6","name":"","props":[{"p":"payload"},{"p":"topic","vt":"str"}],"repeat":"","crontab":"","once":false,"onceDelay":0.1,"topic":"","payload":"{\"field\":3}","payloadType":"json","x":320,"y":200,"wires":[["5f18dc906ad2f7bf"]]}]
```


Other Example with a external file (sample.json):

```
[{"id":"afdcf6bad7e2c4fc","type":"tab","label":"Fluxo 2","disabled":false,"info":"","env":[]},{"id":"3d97704e6a28f35e","type":"execute-gorules-file","z":"afdcf6bad7e2c4fc","name":"Rules File","file":"./sample.json","trace":"On","x":500,"y":300,"wires":[["4a8aad9908ac617c"]]},{"id":"9e397cbcbb171b14","type":"inject","z":"afdcf6bad7e2c4fc","name":"","props":[{"p":"payload"},{"p":"topic","vt":"str"}],"repeat":"","crontab":"","once":false,"onceDelay":0.1,"topic":"","payload":"{\"field\":1}","payloadType":"json","x":280,"y":300,"wires":[["3d97704e6a28f35e"]]},{"id":"4a8aad9908ac617c","type":"debug","z":"afdcf6bad7e2c4fc","name":"debug 2","active":true,"tosidebar":true,"console":false,"tostatus":false,"complete":"true","targetType":"full","statusVal":"","statusType":"auto","x":700,"y":300,"wires":[]}]
```

sample.json file:

```
{
  "contentType": "application/vnd.gorules.decision",
  "nodes": [
    {
      "type": "inputNode",
      "id": "385949f6-3900-4819-ba6a-25678add8fa9",
      "name": "request",
      "position": {
        "x": 460,
        "y": 180
      }
    },
    {
      "type": "outputNode",
      "id": "e4e4af39-c5df-46ef-a1bb-b0ffb94e22d7",
      "name": "response",
      "position": {
        "x": 1195,
        "y": 180
      }
    },
    {
      "type": "decisionTableNode",
      "content": {
        "hitPolicy": "first",
        "rules": [
          {
            "_id": "df7b3dc4-cd40-4dca-9d2a-b73c01b5ec08",
            "9cff7fb6-a497-4118-a458-787d47a0639d": "1",
            "a6abcc46-247d-4ed5-8513-5f517393905b": "0.10"
          },
          {
            "_id": "9f6596e1-8f2c-4dce-bc91-1ca6ae8132b4",
            "9cff7fb6-a497-4118-a458-787d47a0639d": "2",
            "a6abcc46-247d-4ed5-8513-5f517393905b": "0.25"
          },
          {
            "_id": "304813e0-9d2d-43c8-8376-c70a59a876cb",
            "9cff7fb6-a497-4118-a458-787d47a0639d": "3",
            "a6abcc46-247d-4ed5-8513-5f517393905b": "0.5"
          }
        ],
        "inputs": [
          {
            "id": "9cff7fb6-a497-4118-a458-787d47a0639d",
            "name": "Input",
            "field": "field"
          }
        ],
        "outputs": [
          {
            "id": "a6abcc46-247d-4ed5-8513-5f517393905b",
            "name": "Output",
            "field": "output"
          }
        ],
        "passThrough": true,
        "inputField": null,
        "outputPath": null,
        "executionMode": "single",
        "passThorough": false
      },
      "id": "6ccdc8a1-dac2-475a-bfc2-ab75af310455",
      "name": "decisionTable1",
      "position": {
        "x": 820,
        "y": 180
      }
    },
    {
      "type": "expressionNode",
      "content": {
        "expressions": [
          {
            "id": "179384c0-4f51-43cd-8238-3eb69b891f20",
            "key": "xpto",
            "value": "field * 17"
          }
        ],
        "passThrough": true,
        "inputField": null,
        "outputPath": null,
        "executionMode": "single"
      },
      "id": "0382525b-5350-40e6-94cb-29232907a9d8",
      "name": "expression1",
      "position": {
        "x": 820,
        "y": 300
      }
    }
  ],
  "edges": [
    {
      "id": "237df3d7-b1d3-473b-9366-bd5428dd4c96",
      "sourceId": "385949f6-3900-4819-ba6a-25678add8fa9",
      "type": "edge",
      "targetId": "6ccdc8a1-dac2-475a-bfc2-ab75af310455"
    },
    {
      "id": "f7e3f0e8-0b4b-4974-8928-16ed5e0df3d0",
      "sourceId": "6ccdc8a1-dac2-475a-bfc2-ab75af310455",
      "type": "edge",
      "targetId": "e4e4af39-c5df-46ef-a1bb-b0ffb94e22d7"
    },
    {
      "id": "9055509f-b8b1-4c4a-ae24-b8314364c135",
      "sourceId": "385949f6-3900-4819-ba6a-25678add8fa9",
      "type": "edge",
      "targetId": "0382525b-5350-40e6-94cb-29232907a9d8"
    },
    {
      "id": "14f8982d-6fe9-4ad3-8fb8-bb115c4c82ad",
      "sourceId": "0382525b-5350-40e6-94cb-29232907a9d8",
      "type": "edge",
      "targetId": "e4e4af39-c5df-46ef-a1bb-b0ffb94e22d7"
    }
  ]
}
```