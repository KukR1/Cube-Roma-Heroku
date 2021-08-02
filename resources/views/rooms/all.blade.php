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
@extends('layouts.default')
@section('content')
@section('title', ' Challenges')

<main>
   
    <div class="allCategories">
        <div>
            <button data-sort="physical" onclick="filterCards('physical')">
                <img src="/img/difficulties/physical_cube.svg" alt="thunder">
            </button>
        </div>
        <div>
            <button data-sort="brain" onclick="filterCards('brain')">
                <img src="/img/difficulties/brain_cube.svg" alt="glasses">
            </button>
        </div>
        <div>
            <button data-sort="skill" onclick="filterCards('skills')">
                <img src="/img/difficulties/skills_cube.svg" alt="glasses">
            </button>
        </div>
        <div>
            <button data-sort="*" onclick="filterCards('')">
                <img src="/img/difficulties/all_cube.svg" alt="stack">
            </button>
        </div>
    </div>


        <!--Rooms Section-->
        <div  class="container" >
      
            <div id="card-wrap" class="row" style="margin-top: 200px">
 
                @foreach ($room_data as $r)

                <div class="col-md-6 col-lg-3 card-wrapper" data-category="{{ $r->category }}">
                    <div class="card-deck" style="margin: 0">
                        <div id="room_card" class="card mb-4 flex-fill">
                            <img class="card-img-top" src="/img/room_logos/{{ $r->id }}.png" />
                            <div class="card-body" style="">
                                <h5 class="card-title">{{ $r->name }}</h5>
                                <ul class="room_perc">
                                    <li> <img src="/img/difficulties/physical_cube.svg" alt="physical" />
                                        <p> {{ $r->percentages->physical }} </p>
                                    </li>
                                    <li><img src="/img/difficulties/brain_cube.svg" alt="brain" />
                                        <p> {{ $r->percentages->brain }} </p>
                                    </li>
                                    <li> <img src="/img/difficulties/skills_cube.svg" alt="skills" />
                                        <p> {{ $r->percentages->skills }}</p>
                                    </li>
                                </ul>
                                <a href="{{$url_locale}}/rooms/{{$r->id}}" class="stretched-link"></a>
                            </div>
                        </div>
                    </div>
                </div>

                @endforeach

            </div>
  
        </div>

    </main>
    @endsection
