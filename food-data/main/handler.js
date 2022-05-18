/* eslint-disable no-shadow */
const foods = require('./food');

// ADD food
const postMethodHandler = (request, h) => {
  const {
    name,
    description,
    ingredients,
    howtocook,
    // first,
    // second,
    // third,
    // fourth,
    // fifth,
    // sixth,
    // seventh,
    // eighth,
    // ninth,
  } = request.payload;

  const id = name.replace(/\s+/g, '').toLowerCase();
  const insertedAt = new Date().toISOString();
  const updatedAt = insertedAt;

  const foodNew = {
    id,
    name,
    description,
    ingredients,
    howtocook,
    // first,
    // second,
    // third,
    // fourth,
    // fifth,
    // sixth,
    // seventh,
    // eighth,
    // ninth,
    insertedAt,
    updatedAt,
  };

  if (name === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal menambahkan data. Mohon isi nama data',
    });
    response.code(400);
    return response;
  }

  foods.push(foodNew);

  const isSuccess = (foods.filter((food) => food.id === id).length > 0);

  if (isSuccess) {
    const response = h.response({
      status: 'success',
      message: 'data berhasil ditambahkan',
      data: {
        foodId: id,
      },
    });
    response.code(201);
    return response;
  }

  const response = h.response({
    status: 'error',
    message: 'data gagal ditambahkan',
  });
  response.code(500);
  return response;
};

// GET ALL food
const getMethodHandler = (request, h) => {
  const foodTemp = foods;
  const { name } = request.query;

  if (name !== undefined) {
    const food = foods.filter(
      (food) => food.name.toLowerCase().includes(name.toLowerCase()),
    );

    const response = h.response({
      status: 'success',
      data: {
        foods: food.map((food) => ({
          id: food.id,
          name: food.name,
          description: food.description,
          ingredients: food.ingredients,
          howtocook: food.howtocook,
          // first: food.first,
          // second: food.second,
          // third: food.third,
          // fourth: food.fourth,
          // fifth: food.fifth,
          // sixth: food.sixth,
          // seventh: food.seventh,
          // eighth: food.eighth,
          // ninth: food.ninth,
        })),
      },
    });

    response.code(200);
    return response;
  }

  const response = h.response({
    status: 'success',
    data: {
      foods: foodTemp.map((food) => ({
        id: food.id,
        name: food.name,
        description: food.description,
        ingredients: food.ingredients,
        howtocook: food.howtocook,
        // first: food.first,
        // second: food.second,
        // third: food.third,
        // fourth: food.fourth,
        // fifth: food.fifth,
        // sixth: food.sixth,
        // seventh: food.seventh,
        // eighth: food.eighth,
        // ninth: food.ninth,
      })),
    },
  });
  response.code(200);
  return response;
};

// GET DETAIL food
const getDetailMethodHandler = (request, h) => {
  const { id } = request.params;

  const food = foods.filter((foodTemp) => foodTemp.id === id)[0];
  if (food !== undefined) {
    return {
      status: 'success',
      data: {
        food,
      },
    };
  }
  const response = h.response({
    status: 'fail',
    message: 'data tidak ditemukan',
  });
  response.code(404);
  return response;
};

// EDIT food DATA
const putMethodHandler = (request, h) => {
  const { id } = request.params;

  const {
    name,
    description,
    ingredients,
    howtocook,
    // first,
    // second,
    // third,
    // fourth,
    // fifth,
    // sixth,
    // seventh,
    // eighth,
    // ninth,
  } = request.payload;

  if (name === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal memperbarui data. Mohon isi nama data',
    });
    response.code(400);
    return response;
  }

  const updatedAt = new Date().toISOString();
  const index = foods.findIndex((food) => food.id === id);

  if (index !== -1) {
    foods[index] = {
      ...foods[index],
      name,
      description,
      ingredients,
      howtocook,
      // first,
      // second,
      // third,
      // fourth,
      // fifth,
      // sixth,
      // seventh,
      // eighth,
      // ninth,
      updatedAt,
    };

    const response = h.response({
      status: 'success',
      message: 'data berhasil diperbarui',
      data: {
        foods,
      },
    });
    response.code(200);
    return response;
  }

  const response = h.response({
    status: 'fail',
    message: 'Gagal memperbarui data. Id tidak ditemukan',
  });
  response.code(404);
  return response;
};

// DELETE food
const deleteMethodHandler = (request, h) => {
  const { id } = request.params;

  const index = foods.findIndex((idfood) => idfood.id === id);

  if (index !== -1) {
    foods.splice(index, 1);
    const response = h.response({
      status: 'success',
      message: 'data berhasil dihapus',
    });
    response.code(200);
    return response;
  }

  const response = h.response({
    status: 'fail',
    message: 'data gagal dihapus. Id tidak ditemukan',
  });
  response.code(404);
  return response;
};

module.exports = {
  postMethodHandler,
  getMethodHandler,
  getDetailMethodHandler,
  putMethodHandler,
  deleteMethodHandler,
};