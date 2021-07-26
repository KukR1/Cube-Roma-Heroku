let dock = document.querySelector(".relevantRoomsContainer"),
  cubeRooms = [
    {
      name: "speed barrels",
      category: "physical",
      description:
        "Have you ever reached your running limits?\nIn this challenge you will break them for sure! Players should hold the bars and run over the barrels until they reach to the finish line.\n\nThere are no excuses!",
      link: "speed_barrels.php",
      img: "../img/room_logos/speed_barrels.svg",
      alt: "barrels",
      difficulty: {
        physical: "../img/difficulties/relevant_rooms_dif/speed_phys_dif.svg",
        brain: "../img/difficulties/relevant_rooms_dif/speed_brain_dif.svg",
        skill: "../img/difficulties/relevant_rooms_dif/speed_skill_dif.svg",
      },
    },
    {
      name: "road to olympus",
      category: "physical",
      description:
        "In this room players need to pass through the propellers without touching them, and then climb to the top using the ropes before they run out of time.",
      link: "road_to_olympus.php",
      img: "../img/room_logos/road_to_olympus.svg",
      alt: "barrels",
      difficulty: {
        physical: "../img/difficulties/relevant_rooms_dif/road_phys_dif.svg",
        brain: "../img/difficulties/relevant_rooms_dif/road_brain_dif.svg",
        skill: "../img/difficulties/relevant_rooms_dif/road_skill_dif.svg",
      },
    },
    {
      name: "gym tonic",
      category: "physical",
      description:
        "In the first stage of the room, players have to find a way to reach the next stage by using the gym bars, while avoiding the obstacles marked with red. In the second stage, players should co-operate to pass the rotating wooden trunk without falling to the ground.",
      link: "gym_tonic.php",
      img: "../img/room_logos/gym_tonic.svg",
      alt: "gym equipment",
      difficulty: {
        physical: "../img/difficulties/relevant_rooms_dif/gym_phys_dif.svg",
        brain: "../img/difficulties/relevant_rooms_dif/gym_brain_dif.svg",
        skill: "../img/difficulties/relevant_rooms_dif/gym_skill_dif.svg",
      },
    },
    {
      name: "flying torso",
      category: "physical",
      description:
        "Are you ready for take off? Each player should board on the flying seat, pull the rope and cross the room without touching the red ground. Also there are some stations with buttons in which players should stop and push them in order to complete this challenge.",
      link: "flying_torso.php",
      img: "../img/room_logos/flying_torso.svg",
      alt: "a bark of a tree",
      difficulty: {
        physical: "../img/difficulties/relevant_rooms_dif/flying_phys_dif.svg",
        brain: "../img/difficulties/relevant_rooms_dif/flying_brain_dif.svg",
        skill: "../img/difficulties/relevant_rooms_dif/flying_skill_dif.svg",
      },
    },
    {
      name: "red ropes area",
      category: "physical",
      description:
        "In this challenge a wrong move could cost the team their chance to win. Players need to be accurate and fast in order to pass through the black ropes without touching any of the red ropes as fast as possible.",
      link: "red_ropes_area.php",
      img: "../img/room_logos/red_ropes_area.svg",
      alt: "ropes",
      difficulty: {
        physical:
          "../img/difficulties/relevant_rooms_dif/redropes_phys_dif.svg",
        brain: "../img/difficulties/relevant_rooms_dif/redropes_brain_dif.svg",
        skill: "../img/difficulties/relevant_rooms_dif/redropes_skill_dif.svg",
      },
    },
    {
      name: "knock out",
      category: "physical",
      description:
        'In this challenge, players should cross the wall and avoid being hit by the red punches. They have to be smart and quick in order to avoid the "knockout".',
      link: "knock_out.php",
      img: "../img/room_logos/knock_out.svg",
      alt: "boxing gloves",
      difficulty: {
        physical:
          "../img/difficulties/relevant_rooms_dif/knockout_phys_dif.svg",
        brain: "../img/difficulties/relevant_rooms_dif/knockout_brain_dif.svg",
        skill: "../img/difficulties/relevant_rooms_dif/knockout_skill_dif.svg",
      },
    },
    {
      name: "golden gate bridge",
      category: "physical",
      description:
        'Players should find a way to cross the "Golden Gate Bridge" without touching the ground areas marked with red. Teamwork and smart thinking will help them pass this challenge and drive them to their final destination before they run out of time.',
      link: "golden_gate_bridge.php",
      img: "../img/room_logos/golden_gate_bridge.svg",
      alt: "bridge",
      difficulty: {
        physical: "../img/difficulties/relevant_rooms_dif/golden_phys_dif.svg",
        brain: "../img/difficulties/relevant_rooms_dif/golden_brain_dif.svg",
        skill: "../img/difficulties/relevant_rooms_dif/golden_skill_dif.svg",
      },
    },
    {
      name: "cardio",
      category: "physical",
      description:
        "Definitely one of the most demanding CUBE Challenges. At the first stage of the room, players should walk and balance on the lines without falling down. At the second stage, they should pass from the horizontal bar without touching the ground areas marked with red.",
      link: "cardio.php",
      img: "../img/room_logos/cardio.svg",
      alt: "bridge",
      difficulty: {
        physical: "../img/difficulties/relevant_rooms_dif/cardio_phys_dif.svg",
        brain: "../img/difficulties/relevant_rooms_dif/cardio_brain_dif.svg",
        skill: "../img/difficulties/relevant_rooms_dif/cardio_skill_dif.svg",
      },
    },
    {
      name: "twisted cables",
      category: "physical",
      description:
        "A big number of «Twisted Cables» will prevent players from passing to the other side of the room. Players should be fast and pass through the cables without getting trapped inside.",
      link: "twisted_cables.php",
      img: "../img/room_logos/twisted_cables.svg",
      alt: "intertwined cables",
      difficulty: {
        physical: "../img/difficulties/relevant_rooms_dif/twisted_phys_dif.svg",
        brain: "../img/difficulties/relevant_rooms_dif/twisted_brain_dif.svg",
        skill: "../img/difficulties/relevant_rooms_dif/twisted_skill_dif.svg",
      },
    },
    {
      name: "laser maze",
      category: "physical",
      description:
        "Agility, quick thinking and speed will be the key ingredients for the players in order to pass through a field of laser beams, without “tripping” on one of the beams. Will they manage to escape and beat the challenge without activating the red alarm?",
      link: "laser_maze.php",
      img: "../img/room_logos/laser_maze.svg",
      alt: "man trapped between laser beams",
      difficulty: {
        physical: "../img/difficulties/relevant_rooms_dif/laser_phys_dif.svg",
        brain: "../img/difficulties/relevant_rooms_dif/laser_brain_dif.svg",
        skill: "../img/difficulties/relevant_rooms_dif/laser_skill_dif.svg",
      },
    },
    {
      name: "the jungle",
      category: "physical",
      description:
        'Welcome to the "Jungle" one of the most spectacular CUBE Challenges. Players have to crawl under the net and pass through the maze. Then, they have to cross the path by jumping on the balls without touching the floor. On the next stage, players must jump in the pool with the help of the ropes. Finally, they will have to slide down the zip line in order to reach the end stop the timer and beat the challenge.',
      link: "jungle.php",
      img: "../img/room_logos/jungle.svg",
      alt: "a leaf",
      difficulty: {
        physical: "../img/difficulties/relevant_rooms_dif/jungle_phys_dif.svg",
        brain: "../img/difficulties/relevant_rooms_dif/jungle_brain_dif.svg",
        skill: "../img/difficulties/relevant_rooms_dif/jungle_skill_dif.svg",
      },
    },
    {
      name: "restricted area",
      category: "physical",
      description:
        "Caution! Don't touch the restricted ground area! The red alarm is going to trigger and you will lose the challenge. Players should cross the room using just the car wheels. Will they achieve not to be detected by the alarm?",
      link: "restricted_area.php",
      img: "../img/room_logos/restricted_area.svg",
      alt: "car wheels",
      difficulty: {
        physical:
          "../img/difficulties/relevant_rooms_dif/restricted_phys_dif.svg",
        brain:
          "../img/difficulties/relevant_rooms_dif/restricted_brain_dif.svg",
        skill:
          "../img/difficulties/relevant_rooms_dif/restricted_skill_dif.svg",
      },
    },
    {
      name: "danger minefield",
      category: "physical",
      description:
        "Danger!\nWalk on the ropes course across the room avoiding to be hit by the rotating bars!\n\nConsequences of activating the mines will be serious for your team.",
      link: "danger_minefield.php",
      img: "../img/room_logos/danger_minefield.svg",
      alt: "skull",
      difficulty: {
        physical: "../img/difficulties/relevant_rooms_dif/danger_phys_dif.svg",
        brain: "../img/difficulties/relevant_rooms_dif/danger_brain_dif.svg",
        skill: "../img/difficulties/relevant_rooms_dif/danger_skill_dif.svg",
      },
    },
    {
      name: "floor is lava",
      category: "physical",
      description:
        "Fire Alert !\nPlayers should stay off the floor by standing on the items inside the room when they hear the emergency sound. Temperature rises while time runs out.\nWill you survive from the hot lava?",
      link: "floor_is_lava.php",
      img: "../img/room_logos/lava.svg",
      alt: "fire",
      difficulty: {
        physical: "../img/difficulties/relevant_rooms_dif/lava_phys_dif.svg",
        brain: "../img/difficulties/relevant_rooms_dif/lava_brain_dif.svg",
        skill: "../img/difficulties/relevant_rooms_dif/lava_skill_dif.svg",
      },
    },
  ],
  roomName = document.getElementById("nameOfRoom").textContent;
console.log(roomName);
for (var i = 0; i < cubeRooms.length; i++)
  if (`${cubeRooms[i].name}` !== roomName) {
    const e = `<a href="${cubeRooms[i].link}" class="begin">\n                <div class="relevantRoomBoxParent ${cubeRooms[i].category}">\n                    <div class="upperRelevantRoomPart">\n                        <div class="relevantRoomLogo">\n                            <img class="relevantRoomSvg" src="${cubeRooms[i].img}" alt="${cubeRooms[i].alt}">\n                        </div>\n                    </div>\n                    <div class="lowerRelevantRoomPart text-center">\n                        <h3>${cubeRooms[i].name}</h3>\n                        <div class="relevantRoomDif">\n                            <img class="" src="${cubeRooms[i].difficulty.physical}">\n                            <img class="" src="${cubeRooms[i].difficulty.brain}">\n                            <img class="" src="${cubeRooms[i].difficulty.skill}">\n                        </div>\n                    </div>\n                </div>\n</a>`;
    dock.insertAdjacentHTML("afterbegin", e);
  }
