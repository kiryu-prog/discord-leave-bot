const fs = require('fs');
const path = require('path');
const readline = require('readline');

const configPath = path.join(__dirname, 'config.json');

function ask(question) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise(resolve =>
    rl.question(question, answer => {
      rl.close();
      resolve(answer.trim());
    })
  );
}

async function loadConfig() {
  if (fs.existsSync(configPath)) {
    return JSON.parse(fs.readFileSync(configPath, 'utf8'));
  }

  console.log('=== 初回起動設定 ===');
  const token = await ask('Bot Token を入力してください: ');

  const config = { TOKEN: token };
  fs.writeFileSync(configPath, JSON.stringify(config, null, 2));

  console.log('config.json を作成しました。再起動してください。');
  process.exit(0);
}

module.exports = loadConfig;
