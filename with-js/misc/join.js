const Commando = require('discord.js-commando')

module.exports = class PlayAudioCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'playaudio',
            group: 'misc',
            memberName: 'playaudio',
            description: 'Morph someone',
        })
    }
    async run(message) {
        const { voice } = message.member

        if (!voice.channelId) {
            message.reply('you must be in a voice channel.')
            return;
        }
        voice.channel.join();
    }
}