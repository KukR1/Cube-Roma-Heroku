<?php

namespace App\Http\Controllers;

use App\Http\Requests;
use Illuminate\Http\Request;



class MeasuresController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        // $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function render()
    {   
        $view = 'measures-restrictions';
        return view('measures-restrictions')->with('view', $view);
    }
}
