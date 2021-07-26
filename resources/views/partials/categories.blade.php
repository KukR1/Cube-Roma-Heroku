@php
// determine the base URL depending on the currently selected locale
$url_locale = ( Lang::getLocale() !== config('app.locale') ? '/' . Lang::getLocale() : '' );
$test = config('app.locale');
@endphp 
<section id="categories">
<div class="title">
  <h2>{{trans('messages.categories')}}</h2>
  <div class="separatorDiv">
      <div class="yellowSeparator">
      </div>
      <h3 class="overflow">{{trans('messages.categories1')}}</h3>
  </div>
</div>
<div class="indexPageCategories">
  <div id="physicalIcon" class="difficultyLogo">
      <a href="{{ $url_locale }}/rooms/categories/physical">
          <div id="bm0"></div>
          <p id="physical">{{trans('messages.physical_cat')}}</p>
      </a>
  </div>
  <div id="brainIcon" class="difficultyLogo">
      <a href="{{ $url_locale }}/rooms/categories/brain">
          <div id="bm5"></div>
          <p id="brain">{{trans('messages.brain_cat')}}</p>
      </a>
  </div>
  <div class="break-row"></div>
  <div id="skillsIcon" class="difficultyLogo">
      <a href="{{ $url_locale }}/rooms/categories/skills">
          <div id="bm2"></div>
          <p id="skills">{{trans('messages.skills_cat')}}</p>
      </a>
  </div>
  <div id="allIcon" class="difficultyLogo">
      <a href="{{ $url_locale }}/rooms/">
          <div id="bm3"></div>
          <p id="all">{{trans('messages.all_cat')}}</p>
      </a>
  </div>
</div>
</section>