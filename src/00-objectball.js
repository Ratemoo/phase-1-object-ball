function gameObject(){
    return{
        home: {
            teamName:"Brooklyn Nets",
            colors:["Black","White"],
            players:{
                "Alan Anderson":{
                    number:0,
                    shoe:16,
                    points:22,
                    rebounds:12,
                    assists:12,
                    steals:3,
                    blocks:1,
                    slamDunks:1
                },
                "Reggie Evans":{
                    number:30,
                    shoe:14,
                    points:12,
                    rebounds:12,
                    assists:12,
                    steals:12,
                    blocks:12,
                    slamDunks:7
                },
                "Brook Lopez":{
                    number:11,
                    shoe:17,
                    points:17,
                    rebounds:19,
                    assists:10,
                    steals:3,
                    blocks:1,
                    slamDunks:15
                },
                "Mason Plumlee":{
                    number:1,
                    shoe:19,
                    points:26,
                    rebounds:12,
                    assists:6,
                    steals:3,
                    blocks:8,
                    slamDunks:5
                },
                "Jason Terry":{
                    number:31,
                    shoe:15,
                    points:19,
                    rebounds:2,
                    assists:2,
                    steals:4,
                    blocks:11,
                    slamDunks:1
                },
            }
        },
        away:{
            teamName:"Charlotte Hornets",
            colors:["Turquoise", "Purple"],
            players: {
                "Jeff Adrien":{
                    number:4,
                    shoe:18,
                    points:10,
                    rebounds:1,
                    assists:1,
                    steals:2,
                    blocks:7,
                    slamDunks:2
                },
                "Bismak Biyombo":{
                    number:0,
                    shoe:16,
                    points:12,
                    rebounds:4,
                    assists:7,
                    steals:7,
                    blocks:15,
                    slamDunks:10
                },
                "DeSagna Diop":{
                    number:2,
                    shoe:14,
                    points:24,
                    rebounds:12,
                    assists:12,
                    steals:4,
                    blocks:5,
                    slamDunks:5
                },
                "Ben Gordon":{
                    number:8,
                    shoe:15,
                    points:33,
                    rebounds:3,
                    assists:2,
                    steals:1,
                    blocks:1,
                    slamDunks:0
                },
                "Brendan Haywood":{
                    number:33,
                    shoe:15,
                    points:6,
                    rebounds:12,
                    assists:12,
                    steals:22,
                    blocks:5,
                    slamDunks:12
                }
            }
        }
    }
}
console.log(gameObject())

function homeTeamName(){
    return gameObject()["home"]["teamName"]
}
console.log(homeTeamName())

function awayTeamName(){
    return gameObject()["away"]["teamName"]
}
console.log(awayTeamName())

function teamColors(teamName){
    let game= gameObject()
    if (game["home"]["teamName"]===teamName){
        return game["home"]["colors"]
    }else if(game["away"]["teamName"]===teamName){
        return game["away"]["colors"]
    }else{
        return null
    }
}
console.log(teamColors("Brooklyn Nets"))
console.log(teamColors("Charlotte Hornets"))

function teamNames(){
    return [gameObject()["home"]["teamName"], gameObject()["away"]["teamName"]]
}
console.log(teamNames())

function playerNumbers(teamName){
    let players= gameObject()[teamName.toLowerCase()]["players"]
    return Object.values(players).map(player => player.number)
}
console.log(playerNumbers("Brooklyn Nets"))
console.log(playerNumbers("Charlotte Hornets"))

function playerStats(playerName){
    let game=gameObject()
    let playerStats=null
    Object.values(game).forEach(team=>{
        if (team["players"][playerName]){
            playerStats=team["players"][playerName]
        }
    })
    return playerStats
}
console.log(playerStats("Alan Anderson"))

function bigShoeRebounds(){
    let largestShoeSize =0
    let rebounds=0
    let playerWithLargestShoe=""
    let game=gameObject()
    Object.values(game).forEach(team=>{
        Object.values(team["players"]).forEach(player=>{
            if(player.shoe>largestShoeSize){
                largestShoeSize=player.shoe
                rebounds=player.rebounds
                playerWithLargestShoe=player
            }
        })
    })
    return rebounds
}
console.log(bigShoeRebounds())

