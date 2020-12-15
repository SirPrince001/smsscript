const cron = require('node-cron')
const User = require('./model/birthday')
require('dotenv').config()


const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

async function sendMessage(body,to){ 
    client.messages.create({
        body,
        from:process.env.FROM,
        to
    })
}

module.exports = {
    sendAutoMessage: async ()=>{
        // const now = new Date().getFullYear();
        // console.log(now)
    cron.schedule('* * * * *' , async()=>{
        //const users = await User.find({})
           const users = await User.find({})
            users.forEach(async user => {
                if (user.birthday.getMonth() + 1 === new Date().getMonth() + 1 && user.birthday.getDate() === new Date().getDate()) {
                    console.log('Happy Birthday', user);
                }

               // await sendMessage(`Hi , Happy Birhday ${user.fullname} we know how imaportant today is to you, cheers to your new age` , user.phone)
            })
        })
    }
}