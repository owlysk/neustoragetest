var i=0;
/*
async function writeToStorage(){
    i++;
    let date = Date();
    let d = date;
    let data = `${i}: ${d}`;
    console.log('data to write',data);

    await Neutralino.storage.setData('setting', data )
    .then(function(status){
        Neutralino.os.showMessageBox("Setting", "Storage saved!")
        console.log(status);
    })
    .catch(function(error){
        Neutralino.os.showMessageBox("Setting", "Storage saving error!")
        console.log(error);
    });
}
*/

function writeToStorage(){
    (async() => {
        i++;
        let date = Date();
        let d = date;
        let data = `${i}: ${d}`;
        console.log('data to write',data);
        await Neutralino.storage.setData('setting', data )
        .then(function(status){
            Neutralino.os.showMessageBox("Setting", "Storage saved!")
            console.log(status);
        })
        .catch(function(error){
            Neutralino.os.showMessageBox("Setting", "Storage saving error!"+JSON.stringify(error))
            console.log(error);
        });
    })();
}

async function readFromStorage(){
    console.log('reading from storage');
    
    let data = await Neutralino.storage.getData('setting');
    Neutralino.os.showMessageBox("Setting", "Storage data: "+data)
    console.log(`Data: ${data}`);
}

async function writeFile(){
    i++;
    let date = Date();
    let d = date;
    let data = `${i}: ${d}`;
    console.log('data to write',data);

    await Neutralino.filesystem.writeFile('./myFile.txt', 'Sample content')
    .then(function(status){
        Neutralino.os.showMessageBox("File", "File saved!")
        console.log(status);
    })
    .catch(function(error){
        Neutralino.os.showMessageBox("File", "File saving error!"+JSON.stringify(error))
        console.log(error);
    });;
}