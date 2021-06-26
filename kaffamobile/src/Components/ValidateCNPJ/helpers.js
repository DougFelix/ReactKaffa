function validateCNPJ(cnpj) {

    // Given a string, check if it looks like a CNPJ, considering two formats:
    // Formatted:
    // "00.000.000/0000-00" - Length = 18
    // Number only:
    // "00000000000000"
    // Validate if it's a well-formed CNPJ, considering the "check digits", as defined by Receita Federal.

    // Check if it null
    if (!cnpj) {
        return false;
    }

    // Is NOT a String
    if (typeof cnpj !== 'string') {
        return false;
    }
    // Is STRING
    // Check length
    if (cnpj.length > 18){
        return false;
    }

    // Regex to check if the string is only digits (length 14)
    let onlyDigits = /^\d{14}$/.test(cnpj);
    // Check formated string
    let formatedString = /^\d{2}.\d{3}.\d{3}\/\d{4}-\d{2}$/.test(cnpj);

    // If not one of the valid patterns it returns false
    if (!formatedString && !onlyDigits) {
        return false;
    }

    //TODO

    return ;
}

export {validateCNPJ};