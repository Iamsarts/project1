#!/usr/bin/env node

import terminalImage from 'terminal-image';
import chalk from 'chalk';
import figlet from 'figlet';
import rl from 'readline-sync';
import fetch from 'node-fetch';

console.log(figlet.textSync('  STICKY \' S  SITUATION  !', {
    font: 'big',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 200,
    whitespaceBreak: true
}));
console.log(`
${chalk.bgRedBright(' AN INTERACTIVE VISUAL NOVEL ')} ${chalk.bgGreen(' STARING STICKY AND FRIENDS ')} ${chalk.bgRedBright(' DEVELOPED BY TYLER SARTISON AND HIMSELF ')} ${chalk.bgGreen(' WELL...I KIND OF DID GET SOME HELP ')}
`);

// gets player name from server

const playerName = rl.question("Thank you for checking out Stick\'s Situation. What is your name? ");

async function playerNameIntro() {
    const response = await fetch(`http://localhost:4000/hello?name=${playerName}`);
    let welcomeMessage = await response.json();
    console.log(welcomeMessage);
}

await playerNameIntro();
let commands = ['Yes', 'No'];

//Sticky Scene One

while (true) {
    console.log(await terminalImage.file('Sticky_scene_1.jpeg', { width: '60%', height: '60%' }));
    console.log(`With these two simple commands:`, commands,);
    console.log(`You can help Sticky get to the bank so he can pay his rent.
If you fail to get Sticy to the bank then He ends up homeless,
and you loose the game!`);

    const theCommand = rl.question('Would you like to help Sticky? ');

    if (theCommand.toLowerCase() === 'yes') {
        console.log(await terminalImage.file('Sticky_scene_2.jpeg', { width: '60%', height: '60%' }));
        break;
    } else if (theCommand.toLowerCase() === 'no') {
        console.log(`${playerName}! You picked No! 💀Game over, you lose!!!💀`);
        process.exit(1);
    }
}
//Sticky Scene Two

while (true) {
    console.log('The Commands Are:', commands,);
    console.log(`Awesome ${playerName}!!! Since you answered yes, Sticky stepped out of his house.
Things were going really well until he slipped and broke his leg.
Shortly after that a shady character showed up and offered to help Sticky.
He had just finished a new app, version 0.0.1, that fixes broken bones.`);
    const theCommand = rl.question('Should Sticky give this untested app a try? ');
    if (theCommand.toLowerCase() === 'yes') {
        break;
    } else if (theCommand.toLowerCase() === 'no') {
        console.log(`${playerName}! You picked No! 💀Game over, you lose!!!💀`);
        process.exit(1);
    }
}
//Sticky Scene Three

while (true) {
    console.log(await terminalImage.file('Sticky_scene_3.jpeg', { width: '60%', height: '60%' }));
    console.log('The Commands Are:', commands,);
    console.log(`Hey ${playerName}, you are getting good at this! The app fixed his leg. He was happily on his way to the bank again 
until he noticed his reflection in a window. Looking so freakish Sticky just 
wanted to hide. He looked around and saw cargo van. He quickly hid 
inside it. Suddenly the van lurched and started to move.`);
    const theCommand = rl.question('Should Sticky try to jump out? ');
    if (theCommand.toLowerCase() === 'yes') {
        console.log(`${playerName}! You picked Yes! 💀Game over, you lose!!!💀`);
        process.exit(1);
    } else if (theCommand.toLowerCase() === 'no') {
        break;
    }
}
//Sticky Scene Four

while (true) {
    console.log(await terminalImage.file('Sticky_scene_4.jpeg', { width: '60%', height: '60%' }));
    console.log('The Commands Are:', commands,);
    console.log(`You are so smart ${playerName}, Sticky would have died if he had jumped out! 
The van eventually came to a stop. Sticky got out and looked around. To his dismay the 
driver of the van was that sketchy man with the app!`);
    const theCommand = rl.question('Should Sticky talk to Sketchy man?');
    if (theCommand.toLowerCase() === 'yes') {
        console.log(await terminalImage.file('Sticky_scene_5.jpeg', { width: '60%', height: '60%' }));
        break;
    } else if (theCommand.toLowerCase() === 'no') {
        console.log(`${playerName}! You picked No! 💀Game over, you lose!!!💀`);
        process.exit(1);
    }
}

//Sticky scene Five

while (true) {
    console.log('The Commands Are:', commands,);
    console.log(`Well ${playerName}, we both know that talking to Sketchy man was probably the best worst idea. They had a good talk.
Sketchy man told Sticky that he created an update to the app. This will reverse the damage done by the bug in version 0.0.1
and return Sticky to his normal mono chromatic slash greyscale self. Sticky had become a bit apprehensive at this point. This Sketchy man
has caused him a lot of grief. Keep in mind, Sticky still needs to get to the bank!`);
    const theCommand = rl.question('Should Sticky accept the update from the Sketchy man?');
    if (theCommand.toLowerCase() === 'yes') {
        console.log(await terminalImage.file('Sticky_scene_6_yes.jpeg', { width: '60%', height: '60%' }));
        break;
    } else if (theCommand.toLowerCase() === 'no') {
        console.log(await terminalImage.file('Sticky_scene_6_no.jpeg', { width: '60%', height: '60%' }));
        console.log(`${playerName}! You picked No! 💀Game over, you lose!!!💀`);
        process.exit(1);
    }
}

//Sticky scene Six

while (true) {
    console.log('The Commands Are:', commands,);
    console.log(`Good choice ${playerName}! Sticky felt ready to head to the bank once and for all. Time was running out and Sketchy 
man somehow knew that. So Sketchy man offered Sticky a fast way to get to the bank. He had just created a 
new app that can teleport people from one place to another.`);
    const theCommand = rl.question('Should Sticky accept the teleportation offer from the Sketchy man?');
    if (theCommand.toLowerCase() === 'yes') {
        break;
    } else if (theCommand.toLowerCase() === 'no') {
        console.log(`${playerName}! You picked No! 💀Game over, you lose!!!💀`);
        process.exit(1);
    }
}

//Sticky scene Seven, the final scene

while (true) {
    console.log(await terminalImage.file('Sticky_scene_7.jpeg', { width: '60%', height: '60%' }));
    console.log('The Commands Are:', commands,);
    console.log(`You really stood tall there ${playerName}! Sticky made it to the bank with only a few minutes to spare thanks to
Sketchy man and his app! You accomplished a lot today. You proved that teleportation is possible. Plus you kept Sticky
from becoming homeless. Well done. Just don't tell Sticky right now that there was a bug in the teleportation app. He's
had enough for one day. Right?`);
    process.exit(1);
}
