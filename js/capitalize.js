/**
 * Trumpas funkcijos veikimo/paskirties aprasas. Raides visos mazosios isskyrus pirmos didziosios
 * @param {string} str Ivesties duomuo/ kintamasis ir tipas. 
 * @returns Performatuotas tekstas gryzta
 */
export function capitalize(str) {
    // labas -> Labas
    // LABAS -> Labas
    // labas rytas -> Labas Rytas
    // LABAS RYTAS -> Labas Rytas
    if (typeof str !== 'string' || str.length === 0) {
        return str; // return as is if not a valid string
    }
    return str
        .split(' ') // Splits the string into words
        .filter(word => word.length > 0) // filter out empty strings from multiple spaces
        .map(word => // Maps over each word
            word[0].toUpperCase() // Converts the first character to uppercase
            + word.slice(1).toLowerCase()  // Converts the rest to lowercase
        )
        .join(' ');
}


