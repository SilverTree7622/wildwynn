export type TCommonFixtures = {
    "Fixture": {
        "LastUpdate": Date | string;
        "League": {
            "Id": number;
            "Name": string;
        },
        "Location": {
            "Id": number;
            "Name": string;
        },
        "Participants": [
            {
                "Id": number;
                "Name": string;
                "Position": string;
            },
            {
                "Id": number;
                "Name": string;
                "Position": string;
            }
        ],
        "Sport": {
            "Id": number;
            "Name": string;
        },
        "StartDate": Date | string;
        "Status": number;
    },
    "FixtureId": number;
    "Livescore": null;
    "Markets": null;
};