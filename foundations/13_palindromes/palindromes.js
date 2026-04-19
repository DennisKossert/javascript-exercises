const palindromes = function (string) { 
    if (string.split("")
        .reverse()
        .join("")
        .toLowerCase()
        .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\s]/g,"") == string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\s]/g,"").toLowerCase()) {
        return true
    } return false;
};

// Do not edit below this line
module.exports = palindromes;
