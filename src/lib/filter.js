/**
 * Filtering data by name and returning the matches contact person
 * 
 * @param {Array[Object]} data
 * Array of contact list 
 * 
 * @param {string} name
 * Value from search input
 * 
 * @returns {Array}
 * Returning array of contact list with matches name
 */

export default function filterData(data, name){
  const newData = data.filter((item) => item.name.toLowerCase() === name)
  return newData
}