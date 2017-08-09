import { GET_ALERT_SUCCESS } from './types';

export const getAlert = () => {    
    return (dispatch) => {     
        dispatch({
            type: GET_ALERT_SUCCESS
        });
        
        /*
        axios.get('http://www.sample-videos.com/audio/mp3/india-national-anthem.mp3')
            .then((response) => {       
                const path = fs.DocumentDirectoryPath + '/test.mp3';
                const fileContents = response.data;
                
                fs.writeFile(path, fileContents, 'utf8')
                    .then(() => {    

                        dispatch({ 
                            type: GET_ALERT_SUCCESS,
                            payload: 'test.mp3'
                        });
                    });
            })
            .catch((error) => {
                console.log(error);
            });        
        */
    };
};
