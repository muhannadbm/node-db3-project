/*
  If `scheme_id` does not exist in the database:

  status 404
  {
    "message": "scheme with scheme_id <actual id> not found"
  }
*/
const Scheme = require('./scheme-model')

const checkSchemeId = async (req, res, next) => {
  let id = req.params.scheme_id

  let scheme = await Scheme.findById(id)


  if(scheme){
    next()
  }
  else{
    next({message: `scheme with scheme_id ${id} not found`, status: 404})
  }
}

/*
  If `scheme_name` is missing, empty string or not a string:

  status 400
  {
    "message": "invalid scheme_name"
  }
*/
const validateScheme = (req, res, next) => {
let name = req.body.scheme_name
if(!name || name.length === 0 || typeof name !== 'string' ){
  next({message: 'invalid scheme_name', status: 400})
}
else{
  next()
}
}

/*
  If `instructions` is missing, empty string or not a string, or
  if `step_number` is not a number or is smaller than one:

  status 400
  {
    "message": "invalid step"
  }
*/
const validateStep = (req, res, next) => {
  let instructions = req.body.instructions
  let stepNo = req.body.step_number
  if(!instructions || instructions.length === 0 || typeof instructions !== 'string' || typeof stepNo !== 'number' || isNaN(stepNo) || stepNo < 1){
    next({message: 'invalid step', status: 400})
  }
  else{
    next()
  }
}

module.exports = {
  checkSchemeId,
  validateScheme,
  validateStep,
}
