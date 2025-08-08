// break = breaks out of a loop entirely
// continue = skips an iteration of a loop

// stop printing once i = 13
for (let i = 1; i <= 20; i++) {
    if (i == 13) 
    {
        break;
    }
    console.log(i);
}

// keep printing even if i = 13
for (let i = 1; i <= 20; i++) {
    if (i == 13) 
    {
        continue;
    }
    console.log(i);
}