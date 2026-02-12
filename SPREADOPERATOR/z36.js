function mergeUsers(user1, user2) 
{
    return {
        ...user1,
        ...user2
    };
}