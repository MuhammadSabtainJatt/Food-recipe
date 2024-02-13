import React, { useEffect, useState } from 'react';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Loader from './Loader'; // Import the Loader component

function MealSearch() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false); // Track loading state
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = async () => {
    try {
      setLoading(true); // Set loading state to true
      const url = searchTerm ? `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}` : 'https://www.themealdb.com/api/json/v1/1/search.php?s=a';
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch meals');
      }
      const data = await response.json();
      setMeals(data.meals || []);
      setError(null);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false); // Set loading state to false after fetching data
    }
  };

  const toggleInstructions = (index) => {
    const newMeals = [...meals];
    newMeals[index].showInstructions = !newMeals[index].showInstructions;
    setMeals(newMeals);
  };

  // Fetch initial data when component mounts
  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <main className="bg-dark">
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <h1 className="my-5 text-warning">Search For Recipe</h1>
            <div className="input-group mb-3 w-75 my-5 mx-auto">
              <input type="text" className="form-control p-2 shadow w-50" placeholder="Search Recipe" aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={handleInputChange} />
              <div className="input-group-append">
                <button className="btn btn-warning p-2 shadow" onClick={handleSearch} type="button"><SearchRoundedIcon /></button>
              </div>
            </div>
          </div>
        </div>
        {loading ? ( // Render Loader component if loading state is true
          <Loader />
        ) : (
          <div className="row justify-content-center">
            {meals.map((meal, index) => (
              <div key={index} className="col-md-4 mb-4 d-flex justify-content-center ">
                <Card sx={{ width: 345 }} onClick={() => navigate(`/detail/${meal.idMeal}`)}> {/* Fix the route template string */}
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="240"
                      image={meal.strMealThumb}
                      alt={meal.strMeal}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {meal.strMeal}
                      </Typography>
                      {meal.showInstructions ? (
                        <Typography variant="body2" color="text.secondary">
                          {meal.strInstructions}
                          <Button onClick={() => toggleInstructions(index)} size="small">Read Less</Button>
                        </Typography>
                      ) : (
                        <Typography variant="body2" color="text.secondary">
                          {meal.strInstructions.substring(0, 100)}...
                          <Button onClick={() => toggleInstructions(index)} size="small">Read More</Button>
                        </Typography>
                      )}
                    </CardContent>
                  </CardActionArea>
                </Card>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

export default MealSearch;
import React, { useEffect, useState } from 'react';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Loader from './Loader'; // Import the Loader component

function MealSearch() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false); // Track loading state
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = async () => {
    try {
      setLoading(true); // Set loading state to true
      const url = searchTerm ? `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}` : 'https://www.themealdb.com/api/json/v1/1/search.php?s=a';
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch meals');
      }
      const data = await response.json();
      setMeals(data.meals || []);
      setError(null);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false); // Set loading state to false after fetching data
    }
  };

  const toggleInstructions = (index) => {
    const newMeals = [...meals];
    newMeals[index].showInstructions = !newMeals[index].showInstructions;
    setMeals(newMeals);
  };

  // Fetch initial data when component mounts
  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <main className="bg-dark">
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <h1 className="my-5 text-warning">Search For Recipe</h1>
            <div className="input-group mb-3 w-75 my-5 mx-auto">
              <input type="text" className="form-control p-2 shadow w-50" placeholder="Search Recipe" aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={handleInputChange} />
              <div className="input-group-append">
                <button className="btn btn-warning p-2 shadow" onClick={handleSearch} type="button"><SearchRoundedIcon /></button>
              </div>
            </div>
          </div>
        </div>
        {loading ? ( // Render Loader component if loading state is true
          <Loader />
        ) : (
          <div className="row justify-content-center">
            {meals.map((meal, index) => (
              <div key={index} className="col-md-4 mb-4 d-flex justify-content-center ">
                <Card sx={{ width: 345 }} onClick={() => navigate(`/detail/${meal.idMeal}`)}> {/* Fix the route template string */}
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="240"
                      image={meal.strMealThumb}
                      alt={meal.strMeal}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {meal.strMeal}
                      </Typography>
                      {meal.showInstructions ? (
                        <Typography variant="body2" color="text.secondary">
                          {meal.strInstructions}
                          <Button onClick={() => toggleInstructions(index)} size="small">Read Less</Button>
                        </Typography>
                      ) : (
                        <Typography variant="body2" color="text.secondary">
                          {meal.strInstructions.substring(0, 100)}...
                          <Button onClick={() => toggleInstructions(index)} size="small">Read More</Button>
                        </Typography>
                      )}
                    </CardContent>
                  </CardActionArea>
                </Card>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

export default MealSearch;
import React, { useEffect, useState } from 'react';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Loader from './Loader'; // Import the Loader component

function MealSearch() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false); // Track loading state
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = async () => {
    try {
      setLoading(true); // Set loading state to true
      const url = searchTerm ? `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}` : 'https://www.themealdb.com/api/json/v1/1/search.php?s=a';
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch meals');
      }
      const data = await response.json();
      setMeals(data.meals || []);
      setError(null);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false); // Set loading state to false after fetching data
    }
  };

  const toggleInstructions = (index) => {
    const newMeals = [...meals];
    newMeals[index].showInstructions = !newMeals[index].showInstructions;
    setMeals(newMeals);
  };

  // Fetch initial data when component mounts
  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <main className="bg-dark">
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <h1 className="my-5 text-warning">Search For Recipe</h1>
            <div className="input-group mb-3 w-75 my-5 mx-auto">
              <input type="text" className="form-control p-2 shadow w-50" placeholder="Search Recipe" aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={handleInputChange} />
              <div className="input-group-append">
                <button className="btn btn-warning p-2 shadow" onClick={handleSearch} type="button"><SearchRoundedIcon /></button>
              </div>
            </div>
          </div>
        </div>
        {loading ? ( // Render Loader component if loading state is true
          <Loader />
        ) : (
          <div className="row justify-content-center">
            {meals.map((meal, index) => (
              <div key={index} className="col-md-4 mb-4 d-flex justify-content-center ">
                <Card sx={{ width: 345 }} onClick={() => navigate(`/detail/${meal.idMeal}`)}> {/* Fix the route template string */}
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="240"
                      image={meal.strMealThumb}
                      alt={meal.strMeal}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {meal.strMeal}
                      </Typography>
                      {meal.showInstructions ? (
                        <Typography variant="body2" color="text.secondary">
                          {meal.strInstructions}
                          <Button onClick={() => toggleInstructions(index)} size="small">Read Less</Button>
                        </Typography>
                      ) : (
                        <Typography variant="body2" color="text.secondary">
                          {meal.strInstructions.substring(0, 100)}...
                          <Button onClick={() => toggleInstructions(index)} size="small">Read More</Button>
                        </Typography>
                      )}
                    </CardContent>
                  </CardActionArea>
                </Card>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

export default MealSearch;
import React, { useEffect, useState } from 'react';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Loader from './Loader'; // Import the Loader component

function MealSearch() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false); // Track loading state
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = async () => {
    try {
      setLoading(true); // Set loading state to true
      const url = searchTerm ? `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}` : 'https://www.themealdb.com/api/json/v1/1/search.php?s=a';
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch meals');
      }
      const data = await response.json();
      setMeals(data.meals || []);
      setError(null);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false); // Set loading state to false after fetching data
    }
  };

  const toggleInstructions = (index) => {
    const newMeals = [...meals];
    newMeals[index].showInstructions = !newMeals[index].showInstructions;
    setMeals(newMeals);
  };

  // Fetch initial data when component mounts
  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <main className="bg-dark">
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <h1 className="my-5 text-warning">Search For Recipe</h1>
            <div className="input-group mb-3 w-75 my-5 mx-auto">
              <input type="text" className="form-control p-2 shadow w-50" placeholder="Search Recipe" aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={handleInputChange} />
              <div className="input-group-append">
                <button className="btn btn-warning p-2 shadow" onClick={handleSearch} type="button"><SearchRoundedIcon /></button>
              </div>
            </div>
          </div>
        </div>
        {loading ? ( // Render Loader component if loading state is true
          <Loader />
        ) : (
          <div className="row justify-content-center">
            {meals.map((meal, index) => (
              <div key={index} className="col-md-4 mb-4 d-flex justify-content-center ">
                <Card sx={{ width: 345 }} onClick={() => navigate(`/detail/${meal.idMeal}`)}> {/* Fix the route template string */}
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="240"
                      image={meal.strMealThumb}
                      alt={meal.strMeal}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {meal.strMeal}
                      </Typography>
                      {meal.showInstructions ? (
                        <Typography variant="body2" color="text.secondary">
                          {meal.strInstructions}
                          <Button onClick={() => toggleInstructions(index)} size="small">Read Less</Button>
                        </Typography>
                      ) : (
                        <Typography variant="body2" color="text.secondary">
                          {meal.strInstructions.substring(0, 100)}...
                          <Button onClick={() => toggleInstructions(index)} size="small">Read More</Button>
                        </Typography>
                      )}
                    </CardContent>
                  </CardActionArea>
                </Card>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

export default MealSearch;
import React, { useEffect, useState } from 'react';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Loader from './Loader'; // Import the Loader component

function MealSearch() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false); // Track loading state
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = async () => {
    try {
      setLoading(true); // Set loading state to true
      const url = searchTerm ? `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}` : 'https://www.themealdb.com/api/json/v1/1/search.php?s=a';
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch meals');
      }
      const data = await response.json();
      setMeals(data.meals || []);
      setError(null);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false); // Set loading state to false after fetching data
    }
  };

  const toggleInstructions = (index) => {
    const newMeals = [...meals];
    newMeals[index].showInstructions = !newMeals[index].showInstructions;
    setMeals(newMeals);
  };

  // Fetch initial data when component mounts
  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <main className="bg-dark">
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <h1 className="my-5 text-warning">Search For Recipe</h1>
            <div className="input-group mb-3 w-75 my-5 mx-auto">
              <input type="text" className="form-control p-2 shadow w-50" placeholder="Search Recipe" aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={handleInputChange} />
              <div className="input-group-append">
                <button className="btn btn-warning p-2 shadow" onClick={handleSearch} type="button"><SearchRoundedIcon /></button>
              </div>
            </div>
          </div>
        </div>
        {loading ? ( // Render Loader component if loading state is true
          <Loader />
        ) : (
          <div className="row justify-content-center">
            {meals.map((meal, index) => (
              <div key={index} className="col-md-4 mb-4 d-flex justify-content-center ">
                <Card sx={{ width: 345 }} onClick={() => navigate(`/detail/${meal.idMeal}`)}> {/* Fix the route template string */}
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="240"
                      image={meal.strMealThumb}
                      alt={meal.strMeal}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {meal.strMeal}
                      </Typography>
                      {meal.showInstructions ? (
                        <Typography variant="body2" color="text.secondary">
                          {meal.strInstructions}
                          <Button onClick={() => toggleInstructions(index)} size="small">Read Less</Button>
                        </Typography>
                      ) : (
                        <Typography variant="body2" color="text.secondary">
                          {meal.strInstructions.substring(0, 100)}...
                          <Button onClick={() => toggleInstructions(index)} size="small">Read More</Button>
                        </Typography>
                      )}
                    </CardContent>
                  </CardActionArea>
                </Card>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

export default MealSearch;
import React, { useEffect, useState } from 'react';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Loader from './Loader'; // Import the Loader component

function MealSearch() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false); // Track loading state
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = async () => {
    try {
      setLoading(true); // Set loading state to true
      const url = searchTerm ? `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}` : 'https://www.themealdb.com/api/json/v1/1/search.php?s=a';
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch meals');
      }
      const data = await response.json();
      setMeals(data.meals || []);
      setError(null);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false); // Set loading state to false after fetching data
    }
  };

  const toggleInstructions = (index) => {
    const newMeals = [...meals];
    newMeals[index].showInstructions = !newMeals[index].showInstructions;
    setMeals(newMeals);
  };

  // Fetch initial data when component mounts
  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <main className="bg-dark">
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <h1 className="my-5 text-warning">Search For Recipe</h1>
            <div className="input-group mb-3 w-75 my-5 mx-auto">
              <input type="text" className="form-control p-2 shadow w-50" placeholder="Search Recipe" aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={handleInputChange} />
              <div className="input-group-append">
                <button className="btn btn-warning p-2 shadow" onClick={handleSearch} type="button"><SearchRoundedIcon /></button>
              </div>
            </div>
          </div>
        </div>
        {loading ? ( // Render Loader component if loading state is true
          <Loader />
        ) : (
          <div className="row justify-content-center">
            {meals.map((meal, index) => (
              <div key={index} className="col-md-4 mb-4 d-flex justify-content-center ">
                <Card sx={{ width: 345 }} onClick={() => navigate(`/detail/${meal.idMeal}`)}> {/* Fix the route template string */}
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="240"
                      image={meal.strMealThumb}
                      alt={meal.strMeal}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {meal.strMeal}
                      </Typography>
                      {meal.showInstructions ? (
                        <Typography variant="body2" color="text.secondary">
                          {meal.strInstructions}
                          <Button onClick={() => toggleInstructions(index)} size="small">Read Less</Button>
                        </Typography>
                      ) : (
                        <Typography variant="body2" color="text.secondary">
                          {meal.strInstructions.substring(0, 100)}...
                          <Button onClick={() => toggleInstructions(index)} size="small">Read More</Button>
                        </Typography>
                      )}
                    </CardContent>
                  </CardActionArea>
                </Card>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

export default MealSearch;
import React, { useEffect, useState } from 'react';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Loader from './Loader'; // Import the Loader component

function MealSearch() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false); // Track loading state
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = async () => {
    try {
      setLoading(true); // Set loading state to true
      const url = searchTerm ? `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}` : 'https://www.themealdb.com/api/json/v1/1/search.php?s=a';
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch meals');
      }
      const data = await response.json();
      setMeals(data.meals || []);
      setError(null);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false); // Set loading state to false after fetching data
    }
  };

  const toggleInstructions = (index) => {
    const newMeals = [...meals];
    newMeals[index].showInstructions = !newMeals[index].showInstructions;
    setMeals(newMeals);
  };

  // Fetch initial data when component mounts
  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <main className="bg-dark">
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <h1 className="my-5 text-warning">Search For Recipe</h1>
            <div className="input-group mb-3 w-75 my-5 mx-auto">
              <input type="text" className="form-control p-2 shadow w-50" placeholder="Search Recipe" aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={handleInputChange} />
              <div className="input-group-append">
                <button className="btn btn-warning p-2 shadow" onClick={handleSearch} type="button"><SearchRoundedIcon /></button>
              </div>
            </div>
          </div>
        </div>
        {loading ? ( // Render Loader component if loading state is true
          <Loader />
        ) : (
          <div className="row justify-content-center">
            {meals.map((meal, index) => (
              <div key={index} className="col-md-4 mb-4 d-flex justify-content-center ">
                <Card sx={{ width: 345 }} onClick={() => navigate(`/detail/${meal.idMeal}`)}> {/* Fix the route template string */}
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="240"
                      image={meal.strMealThumb}
                      alt={meal.strMeal}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {meal.strMeal}
                      </Typography>
                      {meal.showInstructions ? (
                        <Typography variant="body2" color="text.secondary">
                          {meal.strInstructions}
                          <Button onClick={() => toggleInstructions(index)} size="small">Read Less</Button>
                        </Typography>
                      ) : (
                        <Typography variant="body2" color="text.secondary">
                          {meal.strInstructions.substring(0, 100)}...
                          <Button onClick={() => toggleInstructions(index)} size="small">Read More</Button>
                        </Typography>
                      )}
                    </CardContent>
                  </CardActionArea>
                </Card>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

export default MealSearch;
import React, { useEffect, useState } from 'react';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Loader from './Loader'; // Import the Loader component

function MealSearch() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false); // Track loading state
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = async () => {
    try {
      setLoading(true); // Set loading state to true
      const url = searchTerm ? `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}` : 'https://www.themealdb.com/api/json/v1/1/search.php?s=a';
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch meals');
      }
      const data = await response.json();
      setMeals(data.meals || []);
      setError(null);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false); // Set loading state to false after fetching data
    }
  };

  const toggleInstructions = (index) => {
    const newMeals = [...meals];
    newMeals[index].showInstructions = !newMeals[index].showInstructions;
    setMeals(newMeals);
  };

  // Fetch initial data when component mounts
  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <main className="bg-dark">
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <h1 className="my-5 text-warning">Search For Recipe</h1>
            <div className="input-group mb-3 w-75 my-5 mx-auto">
              <input type="text" className="form-control p-2 shadow w-50" placeholder="Search Recipe" aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={handleInputChange} />
              <div className="input-group-append">
                <button className="btn btn-warning p-2 shadow" onClick={handleSearch} type="button"><SearchRoundedIcon /></button>
              </div>
            </div>
          </div>
        </div>
        {loading ? ( // Render Loader component if loading state is true
          <Loader />
        ) : (
          <div className="row justify-content-center">
            {meals.map((meal, index) => (
              <div key={index} className="col-md-4 mb-4 d-flex justify-content-center ">
                <Card sx={{ width: 345 }} onClick={() => navigate(`/detail/${meal.idMeal}`)}> {/* Fix the route template string */}
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="240"
                      image={meal.strMealThumb}
                      alt={meal.strMeal}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {meal.strMeal}
                      </Typography>
                      {meal.showInstructions ? (
                        <Typography variant="body2" color="text.secondary">
                          {meal.strInstructions}
                          <Button onClick={() => toggleInstructions(index)} size="small">Read Less</Button>
                        </Typography>
                      ) : (
                        <Typography variant="body2" color="text.secondary">
                          {meal.strInstructions.substring(0, 100)}...
                          <Button onClick={() => toggleInstructions(index)} size="small">Read More</Button>
                        </Typography>
                      )}
                    </CardContent>
                  </CardActionArea>
                </Card>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

export default MealSearch;
import React, { useEffect, useState } from 'react';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Loader from './Loader'; // Import the Loader component

function MealSearch() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false); // Track loading state
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = async () => {
    try {
      setLoading(true); // Set loading state to true
      const url = searchTerm ? `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}` : 'https://www.themealdb.com/api/json/v1/1/search.php?s=a';
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch meals');
      }
      const data = await response.json();
      setMeals(data.meals || []);
      setError(null);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false); // Set loading state to false after fetching data
    }
  };

  const toggleInstructions = (index) => {
    const newMeals = [...meals];
    newMeals[index].showInstructions = !newMeals[index].showInstructions;
    setMeals(newMeals);
  };

  // Fetch initial data when component mounts
  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <main className="bg-dark">
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <h1 className="my-5 text-warning">Search For Recipe</h1>
            <div className="input-group mb-3 w-75 my-5 mx-auto">
              <input type="text" className="form-control p-2 shadow w-50" placeholder="Search Recipe" aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={handleInputChange} />
              <div className="input-group-append">
                <button className="btn btn-warning p-2 shadow" onClick={handleSearch} type="button"><SearchRoundedIcon /></button>
              </div>
            </div>
          </div>
        </div>
        {loading ? ( // Render Loader component if loading state is true
          <Loader />
        ) : (
          <div className="row justify-content-center">
            {meals.map((meal, index) => (
              <div key={index} className="col-md-4 mb-4 d-flex justify-content-center ">
                <Card sx={{ width: 345 }} onClick={() => navigate(`/detail/${meal.idMeal}`)}> {/* Fix the route template string */}
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="240"
                      image={meal.strMealThumb}
                      alt={meal.strMeal}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {meal.strMeal}
                      </Typography>
                      {meal.showInstructions ? (
                        <Typography variant="body2" color="text.secondary">
                          {meal.strInstructions}
                          <Button onClick={() => toggleInstructions(index)} size="small">Read Less</Button>
                        </Typography>
                      ) : (
                        <Typography variant="body2" color="text.secondary">
                          {meal.strInstructions.substring(0, 100)}...
                          <Button onClick={() => toggleInstructions(index)} size="small">Read More</Button>
                        </Typography>
                      )}
                    </CardContent>
                  </CardActionArea>
                </Card>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

export default MealSearch;
import React, { useEffect, useState } from 'react';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Loader from './Loader'; // Import the Loader component

function MealSearch() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false); // Track loading state
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = async () => {
    try {
      setLoading(true); // Set loading state to true
      const url = searchTerm ? `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}` : 'https://www.themealdb.com/api/json/v1/1/search.php?s=a';
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch meals');
      }
      const data = await response.json();
      setMeals(data.meals || []);
      setError(null);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false); // Set loading state to false after fetching data
    }
  };

  const toggleInstructions = (index) => {
    const newMeals = [...meals];
    newMeals[index].showInstructions = !newMeals[index].showInstructions;
    setMeals(newMeals);
  };

  // Fetch initial data when component mounts
  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <main className="bg-dark">
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <h1 className="my-5 text-warning">Search For Recipe</h1>
            <div className="input-group mb-3 w-75 my-5 mx-auto">
              <input type="text" className="form-control p-2 shadow w-50" placeholder="Search Recipe" aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={handleInputChange} />
              <div className="input-group-append">
                <button className="btn btn-warning p-2 shadow" onClick={handleSearch} type="button"><SearchRoundedIcon /></button>
              </div>
            </div>
          </div>
        </div>
        {loading ? ( // Render Loader component if loading state is true
          <Loader />
        ) : (
          <div className="row justify-content-center">
            {meals.map((meal, index) => (
              <div key={index} className="col-md-4 mb-4 d-flex justify-content-center ">
                <Card sx={{ width: 345 }} onClick={() => navigate(`/detail/${meal.idMeal}`)}> {/* Fix the route template string */}
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="240"
                      image={meal.strMealThumb}
                      alt={meal.strMeal}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {meal.strMeal}
                      </Typography>
                      {meal.showInstructions ? (
                        <Typography variant="body2" color="text.secondary">
                          {meal.strInstructions}
                          <Button onClick={() => toggleInstructions(index)} size="small">Read Less</Button>
                        </Typography>
                      ) : (
                        <Typography variant="body2" color="text.secondary">
                          {meal.strInstructions.substring(0, 100)}...
                          <Button onClick={() => toggleInstructions(index)} size="small">Read More</Button>
                        </Typography>
                      )}
                    </CardContent>
                  </CardActionArea>
                </Card>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

export default MealSearch;
import React, { useEffect, useState } from 'react';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Loader from './Loader'; // Import the Loader component

function MealSearch() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false); // Track loading state
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = async () => {
    try {
      setLoading(true); // Set loading state to true
      const url = searchTerm ? `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}` : 'https://www.themealdb.com/api/json/v1/1/search.php?s=a';
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch meals');
      }
      const data = await response.json();
      setMeals(data.meals || []);
      setError(null);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false); // Set loading state to false after fetching data
    }
  };

  const toggleInstructions = (index) => {
    const newMeals = [...meals];
    newMeals[index].showInstructions = !newMeals[index].showInstructions;
    setMeals(newMeals);
  };

  // Fetch initial data when component mounts
  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <main className="bg-dark">
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <h1 className="my-5 text-warning">Search For Recipe</h1>
            <div className="input-group mb-3 w-75 my-5 mx-auto">
              <input type="text" className="form-control p-2 shadow w-50" placeholder="Search Recipe" aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={handleInputChange} />
              <div className="input-group-append">
                <button className="btn btn-warning p-2 shadow" onClick={handleSearch} type="button"><SearchRoundedIcon /></button>
              </div>
            </div>
          </div>
        </div>
        {loading ? ( // Render Loader component if loading state is true
          <Loader />
        ) : (
          <div className="row justify-content-center">
            {meals.map((meal, index) => (
              <div key={index} className="col-md-4 mb-4 d-flex justify-content-center ">
                <Card sx={{ width: 345 }} onClick={() => navigate(`/detail/${meal.idMeal}`)}> {/* Fix the route template string */}
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="240"
                      image={meal.strMealThumb}
                      alt={meal.strMeal}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {meal.strMeal}
                      </Typography>
                      {meal.showInstructions ? (
                        <Typography variant="body2" color="text.secondary">
                          {meal.strInstructions}
                          <Button onClick={() => toggleInstructions(index)} size="small">Read Less</Button>
                        </Typography>
                      ) : (
                        <Typography variant="body2" color="text.secondary">
                          {meal.strInstructions.substring(0, 100)}...
                          <Button onClick={() => toggleInstructions(index)} size="small">Read More</Button>
                        </Typography>
                      )}
                    </CardContent>
                  </CardActionArea>
                </Card>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

export default MealSearch;
import React, { useEffect, useState } from 'react';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Loader from './Loader'; // Import the Loader component

function MealSearch() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false); // Track loading state
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = async () => {
    try {
      setLoading(true); // Set loading state to true
      const url = searchTerm ? `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}` : 'https://www.themealdb.com/api/json/v1/1/search.php?s=a';
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch meals');
      }
      const data = await response.json();
      setMeals(data.meals || []);
      setError(null);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false); // Set loading state to false after fetching data
    }
  };

  const toggleInstructions = (index) => {
    const newMeals = [...meals];
    newMeals[index].showInstructions = !newMeals[index].showInstructions;
    setMeals(newMeals);
  };

  // Fetch initial data when component mounts
  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <main className="bg-dark">
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <h1 className="my-5 text-warning">Search For Recipe</h1>
            <div className="input-group mb-3 w-75 my-5 mx-auto">
              <input type="text" className="form-control p-2 shadow w-50" placeholder="Search Recipe" aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={handleInputChange} />
              <div className="input-group-append">
                <button className="btn btn-warning p-2 shadow" onClick={handleSearch} type="button"><SearchRoundedIcon /></button>
              </div>
            </div>
          </div>
        </div>
        {loading ? ( // Render Loader component if loading state is true
          <Loader />
        ) : (
          <div className="row justify-content-center">
            {meals.map((meal, index) => (
              <div key={index} className="col-md-4 mb-4 d-flex justify-content-center ">
                <Card sx={{ width: 345 }} onClick={() => navigate(`/detail/${meal.idMeal}`)}> {/* Fix the route template string */}
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="240"
                      image={meal.strMealThumb}
                      alt={meal.strMeal}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {meal.strMeal}
                      </Typography>
                      {meal.showInstructions ? (
                        <Typography variant="body2" color="text.secondary">
                          {meal.strInstructions}
                          <Button onClick={() => toggleInstructions(index)} size="small">Read Less</Button>
                        </Typography>
                      ) : (
                        <Typography variant="body2" color="text.secondary">
                          {meal.strInstructions.substring(0, 100)}...
                          <Button onClick={() => toggleInstructions(index)} size="small">Read More</Button>
                        </Typography>
                      )}
                    </CardContent>
                  </CardActionArea>
                </Card>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

export default MealSearch;
