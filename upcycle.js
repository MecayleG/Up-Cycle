module.exports = function UpcycleFactory(pool) {

    let Paper;
    let Cardboard;
    let Glass;
    let Metal;
    let Cans;

    function getQty() {
        return {
            Paper,
            Cardboard,
            Glass,
            Metal,
            Cans
        }
    }

    async function totalValue(params) {
        let total = 0;
        const sql = `select price_per_kilogram * $1 as total from materials where material_name = $2`;

        for (const materialType in params) {

            const result = await pool.query(sql, [Number(params[materialType]), materialType]);

            const totalForMaterial = Number(result.rows[0].total)

            total += totalForMaterial;
        }

        return total.toFixed(2);
    }


    async function getMaterials() {
        var sql_query = "select * from materials";
        var result = await pool.query(sql_query);
        var materials = result.rows;
        return materials;
    }


    return {
        totalValue,
        getQty,
        getMaterials

    }


}