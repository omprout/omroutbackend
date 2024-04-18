const mongoose = require("mongoose");

const homeSchema = new mongoose.Schema({
  profession: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
});

const aboutSchema = new mongoose.Schema({
  description: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  dob: {
    type: String,
    require: true,
  },
  address: {
    type: String,
    require: true,
  },
  zipcode: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  phone: {
    type: String,
    require: true,
  },
  src: {
    type: String,
    require: true,
  },
});

const skillSchema = new mongoose.Schema({
  description: {
    type: String,
    require: true,
  },
});

const projectsSchema = new mongoose.Schema({
  description: {
    type: String,
    require: true,
  },
  img1: {
    type: String,
    require: true,
  },
  img2: {
    type: String,
    require: true,
  },
  img3: {
    type: String,
    require: true,
  },
  img4: {
    type: String,
    require: true,
  },
  img5: {
    type: String,
    require: true,
  },
  img6: {
    type: String,
    require: true,
  },
  img7: {
    type: String,
    require: true,
  },
  img8: {
    type: String,
    require: true,
  },
  link1: {
    type: String,
    require: true,
  },
  link2: {
    type: String,
    require: true,
  },
  link3: {
    type: String,
    require: true,
  },
  link4: {
    type: String,
    require: true,
  },
  link5: {
    type: String,
    require: true,
  },
  link6: {
    type: String,
    require: true,
  },
  link7: {
    type: String,
    require: true,
  },
  link8: {
    type: String,
    require: true,
  },
  projname1: {
    type: String,
    require: true,
  },
  projname2: {
    type: String,
    require: true,
  },
  projname3: {
    type: String,
    require: true,
  },
  projname4: {
    type: String,
    require: true,
  },
  projname5: {
    type: String,
    require: true,
  },
  projname6: {
    type: String,
    require: true,
  },
  projname7: {
    type: String,
    require: true,
  },
  projname8: {
    type: String,
    require: true,
  },
});

const contactSchema = new mongoose.Schema({
  description: {
    type: String,
    require: true,
  },
  address: {
    type: String,
    require: true,
  },
  phone: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  website: {
    type: String,
    require: true,
  },
});

const loginSchema = new mongoose.Schema({
  gmail: {
    type: "String",
    require: true,
  },
  password: {
    type: "String",
    require: true,
  },
});

module.exports = {
  Home: mongoose.model("homes", homeSchema),
  About: mongoose.model("abouts", aboutSchema),
  Skill: mongoose.model("skills", skillSchema),
  Project: mongoose.model("projects", projectsSchema),
  Contact: mongoose.model("contacts", contactSchema),
  login: mongoose.model("logins", loginSchema),
};
