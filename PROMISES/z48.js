async function promiseAllSettled(promises) 
{
    return Promise.all(
        promises.map(p =>
            p.then(
                value => ({ status: 'fulfilled', value }),
                reason => ({ status: 'rejected', reason })
            )
        )
    );
}