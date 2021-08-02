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
@section('title', 'Room Details')

<body>
    <main>
    
        <div class="firstHalfRoomPagePart">
            <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel" data-touch="true">
            <div class="carousel-inner">
                @foreach($room_data->images as $key=>$url)
              <div class="carousel-item {{$key == 0 ? 'active' : '' }}">
                <img src="{{ $url}}" class="d-block roomImages" alt="Carousel">
              </div>
              @endforeach
            </div>
            <a class="carousel-control-prev" id="prevBtn" href="#carouselExampleFade" role="button" data-slide="prev">
                <span class="{{-- carousel-control-prev-icon --}}" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" id="nextBtn" href="#carouselExampleFade" role="button" data-slide="next">
                <span class="{{-- carousel-control-next-icon --}}" aria-hidden="true"></span>   
                <span class="sr-only">Next</span>
              </a>
          </div>
</div>
        <div class="secondHalfRoomPagePart">

            <div class="roomLogoName">
                <h1>{{ $room_data->name }}<img src="/img/room_logos/{{ $room_data->id }}.png"></h1></img>
                
            </div>

            <div class="roomDifficulty">
                <div class="physicalDifficulty">
                    <img src="/img/difficulties/physical_cube.svg" alt="physical" />
                   <p id="phycs"> {{ $room_data->percentages->physical }}%</p> 
                </div>
                
                <div class="brainDifficulty">
                    <img src="/img/difficulties/brain_cube.svg" alt="brain" />
                    <p id="brains">  {{ $room_data->percentages->brain }}%</p>
                </div>

                <div class="skillDifficulty">
                    <img src="/img/difficulties/skills_cube.svg" alt="skills" />
                    <p id="skill">   {{ $room_data->percentages->skills }}%</p>
                </div>
                
            </div>
        
              
            <p class="h5 text-center" id="room_desc">{{trans('messages.'.$room_data->id)}}</p>   
          
            
            <!-- Relevant Rooms Section-->
            <div class="container ">
            <div class="row singleRoom"> 
                
                @foreach ($relevant as $r)
        
                <div class="col-md-6 col-lg-4 col-12">
                <div class="card-deck">
                <div id="room_card" class="card mb-4 flex-fill">
                    <img class="card-img-top" src="/img/room_logos/{{ $r->id }}.png"  />
                    <div class="card-body" style="">
    <h5 class="card-title">{{ $r->name }}</h5>
    <ul class="room_perc">
        <li>  <img src="/img/difficulties/physical_cube.svg" alt="physical" /> 
          <p>  {{ $r->percentages->physical }} </p></li>
        <li><img src="/img/difficulties/brain_cube.svg" alt="brain" />
            <p> {{ $r->percentages->brain }} </p></li>
        <li> <img src="/img/difficulties/skills_cube.svg" alt="skills" />
            <p> {{ $r->percentages->skills }}</p></li>
    </ul>
    <a href="{{$url_locale}}/rooms/{{$r->id}}" class="stretched-link"></a>
  </div>
              </div> 
            </div>
        </div>
  
             @endforeach 
             
        </div>
    
    </div>
    </div>
    </main>

</body>


@endsection