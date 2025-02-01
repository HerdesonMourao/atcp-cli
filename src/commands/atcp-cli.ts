import { GluegunCommand } from "gluegun";

const command: GluegunCommand = {
  name: 'atcp-cli',
  run: async (toolbox) => {
    const { print } = toolbox;

    print.info(`Welcome to ATCP CLI`);
  },
}

module.exports = command;