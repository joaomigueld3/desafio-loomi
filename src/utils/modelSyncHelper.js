/* eslint-disable no-console */
async function syncModel(model, modelName, connection) {
  try {
    await model.init(connection);
    console.log(
      `${modelName} synchronized with database '${connection.options.database}'.`,
    );
  } catch (error) {
    console.error(`Error syncing ${modelName} model:`, error);
    throw error;
  }
}

export default syncModel;
