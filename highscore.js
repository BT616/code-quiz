var clearBtn = document.getElementById('clearBtn')

        var backBtn = document.getElementById('backBtn')


        document.getElementById("backBtn").addEventListener('click', function () {
            window.location.replace("index.html");
        });



        document.getElementById("clearBtn").addEventListener('click', function () {
            var clear = "";

            localStorage.clear();
            document.getElementById("highScore").innerHTML = "";
        });


        var highScore = document.getElementById("highScore");

        var allScores = localStorage.getItem("allScores");
        allScores = JSON.parse(allScores);

        if (allScores !== null) {
            for (var i = 0; i < allScores.length; i++) {
                var create = document.createElement('li');
                create.textContent = allScores[i].initials + ' ' + allScores[i].score;
                highScore.append(create);


            }

        }
   