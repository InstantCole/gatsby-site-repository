import tabStyles from "./tab.module.scss"
import React  from 'react'



const playAnimation = [tabStyles.tabFirst, tabStyles.tabSecond, tabStyles.tabThird, tabStyles.tabForth, tabStyles.tabFifth, tabStyles.tabSixth, tabStyles.tabSeventh, tabStyles.tabEigth, tabStyles.tabNinth, tabStyles.tabTenth, tabStyles.tabEleventh, tabStyles.tabTwelth];
const gScale = [1,1,1,1,1,1,1,1,1,1,1,1];

const scaleToPlay = gScale;
 



const Tab = ({ scale, setScale, startingFret, setFret }) => {
  let p = 0;
  let eStringNotePositions = genNotePositions(7, scaleToPlay)
  let aStringNotePositions = genNotePositions(12, scaleToPlay)
  let dStringNotePositions = genNotePositions(17, scaleToPlay)
  let gStringNotePositions = genNotePositions(22, scaleToPlay)
  let bStringNotePositions = genNotePositions(26, scaleToPlay)
  let eeStringNotePositions = genNotePositions(31, scaleToPlay)
  let eStringPosition = [];
  let aStringPosition = [];
  let dStringPosition = [];
  let gStringPosition = [];
  let bStringPosition = [];
  let eeStringPosition = [];

  let theScalePosition = genScalePosition(eStringNotePositions, aStringNotePositions, dStringNotePositions, gStringNotePositions, bStringNotePositions, eeStringNotePositions, startingFret)
  //console.log(`thescale is ` + theScale)

  /* theScalePosition = theScalePosition.map((n) => {
    if(n.noteNumber%12 === 0){
      n.noteMusic = 'a'
    }  
    else if(n.noteNumber%12 === 1){
      n.noteMusic = 'a#'
    }  
    else if(n.noteNumber%12 === 2){
      n.noteMusic = 'b'
    }  
    else if(n.noteNumber%12 === 3){
      n.noteMusic = 'c'
    }  
    else if(n.noteNumber%12 === 4){
      n.noteMusic = 'c#'
    }  
    else if(n.noteNumber%12 === 5){
      n.noteMusic = 'd'
    }  
    else if(n.noteNumber%12 === 6){
      n.noteMusic = 'd#'
    }  
    else if(n.noteNumber%12 === 7){
      n.noteMusic = 'e'
    }  
    else if(n.noteNumber%12 === 8){
      n.noteMusic = 'f'
    }  
    else if(n.noteNumber%12 === 9){
      n.noteMusic = 'f#'
    }  
    else if(n.noteNumber%12 === 10){
      n.noteMusic = 'g'
    }  
    else if(n.noteNumber%12 === 11){
      n.noteMusic = 'g#'
    }  
    return n
  })
  console.log(theScalePosition) */
 


  function genNotePositions (guitStringNoteNumber, scale) {
    let thisStringNoteNumber = guitStringNoteNumber;
    let notePositionsHolder = [];
    let noteMusic;

    for(let noteNumber = thisStringNoteNumber; noteNumber < 22 + thisStringNoteNumber; noteNumber++){
      if(noteNumber%12 === 0){
        noteMusic = 'a'
      }  
      else if(noteNumber%12 === 1){
        noteMusic = 'a#'
      }  
      else if(noteNumber%12 === 2){
        noteMusic = 'b'
      }  
      else if(noteNumber%12 === 3){
        noteMusic = 'c'
      }  
      else if(noteNumber%12 === 4){
        noteMusic = 'c#'
      }  
      else if(noteNumber%12 === 5){
        noteMusic = 'd'
      }  
      else if(noteNumber%12 === 6){
        noteMusic = 'd#'
      }  
      else if(noteNumber%12 === 7){
        noteMusic = 'e'
      }  
      else if(noteNumber%12 === 8){
        noteMusic = 'f'
      }  
      else if(noteNumber%12 === 9){
        noteMusic = 'f#'
      }  
      else if(noteNumber%12 === 10){
        noteMusic = 'g'
      }  
      else if(noteNumber%12 === 11){
        noteMusic = 'g#'
      }  
      notePositionsHolder.push({noteNumber: noteNumber, inScale: scale[noteNumber%12] === 1, noteMusic: noteMusic});
    }
   
    return notePositionsHolder
  }


  function genScalePosition (e, a, d, g, b, ee, startingFret){
  
    
    let lastNoteNumberPlayed;
    let scaleEnd = startingFret + 4;

    //eString
    for(let fret = startingFret, i = 0; fret < scaleEnd + 1; fret++, i++)
    {
        eStringPosition.push(e[fret]);
        eStringPosition[i].fret = fret;
    }

    

    if(eStringPosition[eStringPosition.length - 1].inScale) lastNoteNumberPlayed = eStringPosition[eStringPosition.length - 1].noteNumber
    else if(eStringPosition[eStringPosition.length - 2].inScale) lastNoteNumberPlayed = eStringPosition[eStringPosition.length - 2].noteNumber
    else if(eStringPosition[eStringPosition.length - 3].inScale) lastNoteNumberPlayed = eStringPosition[eStringPosition.length - 3].noteNumber
    
    console.log(`starting fret ` + startingFret)
    console.log(`last note played on e string ` + lastNoteNumberPlayed)
    console.log("estring notes")
    console.log(eStringPosition)

    //aString
    for(let fret = 0, i = 0; fret <= scaleEnd; fret++)
    {

      if(a[fret].noteNumber > lastNoteNumberPlayed) {
        aStringPosition.push(a[fret]);
        aStringPosition[i].fret = fret;  
        i++
      }
      
        
    }
    
     
    if(aStringPosition[aStringPosition.length - 1].inScale) lastNoteNumberPlayed = aStringPosition[aStringPosition.length - 1].noteNumber
    else if(aStringPosition[aStringPosition.length - 2].inScale) lastNoteNumberPlayed = aStringPosition[aStringPosition.length - 2].noteNumber
    else if(aStringPosition[aStringPosition.length - 3].inScale) lastNoteNumberPlayed = aStringPosition[aStringPosition.length - 3].noteNumber
        //while (!aStringPosition[0].inScale && aStringPosition[aStringPosition.length - 1].inScale) aStringPosition.shift();
      
    
    console.log(`starting fret ` + startingFret)
    console.log("astring notes")
    console.log(aStringPosition)
   
    //dString
    for(let fret = 0, i = 0; fret <= scaleEnd; fret++)
    {
      if(d[fret].noteNumber > lastNoteNumberPlayed){
        dStringPosition.push(d[fret])
        dStringPosition[i].fret = fret;
        i++
      }
    }
    
 
    if(dStringPosition[dStringPosition.length - 1].inScale) lastNoteNumberPlayed = dStringPosition[dStringPosition.length - 1].noteNumber
    else if(dStringPosition[dStringPosition.length - 2].inScale) lastNoteNumberPlayed = dStringPosition[dStringPosition.length - 2].noteNumber
    else if(dStringPosition[dStringPosition.length - 3].inScale) lastNoteNumberPlayed = dStringPosition[dStringPosition.length - 3].noteNumber
        //while (!dStringPosition[0].inScale && dStringPosition[dStringPosition.length - 1].inScale) dStringPosition.shift();

    console.log(`starting fret ` + startingFret)
    console.log("dstring notes")
    console.log(dStringPosition)

//gString
    for(let fret = 0, i = 0; fret <= scaleEnd; fret++)
    {
      if(g[fret].noteNumber > lastNoteNumberPlayed){
        gStringPosition.push(g[fret])
        gStringPosition[i].fret = fret;
        i++
      }
      
    }

    

    if(gStringPosition[gStringPosition.length - 1].inScale) lastNoteNumberPlayed = gStringPosition[gStringPosition.length - 1].noteNumber
    else if(gStringPosition[gStringPosition.length - 2].inScale) lastNoteNumberPlayed = gStringPosition[gStringPosition.length - 2].noteNumber
    else if(gStringPosition[gStringPosition.length - 3].inScale) lastNoteNumberPlayed = gStringPosition[gStringPosition.length - 3].noteNumber
    
    //while (!gStringPosition[0].inScale && gStringPosition[gStringPosition.length - 1].inScale) gStringPosition.shift();
    console.log(`starting fret ` + startingFret)
    console.log("gstring notes")
    console.log(gStringPosition)

    //bString
    for(let fret = 0, i = 0; fret <= scaleEnd; fret++)
    {
      if(b[fret].noteNumber > lastNoteNumberPlayed){
        bStringPosition.push(b[fret])
        bStringPosition[i].fret = fret;
        i++
      }
       
    }
    console.log(`starting fret ` + startingFret)
    console.log("bstring notes")
    console.log(bStringPosition)

    

    if(bStringPosition[bStringPosition.length - 1].inScale) lastNoteNumberPlayed = bStringPosition[bStringPosition.length - 1].noteNumber
    else if(bStringPosition[bStringPosition.length - 2].inScale) lastNoteNumberPlayed = bStringPosition[bStringPosition.length - 2].noteNumber
    else if(bStringPosition[bStringPosition.length - 3].inScale) lastNoteNumberPlayed = bStringPosition[bStringPosition.length - 3].noteNumber
        //while (!bStringPosition[0].inScale && bStringPosition[bStringPosition.length - 1].inScale && bStringPosition.length > scaleEnd - startingFret) bStringPosition.shift();
    console.log(`starting fret ` + startingFret)
    console.log("bstring notes")
    console.log(bStringPosition)

    //eeString
    for(let fret = 0, i = 0; fret <= scaleEnd; fret++)
    {
      if(ee[fret].noteNumber > lastNoteNumberPlayed){
        eeStringPosition.push(ee[fret])
        eeStringPosition[i].fret = fret
        i++
      }
    }


      if(!eStringPosition[0].fret == 0){
        if(!eStringPosition[eStringPosition.length - 2].inScale && eStringPosition[eStringPosition.length - 1].inScale && aStringPosition.length < 5){
          eStringPosition.pop()
          eStringPosition.unshift(e[eStringPosition[0].fret - 1])
          eStringPosition[0].fret = eStringPosition[1].fret - 1
          aStringPosition.unshift(a[aStringPosition[0].fret - 1])
          aStringPosition[0].fret = aStringPosition[1].fret - 1
        }
    
        if(!aStringPosition[aStringPosition.length - 2].inScale && aStringPosition[aStringPosition.length - 1].inScale && dStringPosition.length < 5){
          aStringPosition.pop()
          dStringPosition.unshift(d[dStringPosition[0].fret - 1])
          dStringPosition[0].fret = dStringPosition[1].fret - 1
        }
    
        if(!dStringPosition[dStringPosition.length - 2].inScale && dStringPosition[dStringPosition.length - 1].inScale && gStringPosition.length < 5){
          dStringPosition.pop()
          gStringPosition.unshift(g[gStringPosition[0].fret - 1])
          gStringPosition[0].fret = gStringPosition[1].fret - 1
        }
    
        if(!gStringPosition[gStringPosition.length - 2].inScale && gStringPosition[gStringPosition.length - 1].inScale && bStringPosition.length < 5){
          gStringPosition.pop()
          bStringPosition.unshift(b[bStringPosition[0].fret - 1])
          bStringPosition[0].fret = bStringPosition[1].fret - 1
        }
    
        if(!bStringPosition[bStringPosition.length - 2].inScale && bStringPosition[bStringPosition.length - 1].inScale){
          bStringPosition.pop()
          eeStringPosition.unshift(ee[eeStringPosition[0].fret - 1])
          eeStringPosition[0].fret = eeStringPosition[1].fret - 1
        }
      }
    

    while(aStringPosition[0].fret < eStringPosition[0].fret) aStringPosition.shift()
    while(dStringPosition[0].fret < eStringPosition[0].fret) dStringPosition.shift()
    while(gStringPosition[0].fret < eStringPosition[0].fret) gStringPosition.shift()
    while(bStringPosition[0].fret < eStringPosition[0].fret) bStringPosition.shift()
    while(eeStringPosition[0].fret < eStringPosition[0].fret && !eeStringPosition[0].inScale) eeStringPosition.shift()
      if(eeStringPosition[0].fret < eStringPosition[0].fret && eeStringPosition[0].inScale){
        bStringPosition.push(b[bStringPosition[bStringPosition.length - 1].fret + 1])
        bStringPosition[bStringPosition.length - 1].fret = bStringPosition[bStringPosition.length - 2].fret + 1
        eeStringPosition.shift()
      }

    if(gStringPosition[0].fret > eStringPosition[0].fret) {
      gStringPosition.unshift(g[gStringPosition[0].fret - 1])
      gStringPosition[0].fret = gStringPosition[1].fret - 1
    }
    while(bStringPosition[0].fret > eStringPosition[0].fret) {
      bStringPosition.unshift(b[bStringPosition[0].fret - 1])
      bStringPosition[0].fret = bStringPosition[1].fret - 1
    }
    while(gStringPosition[gStringPosition.length - 1].noteNumber >= bStringPosition[0].noteNumber) gStringPosition.pop()
    if(dStringPosition[dStringPosition.length - 1].noteNumber == gStringPosition[0].noteNumber) dStringPosition.pop()


    /* while(eStringPosition.length > 4){
      if(!eStringPosition[eStringPosition.length -1].inScale) eStringPosition.pop()
      else break
    }


    if(aStringPosition.length < eStringPosition.length && eStringPosition[eStringPosition.length - 1].inScale){
      aStringPosition.unshift(eStringPosition[eStringPosition.length - 1])
      aStringPosition[0].fret = aStringPosition[1].fret - 1
      eStringPosition.pop()
    }
    if(eStringPosition[0].fret > aStringPosition[0].fret){
      eStringPosition.unshift(e[eStringPosition[0].fret -1])
      eStringPosition[0].fret = eStringPosition[1].fret -1
    }
         
    
    if(dStringPosition[dStringPosition.length -1].inScale && dStringPosition.length > 4) {
      gStringPosition.unshift(dStringPosition[dStringPosition.length -1])
      dStringPosition.pop()
      gStringPosition[0].fret = gStringPosition[1].fret - 1
    }
        
    
    if(bStringPosition[0].fret > eStringPosition[0].fret && gStringPosition[gStringPosition.length - 1].inScale){
      bStringPosition.unshift(gStringPosition[gStringPosition.length - 1])      
      gStringPosition.pop()
      bStringPosition[0].fret = bStringPosition[1].fret - 1
    }
    else if(bStringPosition[0].fret > eStringPosition[0].fret){
      bStringPosition.unshift(b[bStringPosition[0].fret - 1])
      bStringPosition[0].fret = bStringPosition[1].fret -1
    }

    if(!eeStringPosition[0].inScale && eeStringPosition[0].fret < eStringPosition[0].fret) eeStringPosition.shift()      
     */
    

    /* //pops off non played last fret of string
    if(!aStringPosition[aStringPosition.length -1].inScale) aStringPosition.pop()
    if(!dStringPosition[dStringPosition.length -1].inScale) dStringPosition.pop()
    if(!bStringPosition[bStringPosition.length -1].inScale) bStringPosition.pop()
    if(!gStringPosition[gStringPosition.length -1].inScale) gStringPosition.pop()
    if(!eeStringPosition[eeStringPosition.length -1].inScale) eeStringPosition.pop()

    //shifts off the non played first fret of string
    if(!aStringPosition[0].inScale && aStringPosition[0].fret < eStringPosition[0].fret) aStringPosition.shift() 
    if(!dStringPosition[0].inScale && dStringPosition[0].fret < eStringPosition[0].fret) dStringPosition.shift()
    if(!gStringPosition[0].inScale && gStringPosition[0].fret < eStringPosition[0].fret) gStringPosition.shift()  
 */
    if(eeStringPosition[eeStringPosition.length - 1].inScale) lastNoteNumberPlayed = eeStringPosition[eeStringPosition.length - 1].noteNumber
    else if(eeStringPosition[eeStringPosition.length - 2].inScale) lastNoteNumberPlayed = eeStringPosition[eeStringPosition.length - 2].noteNumber
    else if(eeStringPosition[eeStringPosition.length - 3].inScale) lastNoteNumberPlayed = eeStringPosition[eeStringPosition.length - 3].noteNumber
    
    //while (!eeStringPosition[0].inScale && eeStringPosition[bStringPosition.length - 1].inScale && bStringPosition.length > scaleEnd - startingFret) eeStringPosition.shift();
    console.log(`scaleEnd ` + scaleEnd)
    console.log(`starting fret ` + startingFret)
    console.log("eestring notes")
    console.log(eeStringPosition)

    return eStringPosition
    
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
            {eStringPosition.map((fret, f) => {
              if(fret.inScale === true){
                p++;
                return (               
                  <div className={tabStyles.eachTab}><div key={f} className={tabStyles.tabPlay}></div>{fret.noteMusic}{fret.fret}</div>
                )}
              else
                return (
                  <div className={tabStyles.eachTabOff}><div key={f} className={tabStyles.tabBlank}></div></div>
                )
            })}</div>
            <div id="tab-div" className={tabStyles.tabContainer}>
            {aStringPosition.map((fret, f) => {
              if(fret.inScale === true){
                p++;
                return (               
                  <div className={tabStyles.eachTab}><div key={f} className={tabStyles.tabPlay}></div>{fret.noteMusic}{fret.fret}</div>
                )}
              else
                return (
                  <div className={tabStyles.eachTabOff}><div key={f} className={tabStyles.tabBlank}></div></div>
                )
            })}</div>
            <div id="tab-div" className={tabStyles.tabContainer}>
            {dStringPosition.map((fret, f) => {
              if(fret.inScale === true){
                p++;
                return (               
                  <div className={tabStyles.eachTab}><div key={f} className={tabStyles.tabPlay}></div>{fret.noteMusic}{ fret.fret}</div>
                )}
              else
                return (
                  <div className={tabStyles.eachTabOff}><div key={f} className={tabStyles.tabBlank}></div></div>
                )
            })}</div>
            <div id="tab-div" className={tabStyles.tabContainer}>
            {gStringPosition.map((fret, f) => {
              if(fret.inScale === true){
                p++;
                return (               
                  <div className={tabStyles.eachTab}><div key={f} className={tabStyles.tabPlay}></div>{fret.noteMusic}{ fret.fret}</div>
                )}
              else
                return (
                  <div className={tabStyles.eachTabOff}><div key={f} className={tabStyles.tabBlank}></div></div>
                )
            })}</div>
            <div id="tab-div" className={tabStyles.tabContainer}>
            {bStringPosition.map((fret, f) => {
              if(fret.inScale === true){
                p++;
                return (               
                  <div className={tabStyles.eachTab}><div key={f} className={tabStyles.tabPlay}>{fret.noteMusic}</div>{fret.fret}</div>
                )}
              else
                return (
                  <div className={tabStyles.eachTabOff}><div key={f} className={tabStyles.tabBlank}></div></div>
                )
            })}</div>
            <div id="tab-div" className={tabStyles.tabContainer}>
            {eeStringPosition.map((fret, f) => {
              if(fret.inScale === true){
                p++;
                return (               
                  <div className={tabStyles.eachTab}><div key={f} className={tabStyles.tabPlay}></div>{fret.noteMusic}{fret.fret}</div>
                )}
              else
                return (
                  <div className={tabStyles.eachTabOff}><div key={f} className={tabStyles.tabBlank}></div></div>
                )
            })}
          </div>
         
          <button onClick={() => setFret(2)} className={tabStyles.changeScale}>Start Scale on 2</button>
          <button onClick={() => setFret(6)} className={tabStyles.changeScale}>Start Scale on 6</button>

        </div>
        
        
    
    )
}




export default Tab;