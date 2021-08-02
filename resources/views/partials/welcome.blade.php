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
}elseif ($url_locale ==='/en') {
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
<section id="homePageTop">
  <div class="titleWrapper">
      <div class="head-text">
          <h1>
              <?php include 'img/home_page/title.svg' ?>
          </h1>
          <h2>{{trans('messages.welcome_quote')}}</h2>
          <div class="exploreButton">
              <a href="{{ $url_locale }}/rooms/">
                  <?php include "img/home_page/explore.svg" ?>
              </a>
          </div>
      </div>
  </div>
</section>