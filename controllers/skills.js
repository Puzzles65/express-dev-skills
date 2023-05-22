const Skill = require('../models/skill');

function index(req, res){
    const skills = Skill.getAllSkills();
    res.render('skills/index', {
        skills,
    })
}

function show(req, res){
    const skillId = req.params.id;
    const skill = Skill.getSkillById(skillId);
    res.render('skills/show', {
        skill,
    })
}

module.exports = {
    index,
    show,
}