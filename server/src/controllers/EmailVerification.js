const nodemailer = require("nodemailer");
const otpGenerator = require("otp-generator");

const EmailVerification = async (req, res) => {
  const {email}= req.body;
  console.log(email);
  const OTP = otpGenerator.generate(6, {
    upperCaseAlphabets: false,
    specialChars: false,
    lowerCaseAlphabets: false,
  });

  try {
    const transporter = nodemailer.createTransport({
      //   host: "smtp.forwardemail.net",
      //   port: 465,
      //   secure: true,
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "birlaaaaaa706@gmail.com",
        pass: "7067794752",
        clientId:
          "249073942808-rh5f2rc4roqp4ajerks4uitk1ombtq1o.apps.googleusercontent.com",
        clientSecret: "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",
        refreshToken:
          "1//04Pz2oOomCntOCgYIARAAGAQSNwF-L9IrcggiAqBhy8ldRsCmsuPotl_BscVepgFV6QciL6y9j3Xmba74r78uguifh4XoNKhkmqQ",
      },
    });

    const info = await transporter.sendMail({
      from: "birlaaaaaa706@gmail.com", // sender address
      to: email, // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: `<b>Hello world? ${OTP} </b>`, // html body
    });

    console.log("Message sent: %s", info.messageId);

    return res.status(200).send({status: true, data:OTP, Message:info.messageId});

  } catch (error) {
    console.log(error);
  }
};

module.exports={EmailVerification}