#!/usr/bin/env bun
import fs from "fs";
import path from "path";
import chalk from "chalk";
import Table from "cli-table3";
import ora from "ora";
import depcheck from "depcheck";


const pkgPath = path.join(process.cwd(), "package.json");
if (!fs.existsSync(pkgPath)) {
    console.log(chalk.red("Error: package.json not found in current directory"));
    process.exit(1);
}
const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf-8"));


const spinner = ora("Fetching updates...").start();


const updates = [];
for (const dep of Object.keys(pkg.dependencies || {})) {
    try {
        const res = await fetch(`https://registry.npmjs.org/${dep}/latest`);
        const data = await res.json();
        const sizeMB = data.dist?.unpackedSize ? (data.dist.unpackedSize / (1024*1024)).toFixed(2) : "N/A";
        updates.push({ name: dep, current: pkg.dependencies[dep], latest: data.version, size: sizeMB });
    } catch (e) {
        updates.push({ name: dep, current: pkg.dependencies[dep], latest: "Error", size: "N/A" });
    }
}
spinner.succeed("✔ Updates fetched ✅");


const table = new Table({
    head: [chalk.blue("Package"), chalk.yellow("Current"), chalk.green("Latest"), chalk.cyan("Size (MB)")],
    colWidths: [20, 15, 15, 10]
});
updates.forEach(u => table.push([u.name, u.current, u.latest, u.size]));
console.log(table.toString());


const unused = await depcheck(process.cwd(), {});
console.log(chalk.red("\n🧹 Unused packages:"));
if (unused.dependencies.length === 0) console.log("None");
else unused.dependencies.forEach(dep => console.log(" - " + dep));


console.log(chalk.cyan(`\n📊 Total packages to update: ${updates.length}`));
