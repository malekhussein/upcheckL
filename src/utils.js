import { readFile } from "fs/promises";

// Read the installed packages from Package.json
export async function getInstalledPackages() {
  const pkgRaw = await readFile("package.json", "utf-8");
  const pkg = JSON.parse(pkgRaw);
  const deps = pkg.dependencies || {};
  const devDeps = pkg.devDependencies || {};
  return { ...deps, ...devDeps }; // Packagename: Version}
}

// Bring the latest version of NPM Registry
export async function getLatestVersion(pkgName) {
  const res = await fetch(`https://registry.npmjs.org/${pkgName}/latest`);
  const data = await res.json();
  return data.version; // The latest version
}
