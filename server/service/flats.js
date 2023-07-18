const db = require("../db/db");

class FlatsService {
    async getFlats({
        _page = 1,
        _limit = 8,
        _sort = "price",
        _order = "desc",
        ...filters
    }) {
        const query = db("flats");

        Object.entries(filters).forEach(([key, value]) => {
            if (key.endsWith("_lte")) {
                query.where(key.replace("_lte", ""), "<=", value);
            } else if (key.endsWith("_gte")) {
                query.where(key.replace("_gte", ""), ">=", value);
            } else if (key === "rooms" && Array.isArray(value)) {
                query.whereIn(key, value);
            } else {
                query.where(key, value);
            }
        });

        const offset = (_page - 1) * _limit;

        // Запрос на получение общего количества записей без учета пагинации
        const totalCount = await query.clone().count().first();

        // Запрос на получение данных с пагинацией
        const flats = await query
            .clone()
            .orderBy(_sort, _order)
            .limit(_limit)
            .offset(offset);

        return { totalCount: Number(totalCount.count), flats };
    }

    async getAllFlats() {
        const allFlats = await db("flats").orderBy("id", "asc");

        return allFlats;
    }
}

module.exports = new FlatsService();
