module.exports = function (res) { return function (result) {
    res.send(JSON.stringify({
        success: Number.isFinite(result),
        result: result
    }));
}; };
