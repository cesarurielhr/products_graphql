
const mailjet = require('../api/maijet');
const resolvers = {
  Mutation: {
    sendEmail: async (_, { input }) => {
      try {
        const { to, subject, text, html } = input;

        const request = mailjet.post("send", { version: "v3.1" }).request({
          Messages: [
            {
              From: {
                Email: "your-email@example.com",
                Name: "Your Name",
              },
              To: [
                {
                  Email: to,
                  Name: "Recipient Name",
                },
              ],
              Subject: subject,
              TextPart: text,
              HTMLPart: html,
            },
          ],
        });

        const response = await request;
        return {
          success: true,
          message: "Email sent successfully",
        };
      } catch (error) {
        console.error("Mailjet Error:", error);
        return {
          success: false,
          message: "Failed to send email",
        };
      }
    },
  },
};

module.exports = resolvers;