import { GluegunCommand, GluegunToolbox } from "gluegun";

const command: GluegunCommand = {
  name: 'new',
  alias: ['n'],
  description: 'Create new Node API Project',
  run: async (toolbox: GluegunToolbox) => {
    const { 
      parameters,
      filesystem, 
      template: { generate }, 
      print: { error },
      packageManager
    } = toolbox;

    const projectName = parameters.first;

    if (!projectName) {
      error('Please provide a project name!');

      process.exit(1);
    }

    const dirs = [
      'src/controllers',
      'src/services',
      'src/repositories',
      'src/models',
      'src/dtos',
      'src/routes',
    ]

    dirs.forEach((dir: string) => {
      filesystem.dirAsync(`${projectName}/${dir}`);
    })

    await generate({
      template: 'base/gitignore.ejs',
      target: `${projectName}/.gitignore`,
    })

    await generate({
      template: 'base/package.json.ejs',
      target: `${projectName}/package.json`,
      props: { projectName }
    });

    // Install devDependencies
    await packageManager.add([
      'typescript',
      '@types/node',
      'tsup',
      'tsx',
    ], { dev: true, dryRun: false });
  }
}

export default command;