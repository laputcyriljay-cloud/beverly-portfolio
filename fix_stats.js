const fs = require('fs');
const p = 'index.html';
let c = fs.readFileSync(p, 'utf8');
const old = `                    <div class="stat-card">
                        <span class="stat-number">01+</span>
                        <span class="stat-label">Years Experience</span>
                    </div>
                    <div class="stat-card">
                        <span class="stat-number">10+</span>
                        <span class="stat-label">Projects Completed</span>
                    </div>
                    <div class="stat-card">
                        <span class="stat-number">∞</span>
                        <span class="stat-label">Passion Driven</span>
                    </div>`;
const neu = `                    <div class="stat-card">
                        <span class="stat-number">01</span>
                        <span class="stat-label">Year of Experience</span>
                    </div>
                    <div class="stat-card">
                        <span class="stat-number">VA</span>
                        <span class="stat-label">Virtual Assistant</span>
                    </div>
                    <div class="stat-card">
                        <span class="stat-number">100%</span>
                        <span class="stat-label">Detail-Oriented</span>
                    </div>`;
if (c.includes(old)) {
  c = c.split(old).join(neu);
  fs.writeFileSync(p, c);
  console.log('ok');
} else {
  console.log('no');
}
