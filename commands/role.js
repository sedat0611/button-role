const discord = require('discord.js');
const { MessageButton, MessageActionRow } = require("discord-buttons")

module.exports ={
    name: "rr",
     async execute(client, message, args) {
        const embed = new discord.MessageEmbed()
        .setTitle("ROL AL")
        .setColor("BLURPLE")
        .setFooter(`Ghost Development`)
        .setThumbnail(client.user.displayAvatarURL())
       .setDescription('**Ghost Development** \n\n Rolleri almak için butonlara bas! \n\n **Roller** \n\n Developers Güncelleme İçin <:botdevv:857632364376227870>! \n Discord Güncelleme İçin <:staff:857632369489739786>! \n Sunucu Güncellemeleri İçin <:genel:847366435348938804> ')

        let add = new MessageButton()
        .setStyle("gray")
        .setLabel("Developers")
        .setID("AddRole")
        .setEmoji('857632364376227870')

        const add1 = new MessageButton()
        .setStyle("gray")
        .setLabel("Discord")
        .setID("add1")
        .setEmoji('857632369489739786')
        
                const add2 = new MessageButton()
        .setStyle("gray")
        .setLabel("Sunucu")
        .setID("add2")
        .setEmoji('847366435348938804')
        const row = new MessageActionRow()
        .addComponent([add, add1, add2])

        message.channel.send({component: row, embed: embed})

        
    }
}
