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
var svgTeamBuilding = {
    team: '{{ trans('messages.team_building')}}',
    team0: '{{ trans('messages.team_building0')}}',
    team1: '{{ trans('messages.team_building1')}}',
    team2: '{{ trans('messages.team_building2')}}',
    team3: '{{ trans('messages.team_building3')}}',
    team4: '{{ trans('messages.team_building4')}}'
};
var svgSchoolTrips = {
    school: '{{ trans('messages.school_trips')}}',
    school0: '{{ trans('messages.school_trips0')}}',
    school1: '{{ trans('messages.school_trips1')}}',
    school2: '{{ trans('messages.school_trips2')}}',
    school3: '{{ trans('messages.school_trips3')}}'
};
var svgBirthdays = {
    birthdays: '{{ trans('messages.birthdays')}}',
    birthdays0: '{{ trans('messages.birthdays0')}}',
    birthdays1: '{{ trans('messages.birthdays1')}}',
    birthdays2: '{{ trans('messages.birthdays2')}}',
    birthdays3: '{{ trans('messages.birthdays3')}}',
    birthdays4: '{{ trans('messages.birthdays4')}}'
};
var svgMasks = {
   mask1: '{{ trans('messages.mask1')}}',
   mask2: '{{ trans('messages.mask2')}}'
}
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