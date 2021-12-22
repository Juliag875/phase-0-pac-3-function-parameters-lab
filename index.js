function introduction(name) {
    return `Hi, my name is ${name}.`;
}

function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

<<<<<<< HEAD
function introductionWithLanguageOptional(name, language = "JavaScript") {
     return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
=======
// function introductionWithLanguageOptional(name, language = "JavaScript") {
//     return `Hi, my name is ${name} and I am learning to program in ${language}.`;
// }
>>>>>>> d76a0845bc41a32ef8d5260fdf87f23fde4ebeca

function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
