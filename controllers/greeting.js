const otherValue = "1234";
const handleGreeting = ({params, country}, response) => {
    if(!params.name){
        response.send("Hello World!");
    } else {
        let message = "Hello " + params.name;

        if(country === "Romania") {
            message = "Salut " + params.name;
        }
        response.send(message);
    }
}

module.exports.handleGreeting = handleGreeting;
module.exports.otherValue = otherValue;