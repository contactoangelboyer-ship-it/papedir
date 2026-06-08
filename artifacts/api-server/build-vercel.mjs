import { createRequire } from "node:module";
  import path from "node:path";
  import { fileURLToPath } from "node:url";
  import { build as esbuild } from "esbuild";
  import esbuildPluginPino from "esbuild-plugin-pino";
  import { rm, mkdir, writeFile } from "node:fs/promises";

  globalThis.require = createRequire(import.meta.url);

  const artifactDir = path.dirname(fileURLToPath(import.meta.url));
  const rootDir    = path.resolve(artifactDir, "../..");
  const outputDir  = path.resolve(artifactDir, ".vercel/output");
  const funcDir    = path.join(outputDir, "functions", "api", "[[path]].func");

  async function build() {
    await rm(outputDir, { recursive: true, force: true });
    await mkdir(funcDir, { recursive: true });

    // esbuildPluginPino adds extra entries → must use outdir.
    // Named entry { index: src } → output file is index.js.
    // nodePaths: also search workspace root node_modules (pnpm virtual store).
    await esbuild({
      entryPoints: { index: path.resolve(artifactDir, "src/app.ts") },
      platform: "node",
      bundle: true,
      format: "cjs",
      outdir: funcDir,
      logLevel: "info",
      nodePaths: [path.join(rootDir, "node_modules")],
      external: [
        "*.node", "sharp", "better-sqlite3", "sqlite3", "canvas",
        "bcrypt", "argon2", "fsevents", "pg-native", "pino-pretty",
        "re2", "farmhash", "bufferutil", "utf-8-validate",
        "lightningcss", "oracledb", "nodemailer",
      ],
      sourcemap: "linked",
      plugins: [esbuildPluginPino({ transports: ["pino-pretty"] })],
    });

    await writeFile(
      path.join(funcDir, ".vc-config.json"),
      JSON.stringify({
        runtime: "nodejs22.x",
        handler: "index.js",
        launcherType: "Nodejs",
        shouldAddHelpers: true,
      }, null, 2),
    );

    await writeFile(
      path.join(outputDir, "config.json"),
      JSON.stringify({ version: 3 }, null, 2),
    );

    console.log("\u2705 .vercel/output ready");
  }

  build().catch((err) => { console.error(err); process.exit(1); });
  