const boxen = require("boxen");
const chalk = require("chalk");
const inquirer = require("inquirer");
const clear = require("clear");
const open = require("open");

clear();

const prompt = inquirer.createPromptModule();

const questions = [
    {
        type : "list",
        name : "action",
        message : "What do you want me to do?",
        choices:[
            {
                name:`Drop a ${chalk.bold("mail")}?`,
                value:() =>{
                    open("mailto:light.moon42000@gmail.com");
                    console.log("\nLooking forward to hear from you!\n");
                }
            },{
                name:"Exit",
                value:()=>{
                    console.log("Good bye, have a nice day!\n");
                }
            }
        ]
    }
]

const data = {
    name: chalk.bold.green("                          Pratik Kumar"),
    fact: chalk.hex('#B10000')('I love DS Algo and Dev!'),
    codepen: chalk.hex('#1E43D2')("https://codepen.io/pratik-kumar-the-lessful"),
    github:chalk.hex('#787878')("https://github.com/pratikkumar911"),
    dev: chalk.hex('#330093')("https://dev.to/pratik_kumar"),
    linkedIn:chalk.hex('#AB009C')("https://www.linkedin.com/in/pratik-kumar-4675761aa/"),
    website: chalk.hex('#00AB9E')("https://pratik-codes.herokuapp.com/"),
    leetcode: chalk.hex('#A1AB00')("https://leetcode.com/loopinfinity0/"),

    labelDev: chalk.hex('#A959FF').bold("                Dev:"),
    labelFact: chalk.hex('#FF6262').bold("                Fun Fact:"),
    labelCodepen: chalk.hex('#629DFF').bold("     Code Pen:"),
    labelGithub: chalk.hex('#9E9E9E').bold("            Github:"),
    labelLinkedIn: chalk.hex('#F295FF').bold(" LinkedIn:"),
    labelWebsite: chalk.hex('#59FFC8').bold("         Portfolio:"),
    labelLeetcode: chalk.hex('#FFF976').bold("          Leetcode:")
}

const me = boxen(
    [
        `${data.name}`,
        ``,
        `${data.labelFact} ${data.fact}`,
        ``,
        `${data.labelDev}  ${data.dev}`,
        `${data.labelGithub} ${data.github}`,
        `${data.labelLeetcode}  ${data.leetcode}`,
        `${data.labelWebsite}  ${data.website}`,
        `${data.labelCodepen}  ${data.codepen}`,
        `${data.labelLinkedIn}  ${data.linkedIn}`,
        
        ``,
        `${chalk.bold("      Hi there! I am Pratik, messing around with web tech.")}`,
        `${chalk.bold("      Striving everyday to improve DS Algo and dev skills.")}`,
        `${chalk.bold("        Toss me an email if you want to talk or discuss!")}`
    ].join("\n"),
    {
        margin:1,
        float:'center',
        padding:1,
        borderStyle:"single",
        borderColor: "blue"
    }
);

console.log(me);

const tip = [
    `Tip: ${chalk.cyanBright.bold(
        "ctrl + right click"
    )} on the links to open them.`,
    '',
].join("\n");
console.log(tip);

prompt(questions).then(answer => answer.action());