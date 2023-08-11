export function getAllDogs() {
  const url = "/dogs";
  const headers = { "Content-Type": "text/html" };
  const body = new URLSearchParams({});

  return fetch(url);
}

export function getDogNumberTwo() {
  const url = "/dogs/2";
  const headers = { "Content-Type": "text/html" };
  const body = new URLSearchParams({
    dogId: 2,
  });

  const options = {
    method: "GET",
    headers: headers,
  };

  return fetch(url, options);
}

export function postNewDog() {
  const url = "/dogs";
  const headers = { "Content-Type": "application/x-www-form-urlencoded" };
  const body = new URLSearchParams({
    name: "Benny",
    age: 6,
  });

  const options = {
    method: "POST",
    headers: headers,
    body: body,
  };

  return fetch(url, options);
}

export function postNewDogV2(name, age) {
  const url = "/dogs";
  const headers = { "Content-Type": "application/x-www-form-urlencoded" };
  const body = new URLSearchParams({
    name,
    age,
  });

  const options = {
    method: "POST",
    headers: headers,
    body: body,
  };

  return fetch(url, options);
}

export function deleteDog(id) {
  const url = `/dogs/${id}/delete`;
    const headers = {'AUTH': 'ckyut5wau0000jyv5bsrud90y'};

    const options = {
        method: 'POST',
        headers: headers
    };

    return fetch(url, options);
}
