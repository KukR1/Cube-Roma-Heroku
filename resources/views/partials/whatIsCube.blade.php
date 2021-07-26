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
<section id="whatIsCube" data-bg="lazy.jpg">
    <div class="title">
        <h2>{{ trans('messages.what_is_cube')}}</h2>
    </div>
    <div class="whatIs">
        <div class="whatIsSeparator">
        </div>
        <div class="whatIsDescription">
            <p><span class="boldWord">“CUBE Challenges”</span> {{ trans('messages.what_is_cube0')}}<br>
                {{ trans('messages.what_is_cube1')}}<br><br>
                {{ trans('messages.what_is_cube2')}} <span class="boldWord">CUBE</span>  {{ trans('messages.what_is_cube3')}} <br>
                {{ trans('messages.what_is_cube4')}} <span class="boldWord"> {{ trans('messages.what_is_cube5')}}</span>  {{ trans('messages.what_is_cube6')}}
                <br><br>
                {{ trans('messages.what_is_cube7')}}<span class="boldWord"> {{ trans('messages.what_is_cube8')}}</span> </p>
        </div>
    </div>
    <div class="whatIsCubeButton">
        <a href="#contact-section">
            <?php include "img/home_page/getaquote.svg" ?>
        </a>
    </div>
</section>