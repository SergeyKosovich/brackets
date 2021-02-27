module.exports = function check(a,b){
  let e=[];
  b.forEach(item=>e.push(item[0]+item[1]));
  let g=a;
  for(let i=0; i<=a.length; i++){
      e.forEach( function(item){
        if( g.includes(item) ){ g=g.split(item).join('') }
      })
  }
  
  if(g.length===0){return(true)}else{return(false)}
   
  }
