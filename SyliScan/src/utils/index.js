/**
 * Returns true if the given string contains a month i.e. a date
 * @param {string} line 
 */
export const containsDate = (line) => {
    if (extractDateFromLine(line) == 0) {
        return false;
    }
    else {
        return true;
    }
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
    temp = keyWord.match(/(.uiz|.ssignment|.ssay|.aper|test|Test|.idterm|.xam|final|Final|.eadline|due|Due|homework)/i);
    
    if (temp != null) {
        return true;
    }
    else {
        return false;
    }
}


/**
 * Returns the 'type' of a given accepted key word
 * @param {string} keyWord 
 */
export const getKeyWordType = (keyWord) => {
    temp = keyWord.match(/(paper|essay)/i);
    if (temp != null) {
        return "Paper";
    }
    temp = keyWord.match(/test|exam*|midterm|final/i);
    if (temp!= null) {
        return "Test";
    }
    temp = keyWord.match(/homework|assignment|/i);
    if (temp != null) {
        return "Homework";
    }
    return "other";
}

/**
 * Returns a date object from a line 
 * @param {string} line 
 */
export const extractDateFromLine = (line) => {

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    var date = new Date();

    temp = line.match(/(January|February|March|April|May|June|July|August|September|October|November|December|Jan\.|Feb\.|Mar\.|Apr\.|Aug\.Sept\.Oct\.|Nov\.|Dec\.]) (\d+)/);
    if (temp != null) {
        local = line.match(/(\d+) (pm|PM|AM|am)/);

        date.setMonth(months.indexOf(temp[1].substring(0, 3)));
        date.setDate((parseInt(temp[2]) - 1).toString());
        if (local != null) {
            date.setHour
        }

    }
    else if (temp == null) {
        return 0; //used by containsDate() to determine which text lines have no dates
    }
    else if (temp = line.match(/(\d+)\/(\d+)/) != -1) {
        date.setMonth(parseInt(temp[1]) - 1).toString();
        date.setDate(temp[2]);

    }
    return date;
}