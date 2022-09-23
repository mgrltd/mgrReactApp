import React, { useEffect, useState } from 'react'


const Game = () => {
    const[coller,setcoller]=useState(["","","","","","","","",""])
    const[playear,setnextplayear]=useState("player1");
    const[clicklist,setclicklist]=useState([]);
    const[player1list,setplayer1list]=useState([]);
    const[player2list,setplayer2list]=useState([]);
    const[winer,setwiner]=useState(null);

    useEffect(() => {
    var c1=['1','2','3'];
    var c2=['4','5','6'];
    var c3=['7','8','9'];
    var c4=['1','4','7'];
    var c5=['2','5','8'];
    var c6=['3','6','9'];
    var c7=['1','5','9'];
    var c8=['3','5','7'];

        var d1 = c1.filter(x => player1list.indexOf(x) === -1);
        var d2 = c2.filter(x => player1list.indexOf(x) === -1);
        var d3 = c3.filter(x => player1list.indexOf(x) === -1);
        var d4 = c4.filter(x => player1list.indexOf(x) === -1);
        var d5 = c5.filter(x => player1list.indexOf(x) === -1);
        var d6 = c6.filter(x => player1list.indexOf(x) === -1);
        var d7 = c7.filter(x => player1list.indexOf(x) === -1);
        var d8 = c8.filter(x => player1list.indexOf(x) === -1);
        if(d1.length===0||d2.length===0||d3.length===0||d4.length===0||d5.length===0||d6.length===0||d7.length===0||d8.length===0)
        {
            console.log("playear1 winn");
            setwiner("player1")

        }
        var a1 = c1.filter(x => player2list.indexOf(x) === -1);
        var a2 = c2.filter(x => player2list.indexOf(x) === -1);
        var a3 = c3.filter(x => player2list.indexOf(x) === -1);
        var a4 = c4.filter(x => player2list.indexOf(x) === -1);
        var a5 = c5.filter(x => player2list.indexOf(x) === -1);
        var a6 = c6.filter(x => player2list.indexOf(x) === -1);
        var a7 = c7.filter(x => player2list.indexOf(x) === -1);
        var a8 = c8.filter(x => player2list.indexOf(x) === -1);
        if(a1.length===0||a2.length===0||a3.length===0||a4.length===0||a5.length===0||a6.length===0||a7.length===0||a8.length===0)
        { 
           console.log("playear2 winn");
           setwiner("player2")
        }
     },[player1list,player2list])

    const play=(e)=>{
        if(winer==null)
        {
       const p=clicklist.includes(e.target.value);
       var k=clicklist.length;
       if(p===true)
       {
           alert("its alrade used chus onether one")
       }
       else{
        console.log(e.target.value);
        setclicklist(current=>[...current,e.target.value])  
        if(playear==="player1")
        {
            setnextplayear("player2");
            setplayer1list(current=>[...current,e.target.value]);
            const newColler=[...coller];
             newColler[e.target.value-1]="red";
             setcoller(newColler);  
        }
        else
        {
            const newColler=[...coller];
             newColler[e.target.value-1]="blue";
             setcoller(newColler);
            setnextplayear("player1");
            setplayer2list(current=>[...current,e.target.value])  
        }
        if(k===8)
        {
            alert("try again gays")
        }
    }
    }
    }
  return (
    <div>
        <center>

        <h1>hello  </h1>
       <h1>   {playear}  -selet one</h1>
        <div>
        <div className='gamebord'>
        <button className='gameplace' style={{"backgroundColor":`${coller[0]}`}} value={1} onClick={play}> 1 </button>
        <button className='gameplace' style={{"backgroundColor":`${coller[1]}`}} value={2} onClick={play}> 2 </button>
        <button className='gameplace' style={{"backgroundColor":`${coller[2]}`}} value={3} onClick={play}> 3 </button>
        <button className='gameplace' style={{"backgroundColor":`${coller[3]}`}} value={4} onClick={play}> 4 </button>
        <button className='gameplace' style={{"backgroundColor":`${coller[4]}`}} value={5} onClick={play}> 5 </button>
        <button className='gameplace' style={{"backgroundColor":`${coller[5]}`}} value={6} onClick={play}> 6 </button>
        <button className='gameplace' style={{"backgroundColor":`${coller[6]}`}} value={7} onClick={play}> 7 </button>
        <button className='gameplace' style={{"backgroundColor":`${coller[7]}`}} value={8} onClick={play}> 8 </button>
        <button className='gameplace' style={{"backgroundColor":`${coller[8]}`}} value={9} onClick={play}> 9 </button>
        </div>
        </div>
        {winer!=null && <h1><h1>{winer} win </h1><a href="/game" className='saveb'> playagain</a></h1> }
        </center>
       
    </div>
  )
}
export default Game
