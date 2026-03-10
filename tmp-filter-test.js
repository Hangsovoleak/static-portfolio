const { projectsData } = require('./src/data/projects');
const filter = 'Tailwind';
const filtered = projectsData.filter(p => (p.tags || []).some(t => t.toLowerCase().includes(filter.toLowerCase())));
console.log('Filtered titles:', filtered.map(p => p.title));
