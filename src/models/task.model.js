/**
 * @file task.model.js
 * @description Prisma model for managing tasks.
 * @author HM Infas
 */

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = prisma.task;