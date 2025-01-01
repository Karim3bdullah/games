import { Ui } from "./ui.module.js";

export class Details{
    constructor(id){
        document.getElementById('close').addEventListener('click',()=>{
            document.getElementById('deatails').classList.add('d-none')
            document.getElementById('games').classList.remove('d-none')
          })
          this.loader= document.querySelector('.loading')
          this.getdetails(id)

    }


   async getdetails(id){ 
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'dde1845ae4msh33998e79e5fbf3ap19d9d8jsn74f7e8cdddde',
		'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
	}
};
this.loader.classList.remove('d-none')
    let response =await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,options)
    let result = await response.json()
    this.loader.classList.add('d-none')
    new Ui().displaydetails(result)
    
    }
}