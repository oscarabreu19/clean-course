(() => {

    function getMovieById( movieId: string ) {
        console.log({ movieId });
    }

    // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    function getMovieCast( actorId: string ) {
        console.log({ actorId });
    }

    // funcion para obtener el bio del actor por el id
    function getActor( id: string ) {
        console.log({ ActorId: id });
    }
    
    interface Movie {
        cast:           string[],
        description:    string,
        rating:         number,
        title:          string
    }

    // Crear una película
    function createMovie( {title, description, rating, cast}: Movie ) {
        console.log({ title, description, rating, cast });
    }

    // Crea un nuevo actor
    function createActor( fullName: string, birthdate: Date ): boolean {
        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if ( fullName === 'fernando' ) return false;

        console.log('Crear actor');
        return true;        
    }
})();