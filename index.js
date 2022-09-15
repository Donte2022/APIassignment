


async function run() {

    const MissingName = document.getElementById("ApiOut")
    const Username = document.getElementById("userInput");
    const data = await fetch(`https://api.agify.io?name=${Username.value}`);
    const json = await data.json();
    console.log(json.age)
    const UserAge = document.getElementById("ApiOut");
    const returnVal = UserAge.innerHTML;


    if (Username.value === "") {
        MissingName.innerHTML = "Please insert a name";
        console.log(Username.value)
        return null;

    } else {
        return UserAge.innerHTML = json.age;
    }

}










