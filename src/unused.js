import depcheck from "depcheck";

// Depcheck settings
const options = {
  ignoreDirs: ["dist", "node_modules"],
  ignoreMatches: [],
};

export async function checkUnused() {
  return new Promise((resolve, reject) => {
    depcheck(process.cwd(), options, (unused) => {
      const unusedPackages = unused.dependencies.concat(unused.devDependencies);
      resolve(unusedPackages);
    });
  });
}
