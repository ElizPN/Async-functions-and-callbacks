function job(result, database, errorManager) {
  return result // promise

    .then(function (id) {
      return database.get(id);
    })

    .then(function (info) {
      return info.name;
    })

    .catch(function (error) {
      errorManager.notify(error);
      throw error;
    });
}

module.exports = job;

// using async await

async function job(result, database, errorManager) {
  try {
    let id = await result;
    let info = await database.get(id);
    return info.name;
  } catch (error) {
    errorManager.notify(error);
    throw error;
  }
}
