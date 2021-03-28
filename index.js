console.log('Powerup initiated!');
const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require("./config.json");

const responses = [
"A",
"I remember the time when my lab rats fought over a piece of cheese.. The funny thing is theat they didn't really NEED to eat the cheese, they were just conditioned to WANT the cheese by weeks of electrical stimulation.. In the end they killed each other, and the cheese was eaten by one of the human test subjects, he died too because the cheese was moldy.",
"C",
"D",
"E",
"F",
"G"
];
const respond = () => responses[Math.floor(Math.random() * responses.length)];

bot.on('ready', function(){
    console.log('Powerup complete!');
    bot.user.setStatus('Online');
    bot.user.setActivity("with my test subjects");
});
bot.on('message', (message) => {

    if(message.content == '$gladoshelp'){
        message.channel.send('The Commands: ```$help - This screen\n$cookie - Cookie!\n$radioactive - CAUTION: Radioactivity!\n$random1 - 10000000 - Gives you a random number between 0 and 1 - 10000000\n$random_num - Gives you a random number\n$magic8ball - ?\n$lemons - When life gives you lemons\n$cake - Want some cake?\n$invite - Dead Invites to dead servers\n$potato - Oh no, not this again\n$fail_whale - Fail\n$pi - Number PI\n$current_year - Shows you the current year in many calendars\n$latency - Shows your connection latency in ms```');
    }
    if(message.content == '$gladosmodhelp'){
        message.channel.send('The Commands for Moderators: ```$kick```');
    }
    if(message.content == "$glados"){
        message.channel.send("$gladoshelp");
    }
    if(message.content == '$glados_old'){
        message.channel.send('The Commands i can run are: ```$cookie $radioactive $glados $random1000 $random100 $random10 $random1 $magic8ball $lemons $cake $invite $potato $fail_whale```');
    }
    if(message.content == '$pi'){
        message.channel.send(Math.PI);
    }
    if(message.content == '$random10000000'){
        message.channel.send(Math.floor(Math.random() * 10000000));
    }
    if(message.content == '$random1000000'){
        message.channel.send(Math.floor(Math.random() * 1000000));
    }
    if(message.content == '$random100000'){
        message.channel.send(Math.floor(Math.random() * 100000));
    }
    if(message.content == '$random10000'){
        message.channel.send(Math.floor(Math.random() * 10000));
    }
    if(message.content == '$random1000'){
        message.channel.send(Math.floor(Math.random() * 1000));
    }
    if(message.content == '$random100'){
        message.channel.send(Math.floor(Math.random() * 100));
    }
    if(message.content == '$random10'){
        message.channel.send(Math.floor(Math.random() * 10));
    }
    if(message.content == '$random1'){
        message.channel.send(Math.random());
    }
    if(message.content == "$name"){
        message.channel.send(bot.user.username);
    }
    if(message.content == "$ping_self"){
        message.channel.send(`<@${bot.user.id}>`);
    }
    if(message.content == '$random_num'){
        message.channel.send(Math.random() * 100000000000000000);
    }
    if(message.content =='$magic8ball'){
        message.channel.send("**Magic does not exist. Don't even try.**");
    }
    if(message.content == "$random_quote"){
        message.channel.send(respond());
    }
    if(message.content == '$cookie'){
        message.channel.send(':cookie:');
    }
	if(message.content == '$f'){
        message.channel.send('**F**');
    }
    if(message.content == '$radioactive'){
        message.channel.send(':radioactive: :radioactive: :radioactive: :radioactive: :radioactive: :radioactive: :radioactive: :radioactive: :radioactive: :radioactive: :radioactive: :radioactive: ');
    }
    if(message.content == '!!!!'){
        message.channel.send('$gladoshelp');
    }
    if(message.content == "$current_year"){
        message.channel.send("The current year is \n2020\n2773\n1468-1469\n2012-2013\n176-177\n1426-1427\n2970\n2564\n1382\n7528-7529\nMMXX\n228-229\n5780-5781\n2076-2077\n1942-1943\n1398-1399\n1441-1442\n2680\n1736-1737\n4353\n109\nXXXII\n2331-2332\n2563\n12020");
    }
    if(message.content == '!!!'){
        message.channel.send('$gladoshelp');
    }
    if(message.content == '$æ'){
        message.channel.send('æ');
    }
    /*if(message == '$loop'){
        message.channel.send('$loop');
    }*/
    if(message.content == '$lemons'){
        message.channel.send("Cave Johnson: Alright, i've been thinking...\n When Life gives you lemons\n Don't make lemonade!\n Make Life, take the lemons back!\n Get mad!\n I don't want your damn lemons, what am i supposed to do with these?\n Demand to see Life's manager\n Make Life rue a day, it thought it could give Cave Johnson lemons!\n Do you know who i am?\n I'm the man who's gonna burn your house down*\n *with the lemons!\n I'm gonna get my Engineers to invent a combustible lemon, that burns your house down!\n **Goodbye, sir!**\n THE END ");
    }
    if(message.content == "$everyone"){
        //message.channel.send("@everyone");
        message.channel.send(`<@${message.guild.id}>`);
    }
    if(message.content == '$linetest'){
        message.channel.send("Line1\nLine2");
    }
    if(message.content == '$lemons_old'){
        message.channel.send("Cave Johnson: Alright, i've been thinking...");
        message.channel.send('When life gives you lemons');
        message.channel.send('Don´t make lemonade!');
        message.channel.send('Make life, take the lemons back!');
        message.channel.send('Get mad!');
        message.channel.send("I don't want your damn lemons, what am i supposed to do with these?");
        message.channel.send("Demand to see life's manager");
        message.channel.send('Make life rule a day, it thought it could give Cave Johnson lemons!');
        message.channel.send('Do you know who i am?');
        message.channel.send("I´m the man who's gonna burn your house down*");
        message.channel.send('*With the lemons');
        message.channel.send("I'm gonna get my Engineers to invent a combustible lemon, that burns your house down!");
        message.channel.send('**Goodbye sir.**');
        message.channel.send('THE END');
    }
    if(message.content == '$ggllaaddooss'){
        message.channel.send("Hello! it's me, Enderman842. The creator of the GLaDOS-Bot");
        message.channel.send('Enderman842 on YouTube: https://www.youtube.com/channel/UCPIgkbtrhRjEsN46XZSfUnA');
        message.channel.send('My Discord-Server: http://discord.gg/yTv2NkJ')
    }
    if(message.content == '$cake'){
        message.channel.send('Want some cake?', {file: 'https://3.bp.blogspot.com/_cd6_MFUGTUE/TI-qhkYbt0I/AAAAAAAAAV8/wJHhnJVi8Lo/s1600/the_cake_is_a_lie_portal.jpg'});
    }
    if(message.content == "$lenny"){
        message.channel.send("( ͡° ͜ʖ ͡°)");
    }
    if(message.content == '$potato'){
        message.channel.send('', {file: 'https://i1.theportalwiki.net/img/9/99/Portal2_GLaDOS_Potato.png'});
        message.channel.send('Oh hi!');
        message.channel.send('So, how are you holding up?');
        message.channel.send("Because i'm a potato!");
    }
    if(message.content == '$invite'){
        message.channel.send('https://discord.gg/4YwF5m https://discord.gg/SECq9pK');
    }
    if(message.content == '$fail_whale'){
        message.channel.send('▄██████████████▄▐█▄▄▄▄█\n██████▌▄▌▄▐▐▌███▌▀▀██▀▀\n████▄█▌▄▌▄▐▐▌▀███▄▄█▌\n▄▄▄▄▄██████████████▀');
    }
    if(message.content == "$fail_whale_old"){
        message.channel.send("▄██████████████▄▐█▄▄▄▄█");
        message.channel.send("██████▌▄▌▄▐▐▌███▌▀▀██▀▀");
        message.channel.send("████▄█▌▄▌▄▐▐▌▀███▄▄█▌");
        message.channel.send("▄▄▄▄▄██████████████▀");
    }
    if(message.content == 'Warning! Central Core in 80% corrupt!'){
        message.channel.send("That's funny, I don't feel corrupt, in fact I feel pretty good!");
    }
    if(message.content == '$singthefnafsong'){
        message.channel.send("Ok, fine.");
        message.channel.send("We're waiting every Night to finally roam and invite, newcomers to play with us... For many years, we've been all alone, we're forced to be still and play the same songs we've known since that day. An imposter took our life away, now we're stuck here to decay. Please let us get in, don't lock us away, we're not that what you're thinking. We're poor little souls, who have lost all control and we're forced here to take that role. We've been all alone, stuck here in our little zone since 1987. Join us, be our friend, or just be stuck and defend, after all you only got: Five Nights at Freddy's. Is this where you want to be? I just dont get it, why do you want to stay? Five Nights at Freddy's We're really quite suprised, we get to see you another night, you should have looked for another job, you should have saild to this place goodbye. it's like there's so much more, maybe you've been in this place before, we remember a face like yours, you seem acquainted with those doors. Please let us get in, don't lock us away, we're not that what you're thinking. we're poor little sounls who have lost all control and we're forced here to take that role. We've been all alone, stuck here in our little zone, since 1987. Join us, be our friend, or just be stuck and defend. After all you've only got: Five Nights at Freddy's Is this where you want to be? I just don't get it, why do you want to stay? Five Nights at Freddy's" + " THE END");
        message.channel.send("There.");
    }
    if(message.content == "$rich_embed_test"){
        let goofmeister = message.guild.members.get('330740660921434122');
        let testEmbed = new Discord.RichEmbed()
        .setTitle("Rich Embed Test")
        .setDescription("This is a tæst!!!!")
        .setColor("#238F5F")
        .addField("Test")
        .addField("Line2")
        .addField("Line3")
        //.setAuthor(`${goofmeister}`)
        .addField("Line4");
        message.channel.send(testEmbed);
    }
    if(message.content == '$ping_uk'){
        let uk = message.guild.members.get('671937135305162768');
        message.channel.send(`${uk}`)
    }
    /*if(message.content == "$ping_enderman"){
        let enderman = message.guild.members.get('279673328241737728');
        message.channel.send(`${enderman}`)
    }*/
    if(message.content == "$ping_owner"){
        let owner = message.guild.members.get(message.guild.ownerID);
        message.channel.send(`${owner}`);
    }
    if (message.content.startsWith('$kick')) {
        const kUser = message.mentions.users.first();
        if (user) {
          const kMember = message.guild.member(kUser);
          if (kMember) {
            kMember
              .kick('Optional reason that will display in the audit logs')
              .then(() => {
                message.reply(`Successfully kicked ${kUser.tag}`);
              })
              .catch(err => {
                message.reply('Unable to kick member');
                console.error(err);
              });
          } else {
            message.reply("Unable to find user!");
          }
        } else {
          message.reply("You didn't mention the user to kick!");
        }
      }
    /*if(message.content == "$change_uks_nickname ", nick){
        let nick;
        message.channel.send(`<@${message.guild.ownerID}>`);
        message.guild.owner.setNickname(nick);
    }*/
    if(message.content == "$unban_goofmeister"){
        let goofUnban = new Discord.MessageEmbed()
        .setTitle("Unbanned Goofmeister#7228")
        .setDescription("Goofmeister#7228 has been unbanned by someone")
        .setColor("#238F5F");
        message.guild.members.unban("330740660921434122")
        .then(user => console.log(`Unbanned ${user.username} from ${guild}`))
        .catch(console.error);
        message.channel.send(goofUnban);
    }
    if(message.content == "$ban_goofmeister"){
        let goofBan = new Discord.MessageEmbed()
        .setTitle("Banned Goofmeister#7228")
        .setDescription("Goofmeister#7228 has been banned by someone")
        .setColor("#FF0000")
        message.guild.members.ban('330740660921434122')
        .then(user => console.log(`banned ${user.username} from ${guild}`))
        .catch(console.error);
        message.channel.send(goofBan);
    }
    if(message.content == "$latency"){
        message.channel.send("Pinging...").then(msg =>{
            var ping = msg.createdTimestamp - message.createdTimestamp;
            var botPing = Math.round(bot.ws.ping);
            msg.edit(`API Ping: ${ping}ms\nBot Ping: ${botPing}ms`);
        });
    }
    if(message.content == "$letter ß"){
        message.channel.send("The 'ß' is a letter in the german alphabet. It gets pronounced as 'Eszett' (S-Z [ɛsˈtsɛt]) or 'Sharp S', colloquially also as 'Double S'. The ß is used as the voiceless s-sound. It is the only letter of the latin alphabet today, that is only used in german languages and their dialects.");
    }
	if(message.content == "$haha"){
		message.channel.send("<a:lmao:750648479138840586>");
	}
    
});
bot.login(config.token);