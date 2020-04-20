// import {connect} from 'react-redux';

const initialState = {
    angka : 0
  };
  
  function Reducers(state = initialState, action) {
    switch(action.type){
      case 'INCREMENT':
        return {
          angka:state.angka + 1
        };
        case "DECREASE":
          return{
            angka:state.angka - 1
          };
          default:
            return state;
    }
  }
// function mapStateToProps(state){
//     return Reducers(state);
// }

export default Reducers();