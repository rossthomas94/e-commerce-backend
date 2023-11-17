const generatePId = () => {
    let PID = Math.floor(Math.random() * 1000000);
    PID = ('000000' + PID).slice(-6);
    return PID;
};

module.exports = {
    generatePId
}