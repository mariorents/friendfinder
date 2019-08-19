const friends = require("../app/data/friends");



module.exports = function(app) {
    
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function(req, res){
        let matchmaker = {
            name: "",
            photo:"",
            friendContrast: 500
        };

        const user = req.body;
        const userScore = user.score;

        let difference;

        for (let i =0; i < friends.length; i++) {
            difference = 0;

            for(let k=0; k < friends[i].score; k++){
               difference += Math.abs(parseInt(userScore[k] - parseInt(friends[i].score[k])));
               if(difference <= matchmaker.friendContrast){
                    matchmaker.name = friends[i].name;
                    matchmaker.photo = friends[i].photo;
                    matchmaker.friendContrast = friends[i].friendContrast;
                }

            }
        }
        friends.push(user);
        res.json(matchmaker);
    })

};

