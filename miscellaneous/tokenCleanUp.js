const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

const tokensFilePath = path.join(__dirname, '../secrets/tokens.csv');

const removeExpiredTokens = () =>{
    console.log('begin clean up');

  const currentDate = Date.now();
  const updatedTokens = [];

  fs.createReadStream(tokensFilePath)
    .pipe(csv())
    .on('data', (data) => {
      const expiryTime = parseInt(data.expiryTime);
      if (expiryTime > currentDate) {
        updatedTokens.push(data);
      }
    })
    .on('end', () => {
      const updatedCsvData = updatedTokens.map(tokenData =>
        `${tokenData.token},${tokenData.personId},${tokenData.expiryTime}`
      ).join('\n');

      fs.writeFileSync(tokensFilePath, updatedCsvData);
      console.log('Expired tokens removed successfully');
    });
}

module.exports = {removeExpiredTokens}