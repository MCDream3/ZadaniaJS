function getUserCity(user) 
{
    return user?.address?.city ?? 'Unknown';
}