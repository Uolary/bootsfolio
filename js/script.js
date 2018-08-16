$(document).ready(function() { // Ждём загрузки страницы
  
  $(".container-fluid img").click(function(){ // Событие клика на маленькое изображение
    var img = $(this);  // Получаем изображение, на которое кликнули
    var src = img.attr('src'); // Достаем из этого изображения путь до картинки
    $("body").append("<div class='popup'>"+ //Добавляем в тело документа разметку всплывающего окна
             "<div class='popup_bg'></div>"+ // Блок, который будет служить фоном затемненным
             "<img src='"+src+"' class='popup_img' />"+ // Само увеличенное фото
             "</div>");
    $(".popup").fadeIn(200); // Медленно выводим изображение
    OffScroll(); // Запрещает скролл
    $(".popup_bg").click(function(){  // Событие клика на затемненный фон    
      $(".popup").fadeOut(200); // Медленно убираем всплывающее окн 
      setTimeout(function() { // Выставляем таймер
        $(".popup").remove(); // Удаляем разметку всплывающего окна
      }, 200);
      $(window).unbind('scroll'); // Отменяет запрет сколла
    });
  });
  
  function OffScroll() {
    var winScrollTop = $(window).scrollTop();
    $(window).bind('scroll', function() {
      $(window).scrollTop(winScrollTop);
    });
  }

  var location = document.getElementById('maps-toggle'),
      mapsClose = true,
      memberIndicators = document.getElementById('member-indicators').children,
      progressBar = document.getElementsByClassName('progress-bar'),
      levelSkills = document.getElementsByClassName('level-skills'),
      galleryNav = document.getElementById('gallery-nav'),
      photography = document.getElementsByClassName('photography'),
      webDesign = document.getElementsByClassName('web-design'),
      mobileApp = document.getElementsByClassName('mobile-app'),
      branding = document.getElementsByClassName('branding');

  galleryNav.children[0].onclick = function () {
    for (var i = 0; i < galleryNav.children.length; i++) {
      galleryNav.children[i].removeAttribute('class');
    }

    galleryNav.children[0].setAttribute('class', 'active');

    for (var i = 0; i < webDesign.length; i++) {
      webDesign[i].style.display = 'block';
    }
    for (var i = 0; i < mobileApp.length; i++) {
      mobileApp[i].style.display = 'block';
    }
    for (var i = 0; i < branding.length; i++) {
      branding[i].style.display = 'block';
    }
    for (var i = 0; i < photography.length; i++) {
      photography[i].style.display = 'block';
    }
  }

  galleryNav.children[1].onclick = function () {
    for (var i = 0; i < galleryNav.children.length; i++) {
      galleryNav.children[i].removeAttribute('class');
    }

    galleryNav.children[1].setAttribute('class', 'active');

    for (var i = 0; i < webDesign.length; i++) {
      webDesign[i].style.display = 'none';
    }
    for (var i = 0; i < mobileApp.length; i++) {
      mobileApp[i].style.display = 'none';
    }
    for (var i = 0; i < branding.length; i++) {
      branding[i].style.display = 'none';
    }
    for (var i = 0; i < photography.length; i++) {
      photography[i].style.display = 'block';
    }
  }

  galleryNav.children[2].onclick = function () {
    for (var i = 0; i < galleryNav.children.length; i++) {
      galleryNav.children[i].removeAttribute('class');
    }

    galleryNav.children[2].setAttribute('class', 'active');

    for (var i = 0; i < webDesign.length; i++) {
      webDesign[i].style.display = 'block';
    }
    for (var i = 0; i < mobileApp.length; i++) {
      mobileApp[i].style.display = 'none';
    }
    for (var i = 0; i < branding.length; i++) {
      branding[i].style.display = 'none';
    }
    for (var i = 0; i < photography.length; i++) {
      photography[i].style.display = 'none';
    }
  }

  galleryNav.children[3].onclick = function () {
    for (var i = 0; i < galleryNav.children.length; i++) {
      galleryNav.children[i].removeAttribute('class');
    }

    galleryNav.children[3].setAttribute('class', 'active');

    for (var i = 0; i < webDesign.length; i++) {
      webDesign[i].style.display = 'none';
    }
    for (var i = 0; i < mobileApp.length; i++) {
      mobileApp[i].style.display = 'none';
    }
    for (var i = 0; i < branding.length; i++) {
      branding[i].style.display = 'block';
    }
    for (var i = 0; i < photography.length; i++) {
      photography[i].style.display = 'none';
    }
  }

  galleryNav.children[4].onclick = function () {
    for (var i = 0; i < galleryNav.children.length; i++) {
      galleryNav.children[i].removeAttribute('class');
    }

    galleryNav.children[4].setAttribute('class', 'active');

    for (var i = 0; i < webDesign.length; i++) {
      webDesign[i].style.display = 'none';
    }
    for (var i = 0; i < mobileApp.length; i++) {
      mobileApp[i].style.display = 'block';
    }
    for (var i = 0; i < branding.length; i++) {
      branding[i].style.display = 'none';
    }
    for (var i = 0; i < photography.length; i++) {
      photography[i].style.display = 'none';
    }
  }
  
  location.onclick = mapsToggle;

  console.log(memberIndicators[0].getAttribute('class'));

  memberIndicators[0].onclick = function () {
    progressBar[0].style.width = 80 + '%';
    levelSkills[0].innerHTML = '80%';
    progressBar[1].style.width = 78 + '%';
    levelSkills[1].innerHTML = '78%';
    progressBar[2].style.width = 50 + '%';
    levelSkills[2].innerHTML = '50%';
    progressBar[3].style.width = 66 + '%';
    levelSkills[3].innerHTML = '66%';
  }

  memberIndicators[1].onclick = function () {
    progressBar[0].style.width = 90 + '%';
    levelSkills[0].innerHTML = '90%';
    progressBar[1].style.width = 88 + '%';
    levelSkills[1].innerHTML = '88%';
    progressBar[2].style.width = 93 + '%';
    levelSkills[2].innerHTML = '93%';
    progressBar[3].style.width = 79 + '%';
    levelSkills[3].innerHTML = '79%';
  }

  memberIndicators[2].onclick = function () {
    progressBar[0].style.width = 88 + '%';
    levelSkills[0].innerHTML = '88%';
    progressBar[1].style.width = 92 + '%';
    levelSkills[1].innerHTML = '92%';
    progressBar[2].style.width = 90 + '%';
    levelSkills[2].innerHTML = '90%';
    progressBar[3].style.width = 98 + '%';
    levelSkills[3].innerHTML = '98%';
  }

  function mapsToggle() {
    var googleMaps = document.getElementById('googleMaps');
    var arrowMaps = document.getElementById('arrow-maps');

    if (mapsClose == false) {
      googleMaps.style.display = 'none';
      mapsClose = true;
      arrowMaps.style.transform = 'rotate(0deg)'
    } else if (mapsClose == true) {
      googleMaps.style.display = 'block';
      mapsClose = false;
      arrowMaps.style.transform = 'rotate(180deg)';
    }
  }


});