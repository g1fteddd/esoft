const FlatsService = require("../service/flats");

class FlatsController {
    async getFlats(req, res) {
        try {
            const flats = await FlatsService.getFlats(req.query);
            res.json(flats);
        } catch (error) {
            console.error(error);
            res.status(500).json(error);
        }
    }
    async getAllFlats(req, res) {
        try {
            const allFlats = await FlatsService.getAllFlats();
            res.json(allFlats);
        } catch (error) {
            console.error(error);
            res.status(500).json(error);
        }
    }
}

module.exports = new FlatsController();
