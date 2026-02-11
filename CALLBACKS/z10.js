function greet(name, callback) 
{
    callback(`Witaj ${name}!`);
}

greet('Bart', (message) => 
{
    console.log(message);
});