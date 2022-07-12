var a = [0,0,0]
a[Math.floor(Math.random() * 3)] = 1
var selected = -1
var reveled = -1
var opend = -1
// var times = 2000
// var win =0
// var loss = 0
// for(var i = 0 ; i<=times; i++){
//     id = Math.floor(Math.random() * 3)
//     id = id
//     ele =  document.getElementById()
//     select(ele)
// }
    function select(el){
        
        selected = parseInt(el.id)
        el.setAttribute("style", "filter: brightness(50%);");
        revel()
    }
    
    
    function revel(){
        console.log("selected" + selected) 
        while(true){
            i = Math.floor(Math.random() * 3)
            if (i !== selected && a[i] == 0) {
                ind = i
                console.log(i)
                opend = i
                console.log("opend"+opend)
                document.getElementById(ind).innerHTML = ""
                document.getElementById(ind).innerHTML = '<img id="img" class="w-full h-full" src="goat.webp" alt="xyz">'
                break;
            }
        }

        // call function to showbuttons the buttons
        showbuttons()

        
    }
    function switch1() {
        hidebuttons()
        // selected willl be not opend door and not selecetd priviosly
        for(var i= 0; i <=2; i++){
            if (i !== opend && i !== selected){
                selected = i
            }

        }
        result()
    }

    function notswitch(){
        hidebuttons()
        result()
    }

    function showbuttons(){
        document.getElementById("buttons").hidden = false
    }
    function hidebuttons(){
        document.getElementById("buttons").hidden = true
        
    }

    function result(){
        console.log('inside result')
        document.getElementById("gameboard").innerHTML = ""
        for(var i=0; i<=2;i++){
            if(a[i]==1){
                document.getElementById("gameboard").innerHTML += '<a id="0"   class=" rounded overflow-hidden shadow-lg"><img id="img" class="w-full h-full" src="tresure.jpg" alt="xyz"></a>'
            }
            else{
                document.getElementById("gameboard").innerHTML += '<a id="0"   class=" rounded overflow-hidden shadow-lg"><img id="img" class="w-full h-full" src="goat.webp" alt="xyz"></a>'
            }
        }
        document.getElementById("result").hidden = false
        if(a[selected] == 1){
            // win= win+1
            document.getElementById("result").innerHTML = "Congo !! You won<br><button onclick='restart()' class='text-white bg-red-600 p-1 text-xl rounded'>restart</button>"
            // document.getElementById("count").innerHTML = "win : " + win.toString() + "loss : " + loss.toString()
        }
        else{
            // loss= loss+1
            document.getElementById("result").innerHTML = "You Lose<br><button onclick='restart()' class='text-white bg-red-600 p-1 text-xl rounded'>restart</button>"
            // document.getElementById("count").innerHTML = "win : " + win.toString() + "loss : " + loss.toString()
        }
        
    }

    function restart(){
        a = [0,0,0]
        a[Math.floor(Math.random() * 3)] = 1
        selected = -1
        reveled = -1
        opend = -1
        document.getElementById("result").innerHTML =""
        document.getElementById("gameboard").innerHTML=`
        <a id="0"  onclick='select(this)' class=" rounded overflow-hidden shadow-lg">
          <img class="w-full h-full " src="door.jpg" alt="Mountain">
          
        </a>
       
        <a id="1"  onclick='select(this)' class=" rounded overflow-hidden shadow-lg">
          <img id="img" class="w-full h-full" src="door.jpg" alt="River">
         
        </a>
    
       
        <a id="2"  onclick='select(this)' class=" rounded overflow-hidden shadow-lg">
          <img class="w-full h-full" src="door.jpg" alt="Forest">
          
          
        </a>`
    }
