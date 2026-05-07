const fs = require('fs');
const path = require('path');
const readline = require('readline');

function printHelpAndExit() {
  console.log(`Usage: node scripts/new-post.js\n\nOptions:\n  -h, --help    Show this help message and exit\n\nThis script will interactively prompt for:\n  slug         The post slug (used in filename)\n  title        The post title (defaults to slug if empty)\n  tags         Space-separated tags (optional)\n\nExample:\n  node scripts/new-post.js\n`);
  process.exit(0);
}

if (process.argv.includes('-h') || process.argv.includes('--help')) {
  printHelpAndExit();
}

const ri = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const POST_TEMPLATE = `---
title: {{title}}
tags: {{tags}}
---
`;

function makeFrontMatterArray(list) {
  return list.map((item) => `- ${item}`).join('\n');
}

/**
 * create a new post file
 * @param {string} slug
 * @param {string} title
 * @param {string[]} tags
 */
function createNewPost(slug, title, tags) {
  const date = new Date().toISOString().split('T')[0];
  const content = POST_TEMPLATE.replace('{{title}}', title).replace(
    '{{tags}}',
    '\n' + makeFrontMatterArray(tags)
  );
  const fileName = `${date}-${slug}.mdx`;
  const filePath = path.join(process.cwd(), 'src', 'pages', 'posts', fileName);

  function writePostFile() {
    fs.writeFileSync(filePath, content);
    console.log(`Post created: ${filePath}`);
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

/**
 * get question tags
 * @param {string?} answer
 */
function getQuestionTags(answer) {
  return answer ? answer.split(' ').map((s) => s.trim()) : [];
}

ri.question('slug: ', (slug) => {
  ri.question(`title(${slug}): `, (title) => {
    ri.question('tags(optional): ', (tags) => {
      createNewPost(slug, title || slug, getQuestionTags(tags));
    });
  });
});

// ri.on('close', () => {
//   process.exit(1);
// });
