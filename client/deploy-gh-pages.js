import * as subProcess from "child_process";
import * as ghpages from "gh-pages";

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
    "dist",
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
