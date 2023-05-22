const skillsData = [
    { id: 1, name: 'JavaScript', experience: 'Intermediate' },
    { id: 2, name: 'HTML', experience: 'Advanced' },
    { id: 3, name: 'CSS', experience: 'Advanced' },
  ];
  
  // Method to retrieve all skills
  function getAllSkills(){
    return skillsData;
  };
  
  // Method to retrieve a skill by ID
  function getSkillById(id){
    const skillId = parseInt(id);
    return skillsData.find(skill => skill.id === skillId);
  };
  
  module.exports = {
    getAllSkills,
    getSkillById
  }