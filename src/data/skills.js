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
      { name: 'Python', icon: 'SiPython' },
      { name: 'Django', icon: 'SiDjango' },
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
      { name: 'Electron', icon: 'SiElectron' },
      { name: 'Docker', icon: 'SiDocker' },
      { name: 'Software Testing', icon: 'FiCheckSquare' },
      { name: 'Excel / SheetJS', icon: 'SiMicrosoftexcel' },
    ],
  },
]
