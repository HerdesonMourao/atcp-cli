import { GluegunToolbox } from 'gluegun';

export default (toolbox: GluegunToolbox) => {
  toolbox.printWelcome = () => {
    const { print } = toolbox;

    print.info(print.colors.green('\n⚡️ Bem-vindo ao ATCP CLI!\n'));

    return toolbox;
  }

  toolbox.validateProjectName = (name: string) => {
    return /^[a-z0-9-_]+$/.test(name);
  }
}