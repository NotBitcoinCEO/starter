const pool = require("../database/")

/* ***************************
 *  Get all classification data
 * ************************** */
async function getClassifications(){
  return await pool.query("SELECT * FROM public.classification ORDER BY classification_name")
}

async function getInventoryByClassificationID(classification_id) {
  try {
    const data = await pool.query(
      "SELECT * FROM public.inventory AS i JOIN public.classification AS c On i. classification_id = c.classification_id WHERE i.classification_id = $1", [classification_id])
    return data.rows
  } catch (error) {
    console.error("getclassificationid error" + error)
  }
}

module.exports = {getClassifications}