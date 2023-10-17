/**
 * For the solution of below issue
 * Exception: Do not know how to serialize a BigInt
 * Solution: replace big int to string in data
 * @param value
 * @returns {any}
 */
export function stringify(value) {
    if (value !== undefined) {
        const data = JSON.stringify(value, (_, v) => typeof v === 'bigint' ? v.toString() : v)
        return JSON.parse(data);
    }
}