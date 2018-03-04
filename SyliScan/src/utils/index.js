/**
 * Returns true if the given string contains a month i.e. a date
 * @param {string} line 
 */
export const containsDate = (line) => {
    true;
}

/**
 * Returns an array of key words from the MS Azure NLP endpoint
 * @param {string} line 
 */
export const keyWordAnalysis = async (line) => {

    // shhhhh
    const apiKey = '279ef607aa4148389129e2b8e3556b25'

    // natural language processing MS Azure endpoint
    const url = 'https://westus.api.cognitive.microsoft.com/text/analytics/v2.0/keyPhrases';

    let keyWords = [];
   
    // execute!
    await fetch(url, {
        method: 'post',
        body: JSON.stringify(
             {
                "documents": [
                    {
                        "language": "en",
                        "id": "1",
                        "text": line,
                    },
                ]
            }
        ),
        headers: {
            'Ocp-Apim-Subscription-Key': apiKey,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
    })
        .then(res => res.json())
        .then(json => {
            keyWords = json.documents[0].keyPhrases;
        })
        .catch(error => console.log(error))
    
    return keyWords;
}

/**
 * Returns true if the key word is a relevant key word
 * @param {string} keyWord
 */
export const isRelevantKeyWord = (keyWord) => {

}


/**
 * Returns the 'type' of a given accepted key word
 * @param {string} keyWord 
 */
export const getKeyWordType = (keyWord) => {

}

/**
 * Returns a date object from a line 
 * @param {string} line 
 */
export const extractDateFromLine = (line) => {
    return new Date();
}