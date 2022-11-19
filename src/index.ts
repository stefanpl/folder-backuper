import chokidar from "chokidar";
import dayjs from "dayjs";
import { cp, stat } from "fs/promises";
import { join } from "path";

// Whenever the contents of the source folder change,
//  we copy a timestamped version of it in the target folder.

const sourceFolder = process.env.SOURCE_FOLDER || "/doesnotexist";
const targetFolder = process.env.TARGET_FOLDER || "/doesnotexist";

// This makes sure the folders exist
await Promise.all([stat(sourceFolder), stat(targetFolder)]);

const doCopy = async () => {
  const targetFolderName = dayjs().format("YYYY-MM-DD___HH_mm_ss");
  const targetFolderFull = join(targetFolder, targetFolderName);

  await cp(sourceFolder, targetFolderFull, { recursive: true });
  console.log(`Copied files to ${targetFolderFull}`);
};

// One-liner for current directory
chokidar.watch(sourceFolder).on("change", doCopy);
chokidar.watch(sourceFolder).on("add", doCopy);

export {};