function numPointsScored(playerName){
    let game =gameObject()
    for (let teamKey in game){
        let team=game[teamKey]
        let players=team.players
        if(players[playerName]){
            return players[playerName].points
        }
    }
    return null
}
console.log(numPointsScored("Alan Anderson"))

function shoeSize(playerName){
    let game =gameObject()
    for (let teamKey in game){
        let team=game[teamKey]
        let players=team.players
        if (players[playerName]){
            return players[playerName].shoe
        }
    }
    return null
}
console.log(shoeSize("Alan Anderson"))

function teamColors(teamName){
    let game=gameObject()
    for(let teamKey in game){
        let team=game[teamKey]
        if (team.teamName===teamName){
            return team.colors
        }
    }
    return null
}
console.log(teamColors("Brooklyn Nets"))

function teamNames(){
    let game=gameObject()
    return [game.home.teamName, game.away.teamName]
}
console.log(teamNames())

function playerNumbers(teamName){
    let game=gameObject()
    let team=teamName===game.home.teamName?game.home:game.away
    let players=team.players
    return Object.values(players).map(player=>player.number)
}
console.log(playerNumbers("Brooklyn Nets"))

function playerStats(playerName){
    let game=gameObject()
    for(let teamKey in game){
        let team=game[teamKey]
        let players= team.players
        if (players[playerName]){
            return players[playerName]
        }
    }
    return null
}
console.log(playerStats("Alan Anderson"))

function bigShoeRebounds(){
    let game=gameObject()
    let largestShoeSize=0
    let playerWithLargestShoe=null
    for (let teamKey in game){
        let team=game[teamKey]
        let players= team.players
        for(let playerName in players){
            let player=players[playerName]
            if(player.shoe>largestShoeSize){
                largestShoeSize=player.shoe
                playerWithLargestShoe=playerName
            }
        }
    }
    return playerWithLargestShoe?playerStats(playerWithLargestShoe).rebounds:null
}
console.log(bigShoeRebounds())

function mostPointsScored(){
    let game=gameObject()
    let mostPoints=0
    let playerWithMostPoints=null
    for(let teamKey in game){
        let team=game[teamKey]
        let players=team.players
    for(let playerName in players){
        let player=players[playerName]
        if (player.points>mostPoints){
            mostPoints=player.points
            playerWithMostPoints=playerName
        }
    }
}
return playerWithMostPoints
}
console.log(mostPointsScored())

function winningTeam(){
    let game=gameObject()
    let homePoints=0
    let awayPoints=0
    let homePlayers=game.home.players
    for(let playerName in homePlayers){
        homePoints+=homePlayers[playerName].points
    }
    let awayPlayers= game.away.players
    for(let playerName in awayPlayers){
        awayPoints+= awayPlayers[playerName].points
    }
    if (homePoints>awayPoints){
        return game.home.teamName
    }else{
        return game.away.teamName
    }
}
console.log(winningTeam())

function playerWithLongestName(){
    let game= gameObject()
    let longestNameLength=0
    let playerWithLongestName=null
    for(let teamKey in game){
        let team=game[teamKey]
        let players=team.players
        for(let playerName in players){
            if(playerName.length>longestNameLength){
                longestNameLength=playerName.length
                playerWithLongestName=playerName
            }
        }
    }
    return playerWithLongestName
}
console.log(playerWithLongestName())

function doesLongNameStealATon(){
    let game=gameObject()
    let playerLongestName=playerWithLongestName()
    let mostSteals=0
    let playerWithMostSteals=null
    for (let teamKey in game){
        let team=game[teamKey]
        let players= team.players
        for(let playerName in players){
            let player=players[playerName]
            if(player.steals>mostSteals){
                mostSteals=player.steals
                playerWithMostSteals=playerName
            }
        }
    }
    return playerWithLongestName=== playerWithMostSteals
}
console.log(doesLongNameStealATon())