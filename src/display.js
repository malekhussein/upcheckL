import chalk from "chalk";

export function displayReport(updates, unused) {
  console.log(chalk.bold("📦 Available updates:"));
  if (updates.length === 0) {
    console.log("There are no updates available ");
  } else {
    updates.forEach(u => {
      console.log(` - ${u.name}: ${u.current} → ${u.latest}`);
    });
  }

  console.log(chalk.bold("\n🧹 Unused packages:"));
  if (unused.length === 0) {
    console.log("There is no unused package ");
  } else {
    unused.forEach(u => console.log(` - ${u}`));
  }

  console.log(chalk.bold(`\n📊 Total packages that need update: ${updates.length}`));
}
