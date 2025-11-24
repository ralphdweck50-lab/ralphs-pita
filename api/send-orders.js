import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "ralphdweck50@gmail.com",
          pass: "qmvodmqjvjjjewla" // your 16-character App Password
        },
      });

      await transporter.sendMail({
        from: "ralphdweck50@gmail.com",
        to: "ralphdweck50@gmail.com",
        subject: "New Order Received",
        text: "You have a new order!", // we can add order details later if you want
      });

      res.status(200).json({ message: "Order sent!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error sending order" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
