import fs from 'fs'
// import datei from "./datei.json" assert { type: "json" };


fs.readFile("./datei.json",(err, data)=>{
    if(err) console.log(err)
    //const ausgabe = data.toString()

    const neueAusgabe = JSON.parse(data.toString())

    console.log(neueAusgabe)

    neueAusgabe.map((item, index)=>{

        fs.appendFile('./datei.txt',`${item.id} - ${item.title}
${item.description} 
        
`,(err)=>{
            if(err) console.log(err)
        })
    })
})