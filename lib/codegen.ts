import * as ts from "typescript";
import { readFileSync } from "fs";

const node = ts.createSourceFile(
  "x.ts", // fileName
  readFileSync("./example/logic.ts", "utf8"), // sourceText
  ts.ScriptTarget.Latest // langugeVersion
);

console.log(node);