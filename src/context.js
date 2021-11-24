import React, { useContext, useState, useEffect } from 'react';
import { useCallback } from 'react';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {

    const [loading, setLoading] = useState(false);    
    const [search, setSearch] = useState('');
    const [cocktails, setCocktails] = useState([]);

    const fetchDrinks = useCallback(async(search) => {
        setLoading(true);
        try {
            const res = await fetch(url+search);
            const data = await res.json();

            const { drinks } = data;
            if (drinks) {
                const newCocktails = drinks.map(drink => {
                    const {
                        idDrink,
                        strDrink,
                        strDrinkThumb,
                        strAlcoholic,
                        strGlass,
                    } = drink     

                    return {
                        id: idDrink,
                        name: strDrink,
                        image: strDrinkThumb,
                        info: strAlcoholic,
                        glass: strGlass,
                    }
                })
                setCocktails(newCocktails)
            } else {
                setCocktails([])
            }
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }, [])

    useEffect(() => {
        fetchDrinks(search);
    }, [search, fetchDrinks])

    return <AppContext.Provider value={ {loading, cocktails, setSearch} }>{ children }</AppContext.Provider>
}

export  const useGlobalContext = () => useContext(AppContext);
