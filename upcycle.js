module.exports = function UpcycleFactory(pool) {

  let Paper;
  let Cardboard;
  let Glass;
  let Metal;
  let Cans;

  function setQty(qty) {
    Paper = qty.Paper;
    Cardboard = qty.Cardboard;
    Glass = qty.Glass;
    Metal = qty.Metal;
    Cans = qty.Cans;
  }

  function getQty() {
    return {
      Paper,
      Cardboard,
      Glass,
      Metal,
      Cans
    }
  }

  function totalValue(param) {
    let Total = 0;
    if (param = Paper) {
      Total += 10 * Paper;
    }
    if (param = Cardboard) {
      Total += 15 * Cardboard;
    }
    if (param = Glass) {
      Total += 25 * Glass;
    }
    if (param = Metal) {
      Total + 32 * Metal;
    }
    if (param = Cans) {
      Total + 18 * Cans;
    }
    return Total;
  }

  function materialQty(param) {
    PaperQty = 0;
    CardboardQty = 0;
    GlassQty = 0;
    MetalQty = 0;
    CansQty = 0;

    if (param = Paper) {
      PaperQty += Paper;
    }
    if (param = Cardboard) {
      CardboardQty += Cardboard;
      return CardboardQty;
    }
    if (param = Glass) {
      GlassQty += Glass;
      return GlassQty;
    }
    if (param = Metal) {
      MetalQty += Metal;
      return MetalQty;
    }
    if (param = Cans) {
      CansQty += Cans;
      return CansQty;
    }

  }

  function getPaperQty() {
    return PaperQty;
  }

  function getCardboardQty() {
    return CardboardQty;
  }

  function getGlassQty() {
    return GlassQty;
  }

  function getMetalQty() {
    return MetalQty;
  }

  function getCansQty() {
    return CansQty;
  }


  return {
    totalValue,
    materialQty,
    setQty,
    getQty,
    getPaperQty,
    getCardboardQty,
    getGlassQty,
    getMetalQty,
    getCansQty,

    getLocations,
    getMaterials,
    calculatePricePerKilogram,
    estimatedTotal
  }

  async function getLocations() {
    var sql_query = "select * from locations";
    var result = await pool.query(sql_query);
    var locations = result.rows;
    return locations;
  }

  async function getMaterials() {
    var sql_query = "select * from materials";
    var result = await pool.query(sql_query);
    var materials = result.rows;
    return materials;
  }

  async function calculatePricePerKilogram(id, amountOfKilograms) {
    //  TODO Get price for material return (amount*price)
  }

  async function estimatedTotal() {
    //  TODO Get price for material return (amount*price)
  }

}