
const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if(true){
            resolve('hey!');
        } else {
            reject('ups!');
        }
    })
};

const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if(true){
            setTimeout(() => {
                resolve('True')
            }, 3000)
        } else {
            const error = new Error('Whoops!');
            reject(error);
        }
    })
};

somethingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.error(err))

somethingWillHappen2()
    .then(response => console.log(response))
    .catch(err => console.error(err))


Promise.all([somethingWillHappen(), somethingWillHappen2()])
.then(response => {
    console.log(response)
})
.catch( err => {
    console.error(err)
})