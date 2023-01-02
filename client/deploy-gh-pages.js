const subProcess = require("child_process");
const ghpages = require("gh-pages");

const lastCommitCommand = 'git log --pretty="%H" -- . | head -n1';
subProcess.exec(lastCommitCommand, (error, stdout, stderr) => {
  if (error) {
    console.log(`error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.log(`stderr: ${stderr}`);
    return;
  }
  ghpages.publish(
    "out",
    {
      message: `from ${stdout}`,
    },
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  );
});
