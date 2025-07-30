// src/components/Skills.jsx
import React from 'react';
import { FaGitAlt, FaLinux, FaCode } from 'react-icons/fa';
import {
  SiPython, SiPandas, SiNumpy, SiScikitlearn, SiTensorflow,
  SiPytorch, SiJupyter, SiR, SiPlotly
} from 'react-icons/si';

const skills = [
  { name: "Python", icon: <SiPython size={40} className="text-yellow-400" /> },
  { name: "Pandas", icon: <SiPandas size={40} className="text-white" /> },
  { name: "NumPy", icon: <SiNumpy size={40} className="text-blue-400" /> },
  { name: "Scikit-Learn", icon: <SiScikitlearn size={40} className="text-yellow-500" /> },
  { name: "TensorFlow", icon: <SiTensorflow size={40} className="text-orange-500" /> },
  { name: "PyTorch", icon: <SiPytorch size={40} className="text-red-500" /> },
  { name: "Jupyter", icon: <SiJupyter size={40} className="text-orange-400" /> },
  { name: "R Language", icon: <SiR size={40} className="text-blue-500" /> },
  { name: "Git", icon: <FaGitAlt size={40} className="text-red-500" /> },
  { name: "VS Code", icon: <FaCode size={40} className="text-blue-400" /> },  // Replaced SiVisualstudio with FaCode
  { name: "Linux", icon: <FaLinux size={40} className="text-gray-200" /> },
  { name: "Plotting", icon: <SiPlotly size={40} className="text-orange-400" /> },
];


const Skills = () => {
  return (
    <section id="skills" className="bg-[#0f172a] py-16 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">My Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-[#1e293b] hover:bg-[#334155] transition duration-300 p-4 rounded-lg shadow-lg"
            >
              {skill.icon}
              <p className="mt-3 text-lg font-semibold">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
