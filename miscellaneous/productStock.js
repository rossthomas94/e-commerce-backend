const fs = require('fs');
const csvWriter = require('csv-writer').createObjectCsvWriter;
const csv = require('fast-csv');

const { getAllProductStock } = require('../helpers/sqlControllerPM');

const checkProductStock = async () => {
    console.log('begin check on product stock')
    const productStock = await getAllProductStock();
    if (productStock.length === 0) {
        console.log('All products have good stock.');
        return 'Success';
    }

    await writeStockToCsv(productStock);
    console.log('product stock check complete')

    return 'Success';
};

const writeStockToCsv = async (stock) => {
    const csvHeaders = [
        { id: 'productId', title: 'Product ID' },
        { id: 'inventory_count', title: 'Inventory Count' }
    ];
    const writer = csvWriter({
        path: 'stockCount.csv',
        header: csvHeaders
    });

    try {
        await writer.writeRecords(stock);
        console.log('CSV file has been written successfully');
    } catch (err) {
        console.error('Error writing CSV:', err);
    }
};

const updateProductStock = async (PId) => {
    const rows = [];
    const readStream = fs.createReadStream('stockCount.csv')
        .pipe(csv.parse({ headers: true }))
        .on('data', (row) => {
            if (parseInt(row['Product ID']) !== parseInt(PId)) {
                rows.push(row);
            }
        })
        .on('end', () => {
            const csvStream = csv.format({ headers: true });
            const writableStream = fs.createWriteStream('stockCount.csv');

            csvStream.pipe(writableStream);
            rows.forEach((row) => csvStream.write(row));

            csvStream.end();

            console.log(`Removed productId ${PId} if it existed.`);
        });

    await new Promise((resolve, reject) => {
        readStream.on('end', resolve);
        readStream.on('error', reject);
    });

    return 'Product stock CSV updated if needed.';
};

module.exports = {
    checkProductStock,
    updateProductStock
};