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

    // CHECKING Validation Algorithm from https://souforce.cloud/regra-de-validacao-para-cpf-e-cnpj/

    // Create array with only digits
    const stringDigits = cnpj.match(/\d/g);
    // Convert to integer
    const digits = stringDigits.map((x) => parseInt(x));

    // Check if number of digits is 14
    if (digits.length !== 14) {
        return false;
    }

    // Check if all digits are the same
    let count = [...new Set(digits)]
    if (count.length === 1) {
        return false;
    }

    // CHECKING VERIFICATION DIGITS
    // FIRST DIGIT - numbers:   5	4	3	2	9	8	7	6	5	4	3	2
    let x1 = digits[0]*5 + digits[1]*4 + digits[2]*3 + digits[3]*2 +
                digits[4]*9 + digits[5]*8 + digits[6]*7 + digits[7]*6 + digits[8]*5 + digits[9]*4 + digits[10]*3 + digits[11]*2;
    
    let r1 = x1 % 11;

    // IF modulo  if less than 2, then x1 = 0
    if (r1 < 2) {
        x1 = 0;
    } else {
        x1 = 11 - r1;
    }

    // TEST FIRST DIGIT
    if (digits[12] !== x1) {

        return false;
    }
    // SECOND DIGIT - numbers:  6	5	4	3	2	9	8	7	6	5	4	3	2
    let x2 = digits[0]*6 + digits[1]*5 + digits[2]*4 + digits[3]*3 + digits[4]*2 + 
                digits[5]*9 + digits[6]*8 + digits[7]*7 + digits[8]*6 + digits[9]*5 + digits[10]*4 + digits[11]*3 + digits[12]*2;
    
    let r2 = x2 % 11;

    // IF modulo  if less than 2, then x2 = 0
    if (r2 < 2) {
        x2 = 0;
    } else {
        x2 = 11 - r2;
    }

    // TEST SECOND DIGIT
    if (digits[13] !== x2) {
        return false;
    }

    return true;
}

export {validateCNPJ};