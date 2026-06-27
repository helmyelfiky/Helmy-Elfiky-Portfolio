// src/data/skills.js

export const skillCategories = [
  {
    key: 'frontend',
    title: 'Frontend',
    accentColor: 'indigo',
    items: [
      { name: 'HTML5', icon: 'SiHtml5' },
      { name: 'CSS3', icon: 'SiCss3' },
      { name: 'JavaScript', icon: 'SiJavascript' },
      { name: 'React', icon: 'SiReact' },
      { name: 'Tailwind CSS', icon: 'SiTailwindcss' },
    ],
  },
  {
    key: 'backend',
    title: 'Backend',
    accentColor: 'violet',
    items: [
      { name: 'Node.js', icon: 'SiNodedotjs' },
      { name: 'Express.js', icon: 'SiExpress' },
      { name: 'Python', icon: 'SiPython' },
      { name: 'Django', icon: 'SiDjango' },
      { name: 'Socket.IO', icon: 'SiSocketdotio' },
      { name: 'REST APIs', icon: 'FiServer' },
      { name: 'Java', icon: 'SiJava' },
      { name: 'C#', icon: 'SiCsharp' },
      { name: 'C', icon: 'SiC' },
    ],
  },
  {
    key: 'database',
    title: 'Database',
    accentColor: 'emerald',
    items: [
      { name: 'MySQL', icon: 'SiMysql' },
      { name: 'SQLite', icon: 'SiSqlite' },
      { name: 'SQL', icon: 'FiDatabase' },
    ],
  },
  {
    key: 'tools',
    title: 'Tools & Other',
    accentColor: 'slate',
    items: [
      { name: 'Git', icon: 'SiGit' },
      { name: 'Vite', icon: 'SiVite' },
      { name: 'Electron', icon: 'SiElectron' },
      { name: 'Docker', icon: 'SiDocker' },
      { name: 'Azure', icon: 'SiMicrosoftazure' },
      { name: 'JWT / Auth', icon: 'FiShield' },
      { name: 'Chrome Extension', icon: 'SiGooglechrome' },
      { name: 'Web Push (VAPID)', icon: 'FiBell' },
      { name: 'Software Testing', icon: 'FiCheckSquare' },
      { name: 'Excel / SheetJS', icon: 'SiMicrosoftexcel' },
    ],
  },
]
