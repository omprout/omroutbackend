const router = require("express").Router();
// const bcrypt = require("bcryptjs");
const bcrypt = require("bcrypt");
const {
  Home,
  About,
  Skill,
  Project,
  Contact,
  login,
} = require("../models/portfolioModel");

router.get("/get-portfolio-data", async (req, res) => {
  try {
    const homes = await Home.find();
    const abouts = await About.find();
    const skills = await Skill.find();
    const projects = await Project.find();
    const contacts = await Contact.find();
    res.status(200).send({
      home: homes,
      about: abouts,
      skill: skills,
      project: projects,
      contact: contacts,
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update intro

router.post("/update-portfolio-data", async (req, res) => {
  try {
    const intro = await Home.findByIdAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: intro,
      success: true,
      message: "intro update successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update about
router.post("/update-about-data", async (req, res) => {
  try {
    const about = await About.findByIdAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: about,
      success: true,
      message: "About data updated successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});
//update project
router.post("/update-project-data", async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    if (!project) {
      return res
        .status(404)
        .send({ success: false, message: "Project not found" });
    }
    res.status(200).send({
      data: project,
      success: true,
      message: "Project data updated successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ success: false, message: "Internal server error" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await login.findOne({
      gmail: req.body.gmail,
      password: req.body.password,
    });
    user.password = "";
    if (user) {
      res.status(200).send({
        data: user,
        success: true,
        message: "Login successfully",
      });
    } else {
      res.status(200).send({
        data: user,
        success: false,
        message: "Invalid username or password",
      });
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

//update skill data
router.post("/update-skill-data", async (req, res) => {
  try {
    const skill = await Skill.findByIdAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: skill,
      success: true,
      message: "Skill data updated successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});


//update contact data

router.post("/update-contact-data", async (req, res) => {
  try {
    const contact = await Contact.findByIdAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: contact,
      success: true,
      message: "Contact data updated successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
