const postData = async (url, data) => {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: data,
  });
  ////! если не было бы async await из за Promise пока данные получим он уже в функцию дал бы undefined
  // здесь await чтобы ждал пока изменит в формат json потом присваивать в функцию
  return await res.json();
};

const getResourses = async (url, data) => {
  const res = await fetch(url);

  // fetch выводить ошибку только тогда когда нету связь с интернетом при неправильной имени сервера не будеть ошибка
  ////! у promise есть 2 св. 1. ok and !ok, 2 status-статус который вернул сервер 404-not found 201
  if (!res.ok) {
    // //! выведет ошибку если не смогли соединится
    throw new Error(`Could not fetch ${url}, status: ${res.status}`);
  }

  ////! если не было бы async await из за Promise пока данные получим он уже в функцию дал бы undefined
  // здесь await чтобы ждал пока изменит в формат json потом присваивать в функцию
  return await res.json();
};

export { postData };
export { getResourses };
