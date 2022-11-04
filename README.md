Pokedex 🤩
Para hacer esta App consumi la pokeapi -> https://pokeapi.co/docs/v2

Cuenta con las siguientes rutas:

# ruta raiz.
'/'
Esta ruta es publica, es donde el usuario debera introducir un nombre para poder seguir adelante, si no, le saldra un error 😫.
Dicho nombre se almacena en la store de Redux. Para que el usuario pueda acceder a las rutas protegidas.

# ruta pokedex.
'/pokedex'
Esta ruta es protegida, aqui en primer lugar se mostrara el nombre que el usuario haya introducido anteriormente. Tambien se listaran todos los pokemones traidos de la pokeapi.

Tambien tendremos un buscador por nombre de pokemon, un filtro por tipo de pokemon 😎 y paginacion.

# ruta pokedex/:id
'/pokedex/:id'
Esta ruta la podremos ver al hacer click sobre algun pokemon en la ruta '/pokedex', aqui podremos ver mas acerca de nuestro pokemon 😋.




