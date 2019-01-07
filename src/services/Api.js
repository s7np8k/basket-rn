import axios from "axios";

const LeagueID = "00"
const Season = "2018-19"

export default class Api {
    static getGameScores = async () => {
        try {
            const res = await axios.get("http://data.nba.net/10s/prod/v1/20180315/scoreboard.json");
            console.log(res);
        } catch (e) {
            console.log(e)
        }
    }

    static getTeamStandings = async (teamId) => {
        try {
            const res = await axios.get(`http://data.nba.net/10s/prod/v1/20180315/scoreboard.json`);
            console.log(res);
        } catch (e) {
            console.log(e)
        }
    }

    // eg. https://stats.nba.com/stats/commonteamroster/?Season=2018-19&TeamID=1610612747
    static getTeamRooster = async (teamId) => {
        try {
            const res = await axios.get(`https://stats.nba.com/stats/commonteamroster/?Season=${Season}&TeamID=${teamId}`);
            console.log(res);
            return res
        } catch (e) {
            console.log(e)
        }
    }
}