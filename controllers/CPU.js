const CPU = require('../models/CPU')
const asyncWrapper = require('../middleware/async-wrap')

const getAllCpuData = asyncWrapper(async (req, res) => {
    const allData = await CPU.find({})
    res.status(200).json({ allData })
})

const setCPU = asyncWrapper(async (req, res) => {
    const instance = await CPU.create(req.body)
    res.status(201).json({ instance })
})

module.exports = {
    getAllCpuData,
    setCPU
}
