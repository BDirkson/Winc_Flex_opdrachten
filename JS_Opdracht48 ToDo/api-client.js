//Opdracht : To do - list
apiLink = "https://jsonbox.io/box_658cc9eef99a93d93a25/";
// GET data 
const getData = async() =>{
    try {
    const result = await fetch(apiLink, {
        method: "GET"
    });
    const dataGet = await result.json ();
        console.log(dataGet);
        return dataGet;
    }   catch (err) {
        console.log (err + ' fout')}
}

// POST data
const postData = async(data) => {
    try {
    const result = await fetch(apiLink, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    });
    const dataPost = await result.json ();
        console.log(dataPost);
   }   catch (err) {
        console.log (err + ' fout')}
}

// DELETE data
const delOneData = async id => {
    try {
    const result = await fetch(`${apiLink}${id}`, {
        method: "DELETE",
    });
    const dataOneDel = await result.json ();
    console.log(dataOneDel)
    return dataOneDel;
}       catch (err) {
        console.log (err + ' fout')}
}

// Delete all tasks
const delAllData = async() => {
    try {
    const result = await fetch(apiLink);
    const dataAllDel = await result.json ();
    dataAllDel.forEach(task => delOneData(task._id));
    console.log(dataAllDel);
}   catch (err) {
    console.log (err + ' fout')}
}
// Put for checkbox
//PUT request
const checkOneData = async (id, data, state) => {
    try {
    const result = await fetch(`${apiLink}${id}`, {
        method: "PUT",
        body: JSON.stringify({description: data, done: state}),
        headers: {
            "Content-Type": "application/json",
        },
    });
    const dataOneCheck = await result.json ();
    console.log(dataOneCheck)
    return dataOneCheck;
}       catch (err) {
        console.log (err + ' fout')}
}





