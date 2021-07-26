<?php

namespace App\Http\Controllers;

use App\Http\Requests;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\View;


class RoomsController extends Controller
{

    private $config = null;
    private $rooms = null;


    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        // Load json file 
        $path = base_path('resources/data/rooms.json');
        $this->config = file_get_contents($path);
        $this->rooms = json_decode($this->config);
    }

    /**
     * Finds a specific room settings by searching 
     * the rooms configuration by the room Id.
     */
    private function findRoomSettingsById($id)
    {
        // loop through all available rooms
        foreach ($this->rooms as $room) {
            if ($id == $room->id) {
                return $room;
            }
        }

        return null;
    }

    /**
     * Fetch rooms from configuration that match 
     * a specific category.
     */
    private function findRoomsByCategory($category)
    {
        $rooms = [];

        // loop through all available rooms
        foreach ($this->rooms as $room) {

            // check if room category matches input category

            if ($category == $room->category) {
                array_push($rooms, $room);
            }
        }

        return $rooms;
    }
 
    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function render()
    {
         
            return view('rooms.all', [
            'room_data' => $this->rooms  
        ]);    

     /*    echo json_encode($this->rooms); */
        
    }
    public function renderwithLocale($locale)
    {
      
           return view('rooms.all', [
            'room_data' => $this->rooms
        ]);    
      
           
    }

     /**
     * 
     *
     * @return \Illuminate\Http\Response
     */
    public function renderRoomsByCategory($category)
    {    
         $roomsByCategory = $this->findRoomsByCategory($category); 
   
         return view('rooms.by_category', [
            'room_data' => $roomsByCategory
        ]);  
        
    }
    public function renderRoomsByCategorywithLocale($locale, $category)
    {
      
         $roomsByCategory = $this->findRoomsByCategory($category); 
   
         return view('rooms.by_category', [
            'room_data' => $roomsByCategory
        ]);  
        
    }

    /**
     * Renders a single room with details.
     */
    public function renderSingleRoom($room)
    {
        // get the room Id from the path
        $room_id = $room;

        // get the corresponding room settings from the configuration object
        $room = $this->findRoomSettingsById($room_id);

        // get similar rooms in the same category
        $category = $room->category;

        if (empty($room)) {
            echo 'Room with ID ' . $room_id . ' not found in configuration';
            return;
        }

        $rooms_in_category = $this->findRoomsByCategory($category);

        // render the view by passing:
        // - room Id
        // - room data from configuration
        // ...
        return view('rooms.singleRoom', [
            'room_id' => $room_id,
            'room_data' => $room,
            'category' => $category,
            'relevant' => $rooms_in_category
        ]);
    }
    public function renderSingleRoomwithLocale($locale,$room)
    {
        // get the room Id from the path
        $room_id = $room;

        // get the corresponding room settings from the configuration object
        $room = $this->findRoomSettingsById($room_id);

        // get similar rooms in the same category
        $category = $room->category;

        if (empty($room)) {
            echo 'Room with ID ' . $room_id . ' not found in configuration';
            return;
        }

        $rooms_in_category = $this->findRoomsByCategory($category);

        // render the view by passing:
        // - room Id
        // - room data from configuration
        // ...
        return view('rooms.singleRoom', [
            'room_id' => $room_id,
            'room_data' => $room,
            'category' => $category,
            'relevant' => $rooms_in_category
        ]);
    }
}
