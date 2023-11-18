function capitalizeFirstLetter(string) {
        // return str[0].toUpperCase() + str.slice(1);

        const str_arr = string.split(' ')

    for(i = 0; i < str_arr.length; i++){
        str_arr[i] = str_arr[i][0].toUpperCase() + str_arr[i].slice(1)
    }
    return str_arr.join(' ')
    }
    console.log(capitalizeFirstLetter("happy to code"))