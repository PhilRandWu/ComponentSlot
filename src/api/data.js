export default function getProducts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(Math.random() > 0.5) {
                resolve([
                    {id: 1, name: 'phone'},
                    {id: 2, name: 'shot'},
                ])
            }else {
                reject(new Error('not Found'));
            }
        },1000)
    })
}
