@extends('layouts.default')

@section('content')
@section('title', 'Home')
<main>
    <script>
var svgCubio = {
    cubioWlc: '{{ trans('messages.cubio_welcome')}}',
    cubioWlc1: '{{ trans('messages.cubio_welcome1')}}',
    cubioWlc2: '{{ trans('messages.cubio_welcome2')}}'
};

var svgExploreChallenges = {
    exp_chall: '{{ trans('messages.explore_chall')}}'
};
        
var svgFamilies = {
    fam: '{{ trans('messages.families')}}',
    fam1: '{{ trans('messages.families0')}}',
    fam2: '{{ trans('messages.families1')}}',
    fam3: '{{ trans('messages.families2')}}',
    fam4: '{{ trans('messages.families3')}}'
};

var svgFriends = {
    fr: '{{ trans('messages.friends')}}',
    fr1: '{{ trans('messages.friends0')}}',
    fr2: '{{ trans('messages.friends1')}}',
    fr3: '{{ trans('messages.friends2')}}'
};
var svgStudents = {
    st: '{{ trans('messages.students')}}',
    st1: '{{ trans('messages.students0')}}',
    st2: '{{ trans('messages.students1')}}',
    st3: '{{ trans('messages.students2')}}'
};
var svgAthletes = {
    ath: '{{ trans('messages.athletes')}}',
    ath1: '{{ trans('messages.athletes0')}}',
    ath2: '{{ trans('messages.athletes1')}}',
    ath3: '{{ trans('messages.athletes2')}}',
    ath4: '{{ trans('messages.athletes3')}}'
};


        </script>

    @include('partials.welcome')
    @include('partials.cubioWelcome')
    @include('partials.whatIsCube')
    @include('partials.categories')
    @include('partials.cubeExperience')
    @include('partials.whoCanPlay')
    @include('partials.contact')
    @include('partials.join')
    @include('partials.faq')
</main>

@endsection