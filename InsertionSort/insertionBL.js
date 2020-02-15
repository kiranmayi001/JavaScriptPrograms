




module.exports = {
    insertionsort: (a) => {

        for (let i = 0; i < a.length; i++) {
            let ele = a[i];
        let j=i-1;
            while (j >= 0 && ele < a[j]) {
                a[j + 1] = a[j];
                j--;
            }
            a[j + 1] = ele;
        }
        return a;
    }

}