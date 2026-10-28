const fs = require('fs');
const p = 'style.css';
let c = fs.readFileSync(p, 'utf8');
c = c.split('    .skills-grid,\n    .projects-grid {\n        grid-template-columns: repeat(2, 1fr);\n    }').join('    .skills-grid {\n        grid-template-columns: repeat(2, 1fr);\n    }');
c = c.split('    .skills-grid,\n    .projects-grid {\n        grid-template-columns: 1fr;\n    }').join('    .skills-grid {\n        grid-template-columns: 1fr;\n    }');
fs.writeFileSync(p, c);
console.log('ok');
