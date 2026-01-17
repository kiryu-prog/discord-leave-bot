const schedules = new Map();

module.exports = {
  set(userId, timeout) {
    schedules.set(userId, timeout);
  },

  get(userId) {
    return schedules.get(userId);
  },

  cancel(userId) {
    const timeout = schedules.get(userId);
    if (timeout) {
      clearTimeout(timeout);
      schedules.delete(userId);
      return true;
    }
    return false;
  }
};
