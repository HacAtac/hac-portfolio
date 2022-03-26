import expressAsyncHandler from "express-async-handler";
import Contact from "../models/Contact.js";

export const contactMe = expressAsyncHandler(async (req, res, next) => {
  const { firstName, email, message } = req.body;
  try {
    const contactEntry = await Contact.create({
      firstName,
      email,
      message,
    });
    res.json(contactEntry);
  } catch (error) {
    console.log(error.message);
    res.status(500).json.send(`Error: ${error.message}`);
  }
});

export default contactMe;
