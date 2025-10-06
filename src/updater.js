import { getInstalledPackages, getLatestVersion } from "./utils.js";

// Approximate size (can be improved later)
function estimatePackageSizeMB(pkgName) {
// Here we can work Lookup from Registry or an estimated schedule 
// Currently Dummy Values ​​for experience
  const dummySizes = { chalk: 1.2, react: 4.8 };
  return dummySizes[pkgName] || 0.5;
}

export async function checkUpdates() {
  const installed = await getInstalledPackages();
  const updates = [];

  for (const [name, current] of Object.entries(installed)) {
    try {
      const latest = await getLatestVersion(name);
      if (latest !== current) {
        const sizeMB = estimatePackageSizeMB(name);
        updates.push({ name, current, latest, sizeMB });
      }
    } catch (err) {
      console.error(`Failed to get latest version for ${name}:`, err.message);
    }
  }

  return updates;
}
