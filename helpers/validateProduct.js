const generatePId = () => {
    let PID = Math.floor(Math.random() * 1000000);
    PID = ('000000' + PID).slice(-6);
    return PID;
};

const configureFilters = (data) => {
    const conditionString = data.map(({ column, operator, value }) => {
        if (typeof value === 'string') {
            return `${column} ${operator} '%${value}%'`;
        } else {
            return `${column} ${operator} ${value}`;
        }
    }).join(' AND ');
    return conditionString;
};

module.exports = {
    generatePId,
    configureFilters
}