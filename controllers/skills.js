const Skill = require('../models/skill');

// Display all skills
function index(req, res) {
  const skills = Skill.getAllSkills();
  res.render('skills/index', { skills });
}

// Display a specific skill
function show(req, res) {
  const skillId = req.params.id;
  const skill = Skill.getSkillById(skillId);
  res.render('skills/show', { skill });
}

// Display the form for entering a new skill
function newSkill(req, res) {
  res.render('skills/new');
}

// Create a new skill
function create(req, res) {
  const { name, experience } = req.body;

  const newSkillId = Skill.getAllSkills().length + 1;

  const newSkill = { id: newSkillId, name, experience };

  Skill.getAllSkills().push(newSkill);
  res.redirect('/skills');
}

// Delete a specific skill
function deleteSkill(req, res) {
  const skillId = req.params.id;
  
  Skill.setAllSkills(Skill.getAllSkills().filter(skill => skill.id !== skillId));

  
  res.redirect('/skills');
}

module.exports = {
  index,
  show,
  newSkill,
  create,
  deleteSkill,
};
