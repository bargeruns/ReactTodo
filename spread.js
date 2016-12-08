var sean = ['Sean','29'];
function greetWithAge(name,age) {
    return `Hi ${name} you are ${age}`;
}

console.log(greetWithAge(...sean));
