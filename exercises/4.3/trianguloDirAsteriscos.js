let n = 5, cont = 1;
for(let index = 0; index < n; index += 1) {
    let asterisco = '';
    for(indexColumn = 0; indexColumn < n; indexColumn += 1) {
        if(indexColumn >= n-cont) {
            asterisco += '*';
        }else{
            asterisco += ' ';
        }
    }
    console.log(asterisco);
    cont += 1;
}

