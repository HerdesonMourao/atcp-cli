import { GluegunCommand } from "gluegun";

const command: GluegunCommand = {
  name: 'atcp-cli',
  run: async (toolbox) => {
    const { print } = toolbox;

    print.info(`Welcome to ATCP CLI`);
  },
}

export default command;