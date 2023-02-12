// @deno-types="https://cdn.sheetjs.com/xlsx-latest/package/types/index.d.ts"
import * as XLSX from 'https://cdn.sheetjs.com/xlsx-latest/package/xlsx.mjs';
/* load the codepage support library for extended support with older formats  */
import * as cptable from 'https://cdn.sheetjs.com/xlsx-latest/package/dist/cpexcel.full.mjs';
XLSX.set_cptable(cptable);

/* get the file path for the downloaded file and generate the CSV path */
const in_file = Deno.args[0];
const out_file = in_file.replace(/.xlsx$/, ".csv");

/* read file */
const workbook = XLSX.readFile(in_file);

/* generate CSV */
const first_sheet = workbook.Sheets[workbook.SheetNames[0]];
const csv = XLSX.utils.sheet_to_csv(first_sheet);

/* write CSV */
Deno.writeFileSync(out_file, new TextEncoder().encode(csv));