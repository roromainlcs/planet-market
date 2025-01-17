import React from 'react';
import styles from  "@/styles/listPlanets.module.css";
import LoadingPlanet from "@/components/loadingPlanet";
import { PlanetType } from '@/components/planet';
import PlanetComponent from "@/components/planet";
import { Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';

interface ListNftComponentProps {
  listPlanets: Array<PlanetType> | undefined;
  isMarket: boolean;
  setTradedNft: ((setTradedNft: string) => void);
}

function listPlanetsPlanet(planet: PlanetType, isMarket: boolean) {
    return (
    <div key={planet.NFTokenID} onClick={() => console.log(planet)}>
      <p className='textName'>Planet: <span className='subtext'>{planet.Name}</span></p>
      <p className='text'>Owner ID: <span className='subtext'>{planet.Owner}</span></p>
      <p className='text'>Discovery date: <span className='subtext'>{planet.discovery_date}</span></p>
      <p className='text'>The planet Token ID:</p>
      <p className='subtext'>{planet.NFTokenID}</p>
      <p className='text'>The NFT URI:</p>
      <p className='subtext'>{planet.URI}</p>
      <div className='planetLocation'>
        <p className='text'>Location:<br/>Right ascension: <span className='subtext'>{planet.right_ascension}</span></p>
        <p className='text'>Declination: <span className='subtext'>{planet.declination}</span></p>
      </div>
      {isMarket && <p>price: {planet.price}</p>}
    </div>
    )
}

const ListPlanetsComponent: React.FC<ListNftComponentProps> = React.memo(({ listPlanets, isMarket, setTradedNft}) => {
  return (
    <div className={styles.listNftContainer}>
      {listPlanets && listPlanets.length > 0 ? (
        listPlanets.map((planet) => (
          <Dialog key={planet.NFTokenID}>
          <DialogTrigger asChild>
            {listPlanetsPlanet(planet, isMarket)}
          </DialogTrigger>
          <DialogContent className={styles.planetContainer}>
            <PlanetComponent
              setTradedNft={setTradedNft}
              setBurnedNft={undefined}
              isMarket={true}
              planet={planet}
            />
          </DialogContent>
          </Dialog>
        ))
      ) : <LoadingPlanet /> }
    </div>
  );
});

export default ListPlanetsComponent;