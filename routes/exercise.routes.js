const express = require("express");
const router = express.Router();

// New Exercises Data with Proper YouTube Embed Videos
const exercisesData = {
    male: [
        {
            name: "Push-Up",
            image: "https://tse3.mm.bing.net/th?id=OIP.oXzZ1-tGFPhyM6UE_NY-2QHaHa&pid=Api&P=0&h=220",
            video: "https://www.youtube.com/embed/IODxDxX7oi4"
        },
        {
            name: "Pull-Up",
            image: "https://tse1.mm.bing.net/th?id=OIP.kQLRuk8GcI_VKQU_QjIX9gHaFs&pid=Api&P=0&h=220",
            video: "https://www.youtube.com/embed/eGo4IYlbE5g"
        },
        {
            name: "Squats",
            image: "https://tse3.mm.bing.net/th?id=OIP.IXC1Emb97RI2Zv9X4AL9vQHaET&pid=Api&P=0&h=220",
            video: "https://www.youtube.com/embed/UXJrBgI2RxA"
        }
    ],
    female: [
        {
            name: "Surya Namaskar",
            image: "https://tse1.mm.bing.net/th?id=OIP.D6euBqzRhSDbV1r0EFVtSgHaGJ&pid=Api&P=0&h=220",
            video: "https://www.youtube.com/embed/ZeUBLpJbGns"
        },
        {
            name: "Tree Pose",
            image: "https://tse4.mm.bing.net/th?id=OIP.gKNvgTCSR0BXoMSUTmifCgHaHa&pid=Api&P=0&h=220",
            video: "https://www.youtube.com/embed/Kz4pq1RVR3M"
        },
        {
            name: "Cobra Pose",
            image: "https://www.artofliving.org/sites/www.artofliving.org/files/styles/original_image/public/cobra-pose.jpg",
            video: "https://www.youtube.com/embed/lcVvllIcqoc"
        },
        {
            name: "Yoga for Flexibility",
            image: "https://tse4.mm.bing.net/th?id=OIP.nv5PfF51g-6Im3ZJnvDV8AHaE8&pid=Api&P=0&h=220",
            video: "https://www.youtube.com/embed/yVE4XXFFO70"
        },
        {
            name: "Relaxing Yoga",
            image: "https://tse3.mm.bing.net/th?id=OIP.K38c5PpEu43gtYYJcrvEAgHaEK&pid=Api&P=0&h=220",
            video: "https://www.youtube.com/embed/k48O2CxvZ3o"
        }
    ],
    child: [
        {
            name: "Zumba Kids",
            image: "https://www.mykidstime.com/wp-content/uploads/2020/09/Kids-zumba.jpg",
            video: "https://www.youtube.com/embed/rlO7bQQzJXI"
        },
        {
            name: "Zumba Warm-Up",
            image: "https://hips.hearstapps.com/hmg-prod/images/kid-dance-1556729186.jpg",
            video: "https://www.youtube.com/embed/dsR6m8x92SI"
        },
        {
            name: "Fun Zumba",
            image: "https://i.ytimg.com/vi/U60JWK6MSNo/maxresdefault.jpg",
            video: "https://www.youtube.com/embed/FP0wgVhUC9w"
        }
    ]
};

// API Routes
router.get("/male-exercises", (req, res) => res.json(exercisesData.male));
router.get("/female-exercises", (req, res) => res.json(exercisesData.female));
router.get("/child-exercises", (req, res) => res.json(exercisesData.child));

module.exports = router;
