import Contact from "../models/Contact.js";

export async function contact(req, res) {
  const { name, email, phone, message } = req.body;

  try {
    const contact = new Contact({
      name,
      email,
      phone,
      message,
    });

    await contact.save();
    res.status(201).json({ message: "Contact created successfully", contact });
  } catch (error) {
    console.log("Error in contact Controller", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
