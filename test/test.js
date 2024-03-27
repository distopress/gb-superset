/*
a.csv

filename,category,tags
"accessibility","System","assistance,assistant,impaired",
"accessibility-sign","System","assistance,assistant,impaired",
"accessibility-tech","System","assistance,assistant,impaired",
"activity","Other",
"adobe-after-effects","Design Tools",
"adobe-illustrator","Design Tools",
"adobe-indesign","Design Tools",
"adobe-lightroom","Design Tools",
"adobe-photoshop","Design Tools",
"adobe-xd","Design Tools",
"african-tree","Nature",
"agile","Business",
"air-conditioner","Home",
"airplane","Transport","fly,jet",
"airplane-helix","Transport","fly,jet",
"airplane-helix-45deg","Transport","fly,jet",
"airplane-off","Transport","fly,jet",
"airplane-rotation","Transport","fly,jet",
"airplay","Connectivity",
"alarm","Other",
"album","Music",
"album-carousel","Music",
"album-list","Music",

---
output.json
{
  [
    "category": "System",
    "iconList": [
      "accessibility",
      "accessibility-sign",
      "accessibility-tech"
    ]
  ],
  [
    "category": "Other",
    "iconList": [
      "activity"
    ]
  ]
}

*/
import fs from 'fs';
import csv from 'csv-parser';

const CSV_FILE = 'a.csv';
const CSV_FILE_PATH = `../${CSV_FILE}`;

(function importCsvAndConvertToJsonByGroupingCategory() {

  
  function importCsvAndConvertToJsonByGroupingCategory() {
      const data = {};
      fs.createReadStream(CSV_FILE_PATH)
          .pipe(csv())
          .on('data', (row) => {
              // If the category is not in the data object, add it
              if (!data[row.category]) {
                  data[row.category] = [];
              }
              // Add the filename to the category
              data[row.category].push(row.filename);
          })
          .on('end', () => {
              // Convert the data object to the desired output format
              const output = Object.keys(data).map((category) => ({
                  category,
                  iconList: data[category],
              }));
              // Write the output to output.json
              fs.writeFileSync('output.json', JSON.stringify(output, null, 2));
              console.log('CSV file successfully processed');
          });
  }
  
  importCsvAndConvertToJsonByGroupingCategory();
})();