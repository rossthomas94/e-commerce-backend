const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

const tokensFilePath = path.join(__dirname, '../secrets/tokens.csv');

const removeExpiredTokens = () => {
  console.log('begin cleanup');

  const currentDate = Date.now();
  const updatedTokens = [];

  fs.createReadStream(tokensFilePath)
    .pipe(csv())
    .on('data', (data) => {
      const expiryTime = Date.parse(data.EXPIRY_DATE);
      if (expiryTime > currentDate || data.USER_ID == 'USER_ID') {
        updatedTokens.push(data);
      }
    })
    .on('end', () => {
      let updatedCsvData;

      if (updatedTokens.length === 0) {
        updatedCsvData = [];
      } else {
        updatedCsvData = [Object.keys(updatedTokens[0]).join(',')]; 

        const tokenRows = updatedTokens.map((tokenData) =>
          Object.values(tokenData).join(',')
        );
        updatedCsvData.push(...tokenRows);
      }

      fs.writeFileSync(tokensFilePath, updatedCsvData.join('\n'));

      console.log('Expired tokens removed successfully');
    });
};
// removeExpiredTokens()

module.exports = {removeExpiredTokens}