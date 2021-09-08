const Memory = require('../models/Memory')
const asyncWrapper = require('../middleware/async-wrap')

const getAllMemoryData = asyncWrapper(async (req, res) => {
    const allData = await Memory.find({})
    res.status(200).json({ allData })
})

const setMemory = asyncWrapper(async (req, res) => {
    const instance = await Memory.create(req.body)
    res.status(201).json({ instance })
})

module.exports = {
    getAllMemoryData,
    setMemory
}
