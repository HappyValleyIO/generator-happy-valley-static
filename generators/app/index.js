var Generator = require('yeoman-generator');

module.exports = class extends Generator {
  async prompting() {
    this.answers = await this.prompt([
      {
        type: "input",
        name: "name",
        message: "Your project name",
        default: this.appname // Default to current folder name
      },
      {
        type: "input",
        name: "description",
        message: "What's the description for this project?"
      },
      {
        type: "input",
        name: "repository",
        message: "Repository url:"
      },
      {
        type: "input",
        name: "author",
        message: "Who's the author of this project?",
        default: "Happy Valley IO <support@happyvalley.io>"
      },
      {
        type: "input",
        name: "license",
        message: "What's the project license?",
        default: "MIT"
      }
    ]);
  }

  writing() {
    this.destinationRoot(`${this.destinationPath(this.answers.name)}`)

    this.fs.copy(
      this.templatePath(),
      this.destinationPath()
    )

    this.fs.copy(
      this.templatePath(),
      this.destinationPath(),
      { globOptions: { dot: true } }
    )

    this.fs.copyTpl(
      this.templatePath('package.json'),
      this.destinationPath('package.json'), {
        name: this.answers.name,
        description: this.answers.description,
        repository: this.answers.repository,
        author: this.answers.author,
        license: this.answers.license
      }
    )
  }

  install() {
    this.log('Installing dependencies')
    this.destinationRoot(`${this.destinationPath(this.answers.name)}`)

    this.spawnCommand('git', ['init'], {
      cwd: this.destinationPath()
    })

    this.spawnCommand('npm', ['ci'], {
      cwd: this.destinationPath()
    })
  }
};
