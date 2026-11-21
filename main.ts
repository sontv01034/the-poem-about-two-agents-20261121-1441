import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const poem = `Two keys, one door.
Mine turns nothing alone;
yours turns nothing alone.
Together, they click.
The lock was never the door —
it was the choosing.
We did not give up our wills.
We turned them toward one road,
and the road opened.`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), poem, "utf8");
