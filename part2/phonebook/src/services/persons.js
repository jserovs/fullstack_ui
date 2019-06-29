import axios from 'axios'
const baseUrl = '/api/persons'

const getAll = () => {
  return axios.get(baseUrl)
}

const create = (newObject, notif) => {
  console.log(newObject)
  return axios.post(baseUrl, newObject)
    .then(response => {notif()})    
    .catch(error => {console.log(error)})
}

const update = (id, newObject, notif) => {
  console.log(newObject)
  return axios.put(`${baseUrl}/${id}`, newObject)
    .then(response => {notif()})
    .catch(error => {console.log(error)})
}

const remove = (id, notif) => {
  return axios.delete(`${baseUrl}/${id}`)
    .then()
    .catch((error) => {
      console.log(error)
      notif()
    })
}

export default {
  getAll: getAll,
  create: create,
  update: update,
  remove: remove
}