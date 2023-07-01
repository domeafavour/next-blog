const fs = require('fs');
const path = require('path');
const readline = require('readline');

const ri = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const POST_TEMPLATE = `---
title: {{title}}
---
`;

function createNewPost(slug, title) {
  const date = new Date().toISOString().split('T')[0];
  const content = POST_TEMPLATE.replace('{{title}}', title);
  const fileName = `${date}-${slug}.mdx`;
  const filePath = path.join(process.cwd(), 'src', 'pages', 'posts', fileName);

  function writePostFile() {
    fs.writeFileSync(filePath, content);
    ri.close();
  }

  if (fs.existsSync(filePath)) {
    ri.question('Overwrite file? (y/n) ', (answer) => {
      if (answer !== 'y') {
        console.log('Post create aborted');
        process.exit(1);
      } else {
        writePostFile();
      }
    });
  } else {
    writePostFile();
  }
}

ri.question('slug: ', (slug) => {
  ri.question(`title(${slug}): `, (title) => {
    createNewPost(slug, title || slug);
  });
});

ri.on('close', () => {
  process.exit(1);
});
