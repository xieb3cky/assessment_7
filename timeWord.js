/**
 * Function turn a string of 24h time into words.
 * 
 * Examples:
 * 00:00	midnight
 * 06:01	six oh one am
 * 06:30	six thirty am
 * 12:00	noon
 * 23:23	eleven twenty three pm
 * 
 */

function timeWord(str) {

    let tens = ["", "ten", "twenty", "thirty", "fourty", "fifty"];
    let units = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
        "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen",
        "seventeen", "eighteen", "nineteen"];

    let solution = "";

    //extract hours and minutes
    let hours = str.slice(0, 2);
    let mins = str.slice(-2);

    // convert hours and mins to int
    let num_hours = parseInt(hours);
    let num_min = parseInt(mins);

    // each digit in minutes (string) 
    let first_min = mins[0];
    let second_min = mins[1];

    // 00:00 = midnight
    if (hours == '00' && mins == '00') {
        return "midnight";
    }
    // 12:00 = noon
    if (hours == '12' && mins == '00') {
        return "noon";
    }


    /** convert hours to words 
     * 
     * hours example: 
     * 00 = twelve
     * 05 = one
     * 23 = eleven
    */

    if (hours == "00") {
        solution += 'twelve ';
    } else if (num_hours > 12) {
        //if hours > 12, convert to 12 hr format
        solution += units[num_hours % 12] + " ";
    } else {
        solution += units[num_hours] + " ";
    }

    /** convert minutes to words
     * 
     * mins = 00 -> o'clock
     * mins < 10 -> oh
     * mins > 20 -> concat tens and ones
     * mins > 9 < 20 -> use unit values
     * mins is 10, 20, 30, 40, 50 -> use ten values
     */

    if (mins == '00') {
        solution += "o'clock "
    } else if (num_min < 20) {
        if (num_min < 10) {
            //mins < 10 -> oh
            solution += "oh "
        }
        //use only unit values
        solution += units[num_min] + " ";
    } else {
        //conact ten and ones
        solution += tens[parseInt(first_min)] + " ";
        if (second_min > 0) {
            solution += units[parseInt(second_min)] + " ";
        }
    }

    //add am or pm
    if (num_hours < 12) {
        solution += "am"
    } else {
        solution += "pm"
    }

    return solution
}

console.log(timeWord("12:09"))


module.exports = timeWord