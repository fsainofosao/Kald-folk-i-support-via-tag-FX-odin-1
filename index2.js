client.on ("message", (message) => {
    
    msg = message.content.toLowerCase();
    
    if(message.author.bot) return;
    
    mention = message.mentions.users.first();
    
    if (message.content == mention)
        var messagesplit = message.content.split(" ")	
        if (message.channel.id !== 'channel id ') return;
	    if (message.member.roles.get('Role id'))
		{
        if (mention == null) return; 
        message.delete();
        mentionMessage = message.content.slice (0);
        mention.sendMessage (  mention + " " + message.author.username +  ` text`);
        client.channels.get(`channel id`).send( message.author.username + " text " + mention +  ` text`)
        client.channels.get(`channel id`).send( mention + " " + message.author.username +  ` text`)
    }
    });