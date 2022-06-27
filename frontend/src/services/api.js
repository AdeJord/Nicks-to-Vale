const axios = require('axios').default;
const baseUrl = "http://localhost:8080/api/"

export const getAllCars = async () => {
    return new Promise(async resolve => {
        const url = baseUrl + "cars/list";
        axios.get(url).then(response => {
            resolve(response)
        }).catch(error => {
            alert(error);
            resolve([]);
        });
    });
};

export const getCar = async (id) => {
    return new Promise(async resolve => {
        const url = baseUrl + "cars/view?id=" + id;
        axios.get(url).then(response => {
            resolve(response)
        }).catch(error => {
            alert(error);
            resolve([]);
        });
    });
};


