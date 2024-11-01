let timesBrasileirao = ["Flamengo", "Palmeiras", "Atlético-MG", "Corinthians", "Grêmio", "São Paulo", "Internacional", "Fluminense"];

for (let i = 0; i < timesBrasileirao.length; i++) {
    for (let j = 0; j < timesBrasileirao.length - i - 1; j++) {
        if (timesBrasileirao[j] > timesBrasileirao[j + 1]) {
            let temp = timesBrasileirao[j];
            timesBrasileirao[j] = timesBrasileirao[j + 1];
            timesBrasileirao[j + 1] = temp;
        }
    }
}

console.log(timesBrasileirao);
