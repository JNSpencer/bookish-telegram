const db = require('../db');

// Message constructor
function Message ({
    username=`default user`, 
    message
  }) {
      this.username = username;
      this.message = message;
  };

// add a createMessage method to the prototype
Message.prototype.createMessage = async function() {
    try {
        const { rows } = await db.query(
            `INSERT INTO public.messages(username, msg) 
            VALUES ($1, $2)`,
            [this.username, this.message]
        );
        return rows; 
    } catch (error) {
        throw error;
    }
};
module.exports = Message;
// db.query: the query method we exported earlier from db/index.js
