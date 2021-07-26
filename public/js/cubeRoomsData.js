let cubeRoomsData = [
    {
        name: "lights on",
        category: "skill",
        description: `Good perception and quick reaction is the key to pass the ‘’Lights On’’`,
        link: "lights-on.php",
        logo: "../img/room_logos/lights_on.png",
        alt: "joystick",
        img: {
            first: "../img/room_img/Lights_On_1.jpg",
            second: "../img/room_img/Lights_On_2.jpg",
        },
        difficulty_images: {
            physical: "../img/difficulties/room_difficulty/lights_phys_dif.svg",
            brain: "../img/difficulties/room_difficulty/lights_brain_dif.svg",
            skill: "../img/difficulties/room_difficulty/lights_skill_dif.svg",
        },
        difficulty_percent: {
            physical: "60",
            brain: "60",
            skill: "100",
        },
        title_setId: "normalTitle",
    },

    {
        name: "bubble trouble",
        category: "skill",
        description: `Act fast and complete the words in the screen and trouble will disappear like a bubble!`,
        link: "bubble-trouble.php",
        logo: "../img/room_logos/bubble_trouble.png",
        alt: "bubbles",
        img: {
            first: "../img/room_img/Bubble_Trouble_1.jpg",
            second: "../img/room_img/Bubble_Trouble_2.jpg",
        },
        difficulty_images: {
            physical: "../img/difficulties/room_difficulty/bubble_phys_dif.svg",
            brain: "../img/difficulties/room_difficulty/bubble_brain_dif.svg",
            skill: "../img/difficulties/room_difficulty/bubble_skill_dif.svg",
        },
        difficulty_percent: {
            physical: "60",
            brain: "60",
            skill: "80",
        },
        title_setId: "normalTitle",
    },
    {
        name: "cargo",
        category: "skill",
        description: `Perception, speed, communication and teamwork are the elements to observe and push the correct shapes on the cargo boxes`,
        link: "cargo.php",
        logo: "../img/room_logos/cargo.png",
        alt: "boxes",
        img: "../img/room_img/Cargo_1.jpg",
        difficulty_images: {
            physical: "../img/difficulties/room_difficulty/cargo_phys_dif.svg",
            brain: "../img/difficulties/room_difficulty/cargo_brain_dif.svg",
            skill: "../img/difficulties/room_difficulty/cargo_skill_dif.svg",
        },
        difficulty_percent: {
            physical: "60",
            brain: "60",
            skill: "100",
        },
        title_setId: "normalTitle",
    },
    {
        name: "skee ball",
        category: "skill",
        description: `Rolling the balls and score into the holes!`,
        link: "skee-ball.php",
        logo: "../img/room_logos/skee_ball.png",
        alt: "ball following arrows",
        img: {
            first: "../img/room_img/Skee_Ball_1.jpg",
            second: "../img/room_img/Skee_Ball_2.jpg",
        },
        difficulty_images: {
            physical: "../img/difficulties/room_difficulty/skee_phys_dif.svg",
            brain: "../img/difficulties/room_difficulty/skee_brain_dif.svg",
            skill: "../img/difficulties/room_difficulty/skee_skill_dif.svg",
        },
        difficulty_percent: {
            physical: "40",
            brain: "40",
            skill: "100",
        },
        title_setId: "normalTitle",
    },
    {
        name: "target 8",
        category: "skill",
        description: `Accuracy wins! Focus on the rotating targets and put as more balls as you can inside them!`,
        link: "target-8.php",
        logo: "../img/room_logos/target_8.png",
        alt: "planet",
        img: {
            first: "../img/room_img/Target_8_1.jpg",
            second: "../img/room_img/Target_8_2.jpg",
        },
        difficulty_images: {
            physical:
                "../img/difficulties/room_difficulty/target_8_phys_dif.svg",
            brain: "../img/difficulties/room_difficulty/target_8_brain_dif.svg",
            skill: "../img/difficulties/room_difficulty/target_8_skill_dif.svg",
        },
        difficulty_percent: {
            physical: "40",
            brain: "40",
            skill: "100",
        },
        title_setId: "normalTitle",
    },
    {
        name: "slingshot madness",
        category: "skill",
        description: `Welcome to Cubio’s room! Spot the targets between his favorite belongings, aim and shoot from your slings at the archery targets and collect as many points as you can. Slingshooters are you ready?`,
        link: "slingshot-madness.php",
        logo: "../img/room_logos/slingshot_madness.png",
        alt: "slingshot",
        img: {
            first: "../img/room_img/Slingshot_Madness_1.jpg",
            second: "../img/room_img/Slingshot_Madness_2.jpg",
            third: "../img/room_img/Slingshot_Madness_3.jpg",
        },
        difficulty_images: {
            physical:
                "../img/difficulties/room_difficulty/slingshot_phys_dif.svg",
            brain:
                "../img/difficulties/room_difficulty/slingshot_brain_dif.svg",
            skill:
                "../img/difficulties/room_difficulty/slingshot_skill_dif.svg",
        },
        difficulty_percent: {
            physical: "20",
            brain: "60",
            skill: "100",
        },
        title_setId: "veryBigRoomTitle",
    },
    {
        name: "buzzer beater",
        category: "skill",
        description: `Score as many baskets as you can before the “Buzzer Beater”`,
        link: "buzzer-beater.php",
        logo: "../img/room_logos/buzzer_beater.png",
        alt: "basketball",
        img: {
            first: "../img/room_img/Buzzer_Beater_1.jpg",
            second: "../img/room_img/Buzzer_Beater_2.jpg",
        },
        difficulty_images: {
            physical: "../img/difficulties/room_difficulty/buzzer_phys_dif.svg",
            brain: "../img/difficulties/room_difficulty/buzzer_brain_dif.svg",
            skill: "../img/difficulties/room_difficulty/buzzer_skill_dif.svg",
        },
        difficulty_percent: {
            physical: "60",
            brain: "40",
            skill: "80",
        },
        title_setId: "normalTitle",
    },
    {
        name: "subbuteo",
        category: "skill",
        description: `Will you achieve to beat the goalkeeper and beat this challenge?`,
        link: "subbuteo.php",
        logo: "../img/room_logos/subbuteo.png",
        alt: "soccer ball",
        img: {
            first: "../img/room_img/subbuteo_2.jpg",
            second: "../img/room_img/subbuteo_1.jpg",
        },
        difficulty_images: {
            physical:
                "../img/difficulties/room_difficulty/subbuteo_phys_dif.svg",
            brain: "../img/difficulties/room_difficulty/subbuteo_brain_dif.svg",
            skill: "../img/difficulties/room_difficulty/subbuteo_skill_dif.svg",
        },
        difficulty_percent: {
            physical: "60",
            brain: "40",
            skill: "80",
        },
        title_setId: "normalTitle",
    },
    {
        name: "spinning",
        category: "skill",
        description: `’Spinning’’ as fast as you can in order to power the guns, shoot the targets and gather as many points as possible. Stop wishing... start "spinning".`,
        link: "spinning.php",
        logo: "../img/room_logos/spinning.png",
        alt: "bike",
        img: {
            first: "../img/room_img/Spinning_1.jpg",
            second: "../img/room_img/Spinning_2.jpg",
            third: "../img/room_img/Spinning_3.jpg",
        },
        difficulty_images: {
            physical:
                "../img/difficulties/room_difficulty/spinning_phys_dif.svg",
            brain: "../img/difficulties/room_difficulty/spinning_brain_dif.svg",
            skill: "../img/difficulties/room_difficulty/spinning_skill_dif.svg",
        },
        difficulty_percent: {
            physical: "80",
            brain: "40",
            skill: "100",
        },
        title_setId: "normalTitle",
    },

    {
        name: "clef de sol",
        category: "brain",
        description: `Music is the answer! Push the play button and be very careful! You will need to play some music!`,
        link: "clef-de-sol.php",
        logo: "../img/room_logos/clef_de_sol.png",
        alt: "pyramid",
        img: {
            first: "../img/room_img/clef_de_sol_1.jpg",
            second: "../img/room_img/clef_de_sol_2.jpg",
        },
        difficulty_images: {
            physical: "../img/difficulties/room_difficulty/clef_phys_dif.svg",
            brain: "../img/difficulties/room_difficulty/clef_brain_dif.svg",
            skill: "../img/difficulties/room_difficulty/clef_skill_dif.svg",
        },
        difficulty_percent: {
            physical: "40",
            brain: "80",
            skill: "60",
        },
        title_setId: "normalTitle",
    },
    {
        name: "genius",
        category: "brain",
        description: `Are you ready to solve the most difficult arithmetic operations? Think smart and act fast in order to prove that your team has the most “Genius” members.`,
        link: "genius.php",
        logo: "../img/room_logos/genius.png",
        alt: "pyramid",
        img: "../img/room_img/genius.jpg",
        difficulty_images: {
            physical: "../img/difficulties/room_difficulty/genius_phys_dif.svg",
            brain: "../img/difficulties/room_difficulty/genius_brain_dif.svg",
            skill: "../img/difficulties/room_difficulty/genius_skill_dif.svg",
        },
        difficulty_percent: {
            physical: "40",
            brain: "100",
            skill: "40",
        },
        title_setId: "normalTitle",
    },
    {
        name: "rainbow mind",
        category: "brain",
        description: `Take a seat behind one of the color stations, push the correct combination of buttons as fast as you can, be unmistakable and get all the points.`,
        link: "rainbow-mind.php",
        logo: "../img/room_logos/rainbow_mind.png",
        alt: "rainbows",
        img: {
            first: "../img/room_img/Rainbow_Mind_1.jpg",
            second: "../img/room_img/Rainbow_Mind_2.jpg",
        },
        difficulty_images: {
            physical:
                "../img/difficulties/room_difficulty/rainbow_phys_dif.svg",
            brain: "../img/difficulties/room_difficulty/rainbow_brain_dif.svg",
            skill: "../img/difficulties/room_difficulty/rainbow_skill_dif.svg",
        },
        difficulty_percent: {
            physical: "20",
            brain: "100",
            skill: "60",
        },
        title_setId: "normalTitle",
    },
    {
        name: "beat the bomb",
        category: "brain",
        description: `Attention! Any incorrect calculation will blow up the Building!`,
        link: "beat-the-bomb.php",
        logo: "../img/room_logos/beat_the_bomb.png",
        alt: "bomb",
        img: {
            first: "../img/room_img/beat_the_bomb_1.jpg",
            second: "../img/room_img/Beat_The_Bomb_2.jpg",
        },
        difficulty_images: {
            physical: "../img/difficulties/room_difficulty/beat_phys_dif.svg",
            brain: "../img/difficulties/room_difficulty/beat_brain_dif.svg",
            skill: "../img/difficulties/room_difficulty/beat_skill_dif.svg",
        },
        difficulty_percent: {
            physical: "40",
            brain: "100",
            skill: "80",
        },
        title_setId: "bigRoomTitle",
    },
    {
        name: "spot the differences",
        category: "brain",
        description: `Observe and spot the differences on the screens as the time counts down`,
        link: "spot-the-differences.php",
        logo: "../img/room_logos/spot_the_differences.png",
        alt: "target",
        img: {
            first: "../img/room_img/Spot_The_Differences_1.jpg",
            second: "../img/room_img/Spot_The_Differences_2.jpg",
        },
        difficulty_images: {
            physical: "../img/difficulties/room_difficulty/spot_phys_dif.svg",
            brain: "../img/difficulties/room_difficulty/spot_brain_dif.svg",
            skill: "../img/difficulties/room_difficulty/spot_skill_dif.svg",
        },
        difficulty_percent: {
            physical: "80",
            brain: "100",
            skill: "60",
        },
        title_setId: "veryBigRoomTitle",
    },
    {
        name: "all in",
        category: "brain",
        description: `The winner takes it all! Be quick and push the correct cards on the walls before the time runs out.`,
        link: "all-in.php",
        logo: "../img/room_logos/all_in.png",
        alt: "card symbols",
        img: {
            first: "../img/room_img/all_in_1.jpg",
            second: "../img/room_img/all_in_2.jpg",
        },
        difficulty_images: {
            physical: "../img/difficulties/room_difficulty/all_in_phys_dif.svg",
            brain: "../img/difficulties/room_difficulty/all_in_brain_dif.svg",
            skill: "../img/difficulties/room_difficulty/all_in_skill_dif.svg",
        },
        difficulty_percent: {
            physical: "40",
            brain: "80",
            skill: "60",
        },
        title_setId: "normalTitle",
    },

    {
        name: "floor is lava",
        category: "physical",
        description: `Fire Alert ! Stay off the floor when you hear the emergency sound. Connecting the tubes on the screen will help you survive from the hot lava as the temperature rises when the time goes down.`,
        link: "floor-is-lava.php",
        logo: "../img/room_logos/lava.png",
        alt: "fire",
        img: {
            first: "../img/room_img/floor_is_lava_1.jpg",
            second: "../img/room_img/floor_is_lava_2.jpg",
        },
        difficulty_images: {
            physical: "../img/difficulties/room_difficulty/lava_phys_dif.svg",
            brain: "../img/difficulties/room_difficulty/lava_brain_dif.svg",
            skill: "../img/difficulties/room_difficulty/lava_skill_dif.svg",
        },
        difficulty_percent: {
            physical: "100",
            brain: "60",
            skill: "40",
        },
        title_setId: "bigRoomTitle",
    },

    {
        name: "gym tonic",
        category: "physical",
        description: `Strength, stamina and speed are the basic ingredients in order to make a perfect «Gym Tonic».`,
        link: "gym-tonic.php",
        logo: "../img/room_logos/gym_tonic.png",
        alt: "gym equipment",
        img: {
            first: "../img/room_img/gym_tonic_1.jpg",
            second: "../img/room_img/gym_tonic_2.jpg",
        },
        difficulty_images: {
            physical: "../img/difficulties/room_difficulty/gym_phys_dif.svg",
            brain: "../img/difficulties/room_difficulty/gym_brain_dif.svg",
            skill: "../img/difficulties/room_difficulty/gym_skill_dif.svg",
        },
        difficulty_percent: {
            physical: "100",
            brain: "40",
            skill: "60",
        },
        title_setId: "normalTitle",
    },

    {
        name: "red ropes area",
        category: "physical",
        description: `Α wrong move could have a cost for the team. Βe accurate and fast in order to pass through the black ropes without touching any of the red ropes as fast as possible.`,
        link: "red-ropes-area.php",
        logo: "../img/room_logos/red_ropes_area.png",
        alt: "ropes",
        img: {
            first: "../img/room_img/Red_Ropes.jpg",
            second: "../img/room_img/RED_ROPES2.jpg",
        },
        difficulty_images: {
            physical:
                "../img/difficulties/room_difficulty/redropes_phys_dif.svg",
            brain: "../img/difficulties/room_difficulty/redropes_brain_dif.svg",
            skill: "../img/difficulties/room_difficulty/redropes_skill_dif.svg",
        },
        difficulty_percent: {
            physical: "80",
            brain: "40",
            skill: "60",
        },
        title_setId: "bigRoomTitle",
    },
    {
        name: "restricted area",
        category: "physical",
        description: `Caution! Don't touch the restricted area in the ground! The red alarm will trigger and you will lose the challenge`,
        link: "restricted-area.php",
        logo: "../img/room_logos/restricted_area.png",
        alt: "car wheels",
        img: {
            first: "../img/room_img/restricted_area_1.jpg",
            second: "../img/room_img/restricted_area_2.jpg",
        },
        difficulty_images: {
            physical:
                "../img/difficulties/room_difficulty/restricted_phys_dif.svg",
            brain:
                "../img/difficulties/room_difficulty/restricted_brain_dif.svg",
            skill:
                "../img/difficulties/room_difficulty/restricted_skill_dif.svg",
        },
        difficulty_percent: {
            physical: "80",
            brain: "40",
            skill: "60",
        },
        title_setId: "veryBigRoomTitle",
    },
    {
        name: "knock out",
        category: "physical",
        description: `Βe smart and quick in order to avoid the ‘knockout’.`,
        link: "knock-out.php",
        logo: "../img/room_logos/knock_out.png",
        alt: "boxing gloves",
        img: "../img/room_img/knock_out.jpg",
        difficulty_images: {
            physical:
                "../img/difficulties/room_difficulty/knockout_phys_dif.svg",
            brain: "../img/difficulties/room_difficulty/knockout_brain_dif.svg",
            skill: "../img/difficulties/room_difficulty/knockout_skill_dif.svg",
        },
        difficulty_percent: {
            physical: "80",
            brain: "60",
            skill: "80",
        },
        title_setId: "normalTitle",
    },
];
