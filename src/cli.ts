import { build } from "gluegun"

async function run(argv: any) {
  const cli = build()
    .brand('atcp-cli')
    .src(__dirname)
    .plugins('./node_modules', { matching: 'atcp-cli-*', hidden: true })
    .help()
    .version()
    .create();

  return await cli.run(argv);
}

module.exports = { run }