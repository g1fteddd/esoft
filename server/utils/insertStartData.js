const db = require("../db/db");
const flats_data = require("../flats_data");

const insertData = async () => {
    for (let i = 0; i < flats_data.length; i++) {
        await db("flats").insert({
            ...flats_data[i],
        });
    }
};

insertData();
