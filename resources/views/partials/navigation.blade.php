@php
// determine the base URL depending on the currently selected locale
$url_locale = ( Lang::getLocale() !== config('app.locale') ? '/' . Lang::getLocale() : '' );
$isPrimaryLanguage = Lang::getLocale() === config('app.locale');
$current_path = $_SERVER['REQUEST_URI'];

// if English version, remove the '/en' from it
if ($url_locale === '/fr') {
$current_path = substr($current_path, 3);
}elseif ($url_locale ==='/es') {
   $current_path = substr($current_path, 3);
}elseif ($url_locale ==='/de') {
   $current_path = substr($current_path, 3);
}elseif ($url_locale ==='/it') {
   $current_path = substr($current_path, 3);
}/* else{
    return $current_path;
} */
// for some reason although it plays fine locally, while live
// in homepage in English version both flags point to the same /en homepage
if ($current_path === '') {
$current_path = '/';
}
@endphp

<header>
    <nav id="nav2">
        <div
           id="burger"
           role="button"
           tabindex="0"
           class="target-burger"
           aria-label="burger menu"
        >
           <ul class="buns">
              <li class="bun"></li>
              <li class="bun"></li>
           </ul>
        </div>
     
        <div class="sidenav">
           {{-- <div class="flags">
               <a href="http://cube-koeln.com/fr/">
                   <img src="http://cube-koeln.com/img/fr.svg" alt="french flag" />
               </a>
               <a href="http://cube-koeln.com/de/">
                   <img src="http://cube-koeln.com/img/de.svg" alt="german flag" />
               </a>
               <a href="http://cube-koeln.com/es/">
                   <img
                       src="http://cube-koeln.com/img/es.svg"
                       alt="spanish flag"
                   />
               </a>
               <a href="http://cube-koeln.com/it/">
                   <img
                       src="http://cube-koeln.com/img/it.svg"
                       alt="spanish flag"
                   />
               </a>
           </div> --}}
     
           <div class="language-selection">
              <div class="flags-container">
                 <div class="globe">
                    <img src="/img/globe-left.svg" alt="" />
                 </div>
                 <div class="inner">
                    <a href="{{$current_path}}">
                       <img
                          src="{{'/img/en.svg' }}"
                          alt="english flag"
                       />
                    </a>
                  <a href="/fr{{$current_path}}">
                       <img
                          src="/img/fr.svg"
                          alt="french flag"
                       />
                    </a>
                     <a href="/es{{$current_path}}">
                       <img
                          src="/img/es.svg"
                          alt="spanish flag"
                       />
                    </a>
                      <a href="/it{{$current_path}}">
                       <img
                          src="/img/it.svg"
                          alt="italian flag"
                       />
                    </a> 
                    <a href="/de{{$current_path}}">
                        <img
                           src="/img/de.svg"
                           alt="german flag"
                        />
                     </a> 
                 </div>
                 <div class="globe">
                    <img src="/img/globe-right.svg" alt="" />
                 </div>
              </div>
           </div>
     
           <ul id="js-menu" class="main-nav">
              <li>
                 <a
                    href="{{$url_locale}}/#whatIsCube"
                    class="nav-links"
                    >{{ trans('messages.menu_1')}}</a
                 >
              </li>
              <li>
                 <a href="{{$url_locale}}/rooms" class="nav-links"
                    >{{ trans('messages.menu_2')}}</a
                 >
              </li>
              <li>
                 <a
                    href="{{$url_locale}}/#categories"
                    class="nav-links"
                    >{{ trans('messages.menu_3')}}</a
                 >
              </li>
              <li>
                 <a
                    href="{{$url_locale}}/#cube_experience"
                    class="nav-links"
                    >{{ trans('messages.menu_4')}}</a
                 >
              </li>
              <li>
                 <a
                    href="http://cube-koeln.com/measures-n-restrictions"
                    class="nav-links"
                    >{{ trans('messages.menu_5')}}</a
                 >
              </li>
              <li>
                 <a
                    href="{{$url_locale}}/#contact-section"
                    class="nav-links"
                    >{{ trans('messages.contact_us')}}</a
                 >
              </li>
           </ul>
           <div class="logo">
              <a href="{{$url_locale}}/"
                 ><img
                    id="cube"
                    src="http://cube-koeln.com/img/home_page/menu_logo.svg"
                    alt="cube challenges logo"
              /></a>
           </div>
        </div>
     </nav>

</header>
     
<style>
    .language-selection {
       display: flex;
       justify-content: flex-end;
       align-items: center;
 
       position: fixed;
 
       margin: 25px;
 
       top: 0;
       right: 0;
 
       z-index: 100;
    }
 
    .flags-container {
       display: flex;
       justify-content: flex-end;
       align-items: center;
 
       position: absolute;
 
       max-width: 35px;
 
       padding: 5px;
 
       border-radius: 100vmax;
 
       background: #2efddb50;
 
       transition: all 0.5s ease-in-out, max-width 0.3s ease-in-out;
    }
    .flags-container.active {
       max-width: 100vmax;
       transition: max-width 0.5s ease-in-out;
    }
 
    .flags-container img {
       height: 25px;
    }
 
    .flags-container .inner {
       display: flex;
       justify-content: center;
       align-items: center;
 
       max-width: 0;
       max-height: 0;
 
       opacity: 0;
 
       overflow: hidden;
 
       transition: all 0.5s ease-in-out;
    }
 
    .flags-container .inner img {
       margin: 0 10px;
    }
 
    .flags-container.active .inner {
       max-width: 100%;
       max-height: 100%;
       opacity: 1;
 
       margin: 0 10px;
    }
 
    @media screen and (max-width: 659px) {
       .language-selection {
          margin: 10px 35px;
 
          transform: rotate(-90deg);
       }
 
       .flags-container .inner {
          flex-direction: row-reverse;
          margin: 0;
       }
       .flags-container .inner img {
          transform: rotate(90deg);
       }
       .flags-container.active .inner {
          margin: 0 10px;
       }
    }
 </style>
 
 <script>
    window.addEventListener("load", () => {
       document
          .querySelector(".flags-container")
          .addEventListener("click", () => {
             document
                .querySelector(".flags-container")
                .classList.toggle("active");
          });
 
       window.addEventListener("scroll", () => {
          document.querySelector(".flags-container").classList.remove("active");
       });
    });
 </script>
 