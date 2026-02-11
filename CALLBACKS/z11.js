function fetchData(url, onSuccess, onError) 
{
    setTimeout(() => 
    {
        if (url.includes('error')) 
        {
            onError('Błąd pobierania');
        } 
        else 
        {
            onSuccess({ data: 'Dane OK' });
        }
    }, 1000);
}

fetchData('api/users',
    (data) => console.log('OK:', data),
    (err) => console.log('Error:', err)
);