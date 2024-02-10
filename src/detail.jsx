import { Image, Button } from 'antd';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Detail() {
  const { id } = useParams();
  const [mealData, setMealData] = useState(null);
  const [showAllInstructions, setShowAllInstructions] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id.slice(1)}`);
      const data = await response.json();
      setMealData(data.meals[0]);
    } catch (error) {
      console.error('Error fetching meal data:', error);
    }
  };

  const toggleInstructions = () => {
    setShowAllInstructions(!showAllInstructions);
  };

  return (
    <div style={{ backgroundColor: 'black', color: 'gold', minHeight: '100vh' }}>
      {mealData ? (
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-md-6 text-center mb-5 mb-md-0">
              <Image
                src={mealData.strMealThumb}
                className='rounded-circle shadow-lg'
                style={{ maxWidth: '100%', boxShadow: '0px 0px 20px yellow' }}
                alt={mealData.strMeal}
              />
            </div>
            <div className="col-md-6 text-center text-md-left">
              <h1 style={{ fontSize: '2.5rem' }}>{mealData.strMeal}</h1>
              <p style={{ fontSize: '1.2rem' }}>
                {showAllInstructions ? mealData.strInstructions : mealData.strInstructions.slice(0, 100) + '...'}
              </p>
              {!showAllInstructions && (
                <p type="primary" onClick={toggleInstructions}>Read More</p>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="container py-5">
          <div className="text-center">
            <p>Loading meal data...</p>
          </div>
        </div>
      )}
    </div>
  );
}
