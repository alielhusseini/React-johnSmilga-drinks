import { useGlobalContext } from "../context";
import Loading from './Loading';
import Cocktail from './Cocktail';

const CocktailList = () => {

    const { loading, cocktails } = useGlobalContext();

    if (loading) {
        return <Loading />
    }

    if (cocktails.length < 1) {
       return <h2 className="section-title">no cocktails matched your search criteria</h2>
    }

    return (
        <section className="section">
            <h2 className="section-title">cocktails</h2>
            <div className="cocktails-center">
                { cocktails.map(cocktail => <Cocktail key={ cocktail.id } {...cocktail}/>) }
            </div>
        </section>
    );
}
 
export default CocktailList;