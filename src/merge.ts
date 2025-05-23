export function merge(
    collection_1: number[],
    collection_2: number[],
    collection_3: number[]
): number[] {
    const result: number[] = [];

    // Loop through all three collections
    let i = 0, j = collection_2.length - 1, k = 0;
    while (i < collection_1.length || j >= 0 || k < collection_3.length) {
        // Get the current elements from each collection through each pointer
        // If the pointer is out of bounds --> set Infinity as the value
        const p1 = i < collection_1.length ? collection_1[i] : Infinity;
        const p2 = j >= 0 ? collection_2[j] : Infinity;
        const p3 = k < collection_3.length ? collection_3[k] : Infinity;

        // Compare the three pointers and push the smallest one to the result
        if (p1 <= p2 && p1 <= p3) {
            result.push(p1);
            i++;
        } else if (p2 <= p1 && p2 <= p3) {
            result.push(p2);
            j--;
        } else {
            result.push(p3);
            k++;
        }
    }

    return result;
}
