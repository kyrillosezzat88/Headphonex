import React , {useState , createContext , useEffect} from 'react'
import pro1 from '../Images/pro1.png'
import pro2 from '../Images/pro2.png'
export const shopContext = createContext();

const ShopContextProvider = (props)=>{
    // for Toggel Menu
    const [ToggelMenu , setToggel] = useState(false);
    //for Toggel Cart Menu
    const [ToggelCart , setTCart] = useState(false);
    //for Toggel Search 
    const [ToggelSearch , setTSearch] = useState(false);
    //for navbar white or violet
    const [WhiteNav , setWiteNav] = useState(false);
    //for Model show or hide it 
    const [Model , setModel] = useState(false)
    //for all Items 
    const [Item , SetItem] = useState([
        {id:1 ,
            Name:'Powerbeats3 Wireless' ,
            Desc:'Get the Most out of your music with an experiance',
            Img:`${pro1}`,
            Cat:'All Wireless Heigh ',
            Color:'Red',
            Price:199.99,
            Qty:10,
            FullDesc:'With up to 40 hours of battery life, Beats Solo3 Wireless is your perfect everyday headphone. Get the most out of your music with an award-winning, emotionally charged Beats listening experience.'
        },
        {id:2 ,
            Name:'Beats EP' ,
            Desc:'Get the Most out of your music with an experiance',
            Img:`${pro2}`,
            Cat:'All Beats Low ',
            Color:'Yellow',
            Price:300,
            Qty:10,
            FullDesc:'With up to 40 hours of battery life, Beats Solo3 Wireless is your perfect everyday headphone. Get the most out of your music with an award-winning, emotionally charged Beats listening experience.'
        },
        {id:3 ,
            Name:'Beats EP' ,
            Desc:'Get the Most out of your music with an experiance',
            Img:`${pro2}`,
            Cat:'All Collberations Heigh ',
            Color:'Black',
            Price:300,
            Qty:5,
            FullDesc:'With up to 40 hours of battery life, Beats Solo3 Wireless is your perfect everyday headphone. Get the most out of your music with an award-winning, emotionally charged Beats listening experience.'

        },
        {id:4 ,
            Name:'Beats EP' ,
            Desc:'Get the Most out of your music with an experiance',
            Img:`${pro2}`,
            Cat:'All Violet Low ',
            Color:'Violet',
            Price:300,
            Qty:30,
            FullDesc:'With up to 40 hours of battery life, Beats Solo3 Wireless is your perfect everyday headphone. Get the most out of your music with an award-winning, emotionally charged Beats listening experience.'

        },
        {id:5 ,
            Name:'Beats EP' ,
            Desc:'Get the Most out of your music with an experiance',
            Img:`${pro2}`,
            Cat:'All Wireless Heigh ',
            Color:'Green',
            Price:300,
            Qty:3,
            FullDesc:'With up to 40 hours of battery life, Beats Solo3 Wireless is your perfect everyday headphone. Get the most out of your music with an award-winning, emotionally charged Beats listening experience.'

        },
        {id:6 ,
            Name:'Beats EP' ,
            Desc:'Get the Most out of your music with an experiance',
            Img:`${pro1}`,
            Cat:'All Collberations Best ',
            Color:'Green',
            Price:300,
            Qty:1,
            FullDesc:'With up to 40 hours of battery life, Beats Solo3 Wireless is your perfect everyday headphone. Get the most out of your music with an award-winning, emotionally charged Beats listening experience.'
        },
        {id:7 ,
            Name:'Beats EP' ,
            Desc:'Get the Most out of your music with an experiance',
            Img:`${pro1}`,
            Cat:'All Collberations Best ',
            Color:'Green',
            Price:300,
            Qty:5,
            FullDesc:'With up to 40 hours of battery life, Beats Solo3 Wireless is your perfect everyday headphone. Get the most out of your music with an award-winning, emotionally charged Beats listening experience.'
        },
        {id:8 ,
            Name:'Beats EP' ,
            Desc:'Get the Most out of your music with an experiance',
            Img:`${pro1}`,
            Cat:'All Collberations Best ',
            Color:'Black',
            Price:300,
            Qty:12,
            FullDesc:'With up to 40 hours of battery life, Beats Solo3 Wireless is your perfect everyday headphone. Get the most out of your music with an award-winning, emotionally charged Beats listening experience.'
        },
        {id:9,
            Name:'Beats EP' ,
            Desc:'Get the Most out of your music with an experiance',
            Img:`${pro1}`,
            Cat:'All Collberations Best ',
            Color:'Violet',
            Price:300,
            Qty:6,
            FullDesc:'With up to 40 hours of battery life, Beats Solo3 Wireless is your perfect everyday headphone. Get the most out of your music with an award-winning, emotionally charged Beats listening experience.'
        },
    ]);
    //for items in cart
    const [Cart , setCart] = useState([]);
    const [TotalCharge, setTotalCharge] = useState(0);
    //Function to caclulat Total Charge 
    const Calc = () => {
        var total = null;
        Cart.map(pro => {
            total = total + (pro.Price * pro.Qty);
        });
        setTotalCharge(parseInt(total))
    }
    //To calculate Total Charge When something happen to Cart items like Delete item or Add New One
    useEffect(()=>{
        var total = null;
        Cart.map(pro => {
            total = total + (pro.Price * pro.Qty);
        });
        setTotalCharge(total)
    },[Cart])
    //function to Delete item from cart
    const Drop = (id) => {
        let newCart  = Cart.filter(item => item.id !== id);
        let SelectedItem = Item.find(itm => itm.id === id);
        setCart(newCart);
        SelectedItem.Qty += Cart.find(itm => itm.id === id).Qty;
    }
    //function to incress Quatitiy
    const IncQuantity = (id) => {
        let item = Cart.find(pro => pro.id === id);
        let SelectedItem = Item.find(itm => itm.id === id);
        if(SelectedItem.Qty >= 1){
            item.Qty += 1;
            SelectedItem.Qty -= 1;
            Calc();
        }else{
            // console.log('there is no item in stock to add');
            alert('there is no item in stock to add')
        }
    }
    //function to Decress Quatitiy
    const DecQuantity = (id) => {
        let SelectedItem = Item.find(itm => itm.id === id);
        let item = Cart.find(pro => pro.id === id);
        item.Qty -= 1;
        SelectedItem.Qty += 1;
        //Check if quantity zero if yes delete it from Cart 
        if(item.Qty == 0 ){
            let newCart = Cart.filter(pro => pro.id !== item.id);
            setCart(newCart);
        }
        Calc();

    }
    //Function Add To Cart 
    const AddToCart = (id , Qt) => {
        let newItem = Item.find(pro => pro.id === id);
        if(newItem.Qty >= Qt) {
            if(Cart.find(pro => pro.id === id)){
                Cart.find(pro => pro.id === id).Qty += Qt ;
                Calc();
            }else{
                setCart([...Cart , {id:newItem.id , Name:newItem.Name , Desc:newItem.Desc , Price:newItem.Price ,Img:newItem.Img , Qty:Qt }]);
                Calc();
            }
            newItem.Qty -= Qt;    
        } else{
            console.log('You Add Quantity Biger Than Quantity in Stock')
        }
    }
    //function to Filter Products in Home page and Shop Page every Elements defened here it will be there (in Home and Shop)
    const FilterProducts = () => {
        let filter = document.querySelectorAll('.Products .Filter li');
        let AllProducts = document.querySelectorAll('.grid .All');
        for(let i of filter){
            i.onclick = function(){
                if( this.getAttribute('data-filter') === '.All' ){
                    for(let k of AllProducts){k.style.display = 'block'}
                    for(let i of filter){i.classList.remove('active')}
                    this.classList.add('active');
                } 
                else{
                    for(let k of AllProducts){k.style.display = 'none';for(let i of filter){i.classList.remove('active')}}
                    let prro =  document.querySelectorAll(`${this.getAttribute('data-filter')}`);
                    for(let i =0 ; i< prro.length ; i++){
                        prro[i].style.display = 'block'
                    }
                    this.classList.add('active');
                }
            }
        }
        let PriceFilter = document.querySelector('.PriceFilter');
        let Price = document.querySelectorAll('.options span');
        let List = document.querySelector('.options');
        PriceFilter.onclick = () => {
            List.classList.contains('activeOption') ? List.classList.remove('activeOption') : List.classList.add('activeOption');
        }
        for(let i of Price){
            i.onclick = function () {
                List.classList.remove('activeOption')
                for(let k of AllProducts){k.style.display = 'none';for(let i of Price){i.classList.remove('active')}}
                let pr =  document.querySelectorAll(`${this.getAttribute('data-filter')}`);
                for(let i =0 ; i< pr.length ; i++){
                    pr[i].style.display = 'block'
                }
                this.classList.add('active');
            }
        }
    }
    //function Views Horzental of vertical Products
    const ViewVertical = () => {
        let products = document.querySelectorAll('.grid .col-md-4');
        for(let i of products){
            i.style.opacity = 0;
            setTimeout(()=>{
                i.classList.add('Vertical');
                i.classList.replace('col-md-4' , 'col-md-12');    
            },500)
            setTimeout(() => {
                i.style.opacity = 1;
            }, 1000);
        }
    }
    const ViewHorz  = () => {
        let products = document.querySelectorAll('.grid .col-md-12');
        for(let i of products){
            i.style.opacity = 0;
            setTimeout(() => {
                i.classList.remove('Vertical');
                i.classList.replace('col-md-12' , 'col-md-4');
            }, 500);
            setTimeout(()=>{
                i.style.opacity = 1;
            },1000)
        }
    }

   useEffect(()=>{
    // if(ToggelCart || ToggelSearch){
    //     document.querySelector('body').addEventListener('click' ,() => {
    //         setTCart(false);
    //         setTSearch(false);
    //     });
    //     document.querySelector('.cartMenu').addEventListener('click' , e => {
    //         e.stopPropagation();
    //     });
    //     document.querySelector('.search').addEventListener('click' , e => {
    //         e.stopPropagation();
    //     });
    // }
   })
    return(
        <shopContext.Provider value={{Item , ToggelMenu , setToggel ,Cart ,ToggelCart,setTCart , Drop,ToggelSearch , setTSearch , WhiteNav , setWiteNav , IncQuantity,DecQuantity ,TotalCharge, setTotalCharge , AddToCart , FilterProducts , ViewVertical , ViewHorz , Model , setModel}}>
            {props.children}
        </shopContext.Provider>
    )
}
export default ShopContextProvider;
