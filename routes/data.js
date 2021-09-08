const express = require('express');
const router = express.Router();

const { getAllMemoryData,
  setMemory } = require('../controllers/memory')
const { getAllCpuData,
  setCPU } = require('../controllers/CPU')

router.route('/memory').get(getAllMemoryData).post(setMemory)
router.route('/cpu').get(getAllCpuData).post(setCPU)

module.exports = router