# Upcheck

![Upcheck Banner](https://img.shields.io/badge/Status-Active-brightgreen)

**Upcheck** is a CLI tool for checking and updating your project dependencies quickly and visually. It is designed to work **with Bun only**.

---

## 👨‍💻 Developer

Upcheck was developed by **linuxawy**.

---

## ⚡ Features

- ✅ **Fetch real updates** for all your packages from npm registry
- 🧹 **Detect unused packages** in your project
- 📊 **Display a colorful table** showing each package, current version, latest version, and approximate update size
- ⏳ **Spinner while fetching updates** for better UX
- 💻 **Run from anywhere** on your system after installation

---

## 💾 Installation

### Step 1: Ensure Bun is installed

```bash
bun --version
```

# Step 2: Clone the project
```bash
git clone https://github.com/linuxawy/upcheck.git
cd upcheck
```

# Step 3: Make the CLI executable and put it in your PATH
```bash
chmod +x src/cli.js
ln -sf $(pwd)/src/cli.js ~/.local/bin/upcheck
```
Now you can run ``upcheck``.

# 📝 Usage
```bash
cd "The name of the project folder that you carried"
upcheck
```
You will see:

A table of available updates for all packages
A list of unused packages
A total count of packages that need updating

# 🔗 Example Output
```bash
upcheck
✔ Updates fetched ✅
┌────────────────────┬───────────────┬───────────────┬───────────┐
│ Package            │ Current       │ Latest        │ Size (MB) │
├────────────────────┼───────────────┼───────────────┼───────────┤
│ chalk              │ ^5.6.2        │ 5.6.3         │ 1.2       │
│ cli-table3         │ ^0.6.5        │ 0.6.5         │ 0.5       │
│ ora                │ ^9.0.0        │ 9.0.1         │ 0.5       │
│ depcheck           │ ^1.4.7        │ 1.4.7         │ 0.5       │
└────────────────────┴───────────────┴───────────────┴───────────┘
🧹 Unused packages:
 - cli-table3
📊 Total packages to update: 4
```

## The End.
