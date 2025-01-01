import { Details } from "./details.module.js";
import { Ui } from "./ui.module.js";


export class Home{
    
    constructor(){
    
         const nav = document.querySelectorAll(".nav-link");
         nav.forEach((item)=>{
            item.addEventListener('click',()=>{
                this.changeactive(item)
                const category =item.getAttribute('data-category')
    
                this.getdata(category)
            })
         })
        this.loader= document.querySelector('.loading')
      
        this.ui= new Ui()
        
        this.getdata("mmorpg")
    }

    async changeactive(item){
        document.querySelector('.navbar-nav .active').classList.remove('active')
        item.classList.add('active')
       
    }

    async getdata(cat){
        this.loader.classList.remove('d-none')
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'dde1845ae4msh33998e79e5fbf3ap19d9d8jsn74f7e8cdddde',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${cat}`,options);
        const data = await response.json();
        this.loader.classList.add('d-none')
        this.ui.display(data)
        document.querySelectorAll('.card').forEach((card) =>{

           card.addEventListener('click', function(){
                this.detailssection=document.getElementById('deatails')
                this.detailssection.classList.remove('d-none')
                document.getElementById('games').classList.add('d-none')
                const id = card.getAttribute('data-id');
    
    
                console.log('Clicked card id:', id);  // تأكد من الـ id

                if (id) {
                    new Details(id);  // لو الـ id صحيح
                } else {
                    console.error('ID is missing or invalid');
                }
               
              
            })
        })

      
        
    }

   
}