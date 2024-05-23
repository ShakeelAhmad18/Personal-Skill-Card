import React from 'react'
import Skill from './Skill'

const Skill_list = () => {
  return (
    <div className='skill_list'>
       <Skill skill='React.js' emoji='💪' color='#ffafcc'/>
       <Skill skill='HTML5+CSS3' emoji='💪' color='#fb8500'/>
       <Skill skill='JavaScript' emoji='💪' color='#00b4d8'/>
       <Skill skill='Machine Learning' emoji='💪' color='#e76f51'/>
       <Skill skill='Deep Learning' emoji='💪' color='#0077b6'/>
       <Skill skill='MERN' emoji='👶' color='#ff006e'/>
    </div>
  )
}

export default Skill_list
