import axios from 'axios';

export default function Elements(){
    
    this.addElement = function(id, i){
        axios.post('/functions/addElement.php', {
            firstName: 'Fred',
            lastName: 'Flintstone'
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    this.fecthElement = function(){

    }

}