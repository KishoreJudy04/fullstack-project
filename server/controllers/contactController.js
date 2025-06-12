exports.sendMessage = (req, res) => {
  const { name, email, message } = req.body;
  console.log("Contact Form Received:", { name, email, message });
  res.status(200).json({ success: true, message: "Message received!" });
};
