const fs = require('fs');
const p = 'index.html';
let c = fs.readFileSync(p, 'utf8');
const old = `                <p>
                    I'm Beverly Fuentes, a passionate creator who loves building beautiful, functional, and accessible web experiences. 
                    I blend design sensibility with technical skills to bring ideas to life.
                </p>
                <p>
                    With a keen eye for detail and a drive for excellence, I enjoy turning complex problems into simple, elegant solutions. 
                    When I'm not coding, you'll find me exploring new design trends and finding inspiration in everyday moments.
                </p>`;
const neu = `                <p>
                    I'm Beverly Fuentes, a detail-oriented Virtual Assistant with 1 year of hands-on experience supporting e-commerce and social media operations. 
                    I help businesses streamline their online presence through efficient product management and engaging content.
                </p>
                <p>
                    Skilled in Shopify product listings, Amazon product research, Instagram video scheduling, video editing, and social media management. 
                    I take pride in my attention to detail, time management, and clear communication to deliver reliable results every time.
                </p>`;
if (c.includes(old)) {
  c = c.split(old).join(neu);
  fs.writeFileSync(p, c);
  console.log('ok');
} else {
  console.log('no');
}
