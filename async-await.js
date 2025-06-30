const api = "https://api.github.com/users/pradipkhandare";


async function handlePromise() {

    try {
        const data = await fetch(api);
        const jsonValue = await data.json();
        console.log(jsonValue);
    } catch (err) {
        console.log(err);
    }

}
handlePromise();
//handlePromise().catch(err => console.log(err));