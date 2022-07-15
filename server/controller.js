const sneakers = require ('./db.json')
let globalId = 6
module.exports = {
    getshoe: (req,res)=>{
        res.status(200).send(sneakers)
    },
    createsneaker : (req,res)=>{ 
        const {name, price, imageURL} = req.body;
        let newshoe = {
            id: globalId,
            name,
            price:+price,
            imageURL
        }
        sneakers.push(newshoe);
        
        res.status(200).send(sneakers);
        globalId++;

    },
    
    deletebtn: (req,res) => {
        let index = sneakers.findIndex(elem => elem.id === +req.params.id)
        sneakers.splice(index, 1);
        res.status(200).send(sneakers);
    },

}
    