@extends('layouts.default')
@section('content')
@section('title', 'Measures and Restrictions')

<section class="measures-n-restrictions">
    <div class="mNr-title">
      <h3>
        {{trans('messages.menu_5')}}
      </h3>
    </div>
    <div class="mNr-subtitle">
        <b>Covid 19:</b>
        <br/>
        {{trans('messages.measures_sub')}}
    </div>
    <div class="mNr-list">
      <div class="mNr-list-item">
        <?php require_once "img/measures-restrictions/1.svg"; ?>
      </div>
      <div class="mNr-list-item">
        <?php require_once "img/measures-restrictions/2.svg"; ?>
      </div>
      <div class="mNr-list-item">
        <?php require_once "img/measures-restrictions/3.svg"; ?>
      </div>
      <div class="mNr-list-item">
        <?php require_once "img/measures-restrictions/4.svg"; ?>
      </div>
      <div class="mNr-list-item">
        <?php require_once "img/measures-restrictions/5.svg"; ?>
      </div>
      <div class="mNr-list-item">
        <?php require_once "img/measures-restrictions/6.svg"; ?>
      </div>
      <div class="mNr-list-item">
        <?php require_once "img/measures-restrictions/7.svg"; ?>
      </div>
      <div class="mNr-list-item">
        <?php require_once "img/measures-restrictions/8.svg"; ?>
      </div>
    </div>
  </section>  
  @endsection
  