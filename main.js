const getTitle = async () => {
  const url = `https://jsonplaceholder.typicode.com/photos/`;
  try {
    const response = await fetch(url);
    const objects = await response.json();
    objects.forEach((Element) => {
      if (Element.id <= 20) {
        console.log(Element.title);
      }
    });
  } catch (err) {
    console.log("hay un error en la API");
  }
};

getTitle();

const message = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = "infomacion enviada";
      result ? resolve(console.log(result)) : reject("mensaje no encontrado");
    }, 3000);
  });

const showMessage = async () => {
  try {
    const sendMessage = await message();
  } catch (error) {
    console.log("hay un error");
  } finally {
    console.log("Fin de la promesa.");
  }
};

showMessage();
