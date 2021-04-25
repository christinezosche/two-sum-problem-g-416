hashTwoSum = (array, sum) => {
    let hash = {}
    let pairs = []
    array.forEach(value => hash[value] = true)
    for (var key in hash) {
        delete hash[key]
        let neededNumber = sum - key
        if (hash[neededNumber]) {
            pairs.push([parseInt(key), neededNumber])
        }
    }
    return pairs
}