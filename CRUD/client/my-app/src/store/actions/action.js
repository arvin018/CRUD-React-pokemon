import {
  FETCH_POKEMON_PENDING,
  FETCH_POKEMON_SUCCESS,
  FETCH_POKEMON_REJECT,
  FETCH_POKEMON_PENDING_ID,
  FETCH_POKEMON_SUCCESS_ID,
  FETCH_POKEMON_REJECT_ID
} from "./actionType";

export const fetchPendingPokemon = () => ({
  type: FETCH_POKEMON_PENDING,
});

export const fetchSucessPokemon = (responJson) => ({
  type: FETCH_POKEMON_SUCCESS,
  payload: responJson,
});
export const fetchRejectPokemon = (errorMessage) => ({
  type: FETCH_POKEMON_REJECT,
  payload: errorMessage,
});


const domain = 'http://localhost:3000'
export const fetchPokemon = () => {
  return async (dispatch, getState) => {
    dispatch(fetchPendingPokemon());
    try {
      let response = await fetch(`${domain}/pokemon`);
      if (!response.ok) {
        throw new Error("Something Wrong");
      }
      let responseJson = await response.json();
      dispatch(fetchSucessPokemon(responseJson));
    } catch (err) {
      dispatch(fetchRejectPokemon(err));
      console.log(err);
    }
  };
};

export const fetchPendingPokemonId = () => ({
    type: FETCH_POKEMON_PENDING_ID,
  });
  
  export const fetchSucessPokemonId = (responJson) => ({
    type: FETCH_POKEMON_SUCCESS_ID,
    payload: responJson,
  });
  export const fetchRejectPokemonId = (errorMessage) => ({
    type: FETCH_POKEMON_REJECT_ID,
    payload: errorMessage,
  });


  export const fetchPokemonId = (id)=>{
    return async (dispatch, getState) => {
        dispatch(fetchPendingPokemonId());
        try {
          let response = await fetch(`${domain}/pokemon/${id}`);
          if (!response.ok) {
            throw new Error("Something Wrong");
          }

          let responseJson = await response.json();
          dispatch(fetchSucessPokemonId(responseJson));
        } catch (err) {
          dispatch(fetchRejectPokemonId(err));
          console.log(err);
        }
      };
  }

export const postPokemon = (formPost) => {
  return async (dispatch, getState) => {
    try {
      // console.log("====================================");
      // console.log(formPost);
      // console.log("====================================");
      let response = await fetch(`${domain}/pokemon`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(formPost),
      });

      if (!response.ok) {
        throw new Error("Something Wrong");
      }

      dispatch(fetchPokemon());
    } catch (err) {
      dispatch(fetchRejectPokemon(err));
      console.log(err);
    }
  };
};
//buat editPokemon
export const editPokemon = (formEditPost,id) => {
  return async (dispatch, getState) => {
    try {
      // console.log("====================================");
      // console.log(formEditPost,"edit sini");
      // console.log(id,"id  sini");
      // console.log("====================================");
      let response = await fetch(`${domain}/pokemon/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(formEditPost),
      });

      if (!response.ok) {
        throw new Error("Something Wrong");
      }

      dispatch(fetchPokemon());
    } catch (err) {
      dispatch(fetchRejectPokemon(err));
      console.log(err);
    }
  };
};

export const deleteByIdPokemon = (id) => {
  return async (dispatch, getState) => {
    try {
        let response = await fetch(`${domain}/pokemon/${id}`,{
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              // 'Content-Type': 'application/x-www-form-urlencoded',
            }
        })

      dispatch(fetchPokemon());
    } catch (err) {
      console.log(err);
    }
  };
};
