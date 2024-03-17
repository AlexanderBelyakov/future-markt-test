function reduceNumber(n) {
    let sum = 0
    while(n > 0) {
        sum += n % 10
        n = Math.floor(n/10)
    }
    return sum
}

function convertDate() {
    const today = new Date();
    const year = today.getFullYear()
    const month = today.getMonth() + 1
    const day = today.getDate()
    const res = reduceNumber(year) + reduceNumber(month) + reduceNumber(day)
    return res
}

export {
    convertDate,
}