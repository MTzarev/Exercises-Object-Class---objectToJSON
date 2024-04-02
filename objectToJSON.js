function objectToJSON(name, lastName, hairColor) {
let object={}
object.name=name;
object.lastName=lastName;
object.hairColor=hairColor;

let convertToJSON = JSON.stringify(object)

    console.log(convertToJSON);
}
objectToJSON('Peter', 'Smith', 'Blond');