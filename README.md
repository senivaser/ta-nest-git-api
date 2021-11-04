## Description


This is Test Assignment for WTT.
to get recent commits data use the next route:
```bash
    GET /git/commits/{owner}/{repository}/{branch}
```


To get data in special format use query parameter 'filter'
```bash
    ?filter=hashes    |   get only list of hashes
    ?filter=messages  |   get only list of messages
```

Heroku deployment host:
```bash
    https://ta-nest-git-api.herokuapp.com/
```