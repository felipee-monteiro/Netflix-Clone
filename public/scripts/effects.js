
       const header = document.querySelector('.header-menu');
       const divElement = document.querySelector('.loading');
       const loadingEvent = document.addEventListener('readystatechange', loading);
       const getByScroll = window.addEventListener('scroll', getScroll);
       const img = document.getElementById('netflix-image');
       const search = document.querySelector('#search');
       const sliderContainer = document.querySelector('.introduction');
       const getSearch = document.querySelector('#get-search').addEventListener('click', () => {
         if(window.matchMedia("(max-width: 900px)")){

            search.style.visibility = 'visible';
            search.style.width = '18rem';
            img.style.marginLeft = '0';

         };
       });

       function getScroll(){
         if(window.scrollY > 0){

            img.style.transition = 'all 1.5s';
            img.setAttribute('src', '../images/1.png');

         }else{
            img.style.transition = 'all 1.5s';
            img.setAttribute('src', '../images/netflix.jpg');
         }
            
       }

       function slider() {
          const photos = sliderContainer.querySelectorAll('img');

          sliderContainer.style.scrollBehavior = 'smooth';

          const funtion = () => { photos.forEach(element => {
             sliderContainer.scrollLeft = element.scrollWidth;
             sliderContainer.scrollLeft = 0;
          })};
        
          funtion();
       }

       setInterval(slider, 3000)

      function loading(event) {

         var state = event.srcElement.readyState;

         if(state === 'interactive' || state === 'loading') {
            divElement.style.display = 'flex';
            document.body.style.overflow = 'hidden';
         }else if (state === 'complete') {
            divElement.style.display = 'none';
            document.body.style.overflow = 'initial';
         }

      }