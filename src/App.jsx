import React, { useEffect, useState } from 'react';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import './App.scss';

function MealSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);

    handleSearch(searchTerm)
  };
  const handleSearch = async () => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`);
      if (!response.ok) {
        throw new Error('Failed to fetch meals');
      }
      const data = await response.json();
      setMeals(data.meals || []);
      console.log(meals)
      setError(null);
    } catch (error) {
      setError(error.message);

    }
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <div class="input-group mb-3">
              <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
              <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="button">Button</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MealSearch;
