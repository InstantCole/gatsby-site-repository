import tabStyles from "./tab.module.scss"
import React  from 'react'



const playAnimation = [tabStyles.tabFirst, tabStyles.tabSecond, tabStyles.tabThird, tabStyles.tabForth, tabStyles.tabFifth, tabStyles.tabSixth, tabStyles.tabSeventh, tabStyles.tabEigth, tabStyles.tabNinth, tabStyles.tabTenth, tabStyles.tabEleventh, tabStyles.tabTwelth];
const gScale = [1,0,1,1,0,1,0,1,0,1,1,0];



const Tab = ({ scale, setScale, start, size }) => {
  let p = 0;
  let eString = genNotes(7, gScale)
  let aString = genNotes(0, gScale)
  let dString = genNotes(5, gScale)
  let gString = genNotes(10, gScale)
  let bString = genNotes(2, gScale)
  let eeString = genNotes(7, gScale)
  let theScalePositions = genScalePositions(eString, aString, dString, gString, bString, eeString, start, size)
  //console.log(`thescale is ` + theScale)

  theScalePositions = theScalePositions.map((n) => {
    if(n.note%12 === 0){
      n.muiscNote = 'a'
    }  
    else if(n.note%12 === 1){
      n.muiscNote = 'a#'
    }  
    else if(n.note%12 === 2){
      n.muiscNote = 'b'
    }  
    else if(n.note%12 === 3){
      n.muiscNote = 'c'
    }  
    else if(n.note%12 === 4){
      n.muiscNote = 'c#'
    }  
    else if(n.note%12 === 5){
      n.muiscNote = 'd'
    }  
    else if(n.note%12 === 6){
      n.muiscNote = 'd#'
    }  
    else if(n.note%12 === 7){
      n.muiscNote = 'e'
    }  
    else if(n.note%12 === 8){
      n.muiscNote = 'f'
    }  
    else if(n.note%12 === 9){
      n.muiscNote = 'f#'
    }  
    else if(n.note%12 === 10){
      n.muiscNote = 'g'
    }  
    else if(n.note%12 === 11){
      n.muiscNote = 'g#'
    }  
    return n
  })
  console.log(theScalePositions)
 


  function genNotes (guitString, scale) {
    let theString = guitString;
    let stringHolder = [];

    for(let i = theString; i< 22 + theString; i++){
      stringHolder.push({note: i, inScale: scale[i%12] === 1});
    }
    return stringHolder
  }


  function genScalePositions (e, a, d, g, b, ee, start, size){
    let scalePositions = [];
    for(let i = start; i < start + size; i++)
    {
      scalePositions.push(e[i]);
    }

    for(let i = start; i< start + size; i++)
    {
      if(!scalePositions.includes(a[i]))
      scalePositions.push(a[i])
      else
      return
    }

    for(let i = start; i< start + size; i++)
    {
      if(!scalePositions.includes(d[i]))
      scalePositions.push(d[i])
      else
      return
    }

    for(let i = start; i< start + size; i++)
    {
      if(!scalePositions.includes(g[i]))
      scalePositions.push(g[i])
      else
      return
    }

    for(let i = start; i< start + size; i++)
    {
      if(!scalePositions.includes(b[i]))
      scalePositions.push(b[i])
      else
      return
    }

    for(let i = start; i< start + size; i++)
    {
      if(!scalePositions.includes(ee[i]))
      scalePositions.push(ee[i])
      else
      return
    }

    return scalePositions
    
  }
  /* function genScale ( e, a, d, g, b, ee, start, size) {

    let theScale = [];
    theScale.push('e')
    for(let i = start; i< start + size; i++){
      theScale.push(e[i])
    }
    theScale.push('a')
    for(let i = start; i< start + size; i++){
      theScale.push(a[i])
    }
    theScale.push('d')
    for(let i = start; i< start + size; i++){
      theScale.push(d[i])
    }
    theScale.push('g')
    for(let i = start; i< start + size; i++){
      theScale.push(g[i])
    }
    theScale.push('b')
    for(let i = start; i< start + size; i++){
      theScale.push(b[i])
    }
    theScale.push('E')
    for(let i = start; i< start + size; i++){
      theScale.push(ee[i])
    }
    
    return theScale;

  } */



    return (
        
        <div key={scale}>
          <div id="tab-div" className={tabStyles.tabContainer}>
            {theScalePositions.map((fret, f) => {
      if(fret.inScale === true){
        p++;
        return (
        
          <div className={tabStyles.eachTab}><div key={f} className={playAnimation[p-1]}></div>{fret.muiscNote}{f%size + start}</div>
          
          
        
        )}
      else
        return (
          <div className={tabStyles.eachTabOff}><div key={f} className={tabStyles.tabBlank}></div></div>
        )
            })}
          </div>

          
         
          <button onClick={() => setScale(1)} className={tabStyles.changeScale}>Change to g Scale</button>
          <button onClick={() => setScale(6)} className={tabStyles.changeScale}>Change to 6 Scale</button>
        </div>
        
        
    
    )
}




export default Tab;