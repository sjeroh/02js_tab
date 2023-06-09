function openCity(cityName){
  let tabcontent, tablinks;
  tabcontent=document.getElementsByClassName('tabcontent')

  for(let i = 0; i< tabcontent.length; i++){
    tabcontent[i].style.display='none';
  
  }

  document.getElementById(cityName).style.display='block'
  let topright=document.getElementsByClassName('topright')

  for(let i=0; i<topright.length;i++){
    topright[i].addEventListener('click',function(){
      this.parentElement.style.display='none';
    })
  }

  console.log(topright)

}


document.getElementById('defaultOpen').click();

