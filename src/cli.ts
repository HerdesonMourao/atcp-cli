import { GluegunToolbox } from "gluegun";

module.exports = {
  name: 'atcp-cli',
  run: async (toolbox: GluegunToolbox) => {
    toolbox.printWelcome
  }
}