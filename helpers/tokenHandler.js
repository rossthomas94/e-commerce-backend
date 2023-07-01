const csv = require('csv-parser');
const fs = require('fs');
const moment = require('moment');
const path = require('path');
const randomstring = require('randomstring');

const tokensFilePath = path.join(__dirname, '../secrets/tokens.csv');

const generateNewToken = async (userId) => {
  const expiryDate = moment().add(1, 'hours').format('YYYY-MM-DD HH:mm:ss');
  const token = randomstring.generate({ length: 32, charset: 'alphanumeric' });

  const record = {
    user: userId,
    token: token,
    expires: expiryDate,
  };

  await updateTokens(userId, record);

  return token;
};

const updateTokens = async (userId, newData) => {
  const updatedTokens = [];
  updatedTokens.push(newData);

  const existingTokens = await readTokensFromFile(tokensFilePath);
  const filteredTokens = existingTokens.filter((data) => data.user !== userId);
  updatedTokens.push(...filteredTokens);

  const updatedCsvData = [Object.keys(updatedTokens[0]).join(',')]; // Add headers

  const tokenRows = updatedTokens.map((tokenData) => Object.values(tokenData).join(','));
  updatedCsvData.push(...tokenRows);

  await writeTokensToFile(tokensFilePath, updatedCsvData);
  console.log('Tokens updated correctly');
};

const checkToken = async (userId, token) => {
  const tokens = await readTokensFromFile(tokensFilePath);
  const foundToken = tokens.find((row) => row.user === userId && row.token === token);
  return foundToken || false;
};

const readTokensFromFile = (filePath) => {
  return new Promise((resolve, reject) => {
    const tokens = [];

    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (data) => {
        tokens.push(data);
      })
      .on('end', () => {
        resolve(tokens);
      })
      .on('error', (error) => {
        reject(error);
      });
  });
};

const writeTokensToFile = (filePath, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, data.join('\n'), (error) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
};

// checkToken('dsdsad-4rr56rr-456', 'gl43VodPErfs2anKoLGfiJZcvIDgqgLR')
//   .then((result) => {
//     console.log(result);
//     if (result) {
//       result.expires = moment().add(1, 'hours').format('YYYY-MM-DD HH:mm:ss');
//       updateTokens('dsdsad-4rr56rr-456', result);
//     }
//   })
//   .catch((error) => {
//     console.error(error);
//   });

  module.exports = {
    updateTokens,
    generateNewToken,
    checkToken
};